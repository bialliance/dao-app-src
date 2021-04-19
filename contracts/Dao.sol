// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

import {IApp} from "./ifaces/IApp.sol";
import {IRunner} from "./ifaces/IRunner.sol";

import {DaoAcl} from "./DaoAcl.sol";
import {DaoAppManager} from "./DaoAppManager.sol";


// Main DAO contract. Contains acl and appmanager to control all dao logic.
// Also controls restrictions for outer application calls.
contract Dao {
    // Acl manager. Inserted here to protect insecure intro-transaction creature.
    DaoAcl public _acl;
    // Applications manager. Inserted here to protect insecure intro-transaction creature.
    DaoAppManager public _am;

    constructor(){
        // Create this two core modules here to protect DAO from loosing control.
        _am = new DaoAppManager();
        _acl = new DaoAcl();
        
        // Acl installed app by default. To make acl real App )
        _am.install_app(address(_acl)); 
        // To have chance install something.
        _acl.set_runer(address(_am), 'install_app', address(_acl));
    }

    // All calls to DAO modules starts here/ SO we know that call wasmade by our DAO? not some hacker.
    function call(address app, string memory method, string[] memory args) public {
        // Reject calls from not installed apps. Closing cirlce.
        // Such we can safly extend functionality of the DAO.
        require(_am.hasApp(app));
        
        // Who will process our call. Can be any contract realizing IRunner iface. Even other DAO(subdivision or main distributor) can resolve our request.
        // Such way we can make DAO network/
        IRunner runner = IRunner(_acl.get_runer(app, method));
        
        // If no one can process our request. Reject it. It protects us from Uncontrolled apps injection.
        if (address(runner) == address(0)) revert("Runner not defined");
        
        // If all ok, ask runner (subdivision or voting or oracle or ...) process our request.
        // Such way runner can delegate logic as deep as nedded (hedge fund -> subdivision -> law court -> voting)
        runner.run(app, method, args);
    }
    
    // When some App wants to do real action in DAO it goes here.
    function dispatch(address app, string memory method, string[] memory args) public {
        // And we again protected from unregistered calls.
        require(_am.hasApp(msg.sender));
        
        // If allowed do the call.
        IApp(app).dispatch(method, args);
    }
}