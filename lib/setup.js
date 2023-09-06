import { Application } from 'pixi.js';


export default async function setup(wdPerc=90 , htPerc=90){
const wd = (window.innerWidth/100) * wdPerc;
const ht = (window.innerHeight/100) * htPerc;
const app = new Application({width: wd ,height: ht});
document.getElementById('canvas').appendChild(app.view);
return app;
}
