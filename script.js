'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
//https://countries-api-836d.onrender.com/countries/
////////////////////////////////////////
const request = new XMLHttpRequest();

request.open('GET', 'https://countries-api-836d.onrender.com/countries')
request.send();


request.addEventListener('load', function(){
    console.log(this.responseText);

})