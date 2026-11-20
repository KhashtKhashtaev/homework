/*const number = 15;

if (number % 2 === 0) {
    console.log(`четное число`);
} else {
    console.log(`нечетное число`);
}


const age = +prompt(`Введите ваш возраст`, 0);

const discount = !isNaN(age) ? (age <= 18 && age > 0 ? 10 : (age >= 18 && age <= 65 ? 20 : (age > 65 ? 30 : 0))) : "Что-то пошло не так";

console.log(discount);



switch (true) {
    case isNaN(age):
        console.log("Что-то пошло не так");
        break;
    case age <= 0:
        console.log(0);
        break;
    case age < 18 && age > 0:
        console.log(10);
        break;
    case age >= 18 && age <= 65:
        console.log(20);
        break;
    case age > 65:
        console.log(30);
        break;
}
*/


const userName = prompt("Введите свое Имя")
const password = +prompt("Введите свой пароль", 0)

switch (true) {
    case (userName === "admin" || userName === "user") && password === 123456:
    console.log("Доступ разрешен");
    break;
    default:
        console.log("Доступ запрешен")
}


