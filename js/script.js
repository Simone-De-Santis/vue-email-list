console.log("Vue", Vue);
Vue.config.devtools = true;

const app = new Vue({
    el: "#app",
    data: {
        mailList: [],

    },
    methods: {},
    created() {
        for (let i = 0; i < 10; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((res) => {
                // run in caso di nessun errore
                const mail = res.data.response;
                this.mailList.push(mail);
            }).catch((error) => {
                // run in caso di errore
                console.log(error);
            }).then(() => {
                // run in ogni caso

            })


        }
    },
});



























// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.