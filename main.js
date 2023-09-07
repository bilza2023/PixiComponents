import './index.css';
import setup from './lib/setup';
import Icons from './lib/icons';
//====
import {RectFill,Rect,Line,Grid,Circle,CircleFill,Text} from './index.js';
////////////////
async function run(wdPerc=90){
const {app,canvasWd,canvasHt} = await setup(wdPerc);
app.renderer.background.color = '#f3f4c6';
/////////////////////////////////////////////////////////
const grid = new Grid(app,canvasWd,canvasHt,'#d9dd9d').draw();

const text = new Text(app,canvasWd,canvasHt,50,10,'This is content!!','green',340).draw();


}

run(70);

/**
   This library should have components along with
    1- Placement
    2- sizing
    3- Rotatation

 */