/** TYPEOF */

// let username;
// console.log(typeof username);

// let inputValue = null;
// console.log(typeof inputValue);

// const quantity = 17;
// console.log(typeof quantity);

// const message = "JavaScript is awesom!";
// console.log(typeof message);

// const isSidebarOpen = false;
// console.log(typeof isSidebarOpen);

/** getting data */

// const message = "JavaScript is awesom!";
// console.log(message);

// const username = "Mango";
// console.log("User name is", username);

// const message = "JavaScipt is awesom!";
// alert(message);

/**Просимо клієнта підтвердити бронювання готелю
 * і зберігаємо результат роботи confirm у змінну
 */
// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);

/**
 * Запитуємо назву готеля, в якому хотів би зупинитися клієнт
 * і заберігаємо результат виклику prompt у змінну
 */
// const hotelName = prompt("Please enter desired hotel name");
// console.log(hotelName);


/**
 * Важлив аособливість prompt полягаэ в тому зо незалежно від того що
 * ввів користувач, завжди повернется рядок.
 * Тобто, якщо користувач ввів 5, то поверенться не  чило 5, а рядок "5".
 */
// const value = prompt("Please enter a number!");
// console.log(typeof value);
// console.log(value);

/**
 * Математичні оператори
 */
// const x = 10;
// const y = 5;

// //Додавання
// console.log(x + y);
// //Віднімання
// console.log(x - y);
// //Множення
// console.log(x * y);
// //Ділення
// console.log(x / y);
// //Остача від ділення
// console.log(x % y);

// // Додавання із заміною (також є для всіх інших операторів)
// let value = 5;
// //Аналогічно запису value = value + 10
// value += 10;
// console.log(value);

//Важливо запам'ятати терміни складових виразу. + - * / % називаються
// Оператори, а те на чому вони застосовуються - операнди

/**
 * Оператори порівняння
 * Використовуються для порівняння двох значень. Результатом свого виконання повертають буль - true або false, тобто «так» або «ні».

a > b і a < b - більше/менше
a >= b і a <= b - більше/менше або дорівнює
a == b - рівність
a != b - нерівність
a === b - строга рівність
a !== b - строга нерівність
 */

// const x = 5;
// const y = 10;
// const z = 5;

// console.log("x > y:", x > y);
// console.log("x < y:", x < y);
// console.log("x < z:", x < z);
// console.log("x <= z:", x <= z);
// console.log("x === y:", x === y);
// console.log("x === z:", x === z);
// console.log("x !== y:", x !== y);
// console.log("x !== z:", x !== z);

/**
 * «Нестрогі» оператори рівності == і != виконують перетворення типів 
 * порівнюваних значень у число, що може призвести до помилок,
 * особливо у початківців.

// ❌ Погано, виконується приведення типів
console.log(5 == "5"); // true
console.log(5 != "5"); // false
console.log(1 == true); // true
console.log(1 != true); // false

Тому для перевірки рівності або нерівності двох значень,
використовуються тільки оператори 
=== (строга рівність) і 
!== (строга нерівність),
які не виконують приведення типів операндів.

// ✅ Добре, приведення типів не виконується
console.log(5 === "5"); // false
console.log(5 === 5); // true
console.log(5 !== "5"); // true
console.log(5 !== 5); // false
console.log(1 === true); // false
console.log(1 !== true); // true
 */

/**
Приведення до числа
Більшість арифметичних операцій і математичних функцій 
перетворюють значення у число автоматично. 
Для того, щоб зробити це явно, використовуйте функцію Number(val), 
передаючи їй у val те, що потрібно привести до числа.

Якщо значення привести до числа неможливо, результатом 
буде спеціальне числове значення NaN (Not a Number).
Аналогічним чином відбувається перетворення і
в інших математичних операторах і функціях.
 */

// const valueA = "5";
// console.log(Number(valueA)); //5
// console.log(typeof Number(valueA)); // "number"

// const valueB = "random string";
// console.log(Number(valueB)); // NaN
// console.log(typeof Number(valueB)); // "number"

/* Методи Number.parseInt() і Number.parseFloat()
Перетворюють рядок символ за символом, доки це можливо. 
У разі виникнення помилки повертається підсумкове число.
*/

// Метод Number.parseInt() парсить з рядка ціле число.
// console.log(Number.parseInt("5px")); //5
// console.log(Number.parseInt("12qwe74")); //12
// console.log(Number.parseInt("12.46qwe79")); // 12
// console.log(Number.parseInt("qweqwe")); // NaN

// // Метод Number.parseFloat() парсить з рядка дробове число.
// console.log(Number.parseFloat("5px")); // 5
// console.log(Number.parseFloat("12qwe74")); // 12
// console.log(Number.parseFloat("12.46qwe79")); // 12.46
// console.log(Number.parseFloat("qweqwe")); // NaN

/* Перевірка на число
Для перевірки на число можна використовувати метод Number.isNaN(val).
Він перевіряє, чи вказане значення є NaN. Метод відповідає на запитання
"Це Not A Number?" і повертає:

true - якщо значення val - NaN
false - якщо значення val - не NaN

Для всіх значень val, крім NaN, при передачі в
Number.isNaN(val) поверне false. Цей метод не намагається
перетворити val в число, а просто виконує перевірку на NaN. */

// const validNumber = Number("51"); // 51
// console.log(Number.isNaN(validNumber)); // false

// const invalidNumber = Number("qweqwe"); // NaN
// console.log(Number.isNaN(invalidNumber)); // true

/* Додавання чисел з рухомою крапкою (комою)
Додаючи нецілі числа, в JavaScript і в інших мовах програмування 
є особливість. Якщо коротко, то 0.1 + 0.2 не дорівнює 0.3, 
результат додавання буде більший, ніж 0.3. 
Це тому що машина рахує у двійковій системі.

Число 0.1 у двійковій системі числення - це нескінченний дріб, 
оскільки у двійковій системі одиниця не ділиться на десять. 
Двійкове значення нескінченних дробів зберігається тільки 
до певного знаку, тому виникає неточність. 
При додаванні 0.1 і 0.2, додаються дві неточності, 
виходить незначна, але все-таки помилка в обчисленнях. */

// console.log(0.1 + 0.2 === 0.3); // false
// console.log(0.1 + 0.2); //0.30000000000000004


/* Звичайно, це не значить, що точні обчислення для таких чисел неможливі.
 Існує декілька методів вирішення цієї проблеми.

Можна зробити їх цілими, помноживши на N, додати,
а потім результат поділити також на N. */

// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log((0.17 * 100 + 0.24 * 100) / 100); // 0.41

/* Ще один спосіб - додати, а результат скоротити до певного знаку
після коми за допомогою методу toFixed(). */

// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log((0.17 + 0.24).toFixed(2)); // 0.41

/* Клас Math
Один із вбудованих класів, який надає набір методів для роботи з числами.
Знання всіх методів напам'ять не вимагається, тільки деяких, 
найбільш корисних. */

// // Math.floor(num) - повертає найменше ціле число,
// // менше, або яке дорівнює зазначеному числу
// console.log(Math.floor(1.7)); // 1

// // Math.ceil(num) - повертає найбільше ціле число,
// // більше, або яке дорівнює зазначеному числу.
// console.log(Math.ceil(1.2)); // 2

// // Math.round(num) - повертає значення числа,
// // округленого до найближчого цілого
// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2

// // Math.max(num1, num2, ...) - повертає найбільше ціле число з набору
// console.log(Math.max(20, 10, 50, 40)); // 50

// // Math.min(num1, num2, ...) - повертає найменше ціле число з набору
// console.log(Math.min(20, 10, 50, 40)); // 10

// // Math.pow(base, exponent) - піднесення до степеня
// console.log(Math.pow(2, 4)); // 16

// // Math.random() - повертає псевдовипадкове число в діапазоні [0, 1)
// console.log(Math.random()); // випадкове число між 0 і 1
// console.log(Math.random() * (10 - 1) + 1); // псевдовипадкове число від 1 до 10

/* Рядки
Рядок - це індексований набір з нуля або більше символів,
взятих в одинарні або подвійні лапки. */

// const username = "Mango";

/* Важливо пам'ятати, що індексація елементів рядка починається з нуля.
Наприклад, в рядку "JavaScript"
літера "J" стоїть на позиції з індексом 0, а "t" - під індексом 9. 

Вміст рядка не можна змінити, лише прочитати.
Тобто, не можна взяти будь-який символ і замінити його,
як тільки рядок створений - він такий назавжди.
Можна лише створити повністю новий рядок і присвоїти
у змінну замість старого.
*/

/* Конкатенація рядків
Якщо застосувати оператор + до рядка і будь-якого іншого типу даних,
результатом операції «додавання» буде рядок. Ця операція називається
конкатенація, або додавання рядків.

Під час конкатенації, будь-який тип даних приводиться до рядка
і зшивається з рядком, але є особливість - послідовність запису операндів.

Послідовність операцій має значення, перетворення типів відбувається
тільки в момент операції додавання з рядком, до цього моменту
діють звичні правила математики.
 */

// const message = "Mango" + "is" + "happy";
// console.log(message); // Mango is happy

/** Подивимось на рызний порядоку операндів */

// console.log(1 + "2"); // "12"
// console.log(1 + "2" + 4); // "124"
// console.log(1 + 2 + "4"); // "34"

/* В останньому прикладі відбулася математична операція додавання для
перших двох чисел 1 і 2, після чого число 3 було перетворено у рядок
"3" і зшито з рядком "4". */

/* Шаблонні рядки
Шаблонні рядки - це альтернатива конкатенації зі зручнішим синтаксисом.
Шаблонний рядок береться у зворотні (косі) лапки, замість подвійних або
одинарних, і може містити заповнювачі місця, які позначаються знаком
долара і фігурними дужками - ${вираз}. */

// // Використовуючи змінні, необхідно скласти рядок з підставленими значеннями
// const guestName = "Манго";
// const roomNumber = 207;
// const greeting =
//   "Welcome " + guestName + ", your room number is " + roomNumber + "!";
// console.log(greeting); // "Welcome Mango, your room number is 207!"

/** Складати рядки з підставленими значеннями, використовуючи конкатенацію,
- дуже незручно. 
На допомогу приходять шаблонні рядки та інтерполяція. */

// const guestName = "Манго";
// const roomNumber = 207;
// const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
// console.log(greeting); // "Welcome Mango, your room number is 207!"

/* Властивості і методи рядків
У кожного рядка є вбудовані властивості і методи, розглянемо деякі з них.

Властивість length
Для того, щоб дізнатися довжину рядка, тобто кількість його символів,
у всіх рядків є вбудована властивість length, значення якої можна
отримати, звернувшись до нього через крапку після імені змінної
або рядкового літерала. */

// const message = "Welcome to Bahamas!";
// console.log(message.length); // 19
// console.log("There is nothing impossible to him who will try".length); // 47

/* Методи toLowerCase() і toUpperCase()
Повертають новий рядок у відповідному регістрі,
не змінюючи оригінальний рядок. */

// const message = "Welcome to Bahamas!";
// console.log(message.toLowerCase()); // "welcome to bahamas!"
// console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
// console.log(message); // "Welcome to Bahamas!"

/* Бувають ситуації, коли всі символи в рядку необхідно перетворити
в один регістр, верхній або нижній. Наприклад, для пошуку за ключовим
словом, коли користувач вводить рядок 'saMsUng',
а порівняти його потрібно з рядком 'samsung' або 'SAMSUNG'. */

// console.log("saMsUng" === "samsung"); // false
// console.log("saMsUng" === "SAMSUNG"); // false

/* Щоб не вимагати абсолютно точне введення, можна зробити «нормалізацію»
 введеного користувачем рядка, тобто перетворити всі його символи
 у верхній або нижній регістр. Методи рядка toLowerCase()
 і toUpperCase() повернуть новий рядок у відповідному регістрі,
 не змінюючи оригінальний. */

// const BRAND_NAME = "SAMSUNG";
// const userInput = "saMsUng";
// const normalizedToUpperCaseInput = userInput.toUpperCase();

// console.log(userInput); // 'saMsUng'
// console.log(userInput === BRAND_NAME); // false
// console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
// console.log(normalizedToUpperCaseInput === BRAND_NAME); // true

/* Метод indexOf()
Повертає позицію (індекс), на якій знаходиться перший збіг підрядка
або -1, якщо нічого не знайдено. */

// const message = "Welcome to Bahamas";
// console.log(message.indexOf("to")); // 8
// console.log(message.indexOf("hello")); // -1


/* Метод includes()
Перевіряє, чи міститься підрядок в рядку, повертає буль - true,
якщо міститься, і false - в іншому випадку.
Регістр символів в рядку і підрядку має значення, оскільки, наприклад,
літера "a" не дорівнює літері "А". */

// const productName = "Ремонтний дроїд";

// console.log(productName.includes("н")); // true
// console.log(productName.includes("Н")); // false
// console.log(productName.includes("дроїд")); // true
// console.log(productName.includes("Дроїд")); // false
// console.log(productName.includes("Ремонтний")); // true
// console.log(productName.includes("ремонтний")); // false


/* Метод endsWith()
Дозволяє визначити, чи завершується рядок символами(підрядком),
зазначеними в дужках, повертаючи true або false. */

// const jsFileName = "script.js";
// console.log(jsFileName.endsWith(".js")); // true

// const cssFileName = "styles.css";
// console.log(cssFileName.endsWith(".js")); // false

/* Методи replace() і replaceAll()
Повертає новий рядок, в якому перше(replace) або усі збіги(replaceAll)
підрядка замінені на вказане значення. */

// const jsFileName = "script.js";
// const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
// console.log(minifiedJsFileName); // "script.min.js"

// const cssFileNames = "styles.css, about.css, portfolio.css";
// const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
// console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"


/* Метод slice()
Метод рядків slice (startIndex, endIndex) використовується для створення
копії частини або всього рядка. Він робить копію елементів рядка
від startIndex і до, але не включно endIndex і повертає новий рядок,
не змінюючи оригінал. */

// const productName = "Repair droid";
// console.log(productName.slice(0, 4)); // "Repa"
// console.log(productName.slice(3, 9)); // "air dr"
// console.log(productName.slice(0, productName.length)); // "Repair droid"
// console.log(productName.slice(7, productName.length)); // "droid"

/* Логічні оператори
Логічні оператори використовуються для перевірки умов з багатьма виразами,
наприклад в операціях порівняння.

Приведення типів
У логічних операціях здійснюється приведення типів операндів
до true або false. Приведення відбувається, якщо в коді виявлений
логічний оператор.

Truthy і Falsy - терміни, які використовуються для тих значень,
які в логічній операції приводяться до true або false, хоча спочатку
не були булями.

Запам'ятайте 6 хибних (falsy) значень, що приводяться до false у
логічному перетворенні: 0, NaN, null, undefined, порожній рядок
і false. Абсолютно все інше приводиться до true.

Логічні оператори
Існує три логічні оператори, які використовуються для перевірки
виконання множинних виразів. */

/* Логічне «І»
Оператор && приводить всі операнди до буля і повертає значення одного
з них. Лівий операнд - якщо його можна привести до false, і правий -
в інших випадках.

вираз && вираз

У наступному прикладі обидві умови повернуть true, тому результатом
всього виразу буде true - повернеться значення правого операнда.
*/

// const age = 20;
// console.log(age > 10 && age < 30); // true && true -> true

/* Якщо хоча б один із операндів буде приведений до false, результатом
виразу буде його значення.*/

// const age = 50;
// console.log(age > 10 && age < 30); // true && false -> false
// console.log(age > 80 && age < 120); // false && true -> false

/* Тобто, логічне «І» зупиняється на хибному і повертає те,
на чому зупинилось, або останній операнд.*/

// console.log(1 && 5); // true && true -> 5
// console.log(5 && 1); // true && true -> 1
// console.log(0 && 2); // false && true -> 0
// console.log(2 && 0); // true && false -> 0
// console.log("" && "Mango"); // false && true -> ""
// console.log("Mango" && ""); // true && false -> ""
// console.log("Mango" && "Poly"); // true && true -> "Poly"
// console.log("Poly" && "Mango"); // true && true -> "Mango"


/* Виконуючи логічне «І», правий операнд може не обчислюватися у випадку,
 якщо лівий був приведений до false.*/

/* Логічне «АБО»
Оператор || приводить всі операнди до буля і повертає значення одного з
них. Лівий операнд - якщо його можна привести до true, і правий -
в інших випадках.

вираз || вираз */

/* У наступному прикладі умова зліва поверне true, тому результатом 
всього виразу буде true - повернеться значення першого операнда,
яке було приведене до true. */

// const age = 5;
// console.log(age < 10 || age > 30); // true || false -> true

/* В цьому випадку результатом теж буде true, оскільки хоча б один
із операндів, в цьому випадку правий, був приведений до true.*/

// const age = 40;
// console.log(age < 10 || age > 30); // false || true -> true

/* А тут жодна з умов не виконується, тому отримуємо
false - значення останнього операнда.*/

// const age = 20;
// console.log(age < 10 || age > 30); // false || false -> false

/* Тобто, логічне «АБО» зупиняється на правді і повертає те,
на чому зупинилося або останній операнд. */

// console.log(true || false); // true
// console.log(false || true); // true
// console.log(true || true); // true

// console.log(3 || false); // 3
// console.log(false || 3); // 3
// console.log(3 || true); // 3
// console.log(true || 3); // true

/* Виконуючи логічне «АБО», правий операнд може не обчислюватися у
випадку, якщо лівий був приведений до true. */

/* Логічне «НЕ»
Всі оператори, які ми розглядали до цього, були бінарними - містять два
операнди: лівий і правий. Логічне «НЕ» - це унарний оператор,
який виконує операцію над одним операндом з правої сторони.

!вираз

Оператор ! приводить операнд до буля, якщо необхідно,
а потім робить інверсію - змінює його на протилежний
true -> false або false -> true.
 */

// console.log(!true); // false
// console.log(!false); // true
// console.log(!3); // !3 -> !true -> false
// console.log(!"Mango"); // !"Mango" -> !true -> false
// console.log(!0); // !0 -> !false -> true
// console.log(!""); // !"" -> !false -> true

// const isOnline = true;
// const isNotOnline = !isOnline; // !isOnline -> !true -> false

// Task - 1

// Виконавши математичні операції та застосувавши шаблоні рядки виведи 
// в консоль кількість та загальну вартість за кожен продукт.

// const apple = '🍎';

// const appleQuantity = 8;

// const applePrice = 34;

// const appleMessage = `${apple} quantity: ${appleQuantity}. Total price: ${appleQuantity * applePrice}`;
// console.log(appleMessage);


// const cherry = '🍒';

// const cherryQuantity = 3;

// const cherryPrice = 72;

// const cherryMessage = `${cherry} quantity: ${}`;

// console.log(cherryMessage);


// Task - 2

// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) 
// в рядок у форматі годин та хвилин HH:MM.

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01

// const totalMinutes = 70;

// const hours = Math.floor(totalMinutes / 60)
// const minutes = totalMinutes % 60;


// const doubleDigitalHours = String(hours).padStart(2, 0)
// const doubleDigitalMinutes = String(minutes).padStart(2, 0)

// const result = `${doubleDigitalHours}:${doubleDigitalMinutes}`
// console.log(result);


// Task - 3

// Виконай рефакторинг коду щоб уникнути помилок

// const name = 'Harry'
// const message = `Hello my name is ${name}`
// console.log(message);

// const delivery = 25;
// const price = 190;
// const message = `Total purchase, price ${delivery  + price}`;
// console.log(message);


// Task - 4
// Виконай рефакторинг коду так, щоб у змінну value присвоювалося 
// значення змінної 
// incomingValue, якщо воно не рівне undefined або null. 
// В іншому випадку має присвоюватися значення defaultValue. 
// Перевір роботу скрипта для наступних значень 
// змінної incomingValue: null, undefined, 0. 
// Використовуй оператор ?? (nullish coalescing operator).

// const incomingValue = false;
// const defaultValue = 10;
// const value = incomingValue ?? defaultValue;
// console.log(value);


/* Home work */
// const productName = "Droid";
// const pricePerItem = 2000;
// console.log(productName, pricePerItem);

/* Розгалуження
Розгалуження використовуються для виконання різноманітного коду,
залежно від умови. Принцип роботи простий - результат умови приводиться
до буля true або false, після чого потік програми спрямовується
в ту або іншу гілку.

Інструкція if 

if (умова) {
    //тіло if
}

Вхідні дані, які приводяться до буля, називаються умовою.
Умова ставиться після оператора if в круглих дужках.
Якщо умова приводиться до true, то виконується код у фігурних дужках
тіла if.
*/

// let cost = 0;
// const subscription = "pro";
// if (subscription === "pro") {
//     cost = 100;
// }

// console.log(cost); // 100

/** Якщо умова приводиться до false, код у фігурних дужках
 * буде пропущений.
 */
// let cost = 0;
// const subscription = "free";

// if (subscription === "pro") {
//     cost = 100;
// }

// console.log(cost); // 0

/* Інструкція if...else 

if (умова){
    //тіло if
} else {
    //тіло else
}
Розширює синтаксис if таким чином, що якщо умова приводиться до false,
виконається код у фігурних дужках після оператора else
*/

// let cost;
// const subscription = "free";
// if (subscription === "pro") {
//     cost = 100;
// } else {
//     cost = 0;
// }

// console.log(cost); //0

/* Розширює синтаксис if таким чином, що якщо умова приводиться до false,
виконається код у фігурних дужках після оператора else */

// let cost;
// const subscription = "pro";

// if (subscription === "pro") {
//     cost = 100;
// } else {
//     cost = 0;
// }

// console.log(cost); // 100

/** Інструкція else...if 
Конструкція if...else може перевірити і зреагувати на виконання
або невиконання лише однієї умови.

Блок else...if дозволяє додати після else ще один оператор if з умовою.
В кінці ланцюжка може бути класичний блок else, який виконається лише
у тому випадку, якщо жодна умова не приведеться до true.
*/

// let cost;
// const subscription = "premium";

// if (subscription === "fre") {
//     cost = 0;
// } else if (subscription === "pro") {
//     cost = 100;
// } else if (subscription === "premium") {
//     cost = 500;
// } else {
//     console.log("Invalid subsctiption type");
// }

// console.log(cost); // 500

/* При першому true перевірки припиняться і виконається лише один 
сценарій, який відповідає цьому true. Тому, такий запис варто читати як:
шукаю перший збіг умови, ігнорую все інше.
*/

/* Тернарний оператор
Тернарний оператор використовується у якості синтаксично коротшої заміни
інструкції if...else, коли одній і тій самій змінній необхідно присвоїти
різні значення за умовою.

<умова> ? <вираз_якщо_умова_правдива> : <вираз_якщо_умова_хибна>

Працює за наступною схемою:

Обчислюється умова.
Якщо умова правдива, тобто приводиться до true,
обчислюється вираз після ?.
Якщо умова хибна, тобто приводиться до false,
обчислюється вираз після :.
Значення обчисленого виразу повертається у якості результат
роботи тернарного оператора. 
*/

// let type;
// const age = 20;

// if (age >= 18) {
//     type = "adult";
// } else {
//     type = "child";
// }

// console.log(type); // "adult"

// Виконаємо рефакторинг, замінивши if...else на тернарний оператор.

// const age = 20;
// const type = age >= 18 ? "adult" : "child";
// console.log(type); // "adult"

//Запишемо операцію пошуку більшого числа.

// const num1 = 5;
// const num2 = 10;
// let biggerNumber;

// if (num1 > num2) {
//     biggerNumber = num1;
// } else {
//     biggerNumber = num2;
// }

// console.log(biggerNumber); // 10

/* Код працює правильно, отримуємо більше число з двох, але це рішення
здається занадто громіздким, враховуючи, наскільки проста проблема.
Використовуємо тернарний оператор. */

// const num1 = 5;
// const num2 = 10;
// const biggerNumber = num1 > num2 ? num1 : num2;

// console.log(biggerNumber); // 10

/* Тернарний оператор повинен використовуватися у простих операціях
присвоєння або повернення. Його використання для опису складних
розгалужень - погана практика (антипатерн). */

/* Інструкція switch
У деяких випадках незручність читання складних розгалужень
if...else можна уникнути, використовуючи «плоскіший»
синтаксис інструкції розгалуження switch.

Межі застосування switch обмежені задачами з одним загальним
запитанням (що порівнювати) і рядом варіантів відповідей
(з чим порівнювати). 

Його синтаксис складається із блоку switch(значення) - що потрібно
порівняти і набору окремих випадків case значення - з чим потрібно
порівняти. Для порівняння використовується оператор
строгої рівності ===. Тобто, не можна порівняти більше або менше,
лише рівність.

switch (значення) {
    case значення:
        інструкція;
        break;
    case значення:
        інструкція;
        break;
    default:
        інструкція;
}
   
Значення в блоці switch(значення) - рядок або число, яке порівнюється
щодо строгої рівності з усіма значеннями в блоках case значення
по черзі, зверху вниз.

Оператор break в кінці кожного блоку case необхідний, щоб перервати
подальші перевірки і одразу перейти до коду за switch у тому випадку,
коли перевірка рівності повернула true.

Якщо жодного збігу значень не відбулося, необхідно виконати код за
замовчуванням, як і в блоці else для інструкції if...else. Для цього,
після усіх блоків case додається блок default. Оператор break після
блоку default не потрібен, тому що це вже остання операція, яка буде
виконана в switch і управління буде передано коду після нього.
*/

// let cost;
// const subscription = "premium";

// switch (subscription) {
//     case "free":
//         cost = 0;
//         break;
//     case "pro":
//         cost = 100;
//         break;
//     case "premium":
//         cost = 500;
//         break;
//     default:
//         console.log("Invalid subscription type");
// }
//
// console.loge(cost); // 500

/* Якщо оператор break відсутній, то після того як виконається будь-яка
умова case, усі наступні за ним блоки коду будуть виконуватися один за
одним, що може призвести до небажаних наслідків у випадку неправильного
застосування. */

/* Область видимості
Область видимості змінних (variable scope) - доступність змінних в
певному місці коду.

Глобальна область видимості використовується за замовчуванням.
Кожен має доступ до змінних, оголошених в ній. Наприклад, змінна
value оголошена у глобальній області видимості, тобто поза будь-яким
блоком, і доступна в будь-якому місці після оголошення. */

// const value = 5;
// if (true) {
//     console.log("Block scope: ", value); // 5
// }

// console.log("Global scope: ", value); // 5

/* Будь-яка конструкція, яка використовує фігурні дужки {}
(умови, цикли, функції тощо), створює нову локальну область видимості,
і змінні, оголошені в цій області видимості, з використанням
let або const, - недоступні за межами цього блоку. */

// if (true) {
//     const value = 5;
//     console.log("Block scope: ", value) //5
// }

// console.log("Global scope: ", value) // ReferenceError: value is bot defined

/* Глибина вкладеності областей видимості - необмежена,
і всі вони будуть працювати за одним принципом - область
видимості має доступ до всіх змінних, оголошених вище по
ієрархії вкладеності, але не може отримати доступ до змінних,
оголошених у вкладених областях видимості.

Створимо декілька областей видимості і дамо їм імена для наочності. 

Глобальна область вже присутня, створимо в ній змінну global
Потім, використовуючи оператор if, створимо блочну область 
видимості block A
Всередині області видимості block A поставимо ще один оператор if,
який створить вкладену область видимості block B
На одному рівні з block A, створимо область видимості block C,
так само використовуючи оператор if
*/

// const global = "global";

// if (true) {
//   const blockA = "block A";

//   // Бачимо глобальну + локальну A
//   console.log(global); // 'global'
//   console.log(blockA); // block A

//   // Змінні blockB і blockC не знайдені в доступних областях видимості.
//   // Буде помилка звернення до змінної.
//   console.log(blockB); // ReferenceError: blockB is not defined
//   console.log(blockC); // ReferenceError: blockC is not defined

//   if (true) {
//     const blockB = "block B";

//     // Бачимо глобальну + зовнішню A + локальну B
//     console.log(global); // global
//     console.log(blockA); // block A
//     console.log(blockB); // block B

//     // Змінна blockC не знайдена в доступних областях видимості.
//     // Буде помилка звернення до змінної.
//     console.log(blockC); // ReferenceError: blockC is not defined
//   }
// }

// if (true) {
//   const blockC = "block C";

//   // Бачимо глобальну + локальну C
//   console.log(global); // global
//   console.log(blockC); // block C

//   // Змінні blockA і blockB не знайдені в доступних областях видимості.
//   // Буде помилка звернення до змінної.
//   console.log(blockA); // ReferenceError: blockA is not defined
//   console.log(blockB); // ReferenceError: blockB is not defined
// }

// // Бачимо лише глобальну
// console.log(global); // global

// // Змінні blockA, blockB і blockC не знайдені в доступних областях видимості.
// // Буде помилка звернення до змінної.
// console.log(blockA); // ReferenceError: blockA is not defined
// console.log(blockB); // ReferenceError: blockB is not defined
// console.log(blockC); // ReferenceError: blockC is not defined

/* Будьте уважні у разі використання блочних областей видимості і змінних,
 оголошених в них. Саме ця помилка, разом із неуважністю, часто стають
 головним болем для початківця. */

/* Цикли
Часте завдання програмування - багаторазове виконання однотипної дії. 
Наприклад, вивести клієнтів зі списку один за одним, або перебрати суми
зарплат, і для кожної виконати однаковий код. Саме для таких
цілей - багаторазового повторення однієї частини коду, використовуються
цикли.

Цикл - керуюча конструкція у високорівневих мовах програмування,
призначена для організації багаторазового виконання набору інструкцій.

Тіло циклу - послідовність інструкцій, призначена для багаторазового
виконання.

Ітерація - одноразове виконання тіла циклу.
Умова виходу - вираз, що визначає, чи буде в черговий раз виконуватися 
ітерація, або цикл завершиться.

Лічильник - змінна, що зберігає поточний номер ітерації. Цикл не
обов'язково містить лічильник, і він не повинен бути один, умова виходу
з циклу може залежати від декількох змінних, що змінюються в циклі.

Цикл while

Цикл з передумовою — цикл, який виконується, доки правдива якась умова,
зазначена до його початку. Ця умова перевіряється до виконання тіла циклу,
тому тіло може не виконатися жодного разу, якщо умова від самого початку - хибна.

while (condition) {
  // код, тіло циклу (statement)
}

Конструкція while створює цикл, який виконує блок коду, доки умова 
перевірки оцінюється як true.

condition, тобто умова, оцінюється перед кожною ітерацією циклу.
Якщо condition оцінюється як true, оператор while виконує statement.
Якщо condition оцінюється як false, виконання циклу переривається і
скрипт продовжує виконувати інструкції після циклу while. */

/* Створимо лічильник. */

// let counter = 0;

// while (counter < 10) {
//     console.log("conunter: ", counter);
//     counter += 1;
// }
// console.log(counter);


/* Будемо заповнювати місця в готелі доти, доки поточна кількість
клієнтів не буде дорівнювати максимально можливій. */

// let clientCounter = 18;
// const maxClients = 25;
// while (clientCounter < maxClients) {
//     console.log(clientCounter);
//     clientCounter += 1;
// }

/* Цикл do...while

Цикл з постумовою - цикл, в якому умова перевіряється після виконання
тіла циклу. З цього випливає, що тіло завжди виконується хоча б один раз.

do {
  // statement
} while (condition);

Конструкція do...while створює цикл, який виконує блок коду доти, доки
condition не поверне false.

На відміну від циклу while, цикл do...while завжди виконує statement
мінімум один раз, перш ніж він оцінить condition.

Всередині циклу потрібно внести зміни в деяку змінну, щоб переконатися,
що вираз дорівнює false після ітерацій. Інакше буде нескінченний цикл. */

// let password = "";

// do {
//     password = prompt("Ввудіть пароль довший 4х символів", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);

/* Цикл for

Цикл з лічильником - цикл, в якому певна змінна змінює своє значення 
із заданого початкового до кінцевого значення з деяким кроком, і для
кожного значення цієї змінної тіло циклу виконується один раз.

В більшості процедурних мов програмування реалізується конструкцією for,
в якій зазначається лічильник, необхідна кількість ітерацій і крок, з
яким змінюється лічильник.

for (initialization; condition; post-expression) {
  // statements
}

Алгоритм виконання циклу for:

Ініціалізація (initialization) - виконується один раз до початку циклу.
Використовується для створення змінної-лічильника і зазначення її
початкового значення.

Умова (condition) - вираз, що оцінюється перед кожною
ітерацією (повторенням) циклу. Тіло циклу виконується тільки тоді,
коли вираз приводиться до true. Цикл завершується, якщо значення буде
false.

Тіло (statements) - набір інструкцій для виконання на кожному повторенні.
Виконується, якщо вираз умови приводиться до true.

Пост-вираз (post-expression) - виконується в кінці кожного повторення
циклу, до перевірки умови. Використовується для оновлення
змінної-лічильника.
Змінні-лічильники, за традицією, називаються літерами i, j і k. */

// for (let i = 0; i <= 20; i += 5){
//     console.log(i);
// }

/* У прикладі оголошується змінна-лічильник i, ініціалізується значенням 0 і цикл виконується доти, доки i <= 20, тобто умова приводиться до true. Після кожної ітерації лічильник збільшується на 5.

Порахуємо суму чисел до певного значення. */

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1){
//     sum += i;
//     console.log(sum);
// }
// console.log(sum);

/* Згадаємо про операцію a % b і виведемо остачу від ділення за
допомогою циклу. */

// const max = 10;
// for (let i = 0; i < max; i += 1){
//     console.log(`${max} % ${i} = `, max % i);
// }

/* Оператор break

Перервати виконання циклу можна в будь-який момент. Для цього існує оператор break, який повністю припиняє виконання циклу і передає управління на рядок після його тіла.

Знайдемо число 3. Щойно виконається умова if, цикл припинить своє виконання (буде перерваний). */

// for (let i = 0; i <= 5; i += 1){
//     console.log(i);
//     if (i === 3) {
//         console.log("Знайшли чилсло 3, преривання цилку");
//         break;
//     }
// }

/* Оператор continue
Перериває не увесь цикл, а тільки виконання поточної ітерації. Його використовують, якщо зрозуміло, що на поточній ітерації циклу більше немає що робити або взагалі не потрібно нічого робити, і час переходити до наступної ітерації.

Використовуємо цикл для введення тільки непарних чисел. Для парних i спрацьовує continue, виконання тіла припиняється і управління передається до наступної ітерації. */

// const number = 10;

// for (let i = 0; i < number; i += 1){
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log("Непарне i: ", i); // 1, 3, 5, 7, 9
// }

// Task - 1
// Потрібно створити світлофор використовуючи конструкцію switch
// В propmt() юзер вводить колір який він бачить на світлофорі
// В результаті виконання юзер має отримати повідомлення з дією яку 
// має виконати


// Можливі 4 стани світлофора
// 1 - red, action stop
// 2 - yellow, action ready
// 3 - green, action go
// 4 - Будь-який інший колір або значення відповідно світлофор не працює, action be careful

// let userInput = prompt("color?")?.toLocaleLowerCase();
// let action;

// switch (userInput) {
//   case "red":
//     action = "action stop";
//     break;
//   case "yellow":
//     action = "action ready";
//     break;
//   case "green":
//     action = "action go";
//     break;
//   default:
//     action = "action be careful";
//     break;
// }

// console.log(action);

// Task - 2
// Потрібно створити застосунок для автоматизації перевірки 
// правильних відповідей на дитячі загадки
// Створи функцію яка буде приймати 2 параметри
// 1 параметр це текст загадки
// 2 вірна відповідь

// Після виклику функції користувач має побачити питання на екрані 
// та поле для вводу відповіді, використовуй propmt()
// Функція має повертати булеве значення з результатом відповіді (true/false)

//Тестові дані
// Хоч не літак, а крилатий,
// Без крил не може працювати.
// (Вітряк)


// Через воду він проводить,
// А сам з місця вік не сходить.
// (Міст)

// function check(text, answer){
//   let userInput = prompt(text) ? prompt(text).toLocaleLowerCase() : console.log("Відміна юзером");
//   return userInput === answer;
// }
// console.log(check("Хоч не літак, а крилатий, Без крил не може працювати.", "вітряк"));
// console.log(check("Через воду він проводить, а сам з місця вік не сходить.","міст"))


// Task - 3
// Потрібно створити функцію яка буде рахувати за скільки днів 
// Равлик зможе виповзти з колодязя
// функція приймає 1 параметр глибину колодязя, функція повертає кількість 
// днів 
// яку равлик витратив на шлях.
// за день Равлик проповзає на 7 м в гору, а за ніч опускається на 2 м в низ
// для вирішення завдання використовуй цикл while

// 42 м, виповзе за 8 днів
// 17 м, виповзе за 3 дні
// 18 м, виповзе за 4 дні

// function getDays(value){
//   const daySpeed = 7;
//   const nightSpeed = 2;
//   let total = 0;
//   let days = 0;

//   while(total < value) {
//     total += daySpeed;
//     days++;

//     if(total < value){
//       total -= nightSpeed;
//     }
//   }
//   return days;
// }

// console.log(getDays(42)); // 8
// console.log(getDays(17)); // 3
// console.log(getDays(18)); // 4

// Task - 4
// Порахуй скільки голосних літер у реченні.

// function vowelCount(str){
//   const vowelArr = ["a","e","y","u","i","o"];
//   let counter = 0;
  
//   for(let i = 0; i<str.length; i++){
//     if(vowelArr.includes(str[i].toLowerCase())){
//       counter++
//     }
//   }
  
//   return counter;
// }

// function vowelCount(str) {
//   const regex = /[aeiou]/gi;
//   const matches = str.match(regex);
//   return matches ? matches.length : 0;
// }



// console.log(vowelCount("Hello world!"));
// console.log(vowelCount("Junior Web Developer"));
// console.log(vowelCount("HELLO WORLD"));