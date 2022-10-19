
//Cada uno de los elementos del juego

class Entity {
    /**
     * Inicializa un elemento del juego
     * (game) La instancia del juego al que pertenece el elemento
     * (width) Ancho del elemento
     * (height) Alto del elemento
     * (x) Posición horizontal del elemento
     * (y) Posición vertical del elemento
     * (speed) Velocidad del elemento
     * (myImageSrc) Ruta de la imagen del elemento
     */
  
    constructor (game, width, height, x, y, speed, myImageSrc) {
        this.game = game;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.myImageSrc = myImageSrc;
        this.image = new Image();
        this.image.src = this.myImageSrc;
        this.image.className =  this.constructor.name;
        this.image.style.position = "absolute";
        this.image.style.height = this.height === "auto" ? "auto" : `${this.height}px`;
        this.image.style.width = this.width === "auto" ? "auto" : `${this.width}px`;
        this.image.style.top = `${this.y}px`;
        this.image.style.left = `${this.x}px`;
        document.body.appendChild(this.image);
    }

    // Actualiza la posición del elemento en la pantalla

    render () {
        this.image.style.top = `${this.y}px`;
        this.image.style.left = `${this.x}px`;
    }
}