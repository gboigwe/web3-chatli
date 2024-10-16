# CHATLI: Blockchain-Based Chat Application

CHATLI is a decentralized chat application built on blockchain technology. It allows users to securely communicate with each other using smart contracts on the Ethereum network.

## Features

- Decentralized messaging system
- User authentication using Ethereum addresses
- Friend list management
- Secure and encrypted communication

## Technology Stack

- Solidity: For smart contract development
- Hardhat: Ethereum development environment
- Next.js: React framework for production
- Ethers.js: Ethereum wallet implementation
- Web3Modal: For connecting to Ethereum wallets

## Prerequisites

- Next.js
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- MetaMask or any Ethereum wallet

## Installation

1. Clone the repository:

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your configuration:
   ```
   NEXT_PUBLIC_POLYGON_Amoy_RPC=https://rpc-Amoy.maticvigil.com/
   ```

## Smart Contract Development

CHATLI uses Hardhat for Ethereum development. Here are some useful commands:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

To deploy the CHATLI smart contract to a local network:

1. Start a local Hardhat node:
   ```
   npx hardhat node
   ```

2. In a new terminal, deploy the contract:
   ```
   npx hardhat run scripts/deploy.js --network localhost
   ```

## Running CHATLI

1. Start the development server:
   ```
   npm run dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser.

3. Connect your MetaMask wallet to CHATLI.

## Usage

1. Create a CHATLI account using your Ethereum address.
2. Add friends to your CHATLI network using their Ethereum addresses.
3. Start chatting securely on the blockchain!

## Testing

Run the CHATLI test suite with:

```
npx hardhat test
```

## Deployment

To deploy CHATLI to the Polygon Amoy testnet:

1. Ensure your `.env` file is configured with the correct RPC URL and private key.
2. Run:
   ```
   npx hardhat run scripts/deploy.js --network polygon_Amoy
   ```

## Contributing

CHATLI was developed by a team of four dedicated individuals. We appreciate their hard work and contributions to this project:

- Gbolahan Akande
- Ernest Ukoge
- Chukwudi Nwaneri


## Disclaimer

CHATLI is a prototype application for educational purposes. Do not use it to transmit sensitive information without proper security audits.
