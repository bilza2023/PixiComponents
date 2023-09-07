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

const text = new Text(app,canvasWd,canvasHt,0,100,'This is content!!','red',340);
const icon = new Icon(app,canvasWd,canvasHt,10,10,Icons.BUS);


}

run(50);