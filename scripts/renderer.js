(function (scope) {
    class Renderer {
        constructor(ctx, bounds) {
            this.ctx = ctx;
            this.bounds = bounds;
        }

    clear () {
        const { ctx } = this;
        const { width, height } = this.bounds;
        ctx.clearRect(0, 0, width, height);
        }

    rendererDot (left, top) {
        const { ctx } = this;
        ctx.fillRect(left, top, 15, 15);
        }
    }

    scope.Renderer = Renderer;

}(window));