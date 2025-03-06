//your JS code here. If required.
function manipulateArray() {
    const initialArray = [1, 2, 3, 4];
    const outputDiv = document.getElementById('output');

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(initialArray);
        }, 3000);
    })
    .then((array) => {
       
        const evenNumbers = array.filter(num => num % 2 === 0);
        return new Promise((resolve) => {
            setTimeout(() => {
                outputDiv.innerHTML = evenNumbers.join(',');
                resolve(evenNumbers);
            }, 1000);
        });
    })
    .then((evenNumbers) => {
       
        const multipliedNumbers = evenNumbers.map(num => num * 2);
        return new Promise((resolve) => {
            setTimeout(() => {
                outputDiv.innerHTML = multipliedNumbers.join(',');
                resolve(multipliedNumbers);
            }, 2000);
        });
    });
}


manipulateArray();

