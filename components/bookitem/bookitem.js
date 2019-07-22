new Vue({
    el: '#gbs',
    data() {
        return {
            infoDic: null
        }
    },
    mounted() {
        axios({
            url: 'https://www.read-a-book.wang/get_bookshelf',
            method: 'POST',
            //发送格式为json
            data: JSON.stringify({"sessionId": 6}),
            headers:
                {
                    'Content-Type': 'text/plain;charset=utf-8'
                }
        }).then(response => {
            this.infoDic = response.data.data;
        })
    }
})

Vue.component('bookinfo',{
    props: {
        id: Number,
        webUrl: String,
        imgUrl: String,
        title: String,
        sessionId: String,
        writer: String,
        publisher: String,
        pubTime: String,
        intro: String,
        shortIntro: String,
        tags: String,
        rating: Number,
        lastRead: String
    },
    data: function(){
        return{
            // title:'',
            // writer: '',
            // imgUrl: '',
            // publisher: '',
            // pubTime: '',
            // lastRead: '',
        }
    },
    template: '<div>' +
        '<div><img v-bind:src="imgUrl"></div>' +
        '<div>{{title}}</div>' +
        '<div>{{writer}}/{{publisher}}/{{pubTime}}</div>' +
        '<div>上次阅读：{{lastRead}}</div>' +
        '</div>',
})
