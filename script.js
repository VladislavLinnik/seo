const notCleared = document.querySelector('#notCleared'),
    cleared = document.querySelector('#cleared'),
    total = document.querySelector('#total'),
    generateBtn = document.querySelector('#generate'),
    fullWordCheckbox = document.querySelector('#fullWord');

generateBtn.addEventListener('click', start);

function start() {
    const notClearedArray = notCleared.value.split("\n");
    const filterArray = cleared.value.split("\n");

    if (fullWordCheckbox.checked) {
        generateFull(notClearedArray, filterArray);
    } else {
        generate(notClearedArray, filterArray);
    }
}

function generate(notClearedArray, filterArray) {
    let totalArray = [];
    notClearedArray.forEach(x => {
        let resultString = '';
        filterArray.forEach(y => {
            if (x.includes(y)) {
                resultString = x.replace(y, '').replace(/\s+/g, ' ').trim();
                x = resultString;
            }
        });
        totalArray.push(resultString);
    });
    total.value = totalArray.join("\n");
}

function generateFull(notClearedArray, filterArray) {
    let uniqueValues = new Set();
    notClearedArray.forEach(x => {
        let resultString = '';
        filterArray.forEach(y => {
            if (x.includes(y)) {
                uniqueValues.add(x);
            }
        });
    });
    total.value = Array.from(uniqueValues).join("\n");
}
