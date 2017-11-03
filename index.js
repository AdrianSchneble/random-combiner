

var vm = new Vue({
  el: '#main',
  data: {
    input: [

    ],
    result: "",
    listcount: 2
  },
  methods: {
    generate() {
      let elements = [];
      for (let i = 0; i < this.input.length; i++) {
        let list = this.getArrayFromString(this.input[i]);
        let index = Math.round(Math.random() * (list.length - 1));
        let el = list[index];
        elements.push(el);
      }
      this.result = "";
      for (let i = 0; i < elements.length; i++) {
        this.result += (i !== 0 ? "-" : "") + elements[i]
      }
    },
    getArrayFromString(string) {
      return string.split(/\r?\n/g);
    }
  },
  watch: {
    listcount(newVal) {
      //TODO instead of deleting the content, just ignore it!
      while (this.input.length > this.listcount) {
        this.input.pop();
      }
    }
  }
});