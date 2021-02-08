const fetch = require("node-fetch")

function fetchQuiz()
{
    return fetch('http://localhost:8080/quiz').then(res => res.json()).catch((err) => console.log(err))
}

module.exports = fetchQuiz