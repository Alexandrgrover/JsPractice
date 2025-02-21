function generateRandomNumberWithDelay() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        const delayInSeconds = randomNumber * 1000;

        setTimeout(() => {
            if (randomNumber <= 5) {
                resolve(randomNumber);
            } else {
                reject(new Error(`Random number: ${randomNumber}`));
            }
        }, delayInSeconds);
    });
}

generateRandomNumberWithDelay()
    .then(randomNumber => {
        console.log("Successful number: ", randomNumber);
    })
    .catch(error => {
        console.error("Error number:", error.message);
    });