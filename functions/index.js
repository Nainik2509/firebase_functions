const functions = require("firebase-functions");

// http request 1
exports.randomNumber = functions.https.onRequest((request, response) => {
    const number = Math.round(Math.random() * 100);
    response.send(number.toString());
});


// http request 2
exports.toGoogle = functions.https.onRequest((request, response) => {
    response.redirect('https://www.google.com');
});


// http callable function
exports.sayHello = functions.https.onCall((data, context) => {
    const name = data.name;
    return `hello ${name} :)`;
});