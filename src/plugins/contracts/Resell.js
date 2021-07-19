/* eslint-disable no-unused-vars */
import Web3 from "web3";
import { toBN } from "web3-utils";
import { MAX_UINT256 } from "./constants";
import { BigNumber } from "bignumber.js";
import Wallet from "@/plugins/wallet";
import ABI from "@/config/abi/OtcMarketplace.json";
import config from "@/config/network";

export class Resell {
    constructor() {
        this.web3 = new Web3(Wallet.provider);
        this.address = config.contracts.OtcMarketPlace;
        this.contract = new this.web3.eth.Contract(ABI, this.address);
        this.defaultGasPrice = 5000000000;
    }

    async createOffer(sender, id, price, callback) {
        var gasPrice = await this.gasPrice();
        var tx = this.contract.methods.createOffer(id, price);
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
    async closeOffer(sender, id, callback) {
        const gasPrice = await this.gasPrice();
        const tx = this.contract.methods.closeOffer(id);
        console.log({ from: sender, to: this.address, id });
        const gasLimit = await tx.estimateGas({
            value: 0,
            from: sender,
            to: this.address,
        });
        console.log({
            from: sender,
            gasPrice: gasPrice,
            gas: Math.round(gasLimit * 1.1),
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

    async buyItem(sender, id, callback) {
        const gasPrice = await this.gasPrice();
        const tx = this.contract.methods.buyItem(id);
        const gasLimit = await tx.estimateGas({
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

export default new Resell();
