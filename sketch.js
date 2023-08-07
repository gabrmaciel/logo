let img;

function preload()  
{
  img =loadImage('datadot-1.png');
}

function setup() {
  img.resize(600,300);
  //image(img,0,0,600,600);
  createCanvas(600,600,WEBGL);
  translate(width/2,height/2);
  //image(img,0,0,600,600);  
  
  // noStroke();
}

function draw() {
  noLoop();
 // background('gray');
  noStroke();
  translate(-width/2,-height/2);  
  myFun(); 
}

function myFun()
{
  let nTiles= 50; 
  let tileSize = width/nTiles;
  //let p=tileSize/2;

  for(let x=0;x<=nTiles;x++)
  {
    for(let y=0;y<=nTiles;y++)
    {
      // console.log(x);
      // console.log(y);
      let c = img.get(int(x*tileSize),int(y*tileSize));
      fill(c);
      ellipse(x*tileSize,y*tileSize,tileSize,tileSize); 
    }
  }
}
