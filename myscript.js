let app = new Vue({
    el: "#container",
    data: {
        scudo : "",
    },
    methods : {
        test: function(){
            console.log('prova riuscita');
        },
        scudoUp: function(){
            this.scudo = "up";
            console.log(this.scudo)
        },
        scudoRx: function(){
            this.scudo = "right";
            console.log(this.scudo)
        },
        scudoDown: function(){
            this.scudo = "down";
            console.log(this.scudo)
        },
        scudoLx: function(){
            this.scudo = "left";
            console.log(this.scudo)
        },
        handleKeydown (e) {
        switch (e.keyCode) {
            case 37:
            this.scudoLx();
            break;
            case 38:
                this.scudoUp();
                break;
            case 39: 
            this.scudoRx();
            break;
            case 40: 
            this.scudoDown();
            break;
        }
        },
    },
    beforeMount () {
        window.addEventListener('keydown', this.handleKeydown, null);
    },
});