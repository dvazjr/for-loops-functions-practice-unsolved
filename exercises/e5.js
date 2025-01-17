import { bankAccounts } from "./data/data.js";
// EXERCISE 5
// Return an array of all bank account holders names
// Array example: bankAccounts in /data/data.js
// getAllClientNames(bankAccounts) => ['Kevin', 'Spenser']

export function getAllClientNames(array) {
  const names = array.map((account) => account.name);
  return names;
}

const clientNames = getAllClientNames(bankAccounts);
console.log(clientNames);

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-5"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
