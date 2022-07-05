const planets = document.querySelector('#planet-button')
const peopleName = document.querySelector('#people-name')
const peopleHeight = document.querySelector('#people-height')
const peopleMass = document.querySelector('#people-mass')

const getPlanets = () => {
    console.log('planet front end hit')
    axios.get('http://localhost:4567/planets')
        .then(res => {
            console.log(res.data)
        })
}

const getPeopleName = () => {
    console.log('people name end hit')
    let myParam = 'name'
    axios.get(`http://localhost:4567/people/1`)
    .then(res => {
        console.log(res.data)
    })
}

const getPeopleHeight = () => {
    console.log('people height end hit')
    let myParam = 'height'
    axios.get(`http://localhost:4567/people/2`)
    .then(res => {
        console.log(res.data)
    })
}

const getPeopleMass = () => {
    console.log('people mass end hit')
    let myParam = 'mass'
    axios.get(`http://localhost:4567/people/3`)
    .then(res => {
        console.log(res.data)
    })
}




planets.addEventListener('click', getPlanets)
peopleName.addEventListener('click', getPeopleName)
peopleHeight.addEventListener('click', getPeopleHeight)
peopleMass.addEventListener('click', getPeopleMass)