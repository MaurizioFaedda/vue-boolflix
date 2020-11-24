var app = new Vue ({
    el: '#root',
    data: {
        films: [],
        query: ''

    },

    methods: {
        utent_search(query){

            axios.get('https://api.themoviedb.org/3/search/movie', {
                params: {
                    api_key: '04b3ed8850d2c7627102f2c8b2457428',
                    query: query
                }
            })
            .then((res) => {
                this.films = res.data.results;
            })
            this.query = '';
        }
    },


})
