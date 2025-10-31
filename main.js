'use strict';

let balance = 10000;
let isRunning = true;

while (isRunning) {
    
const menu = `
    Добро пожаловать в банкомат!
    Ваш выбор:
    1. Показать баланс
    2. Снять средства
    3. Пополнить счет
    4. Выход
    `;

    const choise = (menu);

    switch (choise) {
        case '1':
            alert(`Ваш баланс ${balance}`);
            break;

        case '2':
            const amountToWithDraw = Number(prompt('Введите сумму для снятия'));
            if (isNaN(amountToWithDraw) || amountToWithDraw <= 0) {
                alert('Ошибка: введена некорректная сумма.');
            } else if (amountToWithDraw > balance) {
                alert('Ошибка недостаточно средств на счете.');
            } else {
                balance -= amountToWithDraw;
                alert(`Снятие успешно. Ваш баланс: ${balance}`);
            }
            break;
            
        case '3':
            const amountToDeposit = Number(prompt('Введите сумму для пополнения'));
            if (isNaN(amountToDeposit) || amountToDeposit <= 0) {
                alert('Ошибка: введена некорректная сумма.');
            } else {
                balance += amountToDeposit;
                alert(`Счет пополнен. Ваш баланс: ${balance}`);
            }
            break;

        case '4':
            isRunning = false
            alert('Спасибо за использование нашего банкомата!')

        case null:
            isRunning = false
            alert('Спасибо за использование нашего банкомата!')   

        default:
            alert('Введен неверный пункт меню')
    }

}