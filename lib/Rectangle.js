import {Graphics } from 'pixi.js';

export default class Rectangle{

constructor(app,canvasWd,canvasHt,x=0,y=0,width=50,height=50){
this.app = app;
const rectangle = new Graphics();
rectangle.beginFill(0xAA33BB)
.lineStyle(1, 'red', 1)
.drawRect((canvasWd/100 * x), (canvasHt/100 * y), 
            (canvasWd/100 * width), (canvasHt/100 * height))
.endFill();
app.stage.addChild(rectangle);

}



}
