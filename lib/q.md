here is my Text object that users Pixi.js Text object

import {TextStyle,Text as PIXIText } from 'pixi.js';

export default class Text{

constructor(app,canvasWd,canvasHt,x=0,y=0,content='Content',color='black'){
this.app = app;

const style = new TextStyle({
    fontFamily: 'Montserrat',
    fontSize: 48,
    fill: color,
    stroke: '#ffffff',
    strokeThickness: 2,
    dropShadow: true,
    dropShadowDistance: 10,
    dropShadowAngle: Math.PI / 2,
    dropShadowBlur: 4, 
    dropShadowColor: '#000000'
});

const myText = new PIXIText( content , style);
myText.x = x;
myText.y = y;
console.log('myText.width', myText.width);
app.stage.addChild(myText);

}



}


This is how I use it from main.js
import './index.css';
import { Assets, Sprite,Graphics } from 'pixi.js';
import setup from './lib/setup';
import Presentation from './lib/presentation';
import Rectangle from './lib/Rectangle';
import Line from './lib/Line';
import Grid from './lib/Grid';
import Circle from './lib/Circle';
import Text from './lib/Text';
import Icons from './lib/icons';
import Icon from './lib/Icon';
////////////////
async function run(wdPerc=90){
const {app,canvasWd,canvasHt} = await setup(wdPerc);
console.log('canvasWd', canvasWd,'canvasHt',canvasHt);
const presentation = new Presentation(app);

const rectangle = new Rectangle(app,canvasWd,canvasHt, 50,50,10,40);
const line = new Line(app,canvasWd,canvasHt, 0,0,50,50);
const grid = new Grid(app,canvasWd,canvasHt,'green');
const circle = new Circle(app,canvasWd,canvasHt);

const text = new Text(app,canvasWd,canvasHt,0,100,'This is content!!','red');
const icon = new Icon(app,canvasWd,canvasHt,10,10,Icons.BUS);


}

run(50);

Question : the width of 'This is content!!' == 327 pix as displayed by 
console.log('myText.width', myText.width);
while the font size is
    fontSize: 48,

How do I make sure that the fontSize is calculated such that the width of text is equal to given pixels in size.

For example I want to add another argument to this object "desiredWidth" which is the desired width of the text in pixels and the object should find a suitable fontSize the makes the text width = desiredWidth (or approximately equal to desiredWidth) ?