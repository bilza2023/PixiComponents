import {Graphics } from 'pixi.js';

export default class Grid{

constructor(app,canvasWd,canvasHt,color='red'){
this.app = app;

//---vertical
for (let i = 0; i < 100; i+=10) {

    const line = new Graphics();
    line.lineStyle(1, color, 1)
    .moveTo((canvasWd/100 * i), (canvasHt/100 * 0))
    .lineTo((canvasWd/100 * i), (canvasHt/100 * 100));

    app.stage.addChild(line);
}

//---horizontal
for (let i = 0; i < 100; i+=10) {

    const line = new Graphics();
    line.lineStyle(1, color, 1)
    .moveTo((canvasWd/100 * 0), (canvasHt/100 * i))
    .lineTo((canvasWd/100 * 100), (canvasHt/100 * i));

    app.stage.addChild(line);
}

}//constructor ends



}
