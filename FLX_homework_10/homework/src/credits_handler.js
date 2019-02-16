function userCard(index) {
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];
    let key = index;
    let newOperationTime = new Date().toLocaleString('en-GB');

    function fnHistoryLogs(operationType, credits, operationTime) {
        historyLogs.push({
            operationType: operationType,
            credits: credits,
            operationTime: operationTime
        });
    }

    const Methods = {
        getCardOptions: function() {
            return {
                key,
                balance,
                transactionLimit,
                historyLogs
            };
        },

        putCredits: function (amount) {
            balance += amount;
            fnHistoryLogs('Received credits', amount, newOperationTime)
        },

        takeCredits: function (amount) {
            if (amount <= balance && amount <= transactionLimit) {
                balance -= amount;
                fnHistoryLogs('Withdrawal of credits', amount, newOperationTime)
            } else {
                console.error(
                    `Wrong amount! Are you trying to take off ${amount}$. 
                    Make sure that this amount is not more than the balance -${balance}$ 
                    and not more than transaction limit - ${transactionLimit}$.`
                );
            }
        },

        setTransactionLimit: function (amount) {
            transactionLimit = amount;
            fnHistoryLogs(`Transaction limit change`, amount, newOperationTime);
        },

        transferCredits: function (amount, targetCard) {
            const tax = 0.005;
            let amountwithTax = amount * tax + amount;
            if (amountwithTax <= balance && amountwithTax <= transactionLimit) {
                this.takeCredits(amountwithTax);
                targetCard.putCredits(amount);
            } else {
                console.error(
                    `Wrong amount! Are you trying to take off ${amount}$. 
                    Make sure that this amount is not more than the balance -${balance}$ 
                    and not more than transaction limit - ${transactionLimit}$.`
                );
            }
        }
    }
    return Methods;
}

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.limitofCards = 3;
    }

    addCard() {
        if (this.cards.length < this.limitofCards) {
            this.cards.push(userCard(this.cards.length + 1));
        } else {
            console.error(`U already got ${this.limitofCards} cards. U can't got more.`);
        }
    }

    getCardByKey(key) {
        return this.cards[key - 1];
    }
}
