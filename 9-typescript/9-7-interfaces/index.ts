/*type Person = {
    name: string
    age: number
}*/

interface Animal {
    sex: 'male' | 'female'
}

interface Human extends Animal{
    name: string
    age: number
}



const person: Human = {
    age: 22,
    name: 'Davi',
    sex: 'male'
}