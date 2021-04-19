// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

import {Dao} from "../Dao.sol";
import {IApp} from "../ifaces/IApp.sol";

contract AppVoting is IApp {
    using Strings for string;

    address public _dao;
    
    constructor(address dao) {
        _dao = dao;
    }

    string[] _methods = [
        'create_vote',
        'vote_yes',
        'vote_no'
    ];
    
    function methods() public override view returns(string[] memory){
        return _methods;
    }
   
    Voting[] public votings;
    mapping(address => bool) _hash;

    function create_vote(address app, string memory method, string[] memory args) public {
        Voting v = new Voting(this, app, method, args, 60*1000);
        votings.push(v);
        _hash[address(v)] = true;
    }
    
    function vote_yes(uint256 i) public {
        votings[i].vote_yes();
    }
    
    function vote_no(uint256 i) public {
        // votings[i].voters_no.push(msg.sender);
    }
    
    function dispatch(string memory method, string[] memory args) override public {
        // if (method.equals("install_app")) install_app(args[0].parseAddr());
        // else if (method.equals("uninstall_app")) uninstall_app(args[0].parseAddr());
    }    
    
    function voting_done() public {
        require(_hash[msg.sender]);
        
        Voting v = Voting(msg.sender);
        
        // Call method only through the DAO.
        Dao(_dao).dispatch(v.App(), v.Method(), v.Args());
    }
}