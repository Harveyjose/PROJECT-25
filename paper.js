class paper{
    constructor(x,y,radius){
        var options ={
            isStatic:false,
        'restitution':0.3,
        'friction': 0,
        'density':1.2
        
        //this.image = loadImage("paper.png")

        }

        this.x = x;
        this.y = y;
        this.radius = radius
        this.paperRadius = 40;
        this.body = Bodies.circle(this.x,this.y,this.radius,options)
        World.add(world,this.body) 

        

    }
        display()
        {
                
                var paperPos=this.body.position;		
                push()
                translate(paperPos.x, paperPos.y);
                ellipseMode(CENTER)
                //strokeWeight(4);
                fill(128,128,128)
                ellipse(0,0,this.radius);
                pop()
                
        }

}