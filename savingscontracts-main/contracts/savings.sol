// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.28;

contract simpleSavings {

    address private owner;
    address private contractAddress;
    uint256 currentDate = block.timestamp;
    uint256 withdrawDate = currentDate + 8 days;

    event Deposit(address from, uint amount);

    constructor() {
        owner = msg.sender;
        contractAddress = address(this);
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "You are not the owner of this address");
        _;
    }

    modifier checkValidDate() { 
        // February 14th, 2025 00:00:00 UTC timestamp
        uint256 targetDate = 1707868800;
        require(block.timestamp >= targetDate, "You can't withdraw yet");
        _;
    }

    function deposit() external payable onlyOwner {
        if(msg.value > 0) {
            emit Deposit(msg.sender, msg.value);
        }
    }

    function withdraw () external onlyOwner checkValidDate() {
        if(address(this).balance > 0) {
            payable(msg.sender).transfer(address(this).balance);
        }
        payable(msg.sender).transfer(address(this).balance); 
    }

}