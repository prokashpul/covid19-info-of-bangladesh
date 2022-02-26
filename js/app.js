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
    const day = pad2(date.getDate());
    const year = date.getFullYear();
    const formattedDate = year + "-" + month + "-" + day;
    return formattedDate;
}

// dispaly data 
const dataDispaly = (data) => {
    console.log(data.response)
    let newcas = 0;
    for (const i of data.response) {
        console.log(i)
        newcas = i.cases.new;
    }
    console.log("new" + newcas)
}