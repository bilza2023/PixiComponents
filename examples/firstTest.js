import './index.css';
import setup from './lib/setup';
import Presentation from './lib/presentation';
import Icons from './lib/icons';
//====
import {RectFill,Rect,Line,Grid,Circle,CircleFill,Text} from './lib/components';
////////////////
async function run(wdPerc=90){
const {app,canvasWd,canvasHt} = await setup(wdPerc);

console.log('canvasWd', canvasWd,'canvasHt',canvasHt);

const presentation = new Presentation(app);

/////////////////////////////////////////////////////////
const rectFill = new RectFill(app,canvasWd,canvasHt, 50,50,10,40,'blue').draw();

const rect = new Rect(app,canvasWd,canvasHt, 10,60,20,10,'red').draw();

const line = new Line(app,canvasWd,canvasHt, 0,0,50,50).draw();

const grid = new Grid(app,canvasWd,canvasHt,'red').draw();

const circle = new Circle(app,canvasWd,canvasHt,10,10,10,'green').draw();
const circlefill = new CircleFill(app,canvasWd,canvasHt,70,70,10,'green').draw();

const text = new Text(app,canvasWd,canvasHt,0,100,'This is content!!','green',340).draw();
const textIcon = new Text(app,canvasWd,canvasHt,50,250,Icons.BUS,340).draw();


}

run(50);