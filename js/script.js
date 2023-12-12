const { createApp } = Vue


createApp({
    data() {
        return {
            newEmail: '',
            newEmails: [],
        }
    },

    methods: {
        getNewEmail(){
            for (let i=0; i < 10; i++) {
                
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(
                    (response) => {
                        console.log(response);
                        this.newEmails.push(response.data.response);
                        // this.newEmail = response.data.response;
                    });
                
            }
        },

    },
    
    created(){
        this.getNewEmail();
    },

}).mount('#app');