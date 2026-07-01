class BankAccount {

    constructor(balance = 0){
        this.balance = balance;
    }

    transactions = [];

    deposit(amount){
        if(amount <= 0) return 'Deposit amount must be greater than zero.';
        this.balance += amount;
        this.transactions.push({type: 'deposit', amount: amount});
        return `Successfully deposited $${amount}. New balance: $${this.balance}`;
    }

    withdraw(amount){
        if(amount > this.balance || amount <= 0) return 'Insufficient balance or invalid amount.';
        this.balance -= amount;
        this.transactions.push({type: 'withdraw', amount: amount});
        return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    }

    checkBalance(){
        return `Current balance: $${this.balance}`;
    }

    listAllDeposits(){
        let str = 'Deposits: ';
        const deposits = this.transactions.filter(transaction => transaction.type === 'deposit');
        deposits.forEach((deposit, index, arr) => {
            if(index === arr.length - 1){
                str += `${deposit.amount}`;
            } else {
                str += `${deposit.amount},`
            }
        });
        return str;     
    }

    listAllWithdrawals(){
        let str = 'Withdrawals: ';
        const withdrawals = this.transactions.filter(transaction => transaction.type === 'withdraw');
        withdrawals.forEach((withdraw, index, arr) => {
            if(index === arr.length - 1){
                str += `${withdraw.amount}`;
            } else {
                str += `${withdraw.amount},`;
            }
        });
        return str;
    }
}

const myAccount = new BankAccount();
myAccount.deposit(1000);
myAccount.deposit(200);
myAccount.withdraw(100)
myAccount.withdraw(50);
myAccount.deposit(100);

console.log(myAccount.listAllDeposits());
console.log(myAccount.listAllWithdrawals());
console.log(myAccount.checkBalance());
console.log(myAccount.withdraw(50));


