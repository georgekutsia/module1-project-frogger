class Speeder extends Vehicle {

    constructor (ctx, x, y, vx) {
        super(ctx, x, y, vx)

        this.w = 20;
        this.h = 20;

        this.img = new Image();
        if (this.vx > 0) {
            this.img.src = 'assets/img/speeder-right.png';
        }
        if (this.vx < 0) {
            this.img.src = 'assets/img/speeder-left.png';
        }
    }

    /*constructor(ctx, x, y, vx) {
        this.ctx = ctx;

        this.x = x
        this.y = y
        this.vx = vx

        this.w = 20;
        this.h = 20;

        this.img = new Image();
        this.img = new Image();
        if (this.vx > 0) {
            this.img.src = 'assets/img/speeder-right.png';
        }
        if (this.vx < 0) {
            this.img.src = 'assets/img/speeder-left.png';
        }
    }

    draw() {
        this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.w,
            this.h,
        );
    }

    move() {
        this.x += this.vx;
    }

    isVisible() {
        if (this.vx > 0) {
            return this.x < 350
        }
        if (this.vx < 0) {
            return this.x + this.w > 0
        }
    }

    collides(player) {
        const colX = this.x <= player.x + player.w &&
                     this.x + this.w > player.x;
        
        const colY = this.y + this.h > player.y &&
                     this.y < player.y + player.h;

        return colX && colY;
    }*/
}