articles = Article.create([
    { title: "Test article #1", text: "This is a very short article "},
    { title: "Test article #2", text: "This is a very long article This is a very long articleThis is a very long articleThis is a very long articleThis is a very long articleThis is a very long articleThis is a very long article "},
    ])

d1 = Driver.create({
    name: 'Aharon Ragoza',
    email:'gronot@gmail.com',
    dateOfBirth: '1992-08-13',
    cars: []
})

d2 = Driver.create({
    name: 'Lee Lavy',
    email:'lilodead@gmail.com',
    dateOfBirth: '1991-08-11',
    cars: []
})

cars = Car.create([
        {
            title: 'Mazda',
            model:'3',
            color: 'yellow',
            drivers: [d1]
        },
        {
            title: 'Reno',
            model: 'Megan',
            color: 'yellow',
            drivers: [d2]
        },
        {
            title: 'Kia',
            model: 'Picanto',
            color: 'red',
            drivers: [d2, d1]
        },
    ])

drivers = Driver.create([
    {
        name: 'Razi Elbaz',
        email:'raziprojects@gmail.com',
        dateOfBirth: '1993-08-13',
        cars: [cars[0], cars[1]]
    },
    {
        name: 'Yotam Nagor',
        email:'nagorath@gmail.com',
        dateOfBirth: '1992-05-20',
        cars: [cars[0], cars[2]]
    },
])