(function (scope) {
    const {
        Renderer
    } = scope;

    const dot = {
        left: 0,
        top: 100
    };

    let iteration = 0;

    class Game {
        constructor(selector, width, height) {
            const gameContainer = document.querySelector(selector);
            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            gameContainer.appendChild(canvas);
            const ctx = canvas.getContext('2d');
            this.bounds = {
                width,
                height,
            };

            this.renderer = new Renderer(ctx, this.bounds);
        }

        start() {
            this._gameLoop();
        }

        _gameLoop() {
            this.renderer.clear();
            const {
                left,
                top
            } = dot;

            this.renderer.rendererDot(left, top);
            const alpha = Math.sin(iteration);
            iteration++;
            dot.left += 1;
            dot.top += alpha * 5;
            window.requestAnimationFrame(() => {
                this._gameLoop();
            });
        }
    }
    scope.Game = Game;

}(window));