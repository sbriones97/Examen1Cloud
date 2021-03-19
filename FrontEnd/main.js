
let boton = document.getElementById('analyze_texto').addEventListener('click', analizarTexto);
let url = 'https://tone-analyzer-salvador-briones.mybluemix.net/peticion'


function analizarTexto(){
    let texto = document.getElementById('text_to_send').value
    let body = { 'text': texto }
    let metodo = {
            method: 'post',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        }


    const Http = new XMLHttpRequest()
    Http.open("POST", url);
    Http.setRequestHeader('Content-Type', 'application/json');
    Http.send(JSON.stringify(body));
    
    Http.onreadystatechange = (e) => {
        document.getElementById("aqui_mero").innerHTML = Http.responseText
        console.log(Http.responseText)
        // if(Http.responseText.currentTarget.status == 200){
        //     document.getElementById('aqui_mero').value = Http.responseText
        //     console.log(Http.responseText)
        // }
        // else {
        //     document.getElementById('aqui_mero').value = Http.responseText
        //     console.log(e)
        // }
    }

    // fetch(url, metodo)
    //     .then(response => {
    //         if(response.status == 200) {
    //             return response.text()
    //         }
    //     } )
    //     .then(body => {
    //         console.log(body)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     });

}
