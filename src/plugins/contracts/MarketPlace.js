/* eslint-disable no-unused-vars */
import Web3 from "web3";
import { toBN } from "web3-utils";
import { MAX_UINT256 } from "./constants";
import { BigNumber } from "bignumber.js";
import Wallet from "@/plugins/wallet";
import ABI from "@/config/abi/MarketPlace.json";
import config from "@/config/network";

export class MarketPlace {
    constructor() {
        this.web3 = new Web3(Wallet.provider);
        this.address = config.contracts.MarketPlace;
        this.contract = new this.web3.eth.Contract(ABI, this.address);
        this.defaultGasPrice = 5000000000;
    }

    async buyItem(sender, id, callback) {
        var gasPrice = await this.gasPrice();
        var tx = this.contract.methods.buyItem(id);
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

    async gasPrice() {
        return await this.web3.eth.getGasPrice();
    }
}

export default MarketPlace;
