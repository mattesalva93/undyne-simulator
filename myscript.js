let app = new Vue({
    el: "#app",
    data: {
        scudo : "",
        contatore: 1,
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
        arrowDown(){
            let pos = 0;
            let frecciaGiu = "";
            let indice = 0 + this.contatore;
            frecciaGiu += `
            <div class="arrow arrow-down" id="arrowDown-${indice}"></div>
            `;
            const attacchi = document.getElementById("attacchi");
            attacchi.innerHTML += frecciaGiu;
            setInterval(() => {
                if(pos < 45){
                    pos += 0.5;
                    let attaccoGiu = document.getElementById("arrowDown-" + indice);
                    attaccoGiu.style.top = pos + "%";
                }else{
                    let figlio = document.getElementById("arrowDown-" +  indice);
                    figlio.style.display = "none";                    
                    clearInterval();
                } 
            }, 20);
        },
        arrowUp(){
            let pos = 0;
            let frecciaSu = "";
            let indice = 0 + this.contatore;
            frecciaSu += `
            <div class="arrow arrow-up" id="arrowUp-${indice}"></div>
            `;
            const attacchi = document.getElementById("attacchi");
            attacchi.innerHTML += frecciaSu;
            setInterval(() => {
                if(pos < 45){
                    pos += 0.5;
                    let attaccoSu = document.getElementById("arrowUp-" + indice);
                    attaccoSu.style.bottom = pos + "%";
                }else{
                    let figlio = document.getElementById("arrowUp-" +  indice);
                    figlio.style.display = "none";
                    clearInterval();
                } 
            }, 20);
        },
        arrowLeft(){
            let pos = 0;
            let frecciaLeft = "";
            let indice = 0 + this.contatore;
            frecciaLeft += `
            <div class="arrow arrow-left" id="arrowLeft-${indice}"></div>
            `;
            const attacchi = document.getElementById("attacchi");
            attacchi.innerHTML += frecciaLeft;
            setInterval(() => {
                if(pos < 48){
                    pos += 0.5;
                    let attaccoLeft = document.getElementById("arrowLeft-" + indice);
                    attaccoLeft.style.left = pos + "%";
                }else{
                    let figlio = document.getElementById("arrowLeft-" +  indice);
                    figlio.style.display = "none";
                    clearInterval();
                } 
            }, 20);
        },
        arrowRight(){
            let pos = 0;
            let frecciaRight = "";
            let indice = 0 + this.contatore;
            frecciaRight += `
            <div class="arrow arrow-right" id="arrowRight-${indice}"></div>
            `;
            const attacchi = document.getElementById("attacchi");
            attacchi.innerHTML += frecciaRight;
            setInterval(() => {
                if(pos < 48){
                    pos += 0.5;
                    let attaccoRight = document.getElementById("arrowRight-" + indice);
                    attaccoRight.style.right = pos + "%";
                }else{
                    let figlio = document.getElementById("arrowRight-" +  indice);
                    figlio.style.display = "none";
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
        this.arrowLeft();
        setTimeout(() => {
            this.contatore++;
            this.arrowDown();
        }, 400);
        setTimeout(() => {
            this.contatore++;
            this.arrowUp();
        }, 800); 
        setTimeout(() => {
            this.contatore++;
            this.arrowRight();
        }, 1200); 
    },
});