var app = new Vue ({
    el: '#root',
    data: {
        media: [],
        cast: [],
        query: '',
        solid: 'fas',
        visible: false,
        show: true,
        check: false,
        ricerca: false,
        image: null,
        flip: false
        // my_input: 'focus'

    },

    mounted(){
        // this.focusInput();
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
                this.ricerca= false;

            })
            // this.query = '';

        },

        cast_search(id, media_type){

            axios.get('https://api.themoviedb.org/3/' + media_type + '/' + id + '/credits', {
                params: {
                    api_key: '04b3ed8850d2c7627102f2c8b2457428',
                }
            })
            .then((res) => {
                // return res.data.cast.slice(0, 5);
                this.cast = res.data.cast.slice(0, 5);
                this.cast.forEach((item) => {

                    console.log(item.name);
                });



            })

        },


        vote(voto) {
            return parseInt(voto * 0.5);

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

            // this.nextTick(() =>{
            //   this.focusInput();
            // })


        },

        // focusInput(){
        //     this.$refs.search.$el.focus();
        // },




        // compare la X se l'utente digita almeno una lettera
        // scompare la X se query è vuoto
        isDel(){
            if (this.check == false) {
                this.check = true
            } else if(this.query == '') {
                this.check = false
            }
        },



        empty(){
            this.query = "";
        },

        // image_default(e){
        //     e.target.src = 'https://pdsohio.com/wp-content/uploads/2017/04/default-image.jpg'
        // }


    }







})
