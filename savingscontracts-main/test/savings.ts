
import {
    time,
    loadFixture,
  } from "@nomicfoundation/hardhat-toolbox/network-helpers";
  import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";
import { assert } from "console";
import hre from "hardhat";
import { expect } from "chai";

describe('Event test', () => {
    
    const deployEventContract = async  () => {

        const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

        const [owner, account1, account2, account3] = await hre.ethers.getSigners();

        const event = await hre.ethers.getContractFactory("EventContract");

        const deployEvent = await event.deploy();

        return {deployEvent, owner, account1, ADDRESS_ZERO}
    }

    describe("Deployment", () => {

        it('should be deployed by owner', async() => {
            let {deployEvent, owner} = await loadFixture(deployEventContract);

            const runner = deployEvent.runner as HardhatEthersSigner;

            expect(runner.address).to.equal(owner.address);
        })

        it('should not be address zero', async() => {
            let {deployEvent, ADDRESS_ZERO} = await loadFixture(deployEventContract);

            expect(deployEvent.target).to.not.be.equal(ADDRESS_ZERO);
        }) 
    })

    describe('Create Event', () => {

        it('should create an event', async () => {

            const latestTime = await time.latest();

            let {deployEvent} = await loadFixture(deployEventContract);

            let eventCountBeforeDeployment = await deployEvent.event_count();

            let e = await deployEvent.createEvent('poolparty', 'come with your baddie', latestTime + 90, BigInt(latestTime + 86400), 0, 20, 0, 0, {});

            let eventCountAfterDeployment = await deployEvent.event_count();

            console.log(e)
            expect(eventCountAfterDeployment).to.be.greaterThan(eventCountBeforeDeployment);

        } )
    })


    describe('Check Valid Date', () => {

        it('Withdrawal should be from 14TH Febraury', async () => {

            const currentTime = await time.latest();
            const withdrawalDate = BigInt()

            let {deployEvent} = await loadFixture(deployEventContract);

            let eventCountBeforeDeployment = await deployEvent.event_count();

            let e = await deployEvent.createEvent('poolparty', 'come with your baddie', latestTime + 90, BigInt(latestTime + 86400), 0, 20, 0, 0, {});

            let eventCountAfterDeployment = await deployEvent.event_count();

            console.log(e)
            expect(eventCountAfterDeployment).to.be.greaterThan(eventCountBeforeDeployment);

        } )
    })

    describe('Register Event', () => {
        
    })

})
