var person = {
    age: 19,
    name: 'Davi'
}
//função pura
function getRemainingYearsToMajorty(person){
    return 18 - person.age
}
//função impura
function increasePersonAge(person){
    person.age = person.age + 1
}
//método impuro
increasePersonAge(person)

var remainingYears = getRemainingYearsToMajorty(person)

console.log(remainingYears)