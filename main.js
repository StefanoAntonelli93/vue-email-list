'use strict';

// console.log(axios);

// // ESEMPIO AXIOS SENZA VUE

//     axios.get('https://api.sampleapis.com/beers/ale').then((response) => {
//         // prende tutti gli elementi data
//         console.log(response.data);
//         response.data.forEach((element) => {
//             // visualizza la chiave name degli elementi
//             console.log(element.name);
//         });
            
//     });




// AXIOS CON VUE

    const { createApp } = Vue;

    createApp( {
        data() {
            return {
                title: 'dieci mail',
                // ARRAY VUOTO
                emails: [],
                url: 'https://flynn.boolean.careers/exercises/api/random/mail',
            };
        },
        methods: {
            // FACCIO CHIAMATA API
            apiCall() {
                axios.get(this.url).then((response) => {
                console.log(response.data.response);
                // ARRAY VUOTO SI RIEMPIE DI DATA
                this.emails.push(response.data.response);
                
            });
            }
        },
        // lifecycle di vue della nostra 'app' nel momento created
        created() {
            for (let i = 0; i < 10; i++) {
                this.apiCall();
            }
        },
    }).mount('#app');