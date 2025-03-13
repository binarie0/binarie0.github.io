/*
let vertices = [];
const DISTANCE = 40;
let xCount;
let yCount;
*/
let buildings = [];
function setup() {
  let canvas = createCanvas(1920, 1080, WEBGL);
  canvas.parent("bg");
  
  //frameRate(60);
  
  colorMode(RGB);

  
  
  /*
  xCount = width/DISTANCE + 1;

  xCount /= 4;
  yCount = height/DISTANCE + 5;
  
  

  for(y = 0; y < yCount; y++) {
    vertices[y] = [];
    let currentX = 10;
      for (x = 0; x < xCount; x++) {
          vertices[y][x] = new Vertex(currentX, y*DISTANCE - x % 8 / 8 * DISTANCE, DISTANCE/2, 120);
          currentX += (x % 2 == 0 ? DISTANCE*7 : DISTANCE);
        
          vertices[y][x].setY(vertices[y][x].y() + (y / yCount) * DISTANCE * 0.5);
        }
    }

    */

    /*
    let topLeftCorner = new BuildingNode(0, 220);
    let topRightCorner = topLeftCorner.addNode(300, 220);
    topRightCorner.addGroundingNode();
    
    let backRightCorner = topRightCorner.addHorizonFocusNode(70);
    backRightCorner.addGroundingNode();

    buildings[0] = new Building(topLeftCorner);

    topLeftCorner = new BuildingNode(960 - 160, 500);
    topLeftCorner.addGroundingNode();

    let backLeftCorner = topLeftCorner.addHorizonFocusNode(-100);
    backLeftCorner.addGroundingNode();

    topRightCorner = topLeftCorner.addNode(960 + 160, 500);
    topRightCorner.addGroundingNode();
    backRightCorner = topRightCorner.addHorizonFocusNode(100);
    backRightCorner.addGroundingNode();

    buildings[1] = new Building(topLeftCorner);

    
    */

}

function draw() {

  let distanceAway = 180;

  rotateX(frameCount * 0.016);
  rotateY(frameCount * 0.01);

  triangle(0, -distanceAway, 0, 0, 0, -30, -30, 0, -30);


  /*
  buildings.forEach(element => {
    element.reset();
  });

  background(0);
  
  strokeWeight(2);
  stroke(255, 255, 255, 100);
  buildings.forEach(element => {
    element.build();
  });
  //circles();
  //changeLocation();
  */
}

/*
function changeLocation() {
  for (x = 0; x < xCount; x++) {
      for (y = 0; y < yCount; y++) {
          let vertex = vertices[y][x];
        
          vertex.updateNextY();
        
          vertex.setY(lerp(vertex.y(), vertex.getNextY(), vertex.changeY() * (vertex.getNextY() < vertex.y() ? -1:1) / vertex.frameCountPerHalf()))
        
          if (!vertex.isFinishedChangingColor()) {
            vertex.setColorValue(lerp(vertex.getColorValue(), vertex.getBaseColorValue(), 0.04));
          }
      }
  }
  
}
function circles() {
  let vertex;
  strokeWeight(2);
  for (x = 0; x < xCount; x++) {
      for (y = 0; y < yCount; y++) {
          let vertex = vertices[y][x];
          
        
          if (y > 0) {
              stroke(vertex.getBaseColorValue());
              let topVertex = vertices[y - 1][x];
              line(vertex.x(), vertex.y(), topVertex.x(), topVertex.y());
            }
        
        if (y < yCount - 1) {
            stroke(vertex.getBaseColorValue());
            let bottomVertex = vertices[y + 1][x];
            line(vertex.x(), vertex.y(), bottomVertex.x(), bottomVertex.y());
          }
        
        if (x > 0) {
              stroke(vertex.getColorValue());
              let rightVertex = vertices[y][x - 1];
              line(vertex.x(), vertex.y(), rightVertex.x(),  rightVertex.y());
            }
          
          if (x < xCount - 1) {
              stroke(vertex.getColorValue());
              let leftVertex = vertices[y][x + 1];
              line(vertex.x(), vertex.y(), leftVertex.x(), leftVertex.y());
            }

            circle(vertex.x(), vertex.y(), DISTANCE / 8);  
        }
    }
}
*/

class Building{
  constructor(starterNode)
  {
    this.head = starterNode;
  }

  /**Start the cascade of nodes. */
  build()
  {
    this.head.draw();
  }

  /**Resets the cascade of nodes. */
  reset()
  {
    this.head.reset();
  }
}

class BuildingNode {


  constructor(x, y)
  {
    this.x = x;
    this.y = y;
    this.nextNodes = [];
    this.count = 0;
    this.hasBeenDrawn = false;
  }

  /**Resets the node and calls all connecting nodes */
  reset()
  {
    this.hasBeenDrawn = false;
    if (this.nextNodes.length > 0) {
        for (let index = 0; index < this.count; index++) {
          if (this.nextNodes[index].hasBeenDrawn) {
            this.nextNodes[index].reset();
          }
        };
      }
  }
  /**Gets the X location of the node. */
  x(){
    return this.x;
  }

  /**Gets the Y location of the node. */
  y() {
    return this.y;
  }

  /**Adds a node to the draw pool. This is done via specific x and y values as it allows
   * for nodes to touch without running an issue of recursion nightmare.
  */
  addNode(x, y)
  {
    let node = new BuildingNode(x, y);
    this.nextNodes[this.count] = node;
    
    this.count++;

    return node;
  }

  addHorizonFocusNode(hypotenuseLength)
  {
    let angle = Math.atan((540 - this.y)/(960 - this.x));
    return this.addNode(this.x + hypotenuseLength * Math.cos(angle), this.y + hypotenuseLength * -Math.sin(angle));
  }

  /**Adds a node connecting the building to the ground. */
  addGroundingNode()
  {
    this.addNode(this.x, 1080);
  }

  /**Gets whether the node has already been drawn to. */
  hasBeenDrawn()
  {
    return this.hasBeenDrawn;
  }

  /**Draws each connecting node's lines and calls the subsequent strings. */
  draw()
  {
    this.hasBeenDrawn = true;
    circle(this.x, this.y, 0.5);
    if (this.nextNodes.length > 0)
    {
      for (let index = 0; index < this.count; index++) {
        if (!this.nextNodes[index].hasBeenDrawn) {
          line(this.x, this.y, this.nextNodes[index].x, this.nextNodes[index].y);
          this.nextNodes[index].draw();
        }
      };
    }
  }

}






class Vertex
  {
    
    
    constructor(x_location, y_location, dy, frameCountPerHalfCycle) {
      this.x_location = x_location;
      this.y_location = y_location;
      this.dy = dy;
      this.nextLocation = y_location + dy;
      this.frameCountPerHalfCycle = frameCountPerHalfCycle;
      this.swappedMovements = false;
      this.colorValue = 10;
      this.baseColorValue = 10;
    }
    
    isFinishedChangingColor()
    {
      return this.colorValue == this.baseValue;
    }
    
    getColorValue()
    {
      return this.colorValue;
    }
    
    getBaseColorValue()
    {
      return this.baseColorValue;
    }
    
    setColorValue(colorValue)
    {
      this.colorValue = colorValue;
    }
    
    setX(x)
    {
      this.x_location = x;
    }
    x()
    {
      return this.x_location;
    }
    
    y()
    {
      return this.y_location;
    }
    
    setY(y)
    {
      this.y_location = y;
    }
    
    changeY()
    {
      return this.dy;
    }
    
    frameCountPerHalf()
    {
      return this.frameCountPerHalfCycle;
    }
    
    getNextY()
    {
      return this.nextLocation;
    }
    
    
    
    updateNextY()
    {
      if (abs(this.y_location - this.nextLocation) < 0.01)
        {
          this.nextLocation = this.y_location - this.dy;
          this.dy *= -1;
          this.colorValue = 60;
        }
      
    }
    
  }


