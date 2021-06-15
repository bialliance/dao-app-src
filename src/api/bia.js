import Web3 from 'web3'
import Web3Modal from 'web3modal'
import MewConnect from '@myetherwallet/mewconnect-web-client'
import ethProvider from 'eth-provider'
import Authereum from 'authereum'
import logoETH from '@/assets/img/eth.png'
import logoBSC from '@/assets/img/binance.png'
import { oneClickDaoAbi } from '@/config/oneClickDaoAbi.json'
import { aragonDaoAbi } from '@/config/aragonDaoAbi.json'

// const ONE_DAY = 60 * 60 * 24
// const ONE_WEEK = ONE_DAY * 7
// const VOTE_DURATION = ONE_WEEK
// const SUPPORT_REQUIRED = '500000000000000000'
// const MIN_ACCEPTANCE_QUORUM = '200000000000000000'
// const A1_VOTING_SETTINGS = [
//     SUPPORT_REQUIRED,
//     MIN_ACCEPTANCE_QUORUM,
//     VOTE_DURATION,
// ]
// const DOT_VOTING_SETTINGS = [
//     SUPPORT_REQUIRED,
//     MIN_ACCEPTANCE_QUORUM,
//     VOTE_DURATION,
// ]
// const VOTING_SETTINGS = [...DOT_VOTING_SETTINGS, ...A1_VOTING_SETTINGS]
const VOTING_BOOLS = [false, false]
// const TOKEN_REQUEST = ['0x0b2753476c2a9694224f2a5102ae3e582e07d5ec']

class Bia {
    constructor() {
        this.connected = false
        this.provider = ''
        this.web3 = ''
        this.accountAddress = ''
        this.exexutionHash = ''
        this.contract = ''
        this.aragonContract = ''
        this.daos = ''
        this.chainId = ''
        this.chainLogo = ''
        this.networkName = ''
        this.appChainId = ''
        this.canChangeNetwork = false
    }

    async getNetworkName() {
        if (this.web3) {
            this.networkName = await this.web3.eth.net.getNetworkType()
        } else {
            console.log('To get Netwirk Name you need to connect first')
        }
    }

    getContractAddress(chainId) {
        switch (chainId) {
            case 4:
                return '0x6545d195760E4680AF5656C0a143c654EF7B0424'
            case 97:
                return '0x204cD2BDB15aCF401B90cDE79b5Cc93dd2fEf816'
            case 1:
                return ''
            case 56:
                return ''
            default:
                return ''
        }
    }

    getAragonContractAddress(chainId) {
        switch (chainId) {
            case 4:
                return '0xcad24c2fcdbc1ef0bd752f2491d2a2fc1282e215'
            case 97:
                return ''
            case 1:
                return '0x3907be053a97ee13fe97503a6ecc4633e6472c98'
            case 56:
                return ''
            default:
                return ''
        }
    }

    getChainLogo(chainId) {
        switch (chainId) {
            case 4:
                return logoETH
            case 97:
                return logoBSC
            case 1:
                return logoETH
            case 56:
                return logoBSC
            default:
                return ''
        }
    }

    async getAragonContract() {
        if (this.aragonContract) {
            return this.aragonContract
        }
        const contractAddress = this.getAragonContractAddress(this.chainId)
        if (contractAddress) {
            console.log(aragonDaoAbi)
            const contract = await new this.web3.eth.Contract(
                aragonDaoAbi.abi,
                contractAddress,
            )
            this.aragonContract = contract
            return contract
        } else {
            return undefined
        }
    }

    async getDaoFactoryContract() {
        const contractAddress = this.getContractAddress(this.chainId)
        if (contractAddress) {
            const contract = await new this.web3.eth.Contract(
                oneClickDaoAbi,
                contractAddress,
            )
            return contract
        } else {
            return undefined
        }
    }

    async connect(callback = () => {}) {
        if (!this.connected) {
            const providerOptions = {
                mewconnect: {
                    package: MewConnect, // required
                    options: {
                        infuraId: '1fa62a71dee94d9ebc1fc18e82207e55', // required
                    },
                },
                frame: {
                    package: ethProvider, // required
                },
                authereum: {
                    package: Authereum, // required
                },
            }
            const web3Modal = new Web3Modal({
                // network: "mainnet", // optional
                cacheProvider: false, // optional
                providerOptions, // required
                theme: 'dark',
            })
            web3Modal.clearCachedProvider()

            this.provider = await web3Modal.connect()
            this.web3 = new Web3(this.provider)
            this.web3.eth.net
                .isListening()
                .then(() => {
                    this.web3.eth.getAccounts().then((e) => {
                        this.accountAddress = e[0]
                        this.web3.eth.getChainId().then(async (r) => {
                            this.chainId = r
                            this.appChainId = r
                            this.connected = true
                            this.canChangeNetwork = true
                            this.chainLogo = this.getChainLogo(this.chainId)
                            this.networkName = await this.web3.eth.net.getNetworkType()
                            callback({
                                address: this.accountAddress,
                                success: true,
                            })
                            // if ([1, 4, 56, 97].includes(r)) {
                            //     callback({
                            //         address: this.accountAddress,
                            //         success: true
                            //     });
                            // } else {
                            //     callback(undefined);
                            // }
                        })
                    })
                })
                .catch((e) => {
                    callback({ address: null, success: false })
                })
        } else {
            this.networkName = await this.web3.eth.net.getNetworkType()
            callback({ address: this.accountAddress, success: true })
        }
    }

    async waitForResponse(hash, ms, triesLeft = 10) {
        return new Promise((resolve, reject) => {
            const interval = setInterval(async () => {
                await this.web3.eth.getTransactionReceipt(hash).then((res) => {
                    if (res !== null) {
                        if (res.status) {
                            clearInterval(interval)
                            resolve(res)
                        }
                    }
                    // else if (triesLeft <= 1) {
                    //     clearInterval(interval);
                    //     reject();
                    // }
                })
                // triesLeft--;
            }, ms)
        })
    }

    // TODO: Это нужно?
    async sendTokenManager(params, callback = () => {}) {
        if (!this.connected) {
            alert('Need to connect')
        } else {
            await this.web3.eth.getChainId().then(async (r) => {
                this.chainId = r
                if (this.appChainId === r) {
                    this.aragonContract = await this.getAragonContract()
                    if (this.aragonContract) {
                        console.log(this.accountAddress.toLowerCase())
                        this.aragonContract.methods
                            .newTokenManagers(
                                [this.accountAddress.toLowerCase()],
                                [params.gpAmount],
                                [this.accountAddress.toLowerCase()],
                                [params.lpAmount],
                            )
                            .send(
                                { from: this.accountAddress },
                                async (err, hash) => {
                                    localStorage.hash = hash
                                    const result = await this.waitForResponse(
                                        hash,
                                        5000,
                                    )
                                    console.log(result)
                                    console.log('done')
                                    callback(err)
                                },
                            )
                    }
                } else {
                    callback('wrong network')
                }
            })
        }
    }

    async finalizeDao(params, callback = () => {}) {
        if (!this.connected) {
            alert('Need to connect')
        } else {
            await this.web3.eth.getChainId().then(async (r) => {
                this.chainId = r
                if (this.appChainId === r) {
                    this.aragonContract = await this.getAragonContract()
                    if (this.aragonContract) {
                        console.log(this.accountAddress.toLowerCase())
                        this.aragonContract.methods
                            .finalizeDao(
                                [params.tokenRequest],
                                [params.tokenRequest],
                                params.appSettings,
                            )
                            .send(
                                { from: this.accountAddress },
                                async (err, hash) => {
                                    localStorage.hash = hash
                                    const result = await this.waitForResponse(
                                        hash,
                                        5000,
                                    )
                                    console.log(result)
                                    console.log('done')
                                    callback(err)
                                },
                            )
                    }
                } else {
                    callback('wrong network')
                }
            })
        }
    }

    async createDao(params, callback = () => {}) {
        if (!this.connected) {
            alert('Need to connect')
        } else {
            await this.web3.eth.getChainId().then(async (r) => {
                this.chainId = r
                if (this.appChainId === r) {
                    if (params.platform === 'aragon') {
                        console.log('using aragon platform')
                        this.aragonContract = await this.getAragonContract()
                        if (this.aragonContract) {
                            this.aragonContract.methods
                                .newTokensAndInstance(
                                    params.daoName,
                                    params.gpTokenName,
                                    params.gpTokenSymbol,
                                    params.lpTokenName,
                                    params.lpTokenSymbol,
                                    [
                                        ...params.dotVotingSettings,
                                        ...params.votingSettings,
                                    ],
                                    VOTING_BOOLS,
                                )
                                .send(
                                    { from: this.accountAddress },
                                    async (err, hash) => {
                                        localStorage.hash = hash
                                        const result = await this.waitForResponse(
                                            hash,
                                            5000,
                                        )
                                        console.log(result)
                                        console.log('done')
                                        callback(err)
                                    },
                                )
                        }
                    } else {
                        console.log('using 1clickDao platform')
                        this.contract = await this.getDaoFactoryContract()
                        if (this.contract) {
                            this.contract.methods
                                .createDao(
                                    params.daoName,
                                    params.daoDescription,
                                    params.gpTokenName,
                                    params.gpTokenSymbol,
                                    params.lpTokenName,
                                    params.lpTokenSymbol,
                                )
                                // eslint-disable-next-line node/handle-callback-err
                                .send(
                                    { from: this.accountAddress },
                                    (err, result) => {
                                        this.exexutionHash = result
                                        callback(err)
                                    },
                                )
                        } else {
                            callback(undefined)
                        }
                    }
                } else {
                    callback('wrong network')
                }
            })
        }
    }

    setChainId(cb = () => {}) {
        this.web3.eth.getChainId().then(async (r) => {
            this.chainId = r
            cb(r)
        })
    }

    async getDao(callback = () => {}) {
        if (!this.connected) {
            alert('Need to connect')
        } else {
            this.setChainId(async (chainId) => {
                this.contract = await this.getDaoFactoryContract()
                if (this.contract) {
                    this.contract.methods
                        .getDaos(this.accountAddress)
                        .call((err, result) => {
                            if (err) {
                                console.log(err)
                            }
                            this.daos = result
                            callback(this.daos)
                        })
                } else {
                    callback(undefined)
                }
            })
        }
    }

    spliceAddress(address) {
        return (
            address.substr(0, 5) + '..' + address.substr(address.length - 4, 4)
        )
    }
}
export default Bia

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
//                     this.exexutionHash = result;
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
