
// Disparo de un Character (hereda de la clase Entity)

class Shot extends Entity {
    /**
     * Inicializa un disparo
     * (game) La instancia del juego al que pertenece el personaje
     * (character) Personaje del juego que lanza el disparo
     */

    constructor (game, character) {
        const width = SHOT_WIDTH * game.width / 100;
        const height = SHOT_HEIGHT * game.width / 100;
        const x = character.x + character.width / 2 - width / 2;
        const y = character.y + character.height - character.height / 2;
        const speed = SHOT_SPEED;
        const myImageSrc = character instanceof Player ? SHOT_PICTURE_PLAYER : SHOT_PICTURE_OPPONENT;
        super(game, width, height, x, y, speed, myImageSrc);
        this.type = character instanceof Player ? "PLAYER" : "ENEMY"; // Tipo del personaje que lanza el disparo
    }

    // Actualiza los atributos de posición del disparo
    update () {
        if (this.type === "PLAYER") {
            this.y = this.y - this.speed; 
        } else {
            this.y = this.y + this.speed;
        }
        if (this.y < 0 || this.y > this.game.height) {
            this.game.removeShot(this);
            document.body.removeChild(this.image);
        }
    }
}