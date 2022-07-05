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
    console.log('people name front end hit')
    let myParam = 'name'
    axios.get(`http://localhost:4567/people/${myParam}`)
    .then(res => {
        console.log(res.data)
    })
}

const getPeopleHeight = () => {
    console.log('people height front end hit')
    let myParam = 'height'
    axios.get(`http://localhost:4567/people/${myParam}`)
    .then(res => {
        console.log(res.data)
    })
}

const getPeopleMass = () => {
    console.log('people mass front end hit')
    let myParam = 'mass'
    axios.get(`http://localhost:4567/people/${myParam}`)
    .then(res => {
        console.log(res.data)
    })
}




planets.addEventListener('click', getPlanets)
peopleName.addEventListener('click', getPeopleName)
peopleHeight.addEventListener('click', getPeopleHeight)
peopleMass.addEventListener('click', getPeopleMass)