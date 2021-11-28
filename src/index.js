// import React from 'react';
// import ReactDOM from 'react-dom';

// import { App } from './routes/App';

// ReactDOM.render(<App />, document.getElementById('app'));

const cities = ['Bogota', 'Cali', 'Madrid', 'Buenos Aires', 'Guadalajara']

const randomString = () => {
    const string = cities[Math.floor(Math.random() * cities.length)]
    return string
}

const reverseString2 = str => {
    return new Promise((resolve, reject) => {
        if (!str) {
            reject(Error('Error'))
        }
        resolve(str.split("").reverse().join(""))
    })
}

module.exports = randomString