$(function () {
    var vue = new Vue({
        el: '#app',
        data: {
            fact: null,
            number: null
        },
        methods: {
            getFact() {
                if (this.number % 1 == 0 && this.number != null) {
                    this.$http.get('http://numbersapi.com/' + this.number).then(response => {
                        this.fact = response.body;
                    })
                }
                else {
                    alert("Please give valid number.");
                    return;
                }
            } ,
            randomNumber() {
                this.number = Math.floor(Math.random() * 1000);
                this.getFact();
            }
        }
    })
})