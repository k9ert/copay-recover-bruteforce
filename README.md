[Copay Recover](https://bitpay.github.io/copay-recovery/) is a tool to recover a aes.json file from a Copay Wallet. If you loose the password of it, you might want to try to brute-force it.
This repos enables that with the help of cypress.

# Usage
copy your aes.json file in this directory calling it "wallet.json". Copy a file with a list of potential valid passwords to this directory and call it `passwords.txt`.
```
npm install
npx cypress run
``` 

If you want to change the code, do `npx cypress open`.
