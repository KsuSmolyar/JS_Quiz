import { QuestionCard } from "./types";
// Типы данных
export const questionCards_2: QuestionCard[] = [
  {
    questionText: "Какие встроенные типы данных есть в JS?",
    answerOptions: [
      {
        id: "2.1.1",
        name: "q2.1",
        value: "0",
        text: "Undefined, Boolean, Number, String, Function, Null, BigInt, NaN, Object",
      },
      {
        id: "2.1.2",
        name: "q2.1",
        value: "1",
        text: "Undefined, Boolean, Number, String, BigInt, Symbol, Null, Object",
      },
      {
        id: "2.1.3",
        name: "q2.1",
        value: "0",
        text: "Undefined, Boolean, Number, String, BigInt, Symbol, Null, Object, Function, Array",
      }
    ],
    feedbackText: "Стандарт ECMAScript определяет 8 типов: 7 типов данных являющихся примитивами: Undefined, Boolean, Number, String, BigInt, Symbol, Null; Ссылочный тип данных - Object "
  },
  { 
    questionText: "Какой тип данных является иммутабельными?",
    answerOptions: [
      {
        id: "2.2.1",
        name: "q2.2",
        value: "1",
        text: "undefined",
      },
      {
        id: "2.2.2",
        name: "q2.2",
        value: "0",
        text: "object",
      },
      {
        id: "2.2.3",
        name: "q2.2",
        value: "0",
        text: "function",
      }
    ],
    feedbackText: "Все типы данных в JavaScript, кроме объектов, являются иммутабельными (значения не могут быть модифицированы, а только перезаписаны новым полным значением)."
  },
  {
    questionText: "Есть ли разница между null и undefined?",
    answerOptions: [
      {
        id: "2.3.1",
        name: "q2.3",
        value: "0",
        text: "да, значение null соотвествует 0, а undefined - автоматически присваивается переменным, которые были только объявлены",
      },
      {
        id: "2.3.2",
        name: "q2.3",
        value: "1",
        text: "да, значение null представляет отсутствие какого-либо объектного значения, а undefined автоматически присваивается переменным, которые были только объявлены",
      },
      {
        id: "2.3.3",
        name: "q2.3",
        value: "0",
        text: "нет, и то, и другое при приведении типов вернут false",
      }
    ],
    feedbackText: "Разница состоит в том, что null обозначает намеренное отсутствие, а undefined — неявное. undefined обозначает, что значение ещё не установлено. Кроме того для null оператор typeof вернет 'object', тогда как для undefined - 'undefined'."
  },
  {
    questionText: "Числовой тип данных number...",
    answerOptions: [
      {
        id: "2.4.1",
        name: "q2.4",
        value: "0",
        text: "это специальный тип данных для целых чисел в JavaScript ",
      },
      {
        id: "2.4.2",
        name: "q2.4",
        value: "1",
        text: "представляет как целочисленные значения, так и числа с плавающей точкой",
      }
    ],
    feedbackText: "В соответствии со стандартом ECMAScript, существует только один числовой тип, который представляет собой 64-битное число двойной точности согласно стандарту IEEE 754. Другими словами, специального типа для целых чисел в JavaScript нет. Это означает, что при числовых операциях вы можете получить неточное (округлённое) значение. В дополнение к возможности представлять числа с плавающей запятой, есть несколько символических значений: +Infinity (положительная бесконечность), -Infinity (отрицательная бесконечность), и NaN (не число)."
  },
  {
    questionText: "Существуют ли методы у примитивных типов данных?",
    answerOptions: [
      {
        id: "2.5.1",
        name: "q2.5",
        value: "0",
        text: "да, для всех примитивов создаётся специальный «объект-обёртка», который предоставляет нужную функциональность, а после удаляется.",
      },
      {
        id: "2.5.2",
        name: "q2.5",
        value: "1",
        text: "да, существуют, за исключением таких типов данных, как null и undefined",
      },
      {
        id: "2.5.3",
        name: "q2.5",
        value: "0",
        text: "нет, методы доступны только для типа данных object",
      }
    ],
    feedbackText: "JavaScript позволяет нам работать с примитивными типами данных – строками, числами и т.д., как будто они являются объектами. У них есть и методы. Чтобы это работало, при таком доступе создаётся специальный «объект-обёртка», который предоставляет нужную функциональность, а после удаляется. Особенные примитивы null и undefined являются исключениями. У них нет соответствующих «объектов-обёрток», и они не имеют никаких методов. В некотором смысле, они «самые примитивные»."
  },
  {
    questionText: "Можно ли добавить свойство примитивному типу данных? (Например, let str = 'Привет'; str.test = 5; console.log(str.test);",
    answerOptions: [
      {
        id: "2.6.1",
        name: "q2.6",
        value: "1",
        text: "нет, примитивному типу данных невозможно добавить свойство",
      },
      {
        id: "2.6.2",
        name: "q2.6",
        value: "0",
        text: "да, это сработает благодаря «объекту-обёртке»",
      },
    ],
    feedbackText: "В зависимости от того, используете ли вы строгий режим (use strict) или нет, результат может быть: undefined (без strict); Ошибка (strict mode). Почему? В момент обращения к свойству str создаётся «объект-обёртка». В строгом режиме, попытка изменения этого объекта выдаёт ошибку. Без строгого режима, операция продолжается, объект получает свойство test, но после этого он удаляется, так что на последней линии str больше не имеет свойства test. Данный пример наглядно показывает, что примитивы не являются объектами. Они не могут хранить дополнительные данные."
  },
  {
    questionText: "Тип данных symbol ",
    answerOptions: [
      {
        id: "2.7.1",
        name: "q2.7",
        value: "0",
        text: "примитивный тип данных, использующийся для одного текстового символа",
      },
      {
        id: "2.7.2",
        name: "q2.7",
        value: "0",
        text: "примитивный тип данных, использующий специальные символы для обозначения различные операций, которые нужно сделать с текстом при выводе на экран.",
      },
      {
        id: "2.7.3",
        name: "q2.7",
        value: "1",
        text: "примитивный тип данных, использующийся для создания уникальных идентификаторов.",
      }
    ],
    feedbackText: "Symbol - это уникальный и неизменяемый тип данных, который может быть использован как идентификатор для свойств объектов. По спецификации, в качестве ключей для свойств объекта могут использоваться только строки или символы. Ни числа, ни логические значения не подходят, разрешены только эти два типа данных. «Символ» представляет собой уникальный идентификатор. Создаются новые символы с помощью функции Symbol(): let id = Symbol(); При создании, символу можно дать описание (также называемое имя), в основном использующееся для отладки кода: let id = Symbol('id'); Символы гарантированно уникальны. Даже если мы создадим множество символов с одинаковым описанием, это всё равно будут разные символы. Описание – это просто метка, которая ни на что не влияет."
  },
  {
    questionText: "Что означает такая запись: let sum = 2 + 2; let result = !!sum ?",
    answerOptions: [
      {
        id: "2.8.1",
        name: "q2.8",
        value: "1",
        text: "таким образом осществляется приведение выражения к логическому типу",
      },
      {
        id: "2.8.2",
        name: "q2.8",
        value: "0",
        text: "оператор !! указывает, что значение sum нельзя перезаписать",
      },
      {
        id: "2.8.3",
        name: "q2.8",
        value: "0",
        text: "такая запись инвертирует значение sum  - если число было положительным, оно станет отрицательным и наоборот",
      }
    ],
    feedbackText: "Если вызвать двойное отрицание(!!), можно быстро привести любое выражение к логическому типу. Работает это так: Первое отрицание приводит значение к отрицательному логическому значению !sum -> false; Второе отрицание инвертирует значение !false -> true;"
  },
  {
    questionText: "Что такое NaN?",
    answerOptions: [
      {
        id: "2.9.1",
        name: "q2.9",
        value: "0",
        text: "это примитивный тип данных, используемый для записи чисел двойной точности",
      },
      {
        id: "2.9.2",
        name: "q2.9",
        value: "1",
        text: "NaN является значением, представляющим не-число.",
      },
      {
        id: "2.9.3",
        name: "q2.9",
        value: "0",
        text: "это метод типа данных number",
      }
    ],
    feedbackText: "Глобальное свойство NaN является значением, представляющим не-число (Not-A-Number). Это возвращаемое значение в ситуациях, когда математические (Math) функции не срабатывают должным образом."
  },
  {
    questionText: "Равнозначны ли данные записи: isNaN('hello world') и Number.isNaN('hello world);?",
    answerOptions: [
      {
        id: "2.10.1",
        name: "q2.10",
        value: "0",
        text: "да, оба варианты вернут false",
      },
      {
        id: "2.10.2",
        name: "q2.10",
        value: "0",
        text: "да, оба варианта вернут true",
      },
      {
        id: "2.10.3",
        name: "q2.10",
        value: "1",
        text: "нет, они вернут разные значения",
      }
    ],
    feedbackText: "Разница между функцией isNaN() и методом Number.isNaN(): первая вернёт true, если значение в настоящий момент является NaN, или если оно станет NaN после того, как преобразуется в число, в то время как последний вернёт true, только если текущим значением является NaN. Таким образом, isNaN('hello world'); вернет true, а Number.isNaN('hello world); - false."
  },
  {
    questionText: "К какому типу данных относится function?",
    answerOptions: [
      {
        id: "2.11.1",
        name: "q2.11",
        value: "1",
        text: "к типу данных object",
      },
      {
        id: "2.11.2",
        name: "q2.11",
        value: "0",
        text: "к типу данных function",
      },
    ],
    feedbackText: "В JavaScript функции являются объектами первого класса, то есть: они являются объектами и с ними можно взаимодействовать и передавать их точно так же как любой другой объект. Если быть точным, функции — это объекты Function. Оператор typeof function(){} вернет строку 'function'. Функции не являются отдельным базовым типом в JavaScript, а подвидом объектов. Но typeof выделяет функции отдельно, возвращая для них 'function'. На практике это весьма удобно, так как позволяет легко определить функцию."
  },
  {
    questionText: "Что такое объект в JS?",
    answerOptions: [
      {
        id: "2.12.1",
        name: "q2.12",
        value: "0",
        text: "это набор упорядоченных свойств",
      },
      {
        id: "2.12.2",
        name: "q2.12",
        value: "1",
        text: "это набор неупорядоченных свойств",
      }
    ],
    feedbackText: "В объектах мы сами назначаем ключи, поэтому порядок следования элементов не имеет значения. По сути объект JavaScript это набор неупорядоченных свойств."
  },
  {
    questionText: "Можно ли изменить объект, объявленны с помощью ключевого слова const? const obj = {propety: 'propertyValue'}",
    answerOptions: [
      {
        id: "2.13.1",
        name: "q2.13",
        value: "1",
        text: "да, объекту можно добавить новые свойства",
      },
      {
        id: "2.13.2",
        name: "q2.13",
        value: "0",
        text: "нет, переменные, объявленные с помощью const не могут быть изменены",
      },
    ],
    feedbackText: "Объявление const защищает только саму переменную от изменений. Другими словами, obj хранит ссылку на объект. И это не может быть изменено. Но содержимое объекта менять можно."
  },
  {
    questionText: "Что такое массив?",
    answerOptions: [
      {
        id: "2.14.1",
        name: "q2.14",
        value: "0",
        text: "это отдельный тип данных, представляющий собой упорядоченный набор значений",
      },
      {
        id: "2.14.2",
        name: "q2.14",
        value: "1",
        text: "особый подвид объекта, представляющий собой упорядоченный набор значений",
      },
      {
        id: "2.14.3",
        name: "q2.14",
        value: "0",
        text: "особый подвид объекта, представляющий собой неупорядоченный набор значений",
      }
    ],
    feedbackText: "Язык JavaScript не содержит явного типа данных 'массив'. Массив – это особый тип объекта, предназначенный для работы с упорядоченным набором элементов."
  },
  {
    questionText: "Что вернет данное выражение typeof NaN ?",
    answerOptions: [
      {
        id: "2.15.1",
        name: "q2.15",
        value: "1",
        text: "number",
      },
      {
        id: "2.15.2",
        name: "q2.15",
        value: "0",
        text: "NaN",
      },
      {
        id: "2.15.3",
        name: "q2.15",
        value: "0",
        text: "object",
      }
    ],
    feedbackText: "Тип числа в JavaScript — это набор всех числовых значений, включая «не число», положительную бесконечность и отрицательную бесконечность. «Не число» — это значение, которое не представляет действительное число, несмотря на то, что оно имеет тип числа. Через NaN полезно представлять ошибочные операции с числами. Например, умножение числа на undefined не является допустимой операцией, поэтому дает NaN."
  },
  {
    questionText: "Что вернет данное выражение typeof null ?",
    answerOptions: [
      {
        id: "2.16.1",
        name: "q2.16",
        value: "0",
        text: "null",
      },
      {
        id: "2.16.2",
        name: "q2.16",
        value: "0",
        text: "number",
      },
      {
        id: "2.16.3",
        name: "q2.16",
        value: "1",
        text: "object",
      }
    ],
    feedbackText: "null (JSVAL_NULL) — указатель на NULL (machine code NULL pointer), то есть, метка объекта и ссылка на то, что его численное представление равно нулю. Так и вышло, что typeof стал определять null как object — он проверял метку типа, которая сообщала ему, что null — это не что иное, как object. Это баг, и лично Брэндан Айк это признает. Этот баг, вероятно, никогда не будет исправлен из-за необходимости сохранения обратной совместимости существующего кода с новыми версиями языка."
  },
  // {
  //   questionText: "Текст вопроса",
  //   answerOptions: [
  //     {
  //       id: "2.17.1",
  //       name: "q2.17",
  //       value: "0",
  //       text: "текст ответа номер 1",
  //     },
  //     {
  //       id: "2.17.2",
  //       name: "q2.17",
  //       value: "1",
  //       text: "текст ответа  номер 2",
  //     },
  //     {
  //       id: "2.17.3",
  //       name: "q2.17",
  //       value: "0",
  //       text: "тескт ответа номер 3",
  //     }
  //   ],
  //   feedbackText: "Текст обратной связи"
  // },
  // {
  //   questionText: "Текст вопроса",
  //   answerOptions: [
  //     {
  //       id: "2.18.1",
  //       name: "q2.18",
  //       value: "1",
  //       text: "текст ответа номер 1",
  //     },
  //     {
  //       id: "2.18.2",
  //       name: "q2.18",
  //       value: "0",
  //       text: "текст ответа  номер 2",
  //     },
  //     {
  //       id: "2.18.3",
  //       name: "q2.18",
  //       value: "0",
  //       text: "тескт ответа номер 3",
  //     }
  //   ],
  //   feedbackText: "Текст обратной связи"
  // },
  // {
  //   questionText: "Текст вопроса",
  //   answerOptions: [
  //     {
  //       id: "2.19.1",
  //       name: "q2.19",
  //       value: "0",
  //       text: "текст ответа номер 1",
  //     },
  //     {
  //       id: "2.19.2",
  //       name: "q2.19",
  //       value: "0",
  //       text: "текст ответа  номер 2",
  //     },
  //     {
  //       id: "2.19.3",
  //       name: "q2.19",
  //       value: "1",
  //       text: "тескт ответа номер 3",
  //     }
  //   ],
  //   feedbackText: "Текст обратной связи"
  // },
  // {
  //   questionText: "Текст вопроса",
  //   answerOptions: [
  //     {
  //       id: "2.20.1",
  //       name: "q2.20",
  //       value: "0",
  //       text: "текст ответа номер 1",
  //     },
  //     {
  //       id: "2.20.2",
  //       name: "q2.20",
  //       value: "1",
  //       text: "текст ответа  номер 2",
  //     },
  //     {
  //       id: "2.20.3",
  //       name: "q2.20",
  //       value: "0",
  //       text: "тескт ответа номер 3",
  //     }
  //   ],
  //   feedbackText: "Текст обратной связи"
  // },
]
