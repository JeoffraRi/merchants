import k from '../kaboom';

export const mainScene = (): void => {
    const {
        add,
        height,
        pos,
        width,
        anchor,
        loadSprite,
        sprite,
        area,
        body,
        onKeyDown,
        scale,
    } = k;
    loadSprite("merchantconspiracy", "MERCHANTCONSPIRACY.png");
    loadSprite("pirate", "pirate.png");
    loadSprite('background', 'map.jpg');
    const map = add([
        sprite('background'),
        pos(-100, -1000),
        scale(3)
    ]);
    const player = add([
        scale(8),
        sprite("pirate"),
				area(),
				body(),
        pos(width() / 2, height() / 2),
        anchor("center"),
    ]);


    // keypresses
    onKeyDown("a", () => {
        map.move(200, 0);
    });
    onKeyDown("d", () => {
        map.move(-200, 0);
    });
    onKeyDown("s", () => {
        map.move(0, -200);
    });
    onKeyDown("w", () => {
        map.move(0, 200);
    });
    onKeyDown("=", () => {
        const map = add([
            sprite('merchantconspiracy'),
            pos(0, 0),
            scale(0.6)
        ]);
    });


};
