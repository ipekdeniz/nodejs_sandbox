const https = require('https');

module.exports = {
    get_promotion: function(message, username) {
        return new Promise(function(resolve, reject) {
            console.log(message);
            console.log(username);

            https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
                let data = '';

                // A chunk of data has been recieved.
                resp.on('data', (chunk) => {
                    data += chunk;
                });

                // The whole response has been received. Print out the result.
                resp.on('end', () => {
                    if (resp.statusCode >= 200 && resp.statusCode <= 299) {
                        resolve({statusCode: resp.statusCode, body: data});
                    } else {
                        reject('Request failed. status: ' + resp.statusCode + ', body: ' + body);
                    }
                });

            }).on("error", (err) => {
                reject("Error: " + err.message);
            });
        });
    }
}