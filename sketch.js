function setup() {
  createCanvas3D(windowWidth, windowHeight);
  background3D("white"); 

  environment(SUNSET);
  let albero = beginGroup();
  diffuse("green");
  // sphere(0, 3, 0, 2);
  align(TOP);
  capsule(0, 2, 0, 2.5,2);
  diffuse("brown");
  cylinder(0, 0, 0, 0.8, 2.5);
  endGroup();
  
  let lato = 100;
  align(BOTTOM);
  diffuse("#27800A")
  box(0,0,0,lato,1,lato);
  
  for (let i = 0; i < 200; i++) {
    let x = random(-lato/2,lato/2);
    let z = random(-lato/2,lato/2);
    let nuovoAlbero = clone(albero,x,0,z);       
    let scala = random(0.5,2);
    nuovoAlbero.setScale(scala);
  }

  
  
}

function draw() {

}function windowResized() {

}

