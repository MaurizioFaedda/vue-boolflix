var app = new Vue ({
    el: '#root',
    data: {
        media: [],
        query: '',
        solid: 'fas',
        visible: false,
        show: true,
        check: false

    },

    methods: {
        utent_search(query){

            axios.get('https://api.themoviedb.org/3/search/multi', {
                params: {
                    api_key: '04b3ed8850d2c7627102f2c8b2457428',
                    query: query
                }
            })
            .then((res) => {
                this.media = res.data.results;
            })
            // this.query = '';

        },

        isActive(){
            if(this.visible == false){
                this.visible = true;
                this.show = false
            }else if(this.visible == true && this.query != ''){
                this.visible = true
                this.show = false
            } else{
                this.visible = false
                this.show = true
            }
        },

        isDel(){
            if (this.check == false) {
                this.check = true
            } else if(this.query == '') {
                this.check = false
            }
        },

        empty(){
            this.query = "";
        }
    },

    // computed:{
    //
    //     star(item){
    //         let voto5 = parseInt(item)*0.5;
    //         return voto5
    //     }
    // }





})
