const wantToPlay = confirm("Do you want to play a game?");
const attempts = 3;
const RangeC = 2;
const prizeC = 3;
if (wantToPlay) {
    let prizeMax = 10;
    let Range = 5;
    let UserPrize = 0;
    do {
        do {
            let randomNumber = Math.round(Math.random() * Range);
            let currentAt = attempts;
            for (currentAt; currentAt > 0; currentAt--) {
                let prize = Math.floor(prizeMax / Math.pow(2, attempts - currentAt));
                let chooseNumber = parseInt(prompt(`Enter a number from 0 to ${Range}\n` +
                    `Attempts left: ${currentAt}\n` +
                    `Total prize: ${UserPrize}$\n` +
                    `Possible prize on current attempt: ${prize}$`));
                if (chooseNumber === randomNumber) {
                    UserPrize += prize;
                    prizeMax *= prizeC;
                    Range *= RangeC;
                    break;
                }
            }
            if (currentAt === 0) {
                break;
            }
        } while (confirm(`Congratulation! Your prize is: ${UserPrize}$. Do you want to continue?`));
        alert(`Thank you for a game. Your prize is: ${UserPrize}$`);
    } while (confirm(`Do you want to play a game again?`));
} else {
    alert("You did not become a millionaire, but can.")
}