const fetch = require("node-fetch")
const dotenv = require('dotenv')

const url = process.env.URL
const api_key = process.env.APIKEY

class PeticionesController{
    async peticion (res, data) {
        respuesta = `{'respuesta':'tadaaaaa'}`
    
        fetch(url, { method: 'POST', body: data, headers: { 'Content-Type': 'application/json' } })
            .then(response => {
                if(response.status == 200) {
                    return response.text()
                }
            } )
            .then(body => {
                res.status(200).end(body)
            })
            .catch(err => {
                res.status(err.status).end(err.message);
            });
    }
} 

module.exports = new PeticionesController()