
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  const clientBalanceNotEqualToDepositsAndWithdrawalDifference = [];
  for (const client of array) { 
    let individualSumDeposits = 0;
    let individualSumWithdrawals = 0;
      if (client.deposits) {
        for (const deposit of client.deposits) {
        individualSumDeposits += deposit;
      } 
      console.log("Deposit Sum: ", individualSumDeposits);
    }
      if (client.withdrawals) {
        for (const withdrawal of client.withdrawals) {
          individualSumWithdrawals += withdrawal;
        }
        console.log("Withdrawal Sum: ", individualSumWithdrawals);
      }
      if ((individualSumDeposits -= individualSumWithdrawals) !== client.balance) {
    clientBalanceNotEqualToDepositsAndWithdrawalDifference.push(client);
    console.log(client)
    }
  }
  return clientBalanceNotEqualToDepositsAndWithdrawalDifference
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
