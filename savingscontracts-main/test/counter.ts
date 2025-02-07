import {
    loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import hre from "hardhat";
import { expect } from "chai";

describe('Counter', () => {

    const deployCounterContract = async () => {

        const count = await hre.ethers.getContractFactory('Counter')
        
        const deployedCount = await count.deploy(); //get a snapshot of the state of the blockchain

        return {deployedCount}; //return the snapshot
    }
    describe('increment', () => {
        
        it('should increment count', async () => {
           // call the loadFixture function to get the snapshot of the blockchain
          const {deployedCount} = await loadFixture(deployCounterContract); 
          
          let countBeforeIncrement = await deployedCount.count();

          console.log(countBeforeIncrement);

          await deployedCount.increaseCount();

          let countAfterIncrement = await deployedCount.count();

           console.log(countAfterIncrement);

         expect(countAfterIncrement).to.be.greaterThan(countBeforeIncrement);
          
        })

        it('should increment by 1', async () => {
            const {deployedCount} = await loadFixture(deployCounterContract); 

            await deployedCount.increaseCount();
          
            let countAfterIncrement = await deployedCount.count();
            expect(countAfterIncrement).to.equal(1);

        })

    })

    // check if the count is decremented by 1   
    describe('decrement', () => {

        it('should decrement count by 1', async() => {

        const {deployedCount} = await loadFixture(deployCounterContract);

        await deployedCount.increaseCount();
        
        let CountBeforeDecrease = await deployedCount.count();

        await deployedCount.decreaseCount();

        let countAfterDecrement = await deployedCount.count();

        expect(countAfterDecrement).to.lessThan(CountBeforeDecrease);
        
        })
    })

    describe('decrement', () => {

        it('should decrement count by 1', async() => {

        const {deployedCount} = await loadFixture(deployCounterContract);

        await deployedCount.increaseCount();
        
        let CountBeforeDecrease = await deployedCount.count();

        await deployedCount.decreaseCount();

        let countAfterDecrement = await deployedCount.count();

        expect(countAfterDecrement).to.lessThan(CountBeforeDecrease);
        
        })
    })
})
