import './index.css';
import { Assets, Sprite } from 'pixi.js';
import setup from './lib/setup';
import Presentation from './lib/presentation';
////////////////
// async function setup(wdPerc=90 , htPerc=90){
// const wd = (window.innerWidth/100) * wdPerc;
// const ht = (window.innerHeight/100) * htPerc;
// const app = new Application({width: wd ,height: ht});
// document.getElementById('canvas').appendChild(app.view);
// return app;
// }

////////////////
async function run(wdPerc=90 , htPerc=90){
const app = await setup(wdPerc, htPerc);
const presentation = new Presentation(app);

const texture = await Assets.load('./images/bunny.png');

// This creates a texture from a 'bunny.png' image
const bunny = new Sprite(texture);

// Setup the position of the bunny
bunny.x = app.renderer.width / 2;
bunny.y = app.renderer.height / 2;

// Rotate around the center
bunny.anchor.x = 0.5;
bunny.anchor.y = 0.5;

// Add the bunny to the scene we are building
app.stage.addChild(bunny);

// Listen for frame updates
app.ticker.add(() => {
    // each frame we spin the bunny around a bit
    bunny.rotation += 0.1;
});

window.setTimeout(() => {app.stage.removeChild(bunny)},5000);


}

run();