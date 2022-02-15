class Dinosaur {
    appearance = null;
    width = 10;
    height = 20;
    speed = 10;
    ctx = null;
    positionX = null;
    positionY = null;
    time = 500;

    constructor(gameContext) {
        this.gameContext = gameContext;
        this.positionX = 10;
        this.positionY = 320;

        this.appearance = new Image();
        this.appearance.src = "assets/images/dino.png";

        this.appearance.onload = (() => {
            this.gameContext.ctx.drawImage(this.appearance, 0, 0, 200, 200, this.positionX, this.positionY, 75, 75);
        })
    }


    move = (() => {
        setTimeout(() => {
            
            this.gameContext.ctx.drawImage(this.appearance, 0, 0, 200, 200, this.positionX, this.positionY, 75, 75);
            requestAnimationFrame(this.move)
        }, 0);

        console.log('dinosaur is running');
    })

    setSpeed(baseSpeed, level) {
        this.speed = baseSpeed + level;
    }
    jump() {
        setTimeout(() => {
            this.positionY = this.positionY + 75;
            dinoPos(this.positionY + 75);
            this.gameContext.ctx.clearRect(0, 0, this.gameContext.canvas.width, this.gameContext.canvas.height);
            this.gameContext.ctx.drawImage(this.appearance, 0, 0, 200, 200, this.positionX, this.positionY, 75, 75);

            requestAnimationFrame(this.move)
            this.frameIndex++; 
        }, this.time);

        setTimeout(() => {
            this.positionY = this.positionY - 75;
            this.gameContext.ctx.clearRect(0, 0, this.gameContext.canvas.width, this.gameContext.canvas.height);
            this.gameContext.ctx.drawImage(this.appearance, 0, 0, 200, 200, this.positionX, this.positionY, 75, 75);

            requestAnimationFrame(this.move)
            this.frameIndex++; 
        }, 100);

        console.log('dinosaur is jumping!!');
    }
}