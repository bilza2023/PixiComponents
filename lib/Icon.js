import {TextStyle,Text as PIXIText } from 'pixi.js';

export default class Icon{

constructor(app,canvasWd,canvasHt,x=0,y=0,content='Content'){
this.app = app;

const style = new TextStyle({
    fontFamily: 'Montserrat',
    fontSize: 48,
    fill: 'red',
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
app.stage.addChild(myText);

}



}
