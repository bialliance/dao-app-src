import Web3 from "web3";
import Web3Modal from "web3modal";
import MewConnect from "@myetherwallet/mewconnect-web-client";
import ethProvider from "eth-provider";
import Authereum from "authereum";
class Bia {
    constructor() {
        this.connected = false;
        this.provider = "";
        this.web3 = "";
        this.accountAddress = "";
        this.contractAddress = "";
        this.contract = "";
        this.daos = "";
        this.chainId = "";
    }
    getContractAddress(chainId) {
        switch (chainId) {
            case 4:
                return "0x6545d195760E4680AF5656C0a143c654EF7B0424";
            default:
                return "";
        }
    }
    async getDaoFactoryContract() {
        console.log(this.chainId);
        const contractAddress = this.getContractAddress(this.chainId);
        console.log("contract address: " + contractAddress);
        const contract = await new this.web3.eth.Contract(
            [
                {
                    inputs: [
                        {
                            internalType: "string",
                            name: "nameDao",
                            type: "string"
                        },
                        {
                            internalType: "string",
                            name: "descriptionDao",
                            type: "string"
                        },
                        {
                            internalType: "string",
                            name: "gpTokenName",
                            type: "string"
                        },
                        {
                            internalType: "string",
                            name: "gpTokenSymbol",
                            type: "string"
                        },
                        {
                            internalType: "string",
                            name: "lpTokenName",
                            type: "string"
                        },
                        {
                            internalType: "string",
                            name: "lpTokenSymbol",
                            type: "string"
                        }
                    ],
                    name: "createDao",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                },
                {
                    inputs: [
                        {
                            internalType: "address",
                            name: "owner",
                            type: "address"
                        }
                    ],
                    name: "getDaos",
                    outputs: [
                        {
                            components: [
                                {
                                    internalType: "string",
                                    name: "NameDao",
                                    type: "string"
                                },
                                {
                                    internalType: "string",
                                    name: "DescriptionDao",
                                    type: "string"
                                },
                                {
                                    internalType: "string",
                                    name: "GpTokenName",
                                    type: "string"
                                },
                                {
                                    internalType: "string",
                                    name: "GpTokenSymbol",
                                    type: "string"
                                },
                                {
                                    internalType: "string",
                                    name: "LpTokenName",
                                    type: "string"
                                },
                                {
                                    internalType: "string",
                                    name: "LpTokenSymbol",
                                    type: "string"
                                }
                            ],
                            internalType: "struct DaoFactory.DaoInfo[]",
                            name: "",
                            type: "tuple[]"
                        }
                    ],
                    stateMutability: "view",
                    type: "function"
                }
            ],
            contractAddress
        );
        return contract;
    }
    async connect(callback) {
        if (!this.connected) {
            const providerOptions = {
                mewconnect: {
                    package: MewConnect, // required
                    options: {
                        infuraId: "1fa62a71dee94d9ebc1fc18e82207e55" // required
                    }
                },
                frame: {
                    package: ethProvider // required
                },
                authereum: {
                    package: Authereum // required
                }
            };
            const web3Modal = new Web3Modal({
                // network: "mainnet", // optional
                cacheProvider: false, // optional
                providerOptions, // required
                theme: "dark"
            });
            web3Modal.clearCachedProvider();

            this.provider = await web3Modal.connect();
            this.web3 = new Web3(this.provider);
            this.web3.eth.net
                .isListening()
                .then(() => {
                    this.web3.eth.getAccounts().then(e => {
                        this.accountAddress = e[0];
                        this.web3.eth.getChainId().then(r => {
                            this.chainId = r;

                            console.log(r);
                            console.log(this.accountAddress);
                            this.connected = true;
                            callback({
                                address: this.accountAddress,
                                success: true
                            });
                        });
                    });
                })
                .catch(e => {
                    callback({ address: null, success: false });
                });
        } else {
            callback({ address: this.accountAddress, success: true });
        }
    }
    async createDao(params, callback) {
        // params.daoName
        // params.daoDescription
        // params.gpTokenName
        // params.gpTokenSymbol
        // params.lpTokenName
        // params.lpTokenSymbol
        // params.votingSupport*
        // params.votingApproval*
        if (!this.connected) {
            alert("Need to connect");
        } else {
            this.contract = await this.getDaoFactoryContract();
            // string memory nameDao, string memory descriptionDao, string memory gpTokenName, string memory gpTokenSymbol, string memory lpTokenName, string memory lpTokenSymbol
            this.contract.methods
                .createDao(
                    params.daoName,
                    params.daoDescription,
                    params.gpTokenName,
                    params.gpTokenSymbol,
                    params.lpTokenName,
                    params.lpTokenSymbol
                )
                .send({ from: this.accountAddress }, (err, result) => {
                    console.log(result);
                    this.contractAddress = result;
                    callback();
                });
        }
    }
    async getDao(callback) {
        if (!this.connected) {
            alert("Need to connect");
        } else {
            this.contract = await this.getDaoFactoryContract();
            console.log(this.contract);
            this.contract.methods
                .getDaos(this.accountAddress)
                .call((err, result) => {
                    console.log(result);
                    this.daos = result;
                    callback(this.daos);
                });
        }
    }
    spliceAddress(address) {
        return (
            address.substr(0, 6) + "..." + address.substr(address.length - 5, 5)
        );
    }
}
export default Bia;
