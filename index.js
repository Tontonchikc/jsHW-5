// Створіть змінну, що симулює вибір варіанта зі списку. Виводьте повідомлення залежно від обраного варіанта: "Кава", "Чай" або "Сік". Використайте switch


const drink = prompt("Оберіть бажаний напій").trim();

switch (drink) {
    case "кава":
        alert("Каву додано до кошику")
        break
    case "чай":
        alert("Чай додано до кошику")
        break
    case "сік":
        alert("Сік додано до кошику")
        break

    default:
        alert("Нажаль цього товару нема в асортименті :(")
}


const day = prompt("Введіть день тижня").toLowerCase().trim();

switch (day) {
    case "понеділок":
    case "вівторок":
    case "середа":
    case "четвер":
    case "пʼятниця":
        alert("Це робочий день");
        break;

    case "субота":
    case "неділя":
        alert("Це вихідний день");
        break;

    default:
        alert("Невірно введений день");
}



const month = Number(prompt("Введіть номер місяця (1-12)"));

switch (month) {
    case 12:
    case 1:
    case 2:
        alert("Зима");
        break;

    case 3:
    case 4:
    case 5:
        alert("Весна");
        break;

    case 6:
    case 7:
    case 8:
        alert("Літо");
        break;

    case 9:
    case 10:
    case 11:
        alert("Осінь");
        break;

    default:
        alert("Невірний номер місяця");
}



const color = prompt("Введіть колір").toLowerCase().trim();

switch (color) {
    case "червоний":
        alert("Стоп");
        break;

    case "зелений":
        alert("Йти");
        break;

    case "жовтий":
        alert("Чекати");
        break;

    default:
        alert("Невідомий колір");
}



const num1 = Number(prompt("Введіть перше число"));
const num2 = Number(prompt("Введіть друге число"));
const operator = prompt("Введіть оператор (+, -, *, /)");

switch (operator) {
    case "+":
        alert("Результат: " + (num1 + num2));
        break;

    case "-":
        alert("Результат: " + (num1 - num2));
        break;

    case "*":
        alert("Результат: " + (num1 * num2));
        break;

    case "/":
        if (num2 === 0) {
            alert("Помилка! Ділення на нуль неможливе.");
        } else {
            alert("Результат: " + (num1 / num2));
        }
        break;

    default:
        alert("Невірний оператор");
}


