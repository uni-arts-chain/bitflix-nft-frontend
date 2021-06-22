import Web3 from "web3";
import { toBN } from "web3-utils";
// import { MAX_UINT256 } from "./constants";
import { BigNumber } from "bignumber.js";
import Wallet from "@/plugins/wallet";
// import config from "@/config/network";
import ABI from "@/config/abi/BitflixPoint.json";
import config from "@/config/network";

export class BitflixPoint {
    constructor() {
        let token = config.tokens.find((v) => v.symbol === "BTFLX");
        this.web3 = new Web3(Wallet.provider);
        this.address = config.contracts.BitflixPoint;
        this.contract = new this.web3.eth.Contract(
            ABI,
            config.contracts.BitflixPoint
        );
        this.defaultGasPrice = 5000000000;
        this.token = token ? token : {};
    }

    async lock(sender, amount, callback) {
        var gasPrice = await this.gasPrice();
        var tx = this.contract.methods.lock(
            toBN(new BigNumber(amount).shiftedBy(this.token.decimals))
        );
        var gasLimit = await tx.estimateGas({
            value: 0,
            from: sender,
            to: this.address,
        });
        return tx.send(
            {
                from: sender,
                gasPrice: gasPrice,
                gas: Math.round(gasLimit * 1.1),
            },
            callback
        );
    }

    async getLockRate() {
        let lockRate = await this.contract.methods.lockRate().call();
        let lockRateMax = await this.contract.methods.lockRateMax().call();
        return new BigNumber(lockRate).div(lockRateMax);
    }

    async getLockDuration() {
        let lockDuration = await this.contract.methods.lockDuration().call();
        return lockDuration;
    }

    async gasPrice() {
        return await this.web3.eth.getGasPrice();
    }
}

export default BitflixPoint;
