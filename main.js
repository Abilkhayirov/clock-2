var clock = Number(prompt('Введите время от 0 до 24'))

if(clock >= 5 && clock < 12){
    console.log('Доброе утро');
}
else if(clock >= 12 && clock < 18){
    console.log('Добрый день');
}
else if(clock >= 18 && clock < 22){
    console.log('Добрый вечер');
}
else if(clock >= 22 && clock <= 24){
    console.log('Доброй ночи');
}
else if(clock > 0 && clock < 5){
    console.log('Доброй ночи');
}
else{
    console.log('не верное число');
}