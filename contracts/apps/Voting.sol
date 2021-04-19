// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

import {AppVoting} from "./AppVoting.sol";

contract Voting {
    uint256 public Createdat;
    uint256 public Result;
    uint256 public Period;
    
    address _app;
    string _method;
    string[] _args;

    function App() public returns(address){ return _app ;}    
    function Method() public returns(string memory){ return _method ;}    
    function Args() public returns(string[] memory){ return _args ;}    

    bool public Opened;
    AppVoting _parent;
    
    mapping(address => int8) voters;

    constructor(AppVoting parent, address app, string memory method, string[] memory args, uint256 period){
        _parent = parent;
        _app = app;
        _method = method;
        _args = args;

        Createdat = block.timestamp;
        // State = 0;
        Result = 0;
        Period = period;
        Opened = true;
    }
    
    function is_active() public view returns(bool) {
        return (block.timestamp - Createdat < Period);
    }
    

    function vote_yes() public{
        if (!is_active()) finished();
        else {
            if (voters[msg.sender] != 0) revert("Already voted");
            voters[msg.sender] = 1;
            Result++;
        }
    }
    
    function vote_no() public{
        if (!is_active()) finished();
        else {
            if (voters[msg.sender] != 0) revert("Already voted");
            voters[msg.sender] = -1;
            Result--;
        }
    }
    
    function finished() private {
        require(Opened);
        Opened = false;

        _parent.voting_done();
    }
}