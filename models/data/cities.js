let cities = [
    {
        name: 'Buenos Aires',
        continent: 'South America',
        photo: 'https://images.unsplash.com/photo-1611268048707-37ab00943af9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        population: 3075646,
        userId: '636c5f5bc6d1fcafd40a56f3',
    },
    {
        name: 'Rio de Janeiro',
        continent: 'South America',
        photo: 'https://images.unsplash.com/photo-1544989164-31dc3c645987?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
        population: 6320446,
        userId: '636c5f5bc6d1fcafd40a56f3',
    },
    {
        name: 'Barcelona',
        continent: 'Europe',
        photo: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        population: 1636732,
        userId: '636c5f5bc6d1fcafd40a56f3',
    },
    {
        name: 'Istanbul',
        continent: 'Europe',
        photo: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80',
        population: 15519267,
        userId: '636c5f5bc6d1fcafd40a56f1',
    },
    {
        name: 'Saint Petersburg',
        continent: 'Europe',
        photo: 'https://images.unsplash.com/photo-1557228681-1efc219b8eb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
        population: 5383890,
        userId: '636c5f5bc6d1fcafd40a56f1',
    },
    {
        name: 'Sydney',
        continent: 'Oceania',
        photo: 'https://images.unsplash.com/photo-1590716209211-ea74d5f63573?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
        population: 5312489,
        userId: '636c5f5bc6d1fcafd40a56f1',
    },
    {
        name: 'Tokyo',
        continent: 'Asia',
        photo: 'https://images.unsplash.com/photo-1544885935-98dd03b09034?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        population: 14215906,
        userId: '636c5f5bc6d1fcafd40a56f2',
    },
    {
        name: 'Emirate Of Dubai',
        continent: 'Asia',
        photo: 'https://images.unsplash.com/photo-1526495124232-a04e1849168c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        population: 3478300,
        userId: '636c5f5bc6d1fcafd40a56f2',
    },
    {
        name: 'Los Angeles',
        continent: 'North America',
        photo: 'https://images.unsplash.com/photo-1554143091-c41d76e3da15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
        population: 3792621,
        userId: '636c5f5bc6d1fcafd40a56f2',
    },
    {
        name: 'Nairobi',
        continent: 'Africa',
        photo: 'https://images.unsplash.com/photo-1611144727915-ef30a08aaeb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
        population: 5545000,
        userId: '636c5f5bc6d1fcafd40a56f1',
    },
    {
        name: 'Cairo',
        continent: 'Africa',
        photo: 'https://images.unsplash.com/photo-1559738933-d69ac3ff674b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        population: 8259461,
        userId: '636c5f5bc6d1fcafd40a56f1',
    },
    {
        name: 'Rome',
        continent: 'Europe',
        photo: 'https://images.unsplash.com/photo-1555992828-ca4dbe41d294?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
        population: 2857321,
        userId: '636c5f5bc6d1fcafd40a56f1',
    }
]

require('dotenv').config()
require('../../config/database/database')
const City = require('../City')

cities.forEach(elemento => {
    City.create({
        name: elemento.name,
        continent: elemento.continent,
        photo: elemento.photo,
        population: elemento.population,
        userId: elemento.userId,
    })
})