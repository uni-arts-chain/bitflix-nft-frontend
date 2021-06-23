import { BigNumber } from "bignumber.js";
import Web3Utils from "web3-utils";

class Wallet {
    constructor() {
        this.provider = window.ethereum || window.BinanceChain;
        this.connectedAddress = "";
        this.chainId = "";
        this.accountBalance = 0;
        this.isConnected = false;
    }
    setIsConnected(status) {
        this.isConnected = status;
    }
    setChainId(id) {
        this.chainId = id;
    }
    setConnectedAddress(address) {
        this.connectedAddress = address;
    }
    setAccountBalance(balance) {
        this.accountBalance = balance;
    }
    async init() {
        if (!this.provider) {
            throw {
                code: 100,
            };
        }
        let account = await this.provider.request({
            method: "eth_accounts",
        });
        if (account.length <= 0) {
            throw {
                code: 300,
            };
        }
        let address = account[0];
        this.setConnectedAddress(address);
        this.setChainId(parseInt(this.provider.chainId));
        let balance = await this.provider.request({
            method: "eth_getBalance",
            params: [address, "latest"],
        });
        if (balance) {
            this.setAccountBalance(
                new BigNumber(balance).shiftedBy(-18).toString()
            );
        }
        this.setIsConnected(true);
        return;
    }
    async connect() {
        if (!this.provider) {
            throw {
                code: 100,
            };
        }
        if (this.provider.on) {
            this.provider.on("accountsChanged", (accounts) => {
                this.setConnectedAddress(accounts[0]);
            });
            this.provider.on("chainChanged", (chainId) => {
                this.setChainId(parseInt(chainId));
            });
        }
        await this.provider.request({
            method: "eth_requestAccounts",
        });
        await this.init();
    }
    async request(obj) {
        debugger;
        console.log(obj);
        let result = await this.provider.request({
            method: obj.method,
            params: obj.params,
            from: this.connectedAddress,
        });
        console.log(result);
        return result;
    }
    async signature(message) {
        console.log(message);
        var from = this.connectedAddress;
        const msgParams = Web3Utils.utf8ToHex(message + "");
        var params = [from, msgParams];
        var method = "personal_sign";
        console.log(from, params, method);
        let result = await this.request({
            method: method,
            params: params,
        });
        return result;
    }
}

export default new Wallet();
