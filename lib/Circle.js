import {Graphics } from 'pixi.js';

export default class Circle{

constructor(app,canvasWd,canvasHt,x=10,y=10,radius=10){
this.app = app;

const circle = new Graphics();
circle.beginFill(0x22AACC)
.drawCircle((canvasWd/100 * x), (canvasHt/100 * y), 
            (canvasWd/100 * radius/2))
.endFill();

app.stage.addChild(circle);

}



}
