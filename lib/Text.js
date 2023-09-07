import {TextStyle,Text as PIXIText } from 'pixi.js';

export default class Text{

constructor(app,canvasWd,canvasHt,x=0,y=0,content='Content',color='black',desiredWidth=320){
this.app = app;

const fontSize = calculateFontSize(content, desiredWidth);
console.log('fontSize' ,fontSize);

const style = new TextStyle({
    fontFamily: 'Montserrat',
    fontSize,
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


////////////
function calculateFontSize(content, desiredWidth, initialFontSize = 80) {
    let fontSize = initialFontSize;
    let myText;
    do {
        const style = new TextStyle({
            fontFamily: 'Montserrat',
            fontSize,
            // fill: color,
            stroke: '#ffffff',
            strokeThickness: 2,
            dropShadow: true,
            dropShadowDistance: 10,
            dropShadowAngle: Math.PI / 2,
            dropShadowBlur: 4,
            dropShadowColor: '#000000'
        });

        myText = new PIXIText(content, style);
        fontSize--;
    } while (myText.width > desiredWidth && fontSize > 0);

    return fontSize;
}
