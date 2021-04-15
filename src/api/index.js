document.addEventListener("DOMContentLoaded", function(event) {
    send();
    async function loadWeb3() {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            const accounts = await ethereum.request({
                method: "eth_requestAccounts"
            });
            // window.web3.eth.personal.unlockAccount(accounts[0]);
            console.log(accounts);
        }
    }
    async function load() {
        await loadWeb3();
        updateStatus("Ready");
    }
    function updateStatus(status) {
        console.log(status);
    }
    async function send() {
        load();

        var contract = await new window.web3.eth.Contract(
            [
                {
                    inputs: [
                        {
                            internalType: "uint256",
                            name: "num",
                            type: "uint256"
                        }
                    ],
                    name: "store",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                },
                {
                    inputs: [],
                    name: "retrieve",
                    outputs: [
                        {
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }
                    ],
                    stateMutability: "view",
                    type: "function"
                }
            ],
            "0xfbbFDe3040A0B393Ef694526881955d34Fc47216"
        );
        var call = await contract.methods.retrieve().call((err, result) => {
            console.log(result);
        });
    }
});
