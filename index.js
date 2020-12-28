// Таски на циклы. 

// 1) Вывод чисел от 25 до 0 (порядок уменьшения)

for(let i=25; i>= 0; i--) {
  console.log(i);
}

let count = 25;

while(count >= 0) {
  console.log(count--);
}


count = 25;

do {
  console.log(count--);
} while(count >=0)

// 2) Вывод чисел от 10 до 50, которые кратны 5

let number =10;
while(number <=50) {
  if(number % 5 === 0) {
    console.log(number);
  }
  number++;
}

let number1 = 10;

do {
  if(number1 % 5 === 0){
    console.log(number1);
  }
  number1++;
} while(number1 <=50);


for (let i =10; i <= 50; i++) {
  if(i % 5 === 0) {
    console.log(i);
  }
}

// 3)  Найти сумму чисел в пределах от 1 до 100.

let sum = 0;
for (i = 1; i <= 100; i++) {
  sum += i;
}

console.log(sum);
sum = 0;
let counter =0;

while (counter <= 100) {
  sum += counter;
  counter++;
}

console.log(sum);
sum = 0;
counter =0;

do {
  sum += counter;
  counter++;
} while(counter <= 100)

console.log(sum);

// 4) предлагать пользователю решить пример (2 + 2 * 2) до тех пор, пока он его не решит



while (true) {
  const answer = +prompt('Решите (2 + 2 * 2) while');

  if(answer === 6) {
    break;
  }
}

let notSolved = true;

do {
  const answer = +prompt('Решите (2 + 2 * 2) do while');
  if(answer === 6) {
    notSolved = false;
  }
} while (notSolved)

for (let i = 0; i <= 0; i--) {

  const answer = +prompt('Решите (2 + 2 * 2) for');

  if(answer === 6) {
    break;
  }
}

// 5)  Каждую задачу решить всеми тремя циклами!

// Можно сдать в виде скрина