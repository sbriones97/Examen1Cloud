const fetch = require('node-fetch')

let boton = document.getElementById('search_news').addEventListener('click', analizarTexto);
let url = 'https://tone-analyzer-salvador-briones.mybluemix.net/peticion'

function analizarTexto(){
    let texto = document.getElementById('search_text').value
    let body = { 'text': texto }
    let metodo = {
            method: 'post',
            body:    JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        }

    fetch(url, )
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
