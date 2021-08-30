function welcomeMessage(name,greetHandler){
    greetHandler(name);
}
// const name = ['tom hanks','tom brady']
// const myObj ={name: 'tom chinku', age:11}
function greetMorning(name){
    console.log('Good Morning',name);
}
function greetAfternoon(name){
    console.log('Good afternoon',name);
}
function greetEvening(name){
    console.log('Good evening',name);
}
welcomeMessage('tom hanks',greetMorning);
welcomeMessage('shakib hanks',greetAfternoon);
welcomeMessage('bappa raj',greetEvening);