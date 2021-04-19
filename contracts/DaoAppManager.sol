// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

import {IApp} from "./ifaces/IApp.sol";
import {Strings} from "./libs/LibStrings.sol";


contract DaoAppManager is IApp {
    using Strings for string;
    
    string public AppName = "AppManager";
    address public _dao;

    constructor() {
        // Protect falsification _dao of AppManager.
        _dao = msg.sender;
        // App manager is installed by default. Or how to install other apps )
        install_app(address(this));
    }

    // Installed in DAO apps here. All you need to install your own is to realize IApp iface.
    address[] public Apps;
    mapping(address => bool) public AppsHash; // Because Solidity :(
    
    function hasApp(address app) public view returns (bool) {
        return AppsHash[app];
    }
    
    // IApp
    string[] _methods = [
        'install_app',
        'uninstall_app'
    ];
    
    // IApp
    function methods() public override view returns(string[] memory){
        return _methods;
    }
    
    // IApp
    function dispatch(string memory method, string[] memory args) override public {
        if (method.equals("install_app")) install_app(args[0].parseAddr());
        else if (method.equals("uninstall_app")) uninstall_app(args[0].parseAddr());
    }
    
    function install_app(address app) public {
        // We can install apps only from DAO because ACL there. So here we in safe )
        require(msg.sender == _dao);
        
        Apps.push(app);
        AppsHash[app] = true;
    }
    
    function uninstall_app(address app) public {
        // We can uninstall apps only from DAO because ACL there. So here we in safe too )
        require(msg.sender == _dao);
        
        AppsHash[app] = false;
    }
}