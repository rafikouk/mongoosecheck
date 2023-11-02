const express = require("express")
const connectDB = require("./config/connectDB")
require("dotenv").config({path: "./config/.env"})
const queries = require("./queries/queries")

 queries.createAndSavePerson()
queries.createManyPeople()
// queries.search("Rafik")
// queries.searchByFood("Pizza")
// queries.searchById("6464de112037ee00d373116c")
// queries.updatePerson("6464de112037ee00d373116c")
// queries.updatePersonAge("6464de112037ee00d373116c")
// queries.deletePerson("6464de112037ee00d373116c")
// queries.deleteManyPeople("Rafik")
//queries.chainSearch()






connectDB()

const app = express()

const PORT = process.env.PORT

app.listen(PORT, (err) => {
    err ? console.log(err)
        : console.log(`server running on port ${PORT}`)    
})