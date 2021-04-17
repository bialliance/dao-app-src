import Web3 from "web3";
import Web3Modal from "web3modal";
import MewConnect from "@myetherwallet/mewconnect-web-client";
import ethProvider from "eth-provider";
import Authereum from "authereum";
var Bia = {
    connect: async function() {
        if (!this.connected) {
            const vm = this;
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
                    this.connected = true;
                    vm.walletConnected = true;
                    this.web3.eth.getAccounts().then(e => {
                        vm.accountAddress = e[0];
                        this.accountAddress = e[0];
                        this.web3.eth.net.getNetworkType().then(r => {
                            console.log(r);
                        });
                        console.log(this.accountAddress);
                    });
                })
                .catch(e => console.log("Wow. Something went wrong: " + e));
        } else {
            this.web3.eth.net.getNetworkType().then(r => {
                console.log(r);
            });
            console.log(this.accountAddress);
        }
    },
    createDao: async function(params) {
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
            this.contract = await new this.web3.eth.Contract(
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
                "0x6545d195760E4680AF5656C0a143c654EF7B0424"
            );
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
                .send(
                    { from: "0xEa2C787A2acd3aD60e44bf427Af568373cDe68f3" },
                    (err, result) => {
                        console.log(result);
                        this.contractAddress = result;
                    }
                );
        }
    },
    getDao: async function() {
        if (!this.connected) {
            alert("Need to connect");
        } else if (!this.contractAddress) {
            alert("Need to create contract");
        } else {
            this.contract.methods
                .getDaos("0xEa2C787A2acd3aD60e44bf427Af568373cDe68f3")
                .call((err, result) => {
                    console.log(result);
                    this.daos = result;
                });
        }
    },
    connected: false,
    provider: "",
    web3: "",
    accountAddress: "",
    contractAddress: "",
    contract: "",
    daos: ""
};
export default Bia;
