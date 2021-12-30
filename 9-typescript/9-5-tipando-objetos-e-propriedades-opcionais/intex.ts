type Person = {
    name: string
    age: number
    contacts?: string[]
    isAlive: boolean
}

const person: Person = {
    age: 22,
    name: 'Davi',
    isAlive: true,
    contacts: [
        'dnssites@gmail.com'
    ]
}