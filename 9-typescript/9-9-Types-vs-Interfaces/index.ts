interface Animal {
    sex: 'male' | 'female'
    hungry: boolean
}

interface Mammal extends Animal {
    weaned: boolean
}

const animal: Mammal = {
    hungry: false,
    weaned: true,
    sex: 'male'
}