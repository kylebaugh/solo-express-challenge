const axios = require('axios')
let allPeople = []
let allPlanets = []
let sortedPeople = []


module.exports = {
    getPeople: async (req, res) => {
        const {sortBy} = req.params
        let myParam = +sortBy
        let page = 0
        let nextValue = true

        while(nextValue !== null){
            await axios.get(`https://swapi.dev/api/people`, {params: {page: ++page}})
                .then(dbRes => {
                    nextValue = dbRes.data.next
                    allPeople.push(...dbRes.data.results)
                })}
        
        if(myParam === 1){
            // console.log(sortedPeople.length)
            
            let sorting = allPeople.sort((a,b) => {
                if(a.name < b.name){
                    return -1
                } else if(a.name > b.name){
                    return 1
                }else{
                    return 0
                }
            })
            
            sortedPeople = undefined
            sortedPeople = [...sorting]
            console.log(sortedPeople)
        
        }else if(myParam === 2){
            
            let sorting = allPeople.sort((a,b) => a.height - b.height) 
            console.log(sorting)
            sortedPeople = undefined
            sortedPeople = [...sorting]
            console.log(sortedPeople)

        }else if(myParam === 3){
            
            let sorting = allPeople.sort((a,b) => a.mass - b.mass)
            console.log(sorting)
            sortedPeople = undefined
            sortedPeople = [...sorting]
            console.log(sortedPeople)
        }

        await res.status(200).send(sortedPeople)
    },

    getPlanets: async (req, res) => {
        let page = 0
        let nextValue = true

        while(nextValue !== null){
            await axios.get(`https://swapi.dev/api/planets`, {params: {page: ++page}})
                .then(dbRes => {
                    nextValue = dbRes.data.next
                    allPlanets.push(...dbRes.data.results)
                })}
                

        for(let i = 0; i < allPlanets.length; i++){
            if(allPlanets[i].residents.length > 0){

                for(let j = 0; j < allPlanets[i].residents.length; j++){
                    let residentName
                    await axios.get(`${allPlanets[i].residents[j]}`)
                        .then(dbRes => {
                            console.log(dbRes.data.name)
                            residentName = dbRes.data.name
                            allPlanets[i].residents[j] = residentName
                        })
                    }
            }
        }    
        
        await res.status(200).send(allPlanets)

    }
}