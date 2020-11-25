var app = new Vue ({
    el: '#root',
    data: {
        media: [],
        query: '',
        solid: 'fas',
        visible: false,
        show: true,
        check: false,
        ricerca: false,
        // my_input: 'focus'

    },

    mounted(){
        this.focusInput();
    },

    methods: {
        utent_search(query){

            this.ricerca = true
            axios.get('https://api.themoviedb.org/3/search/multi', {
                params: {
                    api_key: '04b3ed8850d2c7627102f2c8b2457428',
                    query: query
                }
            })
            .then((res) => {
                this.media = res.data.results;
                this.ricerca= false
            })
            // this.query = '';

        },

        isActive(){
             //seconda condizione per non far scomparire la barra con onblur quando l'utente ha inserito almeno una lettera
            if((this.visible == false) || (this.visible == true && this.query != '')){
                this.visible = true;
                this.show = false
            } else{
                this.visible = false
                this.show = true
            };

            this.nextTick(() =>{
              this.focusInput();
            })


        },

        focusInput(){
            this.$refs.search.$el.focus();
        },




        // compare la X se l'utente digita almeno una lettera
        // scompare la X se query è vuoto
        isDel(){
            if (this.check == false) {
                this.check = true
            } else if(this.query == '') {
                this.check = false
            }
        },

        // empty_media(){
        //     if (this.query.length === 0){
        //         this.query = '';
        //     }
        // },



        empty(){
            this.query = "";
        },


    }







})
