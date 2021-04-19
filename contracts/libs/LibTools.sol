// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

// Some tolls.
library Tools {
    function adrToUint(address adr) pure public returns (uint256){
        return uint256(uint160(address(adr)));  
    }
    
    function adrToString(address x) pure public returns (string memory) {
        bytes memory b = new bytes(20);
        for (uint i = 0; i < 20; i++) 
            b[i] = bytes1(uint8(adrToUint(x) / (2**(8*(19 - i))))); 
        return string(b); 
    }
}