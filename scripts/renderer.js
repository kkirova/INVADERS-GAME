(function (scope) {
    const { SIZES } = scope;
    class Renderer {
        constructor(canvas, bounds) {
            this.ctx = canvas.getContext('2d');
            this.bounds = bounds;
            this._preloadImage('bulletImage', 'data:image/jpeg;base64,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');
            this._preloadImage('playerImage', 'https://cdn.pixabay.com/photo/2013/07/12/17/57/teddy-bear-152700_1280.png');
            this._preloadImage('enemyImage', 'https://www.freeiconspng.com/uploads/walking-lion-png-3.png');
        }
        _preloadImage(propName, src) {
            const image = new Image();
            image.src = src;
            image.onload = () => {
                this[propName] = image;
            };
        }
        clear() {
            const { ctx } = this;
            const { width, height } = this.bounds;
            ctx.clearRect(0, 0, width, height);
        }
        renderPlayer(player) {
            const { left, top, direction } = player;
            const { ctx } = this;
            const { WIDTH, HEIGHT } = SIZES.PLAYER;
            if(this.playerImage) {
                if(direction === 'right') {
                    ctx.save();
                    ctx.translate(left, top);
                    ctx.rotate(15 * Math.PI / 180);
                    ctx.scale(0.5, 1);
                    ctx.translate(-left, -top);
                } else if(direction === 'left') {
                    ctx.save();
                    ctx.translate(left, top);
                    ctx.rotate(-15 * Math.PI / 180);
                    ctx.scale(0.5, 1);
                    ctx.translate(-left, -top);
                }
                ctx.drawImage(this.playerImage, left, top, WIDTH, HEIGHT);
                
                if(direction) {
                    ctx.restore();
                }
            }
        }
        renderBullets(bullets) {
            bullets.forEach(bullet => this.renderBullet(bullet));
        }
        renderBullet(bullet) {
            const { left, top } = bullet;
            const { ctx } = this;
            const { WIDTH, HEIGHT } = SIZES.BULLET;
            if(this.bulletImage) {
                ctx.drawImage(this.bulletImage, left, top, WIDTH, HEIGHT);
            }
        }
        renderEnemies(enemies) {
            enemies.forEach(enemy => this.renderEnemy(enemy));
        }
        renderEnemy(enemy) {
            const { left, top } = enemy;
            const { ctx } = this;
            const { WIDTH, HEIGHT } = SIZES.ENEMY;
            if(this.enemyImage) {
                ctx.drawImage(this.enemyImage, left, top, WIDTH, HEIGHT);
            }
        }
    }

    scope.Renderer = Renderer;
}(window));
