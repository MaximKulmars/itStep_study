const fizzBuzz = (begin, end) => {              
    for (let i = begin; (i-1) < end; i++){       
        if (i % 3 === 0 && i % 5 === 0) {       
            console.log ("FizzBuzz");           
        }
        if (i % 3 === 0){
            console.log ("Fizz");
        }
        if (i % 5 === 0){
            console.log ("Buzz");
        }
        else{
            console.log (i);
        }
    }
}
console.log (fizzBuzz (1, 25))

// Как все работает:
// строка 1 - создём константу fizzBuzz, которая представляет из себя диапазон числел, где begin начальное число дапазона, end конечное число
// строка 2 - объявляем переменную i которая будет равнаяться первому числу диапазона из fizzBuzz, также мы там говорим о том, что до тех пор пока переменная i меньше последнего числа диапазона (end) мы будем поворять цикл, который описан с 3 по 14 строку, при этом, при каждом новом проходе мы будем прибавлять к значению переменной i еденицу (i++)
