import {Graphics } from 'pixi.js';

export default class Line{

constructor(app,canvasWd,canvasHt,x1=0,y1=0,x2=50,y2=50){
this.app = app;

const line = new Graphics();
line.lineStyle(1, 'red', 1)
.moveTo((canvasWd/100 * x1), (canvasHt/100 * y1))
.lineTo((canvasWd/100 * x2), (canvasHt/100 * y2));

app.stage.addChild(line);


}



}
