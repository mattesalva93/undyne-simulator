let app = new Vue({
    el: "#app",
    data: {
        scudo : "",
        pos: 0,
    },
    methods : {
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
        moveDown(){
            setInterval(() => {
            if(this.pos < 320){
                this.pos += 2;
                let attaccoGiu = document.getElementById("arrowDown");
                attaccoGiu.style.top = this.pos + "px";
                console.log(this.pos);
            }else{
                let attaccoGiu = document.getElementById("arrowDown");
                attaccoGiu.style.display = "none";
                clearInterval();
            }
            }, 20);
        },
        //mappare ogni tramite keycode i tasti su giu sinistra destra le relative funzioni per lo scudo
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
    //assegnazione alla windows delle funzioni per spostare lo scudo
    beforeMount () {
        window.addEventListener('keydown', this.handleKeydown, null);
    },
    mounted() {
        this.moveDown();
    },
});