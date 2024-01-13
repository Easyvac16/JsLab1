function task1() {
    let numb = prompt('Write number:')
    alert('your number:' + numb * numb)
}

function task2() {
    let frs_numb = parseInt(prompt('Write first number:'));
    let sec_numb = parseInt(prompt('Write second number:'));
    alert(`Avg number: ${(frs_numb+sec_numb)/2}`);
}
function task3() {
    let frs_side = prompt('Write first side:');
    let sec_side = prompt('Write second side:');
    alert('area of the squares:' + frs_side * sec_side)
}
function task4() {
    const mile = 0.621371;
    let kilometrs = prompt('Write kilometrs to convert in mile:')
    alert(`Mile:${kilometrs * mile}`)
}

function task5() {
    let frs_numb = parseInt(prompt('Write first number:'));
    let sec_numb = parseInt(prompt('Write second number:'));
    alert(`Operation + = ${frs_numb + sec_numb}`)
    alert(`Operation - = ${frs_numb - sec_numb}`)
    alert(`Operation * = ${frs_numb * sec_numb}`)
    alert(`Operation / = ${frs_numb / sec_numb}`)
}

function task6() {
    let a = prompt("Введіть значення a:");
    let b = prompt("Введіть значення b:");

    if (a !== 0) {
        let x = -b / a;
        alert("Результат: x = " + x);
    } else {
        alert("Рівняння не має однозначного розв'язку, оскільки a дорівнює 0.");
    }

}
function task7() {
    let hours = 24;
    let minutes = 60;
    let hour_now = prompt('Write curent hours:')
    let minutes_now = prompt('Write curent minutes:')
    if(hour_now == 0 && minutes_now == 0)
    {
        alert(`There are 24 hours left until the next day`)

    }
    else if(minutes_now == 0){
        alert(`There are ${hours - 1 - hour_now} hours and ${minutes - minutes_now} minutes left until the next day`)
    }
    else if(hour_now == 0)
    {
        alert(`There are ${hours - 1 - hour_now} hours and ${minutes - minutes_now} minutes left until the next day`)
    }
}

function task8() {
    let userInput = prompt("Введіть тризначне число:");

    if (userInput.length == 3) {
        let secondDigit = Math.floor((userInput % 100) / 10);
        alert("Друга цифра числа: " + secondDigit);
    } else {
        alert("Будь ласка, введіть коректне тризначне число.");
    }
}

function task9() {
    let numb = prompt('Write 5 digits:')
    let last_numb = numb.slice(-1)
    let numb_without_last = numb.slice(0, -1)
    alert(`Number:${last_numb + numb_without_last}`)
}

function task10() {
    let month_sels = prompt('Write month sels:')
    alert(`Salary of worker is:${250+(month_sels / 100) * 10}`)
}