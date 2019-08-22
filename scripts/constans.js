(function (scope) {
    const SIZES = {
        PLAYER: {
            HEIGHT: 70,
            WIDTH: 80,
            SPEED: 40,
        },
        BULLET: {
            HEIGHT: 20,
            WIDTH: 20,
            SPEED: -5,
        },
        ENEMY: {
            SPEED: 3,
            HEIGHT: 60,
            WIDTH: 60,
        },
    };

    const KEY_CODES = {
        LEFT: 37,
        RIGHT: 39,
        FIRE: 32,
    };
    
    scope.SIZES = SIZES;
    scope.KEY_CODES = KEY_CODES;
}(window));