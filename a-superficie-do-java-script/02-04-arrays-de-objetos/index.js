var person1 = {
    name: 'Davi',
    age: 37
}

var person2 = {
    name: 'Nathan',
    age: 13
}

var person3 = {
    name: 'Silva',
    age: 35
}

var list = [person1, person2, person3]
//acessando propriedade do array
console.log(list[0].name);

//percorrendo os objetos
for(var person of list){
    console.log(person);
}