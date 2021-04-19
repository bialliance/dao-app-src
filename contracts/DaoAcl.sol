// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

import {IRunner} from "./ifaces/IRunner.sol";
import {Dao} from "./Dao.sol";
import {Strings} from "./libs/LibStrings.sol";
import {Tools} from "./libs/LibTools.sol";

contract DaoAcl is IRunner {
    using Strings for string;

    address public _dao;
    
    constructor(){
        _dao = msg.sender;
    }
    
    mapping (string => address) rules;

    // Allow runnig some functionality for some addres (application or user).
    function set_runer(address app, string memory method, address runer) public {
        // We can call this only from our DAO. So here we in safe )
        require(msg.sender == _dao);
        string memory sacl = Tools.adrToString(app).concat('.').concat(method);
        rules[sacl] = runer;
    }
    
    // Get aloowed caller for some action.
    function get_runer(address app, string memory method) public view returns (address){
        // But you can check runner of any app. It is safe and not the secret.
        string memory sacl = Tools.adrToString(app).concat('.').concat(method); // Make string key and get runner from it.
        return rules[sacl];
    } 
    
    // IRunner. To have ability runnig unrestricted methods.
    function run(address app, string memory method, string[] memory args) public override {
        Dao(_dao).dispatch(app, method, args);
    }    
}