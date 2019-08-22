(function (scope) {
    const { SIZES } = scope;

    class Renderer {
        constructor(canvas, bounds) {
            this.ctx = canvas.getContext('2d');
            this.bounds = bounds;
            const image = new Image();
            image.src = 'https://cdn.pixabay.com/photo/2013/07/12/17/57/teddy-bear-152700_1280.png';
            image.onload = () => {
                this.playerImage = image;
            };
        }

        clear() {
            const { ctx } = this;
            const {width,height} = this.bounds;
            ctx.clearRect(0, 0, width, height);
        }

        renderPlayer(left, top) {
            const { ctx } = this;
            const { HEIGHT, WIDTH } = SIZES.PLAYER;
            if (this.playerImage) {
                ctx.drawImage(this.playerImage, left, top, HEIGHT, WIDTH);
            }
            
        }
        renderBullet(left, top) {
            const { ctx } = this;
            ctx.fillRect(left, top, 15, 15);
        }
        renderEnemy(left, top) {
            const { ctx } = this;
            ctx.fillRect(left, top, 15, 15);
        }
    }

    scope.Renderer = Renderer;

}(window));