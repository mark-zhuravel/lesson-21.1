/*
 ! Завдання: Реалізація Функції з Каруванням для Послідовного Додавання Трьох Чисел

 Створіть функцію `curriedAdd`, яка демонструє принцип карування в JavaScript. Функція повинна приймати три числові аргументи, кожен з яких передається послідовно, і повертати суму цих трьох чисел.

 Функція `curriedAdd` повинна працювати наступним чином:
 1. При першому виклику `curriedAdd` приймає перший аргумент `a` і повертає функцію, яка приймає другий аргумент.
 2. При другому виклику ця повернена функція приймає другий аргумент `b` і повертає ще одну функцію, яка приймає третій аргумент.
 3. При третьому виклику остання функція приймає третій аргумент `c` і повертає суму `a + b + c`.

 Очікуваний вивід:
 - При виклику `curriedAdd(1)(2)(3)` повинно повертатися `6`.

 Задача вимагає глибокого розуміння концепцій функцій вищого порядку та замикань в JavaScript.
*/

function curriedAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
};

// Перевірка

console.log(curriedAdd(1)(2)(3)); // 6

// Приклад використання

const addFirst = curriedAdd(1)
const addSecond = addFirst(2)
const result = addSecond(3) // Повинно повернути 6
console.log('Result:', result)

/*
 ? Ось як працює цей код:
 При першому виклику curriedAdd приймає перший аргумент a і повертає функцію, яка приймає другий аргумент.
 При другому виклику ця повернена функція приймає другий аргумент b і повертає ще одну функцію, яка приймає третій аргумент.
 При третьому виклику остання функція приймає третій аргумент c і повертає суму a + b + c.
*/








/*
 ! Завдання: Реалізація Функції з Каруванням для Побудови Повного Доменного Імені

 Створіть функцію `curriedDomain`, яка використовує принцип карування для побудови повного доменного імені. Функція повинна дозволяти послідовне встановлення компонентів доменного імені: протоколу, назви домену та домену верхнього рівня (TLD).

 Функція `curriedDomain` має працювати наступним чином:
 1. При першому виклику `curriedDomain` приймає протокол (`protocol`, наприклад, 'http' або 'https') і повертає функцію, яка приймає назву домену.
 2. При другому виклику ця повернена функція приймає назву домену (`domainName`, наприклад, 'example' або 'mywebsite') і повертає ще одну функцію, яка приймає домен верхнього рівня.
 3. При третьому виклику остання функція приймає домен верхнього рівня (`tld`, наприклад, 'com', 'org') і повертає повне доменне ім'я у форматі `protocol://domainName.tld`.

 Очікуваний вивід:
 - При виклику `curriedDomain('https')('example')('com')` повинно повертатися 'https://example.com'.

 Ця задача допоможе поглибити розуміння концепції карування та замикань у JavaScript, а також показує практичне застосування цих концепцій у реальних сценаріях програмування.
*/

function curriedDomain(protocol) {
  return function(domainName) {
    return function(tld) {
      return `${protocol}://${domainName}.${tld}`;
    };
  };
}

// Перевірка

console.log(curriedDomain('https')('example')('com')); // 'https://example.com'

// Приклад використання
const protocolSetter = curriedDomain('https')
const domainNameSetter = protocolSetter('example')
const fullDomain = domainNameSetter('com') // Повинно повернути 'https://example.com'
console.log('Full Domain:', fullDomain)







/*
 ! Завдання: Розробка Вищої Функції для Модифікації Поведінки Іншої Функції

 Створіть вищу функцію (higher-order function) modifyFunction, яка приймає як аргументи функцію originalFunction та число multiplier.

 Функція originalFunction приймає один числовий аргумент.

 modifyFunction повинна повертати нову функцію, яка при виклику з будь-яким числовим аргументом викликає originalFunction з цим аргументом і множить результат на multiplier.

 Наприклад, якщо originalFunction повертає вхідний аргумент, помножений на 2, і multiplier дорівнює 3, то повернута функція повинна повертати вхідний аргумент, помножений на 6.
*/


// Оригінальна функція, яка приймає число і повертає його, помножене на 4
function originalFunction(num) {
    return num * 4;
}

// Вища функція, яка приймає функцію і множник, повертає модифіковану функцію
function modifyFunction(originalFunc, multiplier) {
    return function(num) {
        return originalFunc(num) * multiplier;
    };
}

// Приклад використання
const modifiedFunc = modifyFunction(originalFunction, 3);

console.log('Original function output for 4:', originalFunction(4)); // Виведе 16
console.log('Modified function output for 4:', modifiedFunc(4));      // Виведе 48 (16 * 3)

/*
 У цьому коді ми створюємо модифіковану версію originalFunction за допомогою modifyFunction з множником 3.
 Потім ми виводимо результати для обох функцій, коли вони викликаються з аргументом 4.

 originalFunction(4) повинно повернути 16 (4 * 4), а modifiedFunc(4) повинно повернути 48, оскільки 16 (результат originalFunction) множиться на 3 (множник у modifyFunction).
*/









/*
! Завдання: Розробка Функції Трирівневої Вкладеності в JavaScript з Конкретною Операцією

Створіть функцію outerFunction, яка приймає один аргумент.

outerFunction повинна повертати функцію innerFunction, яка також приймає один аргумент.

innerFunction повинна повертати функцію deepInnerFunction, яка також приймає один аргумент.

deepInnerFunction повинна виконувати операцію множення з усіма переданими аргументами (один з кожної функції) і повертати результат цієї операції.

Результатом виклику outerFunction(arg1)(arg2)(arg3) має бути добуток arg1 * arg2 * arg3.
*/

function outerFunction(arg1) {
    return function innerFunction(arg2) {
      return function deepInnerFunction(arg3) {
        return arg1 * arg2 * arg3;
      };
    };
  };
  
  const closure = outerFunction(2)(3)(4);
  console.log(closure); // Повинно повернути 24 (2*3*4)

  /*
 Цей код є прикладом використання вкладених функцій у JavaScript, а також демонструє концепцію замикань (closures).

 ! Функція outerFunction:
 outerFunction є функцією вищого порядку, яка приймає один аргумент arg1.
 Вона повертає іншу функцію, innerFunction.

 ! Функція innerFunction:
 Ця функція, замкнена всередині outerFunction, також приймає один аргумент, arg2.
 innerFunction повертає ще одну функцію, deepInnerFunction.

 ! Функція deepInnerFunction:
 Ця функція є внутрішньою для innerFunction і приймає аргумент arg3.
 Всередині deepInnerFunction, вона використовує аргументи arg1, arg2 та arg3. Цікаво, що deepInnerFunction має доступ до аргументів arg1 та arg2, незважаючи на те, що вона знаходиться в різних областях видимості. Це можливо завдяки замиканням в JavaScript.
 deepInnerFunction повертає добуток трьох аргументів.

 ? Виклик функцій:
 Коли виконується outerFunction(2)(3)(4), відбувається наступне:
 * outerFunction(2) викликається і повертає innerFunction.
 * Потім, innerFunction(3) викликається і повертає deepInnerFunction.
 * Нарешті, deepInnerFunction(4) викликається, і вона повертає 2 * 3 * 4, що дорівнює 24.
 console.log(result) виводить результат, 24, у консоль.
*/