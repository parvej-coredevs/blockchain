import dotenv from 'dotenv';
dotenv.config();
import { ethers, JsonRpcProvider } from 'ethers';


(async () => {
  const provider = new JsonRpcProvider(`http://127.0.0.1:7545`);

  // accounts list
  const accounts =  await provider.listAccounts();
  // accounts.forEach(acc => console.log(acc.address));

  // get account balance
  const balance = await provider.getBalance('0x2a9392ea4b5ddC5257063f328bAa31a306bce650');
  console.log('balance: ' + balance);

})()