const query = document.getElementById('query');
const countryContainer = document.getElementById('country-container');

// focus on search box 
function focusInput() {
    query.focus();
};

focusInput();
document.addEventListener('keyup', (e) => {
    if (e.ctrlKey && e.keyCode == 191) {
        focusInput();
    }
});

// enable spinner 
function enableSpinner() {
    countryContainer.innerHTML = `
    <div id="spinner" class="mx-auto">
        <div class="sk-chase">
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
    </div>
    </div>
    `;
};



// load  all Countries 
const loadCountries = async() => {
    const url = 'https://restcountries.com/v3.1/all';
    const res = await fetch(url)
    const data = await res.json()
    displayCountries(data);
};

// show all countries with button click
document.getElementById('show-all').addEventListener('click', () => {
    loadCountries();
    enableSpinner();
    document.getElementById('spinner').style.display = 'flex';
    /* if (countryContainer != null) {
    } */

});


// Load Countries by name 
const countryByName = async() => {
    try {
        const name = query.value;
        const url2 = `https://restcountries.com/v3.1/name\/${name}`;
        const res2 = await fetch(url2)
        const data2 = await res2.json()
        displayCountries(data2);
        // console.log(data2);
    } catch (error) {
        countryContainer.innerHTML = `
       <div class="mx-auto p-2 bg-warning warning">
       <p class="m-0">Please, type valid name to search !!!</p>
       </div>
       `;
    }

};

// Enter Key search 
query.addEventListener('keyup', (e) => {
    if (e.keyCode == 13) {
        countryByName();
        query.value = '';
    }
});

// display counties 
function displayCountries(countries) {
    // const countryContainer = document.getElementById('country-container');
    countryContainer.innerHTML = '';
    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('col', 'mx-auto');
        div.innerHTML = `
        <div class="card">
        <img src="${country.flags.png}" class="card-img-top" alt="..." style="max-height: 200px">
        <div class="card-body">
          <h5 class="card-title">${country.name.common}</h5>
          <p class="card-text">${country.name.official}</p>
          <p class="card-text">Continets: ${country.continents}</p>
          <p class="card-text">Capital: ${country.capital}</p>
          <p>Find on Map: 
          <span><a target="_blank" href="${country.maps.googleMaps}">Google</a> </span>
          </p>
        </div>
      </div>
        
        `;

        countryContainer.appendChild(div);

    });
};