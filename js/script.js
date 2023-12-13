const { createApp } = Vue


createApp({
    data() {
        return {
            newEmails: [],
        }
    },

    methods: {
        getNewEmail(){
            for (let index=0; index < 10; index++) {
                
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(
                    (response) => {
                        this.newEmails.push(response.data.response);
                    });
                
            }
        },

    },
    
    created(){
        this.getNewEmail();
    },

}).mount('#app');