// const express = require("express");
// const cors = require("cors");
// const app = express();
// app.use(express.json()); 
// app.use(cors());

// const requiredFile = require("./controller");
// const {getHouses} = requiredFile
// const {createHouse} = requiredFile
// const {updateHouse} = requiredFile
// const {deleteHouse} = requiredFile

// app.get("/api/houses", getHouses)
// app.post("/api/houses", createHouse)
// app.put("/api/houses", updateHouse)
// app.delete("/api/houses", deleteHouse)

// app.listen(4004, () => console.log("Server running on 4004"));

const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {
    getHouses,
    deleteHouse, 
    createHouse, 
    updateHouse
} = require('./controller')

app.get(`/api/houses`, getHouses)
app.delete(`/api/houses/:id`, deleteHouse)
app.post(`/api/houses`, createHouse)
app.put(`/api/houses/:id`, updateHouse)

app.listen(4004, () => console.log(`running on 4004`))