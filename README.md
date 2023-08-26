# zkSNARK Circuit Implementation Project

This project involves designing and deploying a zkSNARK circuit to implement logical operations using the circom programming language. The goal is to create a circuit that implements logical gates and deploy a verifier on-chain to verify proofs generated from this circuit.

## Project Structure

- `circuits.config.json`: Configuration file for the circuits.
- `circuits`: Folder containing the circom circuit templates and components.
  - `circuit.circom`: Main circuit template that implements logical gates.
  - `andGate.circom`: Template for the AND gate.
  - `notGate.circom`: Template for the NOT gate.
  - `orGate.circom`: Template for the OR gate.
- `tasks`: Folder containing Hardhat tasks.
  - `newcircuit.ts`: Custom Hardhat task for creating a new circuit.

## Installation

1. Clone this repository: `git clone <repository-url>`
2. Install dependencies: `npm install`

## Usage

1. Modify the circuit templates in the `circuits` folder to implement your desired logical gates.
2. Run the `newcircuit` Hardhat task to create a new circuit: `npx hardhat newcircuit`
3. Deploy the circuit verifier on-chain.
4. Generate proofs using the circuit and verify them on-chain.

## Deploying to Ethereum Testnet

1. Update the network configuration in `hardhat.config.js` with the desired Ethereum testnet details.
2. Run the deployment script: `npx hardhat run scripts/deploy.js --network Mumbai`

## Notes

- Make sure you have Node.js and npm installed.
- You can find more information about circom and zkSNARK circuits in the circom documentation.

