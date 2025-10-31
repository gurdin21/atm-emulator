'use strict';

let balance = 10000;

while (true) {
    
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
    }
}