// 5 > 4  // Возвращает TRUE, потому что данное сравнение верное
// "ананас" > "яблоко" // Возвращает FALSE - т.к. при сравнении строк исползуется "алфавитный порядок", т.е. строки сравниваются посимвольно, то первый символ первой строки - "А" меньше первого символа второй строки "Я"
// "2" > "12" // Возвращает TRUE - т.к. учитывая "алфавитный порядок" сравнения строк, то как бы "по алфавиту", строка "2" будет больше "1", которая является первым символом в строке "12"
// undefined == null // Возвращает TRUE, т.к. это специальное правило языка - эти значения равны друг другу и не равны никаким другим значениям
// undefined === null // Возвращает FALSE, т.к. Оператор === учитывает тип данных, и в данном случае типы сравниваемых элементов различны - значения различны
// !true === false // Возвращает TRUE, т.к. оператор ! меняет булевое значение - в данном случае true превращается в false, при нестрогом сравнении 
// !true == false // Возвращает TRUE, т.к. оператор ! меняет булевое значение - в данном случае true превращается в false, при строгом сравнении тоже, т.к. типы не различны
// 0.1 + 0.2 === 0.3 // JS хранит числа в бинарной системе, а дроби, такие как 0.1, 0.2, 0.3 в десятичной системе в JS могут становится бесконечной дробью, т.е. у них будут крошечные неточности, которые при суммировании тоже суммируются
// // Если вывести 0.1 + 0.2 отдельно - то выходит 0.30000000000000004, т.е. 4 в конце та самая неточность, и поэтому 0.1 + 0.2 не равно 0.3


// 2 задание. Значения, которые преобразовываются в ложные значения

// 0
// false values
// false
// undefined
// null
// NaN
// ''


if(2 == '2') { console.log('true') } else { console.log(false) }