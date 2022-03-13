 for (let i = 0; i < transactions.length; i++) {
        const currentElement = transactions[i];
        for (let j = 0; j < transactions.length; j++) {
            if (i != j) {
                const comparedElement = transactions[j];
                if ((comparedElement.targetAccount == currentElement.targetAccount) && (Math.abs(comparedElement.amount - currentElement.amount) <= 1000)) {
                    transactions[i].category = transactions[j].category
                }
            }
        }
    }
    return transactions;