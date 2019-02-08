const date = new Date().getHours();
const userName = prompt("Please write your name");

if (!userName || userName === null) {
    alert("Canceled");
} else {
    if (userName.length < 4) {
        alert("I don't know any users having name length less than 4 symbols");
    } else if (userName !== "User" && userName !== "Admin") {
        alert("I don't know you");
    } else {
        const password = prompt("Please write your password");

        if (!password || password === null) {
            alert("Canceled");
        } else if (userName === "User") {
            if (password !== "UserPass") {
                alert("Wrong password");
            } else if (password === "UserPass") {
                if (date < 20) {
                    alert("Good day, dear User!");
                } else {
                    alert("Good evening, dear User!");
                }
            }
        } else if (userName === "Admin") {
            if (password !== "RootPass") {
                alert("Wrong password");
            } else if (password === "RootPass") {
                if (date < 20) {
                    alert("Good day, dear Admin!");
                } else {
                    alert("Good evening, dear Admin!");
                }
            }
        }
    }
}