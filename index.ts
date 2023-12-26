import axios from 'axios'

type Data = {
    rewards: {
        account_id: string,
        amount: bigint,
        timestamp: string,
    }[],
    links: {
        next: string | null
    }
}

// Variables - CHANGE THE "accountID" VARIABLE TO THE ACCOUNT YOU WANT TO CALCULATE FOR
const accountID = 'CHANGEME';
const baseURL = 'https://mainnet-public.mirrornode.hedera.com';
const initialUrl = `${baseURL}/api/v1/accounts/${accountID}/rewards`;
const decimalFactor = BigInt(10 ** 8);

let totalAmount: bigint = BigInt(0);

const fetchData = async (url: string): Promise<void> => {
    try {
        const response = await axios.get<Data>(url);

        // Uncomment the below line to see JSON output from API call
        //console.log('Data:', response.data);

        // Iterate through the response to add the reward to the total
        response.data.rewards.forEach(reward => {
            totalAmount += BigInt(reward.amount);
        });

        // Check if there is a "next" link
        if (response.data.links.next) {
            const nextUrl = baseURL + response.data.links.next;

            // Uncomment to see the URL being called
            //console.log('Fetching next page:', nextUrl);
            await fetchData(nextUrl); // Recursive call with the new URL
        } else {
            // Print out the total amount received
            console.log(`Total Staking Amount Received: ${totalAmount / decimalFactor}`)

        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Call the function
fetchData(initialUrl);