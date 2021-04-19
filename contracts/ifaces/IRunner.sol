// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

// Iface for contract which wants be DaoApp.
interface IRunner{
    function run(address app, string memory method, string[] memory args) external;
}