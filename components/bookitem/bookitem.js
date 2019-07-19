

new Vue({
  el: '#gbs',
  data() {
    return {
      infoDic: null
    }
  },
  mounted() {
    // axios.post('https://www.read-a-book.wang/get_bookshelf',{"sessionId":6})
    //   .then(response => (this.info = response))
    //   .catch(error => (this.info = error));
    axios({
      url: 'https://www.read-a-book.wang/get_bookshelf',
      method: 'POST',
      //发送格式为json
      data: JSON.stringify({"sessionId":6}),
      headers:
        {
          'Content-Type': 'text/plain;charset=utf-8'
        }
    }).then(response => {
      this.infoDic = response.data.data;
    } )

  }
})
