
//Cada uno de los personajes del juego.

class Character extends Entity {
    /**
     * Inicializa un personaje
     * (game) La instancia del juego al que pertenece el personaje
     * (width) Ancho del personaje
     * (height) Alto del personaje
     * (x) Posición horizontal del personaje
     * (y) Posición vertical del personaje
     * (speed) Velocidad del personaje
     * (myImageSrc) Ruta de la imagen del personaje
     * (myImageDeadSrc) Ruta de la imagen del personaje cuando muere
     */
  
    constructor (game, width, height, x, y, speed, myImageSrc, myImageDeadSrc) {
        super(game, width, height, x, y, speed, myImageSrc);
        this.dead = false; // Indica si el personaje está vivo o muerto
        this.myImageDeadSrc = myImageDeadSrc;
    }

    // Mata a un personaje

    collide() {
        this.image.src = this.myImageDeadSrc;
        this.dead = true;
    }
}

