function keyTyped() {
  if (key === "s") {
    save("Truchetmultilines" + noise(1) + ".svg");
  }
}

function setup() {
  const canvasW = 450;
  const canvasH = 450;
  createCanvas(canvasW, canvasH,SVG);
  background(255);
  angleMode(RADIANS);
  
  strokeWeight(1);
  noFill();

  function keyTyped() {
  if (key === "s") {
    save("Truchet" + noise(1) + ".svg");
  }
}
  
function angleIntersectGen (x1,y1,x2,y2,r1,r2){  

// https://lucidar.me/en/mathematics/how-to-calculate-the-intersection-points-of-two-circles/
  
  d = sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
  a = (r1*r1-r2*r2+d*d)/(2*d);
  h= sqrt(r1*r1-a*a);
  x5 = x1+a/d*(x2-x1);
  y5 = y1+a/d*(y2-y1);
  
  xIntersect1= x5-(h*(y2-y1)/d)
  yIntersect1= y5+(h*(x2-x1)/d);
  
  //rect(xIntersect1,yIntersect1,5,5);
  
  xIntersect2= x5+(h*(y2-y1)/d);
  yIntersect2= y5-(h*(x2-x1)/d);
  
   //rect(xIntersect2,yIntersect2,5,5);
  
  return acos((y2-yIntersect2)/r2) ; 
  //return resultat;
} 
  
//arc(0,200,300,300,3*PI/2,0);  
//arc(200,200,300,300,PI,3*PI/2);
  
//alph = angleIntersectGen (0,200,200,200,150,150); 
//arc(200,200,300,300,PI,3*PI/2-alph);  
  //arc(200,200,300,300,3*PI/2-alph,3*PI/2); 
  
function arcIntersect2(c,r1,r2) {
    if((r1+r2) >= c){
        alph =angleIntersectGen(0,c,c,c,r1,r2);
        arc( c, c, 2*r2, 2*r2, 3*PI/2-alph,3*PI/2);
        
        
  }else{
    
        arc(c, 0, 2*r2, 2*r2, PI,3*PI/2); 
  } 
  
  
  
}
  
  
function arcIntersect(c,r1,r2){
  if((r1+r2) > (c*sqrt(2))){
        alph =angleIntersect(c,r1,r2);
        arc( c, 0, 2*r2, 2*r2, 0.5*PI,0.5*PI+alph);
        arc( c, 0, 2*r2, 2*r2, PI-alph,PI);
  }else{
    alph =angleIntersect(c,r1,r2);
        arc(c, 0, 2*r2, 2*r2, 0.5*PI,PI); 
  }  
} 
   
  
  
function angleIntersect (c,r1,r2){
  
// https://lucidar.me/en/mathematics/how-to-calculate-the-intersection-points-of-two-circles/
  
  d = c * sqrt(2);
  a = (r1*r1-r2*r2+d*d)/(2*d);
  h= sqrt(r1*r1-a*a);
  x5 = a/d*c;
  y5 = a/d*c;
  
  x1= x5-(h*c/d);
  y1= y5+(h*c/d);
  
  x2= x5+(h*c/d);
  y2= y5-(h*c/d);
  return acos((c-x1)/r2) ; 
  //return resultat;
} 
  


  
c=50 //tile size
numb =10; // number of line within tiles
pas = c/numb;
nbPas = 1;
start =nbPas;
end = numb+1-nbPas;
e= 0;
f =0;
  
//tileNumb = random([1,2,3,4,5]) ;
let arrayTile = [
   [10,10,10,10,11,8,9,10,10],
   [10,10,10,11,12,7,6,9,10],
   [10,10,11,12,2,12,4,12,9],
   [10,11,12,2,12,4,6,13,14],
   [11,12,2,12,4,6,2,6,16],
   [14,15,6,4,12,2,12,16,10],
   [17,12,3,6,5,6,16,10,10],
   [10,17,6,18,5,16,10,10,10],
   [10,10,17,8,16,10,10,10,10]
  ];
  
for (e = 0; e < canvasW/c ; e++) {
    for (f = 0; f < canvasW/c ; f++) {
      push()
      translate(e*c,f*c); 
      print(e);
      print(f);
        drawTile(arrayTile[f][e]); 
      

      pop();
      
    }
  }  






  
function drawTile(tileNumb){

if (tileNumb == 1){
push();
  for(i =start; i< end; i++){
    arc(0, c, i*2*pas, i*2*pas, 3* PI/2, TWO_PI);
  }
  for(j =start; j< end; j++){
    arcIntersect(c,c-nbPas*pas,j*pas);
  }
pop(); 
}
  
if (tileNumb == 2){
push();
translate(c,c);
rotate(PI);

  for(i =start; i< end; i++){
    arc(0, c, i*2*pas, i*2*pas, 3* PI/2, TWO_PI);
  }
  for(j =start; j< end; j++){
    arcIntersect(c,c-nbPas*pas,j*pas);
  }
  
pop(); 
}
  
if (tileNumb == 3){
push();
translate(c,c);
rotate(PI/2);
translate(-c,0);  
  for(i =start; i< end; i++){
    arc(0, c, i*2*pas, i*2*pas, 3* PI/2, TWO_PI);
  }
  for(j =start; j< end; j++){
    arcIntersect(c,c-nbPas*pas,j*pas);
  }
pop(); 
} 
  
if (tileNumb == 4){
push();
translate(c,c);
rotate(3*PI/2);
translate(0,-c);  
  for(i =start; i< end; i++){
    arc(0, c, i*2*pas, i*2*pas, 3* PI/2, TWO_PI);
  }
  for(j =start; j< end; j++){
    arcIntersect(c,c-nbPas*pas,j*pas);
  }
pop(); 
} 
  
if (tileNumb == 5){
push();
  
  for(i =start; i< end; i++){
    line(i*pas,0,i*pas,c);
  }
  for(j =start; j< end; j++){
    line(0,j*pas,nbPas*pas,j*pas);
    line(c-nbPas*pas,j*pas,c,j*pas);
  }

pop(); 
} 
  
if (tileNumb == 6){
push();
  
  
  for(i =start; i< end; i++){
    line(0,i*pas,c,i*pas);
  }
  for(j =start; j< end; j++){
    line(j*pas,0,j*pas,nbPas*pas,);
    line(j*pas,c-nbPas*pas,j*pas,c);
  }
  

pop(); 
} 
  
if (tileNumb == 7){
push();
  for(i =start; i< end; i++){
    arc(0, c, i*2*pas, i*2*pas, 3* PI/2, TWO_PI);
  }
  for(j =start; j< end; j++){
    arcIntersect2(c,c-nbPas*pas,j*pas);
  }
pop(); 
}  

  if (tileNumb == 8){
push();
  
  for(i =start; i< end; i++){
    line(0,i*pas,c,i*pas);
  }

  

pop(); 
} 
  
if (tileNumb == 9){
push();
  for(i =start; i< end; i++){
    arc(0, c, i*2*pas, i*2*pas, 3* PI/2, TWO_PI);
  }

pop(); 
} 
  
if (tileNumb == 11){
push();
  for(i =start; i< end; i++){
    arc(c, c, i*2*pas, i*2*pas, PI, 3* PI/2);
  }

pop(); 
}    
  

if (tileNumb == 10){
push();
///vide

pop(); 
}  
  
  
if (tileNumb == 12){
push();
  
translate(c,c);
rotate(PI/2);
translate(-c,0);
  
  for(i =start; i< end; i++){
    line(0,i*pas,c,i*pas);
  }
  for(j =start; j< end; j++){
    line(j*pas,0,j*pas,nbPas*pas,);
    line(j*pas,c-nbPas*pas,j*pas,c);
  }
  

pop(); 
}   
 
if (tileNumb == 13){
push();
  
  translate(c,c);
rotate(PI/2);
translate(-c,0);
  for(i =start; i< end; i++){
    arc(0, c, i*2*pas, i*2*pas, 3* PI/2, TWO_PI);
  }
  for(j =start; j< end; j++){
    arcIntersect2(c,c-nbPas*pas,j*pas);
  }
pop(); 
}  
  
  
  if (tileNumb == 14){
push();
      translate(c,c);
rotate(PI/2);
translate(-c,0);
  
  for(i =start; i< end; i++){
    line(0,i*pas,c,i*pas);
  }

  

pop(); 
} 
  
if (tileNumb == 15){
push();
translate(c,c);
rotate(3*PI/2);
translate(0,-c);
  for(i =start; i< end; i++){
    arc(0, c, i*2*pas, i*2*pas, 3* PI/2, TWO_PI);
  }
  for(j =start; j< end; j++){
    arcIntersect2(c,c-nbPas*pas,j*pas);
  }
pop(); 
}    

if (tileNumb == 16){
push();
        translate(c,c);
rotate(PI/2);
translate(-c,0);
  for(i =start; i< end; i++){
    arc(0, c, i*2*pas, i*2*pas, 3* PI/2, TWO_PI);
  }

pop(); 
} 

if (tileNumb == 17){
push();
  for(i =start; i< end; i++){
    arc(c, 0, i*2*pas, i*2*pas, PI/2, PI);
  }

pop(); 
}    
  
  
if (tileNumb == 18){
push();
  
translate(c,c);
rotate(PI);

  
  for(i =start; i< end; i++){
    arc(0, c, i*2*pas, i*2*pas, 3* PI/2, TWO_PI);
  }
  for(j =start; j< end; j++){
    arcIntersect2(c,c-nbPas*pas,j*pas);
  }
  

pop(); 
}    
 
  
if (tileNumb == 19){
push();
  //flip horizontally
  translate(c,0);
  scale(-1,1);
  
  for(i =start; i< end; i++){
    arc(0, c, i*2*pas, i*2*pas, 3* PI/2, TWO_PI);
  }
  for(j =start; j< end; j++){
    arcIntersect2(c,c-nbPas*pas,j*pas);
  }
pop(); 
}    
  
 
 
} 
  

    
}

