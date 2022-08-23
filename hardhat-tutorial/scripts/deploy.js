// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const { ethers } = hre;

  console.log(`Deploying Whitelist Contract...`);

  const whitelistContract = await ethers.getContractFactory("Whitelist");
  const deployWhitelistTx = await whitelistContract.deploy(10);

  await deployWhitelistTx.deployed();

  console.log(`Whitelist Contract Deployed @ address : ${deployWhitelistTx.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
