# Oasis Supply Chain Tracking DApp

This project showcases the development and deployment of a decentralized supply chain tracking application on the Oasis blockchain. The DApp enables users to interact with smart contracts to manage the supply chain process efficiently and transparently.

## Table of Contents
- Introduction
- Project Overview
- Features
- Getting Started
- How to Use
- Impact and Benefits
- Contributing
- License

## Introduction
The supply chain industry faces challenges related to transparency, traceability, and accountability. This project addresses these challenges by leveraging blockchain technology to create a decentralized supply chain tracking DApp. The DApp allows various stakeholders to interact with the supply chain process securely and efficiently.

## Project Overview
This project involves the development of a decentralized supply chain tracking DApp that utilizes smart contracts on the Oasis blockchain. The DApp includes the following key components:

1. **Smart Contracts**: Smart contracts are deployed on the Oasis blockchain to store and manage supply chain data, including item details, order status, approvals, and shipments.

2. **User Interface (UI)**: The DApp provides a user-friendly interface that allows users to interact with smart contracts. Users can order items, approve orders, cancel orders, and track item statuses.

3. **Custom Hooks:** Custom React hooks are developed to encapsulate the interaction with smart contracts. These hooks provide easy-to-use functions for various supply chain operations.

4. **Frontend:** The frontend of the DApp is built using React.js, Chakra UI, Rainbowkit, Wagmi, and other libraries. It displays item details, order history, and actions available to users and admins.

## Features
- **Order items:** Users can place orders for new items.
- **Approve orders**: Authorized parties can approve ordered items.
- **Cancel orders**: Users can cancel their orders.
-  **Ship items**: Approved items can be shipped to their destination.
- **Search and track items**: Users can search for items by ID and track their status.

## Getting Started

### Access the Live DApp
You can access the live Decentralized Supply Chain Tracking DApp by visiting the following URL: https://oasis-supplychaintracker.vercel.app/

### Run the DApp Locally
If you prefer to run the DApp on your local machine, follow these steps:

1. **Clone the repository**: `git clone https://github.com/your-username/oasis-supply-chain-dapp.git`
2. **Install dependencies**: cd `oasis-supply-chain-dapp` && `npm install`
3. Configure contract addresses and ABI in respective files.
4. Run the DApp: `npm run dev`

## How to Use
- **Connect Wallet**: Click the "Connect Wallet" button to connect your wallet.
- **Order Item**: Users can enter the item name and click "`Order`" to place an order.
- **Approve Item**: Only authorized parties can approve ordered items.
- **Cancel Item**: Users can cancel their orders.
- **Ship Item**: Approved items can be shipped only by authorized parties.
- **Search and Track**: Enter an item ID to search and track its details and status.

## Impact and Benefits
The decentralized supply chain tracking DApp offers several benefits:

1. **Transparency**: All stakeholders have real-time access to supply chain data, enhancing transparency and reducing information asymmetry.

2. **Efficiency**: Smart contracts automate processes, reducing paperwork and manual interventions, thereby increasing efficiency.

3. **Traceability**: The DApp enables end-to-end traceability of items, enhancing accountability and reducing the risk of fraud.

4. **Cost Savings**: Automation and transparency lead to cost savings by minimizing errors and inefficiencies.

5. **Trust**: The immutability of blockchain ensures data integrity, building trust among supply chain participants.

## Custom Hooks Overview
### useSearchItem
- Search for items by ID and retrieve details.
- Fetch a list of all items.

### useOrderItem
- Place orders for new items.
- Track order status and success.

### useApproveItem
- Approve ordered items as an authorized party.
- Track approval status and success.

### useCancelItem
- Cancel ordered items.
- Track cancellation status and success.

### useShipItem
- Ship approved items.
- Track shipping status and success.


## Contributing
Contributions are welcome! Feel free to fork the repository, make improvements, and submit pull requests.

## License
This project is licensed under the [MIT License](https://opensource.org/license/mit/).

## Tutorial Version: Building and Deploying a Decentralized Supply Chain DApp Tracker on Oasis Blockchain

If you're interested in learning how to build, deploy, and verify a smart contract on the Oasis Sapphire Network, create a user-friendly UI, and deploy your DApp live on Vercel, I prepared an in-depth technical article for you.

📚 **[Check out the tutorial here](https://medium.com/@donatusprince/a-step-by-step-dapp-tutorial-on-building-a-decentralized-supply-chain-tracker-dapp-on-oasis-3918e201d671)**

In this comprehensive tutorial, you will find step-by-step instructions, code samples, standards, and explanations to guide you through the entire process, from writing the smart contract to deploying the DApp.

Thank you for exploring the Oasis Supply Chain Tracking DApp. 

By combining blockchain technology and user-friendly interfaces, we aim to revolutionize supply chain management, making it transparent, efficient, and trustworthy. 

### Happy building! 🚀
