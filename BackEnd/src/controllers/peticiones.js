const fetch = require("node-fetch")
const dotenv = require('dotenv')
const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

dotenv.config()
const url = process.env.URL
const api_key = process.env.APIKEY

console.log(url)
console.log(api_key)

const toneAnalyzer = new ToneAnalyzerV3({
    version: '2017-09-21',
    authenticator: new IamAuthenticator({
        apikey: api_key,
    }),
    serviceUrl: url,
});

class PeticionesController{
    async peticionPost (res, text) {
        
        
        const toneParams = {
            toneInput: text,
            contentType: 'application/json',
        };

        toneAnalyzer.tone(toneParams)
            .then(toneAnalysis => {
                console.log(JSON.stringify(toneAnalysis, null, 2))
                // return toneAnalysis.result
                return JSON.stringify(toneAnalysis.result, null, 2)
            })
            .then(body => {
                res.status(200).end(body)
            })
            .catch(err => {
                console.log('error:', err)
                res.status(err.status).end(err.message);
            })
        // fetch(url, { method: 'POST', body: data, headers: { 'Content-Type': 'application/json' } })
        //     .then(response => {
        //         if(response.status == 200) {
        //             return response.text()
        //         }
        //     } )
        //     .then(body => {
        //         res.status(200).end(body)
        //     })
        //     .catch(err => {
        //         console.log(err)
        //         res.status(err.status).end(err.message);
        //     });
    }
} 

module.exports = new PeticionesController()