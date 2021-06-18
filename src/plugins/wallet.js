import { BigNumber } from "bignumber.js";

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
            throw new Error();
        }
        let account = await this.provider.request({
            method: "eth_accounts",
        });
        if (account.length <= 0) {
            throw new Error();
        }
        let address = account[0];
        this.setConnectedAddress(address);
        this.setChainId(parseInt(this.provider.chainId, 16));
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
            throw new Error();
        }
        if (this.provider.on) {
            this.provider.on("accountsChanged", (accounts) => {
                this.setConnectedAddress(accounts[0]);
            });
            this.provider.on("chainChanged", (chainId) => {
                this.setChainId(parseInt(chainId, 16));
            });
        }
        await this.provider.request({
            method: "eth_requestAccounts",
        });
        await this.init();
    }
}

export default new Wallet();
