const subahanAllahDisplay = document.getElementById('subahanAllahDisplay');
const subahanAllahIncriment = document.getElementById('SubahanAllahIncriment');
const subahanAllahDecriment = document.getElementById('subahanAllahDecriment');

const allhamdulillahDisplay = document.getElementById('allhamdulillahDisplay');
const allhamdulillahIncriment = document.getElementById('allhamdulillahIncriment');
const allhamdulillahDecriment = document.getElementById('allhamdulillahDecriment');

const allahuAkberDisplay = document.getElementById('allahuAkberDisplay');
const allahuAkberIncriment = document.getElementById('allahuAkberIncriment');
const allahuAkberDecriment = document.getElementById('allahuAkberDecriment');

const resetBtn = document.getElementById('resetBtn');


let subahanAllahInitialValue = 0;
let allhamdulillahInitialValue = 0;
let allahuAkberInitialValue = 0;


// subahanAllah section
subahanAllahIncriment.addEventListener('click', function () {
    if (subahanAllahInitialValue === 21) {
        return alert("Subahanallh complete. Please fillup another one")
    }
    subahanAllahInitialValue += 1;
    subahanAllahDisplay.innerText = subahanAllahInitialValue;
})

subahanAllahDecriment.addEventListener('click', function () {
    if (subahanAllahInitialValue === 0) {
        return alert("You can't added nagetive value");
    }
    subahanAllahInitialValue -= 1;
    subahanAllahDisplay.innerText = subahanAllahInitialValue;
})

// allhamdulillah function
allhamdulillahIncriment.addEventListener('click', function () {
    if (allhamdulillahInitialValue === 21) {
        return alert("Allhamdulillah complete. Please fillup another one")
    }
    allhamdulillahInitialValue += 1;
    allhamdulillahDisplay.innerText = allhamdulillahInitialValue;
})

allhamdulillahDecriment.addEventListener('click', function () {
    if (allhamdulillahInitialValue === 0) {
        return alert("You can't added nagetive value");
    }
    allhamdulillahInitialValue -= 1;
    allhamdulillahDisplay.innerText = allhamdulillahInitialValue;
})

// allahu akbher function
allahuAkberIncriment.addEventListener('click', function () {
    if (allahuAkberInitialValue === 21) {
        return alert("AllahuAkber complete. Please fillup another one");
    }
    allahuAkberInitialValue += 1;
    allahuAkberDisplay.innerText = allahuAkberInitialValue;
})

allahuAkberDecriment.addEventListener('click', function () {
    if (allahuAkberInitialValue === 0) {
        return alert("You can't added nagetive value");
    }
    allahuAkberInitialValue -= 1;
    allahuAkberDisplay.innerText = allahuAkberInitialValue;
})


// reset button section
resetBtn.addEventListener('click', function () {
    subahanAllahDisplay.innerText = 0;
    allhamdulillahDisplay.innerText = 0;
    allahuAkberDisplay.innerText = 0;
    subahanAllahInitialValue = 0;
    allhamdulillahInitialValue = 0;
    allahuAkberInitialValue = 0;
})