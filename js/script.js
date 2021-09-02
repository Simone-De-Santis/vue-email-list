console.log("Vue", Vue);
Vue.config.devtools = true;

const app = new Vue({
    el: "#app",
    data: {
        mail: ""

    },
    methods: {},
    created() {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((res) => {
            this.mail = res.data.response;
        });
    },
});



























// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.