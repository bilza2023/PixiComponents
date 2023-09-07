import './index.css';
import setup from './lib/setup';
import Presentation from './lib/presentation';
import Icons from './lib/icons';
//====
import {RectFill,Rect,Line,Grid,Circle,CircleFill,Text} from './lib/components';
////////////////
async function run(wdPerc=90){
const {app,canvasWd,canvasHt} = await setup(wdPerc);

const presentation = new Presentation(app,'#ebefae');
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