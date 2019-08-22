(function (scope) {
    const { renderer } = scope;
    
    const init = function (selector, width, height) {
        const gameContainer = document.querySelector(selector);
        const canvas = document.createElement('canvas');
        gameContainer.appendChild(canvas);
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        this.bounds = {
            width,
            height,
        };

        this.renderer = new Renderer(ctx, this.bounds);
        return this;
    };

    const dot = {
        left: 0,
        top: 100
    };

    let iteration = 0;
    const gameLoop = function () {
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
            this.gameLoop();
        });
    };

    const start = function () {
        this.gameLoop();
    };

    const game = {
        init,
        start,
        gameLoop
    };

    window.game = game;
}(window));