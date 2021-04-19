// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

interface IApp {
    function methods() external returns (string[] memory);
    function dispatch(string memory method, string[] memory args) external;
}