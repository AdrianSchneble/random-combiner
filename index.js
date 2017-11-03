

var vm = new Vue({
  el: '#main',
  data: {
    input: [

    ],
    result: "",
    listcount: 4
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
    },
    input(newVal) {
      console.log("cookie:");
      console.log(document.cookie);
      createCookie("inputLength", newVal.length, 7);
      for (let i = 0; i < newVal.length; i++) {
        console.log(newVal[i]);
        createCookie("input"+i, newVal[i].replace(/\r?\n/g, " "), 7);
      }
    }
  },
  created() {
    console.log("created");
    if (readCookie("inputLength") !== null) {
      for (let i = 0; i < Number(readCookie("inputLength")); i++) {
        this.input.push(readCookie("input"+i).replace(/ /g, "\r\n"));    //TODO don't use space for replacing!
      }
    }
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++)
      eraseCookie(cookies[i].split("=")[0]);
  }
});

