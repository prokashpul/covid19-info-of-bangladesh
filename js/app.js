const covidDataLoad = () => {
    const url = `https://covid-193.p.rapidapi.com/history?country=bangladesh&day=${days()}`;
    fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "covid-193.p.rapidapi.com",
                "x-rapidapi-key": "28897088f8msh98a98c2b9f3fab8p16049ajsne59f50c1c995"
            }
        })
        .then(res => res.json())
        .then(data => dataDispaly(data))
        .catch(err => console.log(err))
}
covidDataLoad()

// date setUp

function days() {
    const pad2 = (n) => {
        return (n < 10 ? '0' : '') + n;
    }
    const date = new Date();
    const month = pad2(date.getMonth() + 1); //months (0-11)
    const day = pad2(date.getDate()) - 1;
    const year = date.getFullYear();
    const formattedDate = year + "-" + month + "-" + day;
    return formattedDate;
}

// dispaly data 
const dataDispaly = (data) => {
    console.log(data.response)
    // cases tody update loop
    let newcas = 0;
    let active = 0;
    let recovered = 0;
    let totalCases = 0;
    let newDeath = 0;
    let totalDeath = 0;
    let newCriticals = 0;
    for (const covidData of data.response) {
        console.log(covidData)
        // new cases
        newcas = covidData.cases.new;
        // active now
        active = covidData.cases.active;
        // active now
        recovered = covidData.cases.recovered;
        // total Cases
        totalCases = covidData.cases.total;
        // new deaths
        newDeath = covidData.deaths.new;
        // new deaths
        totalDeath = covidData.deaths.total;
        // new deaths
        newCriticals = covidData.cases.critical;


    }

    console.log("new" + newcas)
    // dom event handaling
    // new new-cases
    const newCases = document.getElementById('new-cases')
    newCases.innerText = newcas;
    // new Total active
    const newActive = document.getElementById('active')
    newActive.innerText = active;
    // new Total active
    const totalRecovered = document.getElementById('recovered')
    totalRecovered.innerText = recovered;
    // new New critical 
    const newCritical = document.getElementById('critical')
    newCritical.innerText = newCriticals;
    // new Total active
    const TotalCas = document.getElementById('total-cases')
    TotalCas.innerText = totalCases;
    // new new Deaths
    const newDeaths = document.getElementById('new-deaths')
    newDeaths.innerText = newDeath;
    // new new Deaths
    const totalDeaths = document.getElementById('total-death')
    totalDeaths.innerText = totalDeath;
}