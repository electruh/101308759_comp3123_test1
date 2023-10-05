//Allanis Sumaya - 101308759

// Question 1:
function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            reject("Input is not an array");
            return;
        }
        const filteredWords = mixedArray.filter((item) => typeof item === "string");
        const lowercasedWords = filteredWords.map((word) => word.toLowerCase());
        resolve(lowercasedWords);
    });
}

const mixedArray = ['pizza', 10, true, 25, false, 'wings'];

lowerCaseWords(mixedArray)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error("Error:", error);
    });


// Question 2:
const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: 'delayed success!' });
        }, 500);
    });
};

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('error: delayed exception!'));
        }, 500);
    });
};

resolvedPromise()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });

rejectedPromise()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });
