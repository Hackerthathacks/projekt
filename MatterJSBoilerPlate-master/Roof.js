class Roof{

constructor(x ,y , width, height) {
var options = {
isStatic: true,
restitution:  0,
friction:  0,


}
this.x = x;
this.y = y;
this.width = width;
this.height = height;
this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options)
World.add(world,this.body)
}
display() {

var pos = this.body.position
push()
translate(pos.x,pos.y)
fill("red")
rect(0,0,this.width,this.height)
pop()
}
}