# Hedera Staking Rewards Query Script

This script queries the Hedera API to calculate the total staking amount received for a specified account ID. It makes calls to the Hedera mainnet public mirror node, iterating through the staking rewards and summing them up.

## Prerequisites

Before you run this script, ensure you have the following installed:
- Node.js (v12 or higher)
- npm (Node Package Manager)

## Installation

1. **Clone the Repository**

   First, clone this repository to your local machine.


2. **Install Dependencies**

Install it by running: `npm install`


## Configuration

- Open the script file (e.g., `index.ts`).
- Locate the line containing the `accountID` variable.
- Replace `'CHANGEME'` with the Hedera account ID you want to query. For example:
```javascript
const accountID = '0.0.123456';
```


   
## Run the script

- Run the script using the following command within your terminal:
```javascript
npx ts-node index.ts
