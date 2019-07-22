new Vue({
  el: '#getbookshelf',
  data() {
    return {
      infoDic: null
    };
  },
  created() {
    const that = this
    this.request({
      url: 'https://www.read-a-book.wang/get_bookshelf',
      method: 'POST'
    }).then(function(res) {
      const resData = res.data
      if (resData.code === 100) {
        const avatear = resData.data.avater
        resData.data.avatar = avatear
        that.formData = resData.data
      }
    })
  }
})
