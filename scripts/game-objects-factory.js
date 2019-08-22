(function (scope) {
    const {SIZES} = scope;
    class GameObjectFactory {
        constructor(width, height) {
            this.bounds = {width, height};
        }
        createPlayer () {
            const {width, height } = this.bounds;
            const {HEIGHT, WIDTH } = SIZES.PLAYER;
            const left = (width - WIDTH) / 2;
            const top = height - HEIGHT;
            const player = {top, left};
            return player;
        }
    }
    scope.GameObjectFactory = GameObjectFactory;
    
}(window));