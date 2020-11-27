const  collpay = require('collpay');

collpay.getCountriesPromiseBased()
    .then(function (countries) {
        for (let i=0; i < countries.length; i++) {
            console.log(countries[i].name);
        }
    }).catch(function (err) {
        console.log(err.message);
    })

collpay.getCountriesEventBased()
    .on('success', (countries) => {
        for (let i=0; i < countries.length; i++) {
            console.log(countries[i].name);
        }
    })
    .on('error', (err) => {
        console.log(err.message);
    });

