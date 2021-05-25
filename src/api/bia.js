import Web3 from "web3";
import Web3Modal from "web3modal";
import MewConnect from "@myetherwallet/mewconnect-web-client";
import ethProvider from "eth-provider";
import Authereum from "authereum";
import logoETH from "@/assets/img/eth.png";
import logoBSC from "@/assets/img/binance.png";
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
        this.chainLogo = "";
        this.networkName = "";
        this.appChainId = "";
        this.canChangeNetwork = false;
    }

    getContractAddress(chainId) {
        switch (chainId) {
            case 4:
                return "0x6545d195760E4680AF5656C0a143c654EF7B0424";
            case 97:
                return "0x204cD2BDB15aCF401B90cDE79b5Cc93dd2fEf816";
            case 1:
                return "";
            case 56:
                return "";
            default:
                return "";
        }
    }

    getChainLogo(chainId) {
        switch (chainId) {
            case 4:
                return logoETH;
            case 97:
                return logoBSC;
            case 1:
                return logoETH;
            case 56:
                return logoBSC;
            default:
                return "";
        }
    }

    async getDaoFactoryContract() {
        const contractAddress = this.getContractAddress(this.chainId);
        if (contractAddress) {
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
        } else {
            return undefined;
        }
    }

    async connect(callback = () => {}) {
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
                        this.web3.eth.getChainId().then(async r => {
                            this.chainId = r;
                            this.appChainId = r;
                            this.connected = true;
                            this.canChangeNetwork = true;
                            this.chainLogo = this.getChainLogo(this.chainId);
                            this.networkName = await this.web3.eth.net.getNetworkType();
                            callback({
                                address: this.accountAddress,
                                success: true
                            });
                            // if ([1, 4, 56, 97].includes(r)) {
                            //     callback({
                            //         address: this.accountAddress,
                            //         success: true
                            //     });
                            // } else {
                            //     callback(undefined);
                            // }
                        });
                    });
                })
                .catch(e => {
                    callback({ address: null, success: false });
                });
        } else {
            this.networkName = await this.web3.eth.net.getNetworkType();
            callback({ address: this.accountAddress, success: true });
        }
    }

    async createDao(params, callback = () => {}) {
        if (!this.connected) {
            alert("Need to connect");
        } else {
            await this.web3.eth.getChainId().then(async r => {
                this.chainId = r;
                if (this.appChainId === r) {
                    this.contract = await this.getDaoFactoryContract();
                    if (this.contract) {
                        this.contract.methods
                            .createDao(
                                params.daoName,
                                params.daoDescription,
                                params.gpTokenName,
                                params.gpTokenSymbol,
                                params.lpTokenName,
                                params.lpTokenSymbol
                            )
                            // eslint-disable-next-line node/handle-callback-err
                            .send(
                                { from: this.accountAddress },
                                (err, result) => {
                                    this.contractAddress = result;
                                    callback(err);
                                }
                            );
                    } else {
                        callback(undefined);
                    }
                } else {
                    callback("wrong network");
                }
            });
        }
    }

    setChainId(cb = () => {}) {
        this.web3.eth.getChainId().then(async r => {
            this.chainId = r;
            cb(r);
        });
    }

    async getDao(callback = () => {}) {
        if (!this.connected) {
            alert("Need to connect");
        } else {
            this.setChainId(async chainId => {
                this.contract = await this.getDaoFactoryContract();
                if (this.contract) {
                    this.contract.methods
                        .getDaos(this.accountAddress)
                        .call((err, result) => {
                            if (err) {
                                console.log(err);
                            }
                            this.daos = result;
                            callback(this.daos);
                        });
                } else {
                    callback(undefined);
                }
            });
        }
    }

    spliceAddress(address) {
        return (
            address.substr(0, 5) + ".." + address.substr(address.length - 4, 4)
        );
    }
}
export default Bia;

// check connection on backend
// async sendParams(params, callback) {
//     await this.web3.eth.getChainId().then(async r => {
//         if (this.appChainId == r) {
//             this.contract = await this.getDaoFactoryContract();
//             this.contract.methods
//                 .createDao(
//                     params.daoName,
//                     params.daoDescription,
//                     params.gpTokenName,
//                     params.gpTokenSymbol,
//                     params.lpTokenName,
//                     params.lpTokenSymbol
//                 )
//                 // eslint-disable-next-line node/handle-callback-err
//                 .send({ from: this.accountAddress }, (err, result) => {
//                     console.log(result);
//                     this.contractAddress = result;
//                     callback();
//                 });
//         } else {
//             alert("wrong network");
//         }
//     });
// }

// async createDao(params, callback) {
//     if (!this.connected) {
//         // alert("Need to connect");
//         await this.connect(async () => {
//             await this.sendParams(params, callback);
//         });
//     } else {
//         await this.sendParams(params, callback);
//     }
// }

// async getContract(callback) {
//     this.contract = await this.getDaoFactoryContract();
//     console.log(this.contract);
//     this.contract.methods
//         .getDaos(this.accountAddress)
//         // eslint-disable-next-line node/handle-callback-err
//         .call((err, result) => {
//             console.log(result);
//             this.daos = result;
//             callback(this.daos);
//         });
// }

// async getDao(callback) {
//     if (!this.connected) {
//         // alert("Need to connect");
//         await this.connect(async () => {
//             await this.getContract(callback);
//         });
//     } else {
//         await this.getContract(callback);
//     }
// }
