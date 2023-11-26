// 1
let celsiusTemperature = 25;
let fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
console.log(`Температура в Цельсіях: ${celsiusTemperature}°C`);
console.log(`Температура в Фаренгейтах: ${fahrenheitTemperature}°F`);

// 2
let daysInMonth = 30;
let hoursInMonth = daysInMonth * 24;
let minutesInMonth = hoursInMonth * 60;
console.log(`Кількість годин у місяці: ${hoursInMonth} год.`);
console.log(`Кількість хвилин у місяці: ${minutesInMonth} хв.`);

// 3
let healthLevel = 100;
let energyLevel = 100;
healthLevel -= 40;
energyLevel -= 15;
console.log(`Рівень здоров'я після віднімання: ${healthLevel}`);
console.log(`Рівень енергії після віднімання: ${energyLevel}`);

// 4
let purchaseAmount = 100;
let discountedAmount = purchaseAmount * 0.9;
console.log(`Сума покупки зі знижкою: ${discountedAmount} грн`);

// 5
let floatingNumber = 6.45;
let roundedNumber = Math.floor(floatingNumber);
console.log(`Округлене число: ${roundedNumber}`);

// 6
let stringFloat = "6.45";
let parsedFloat = parseFloat(stringFloat);
console.log(`Перетворене число: ${parsedFloat}`);

// 7
let stringInteger = "6.45";
let parsedInteger = parseInt(stringInteger);
console.log(`Перетворене ціле число: ${parsedInteger}`);

// 8
let numberToSquareRoot = 64;
let squareRootResult = Math.sqrt(numberToSquareRoot);
console.log(`Квадратний корінь числа: ${squareRootResult}`);

// 9
let integerNumber = 25;
let stringNumber = integerNumber.toString();
console.log(`Ціле число як рядок: ${stringNumber}`);