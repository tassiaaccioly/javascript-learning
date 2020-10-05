// Rover object goes here:

//ITERATION 1 - CREATING THE ROVER AND GRID

let rover1 = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: [{x:0, y:0}]
  };
  
  // let rover2 ={
  //   direction: "S", 
  //   x: 9,
  //   y: 0,
  //   travelLog: [{x:9, y:0}]
  // };
  
  // let rover3 = {
  //   direction: "E", 
  //   x: 0,
  //   y: 9,
  //   travelLog: [{x:0, y:9}]
  // };
  
  const obstacleOne = {
    position: {x:3, y:2}
  };
  
  let obstacleTwo = {
    x: 6,
    y: 5
  };
  
  let obstacleThree = {
    x: 3,
    y: 8
  };
  
  const roverBoard = [
    [{x:0, y:0}, {x:1, y:0}, {x:2, y:0}, {x:3, y:0}, {x:4, y:0}, {x:5, y:0}, {x:6, y:0}, {x:7, y:0}, {x:8, y:0}, {x:9, y:0}],
    [{x:0, y:1}, {x:1, y:1}, {x:2, y:1}, {x:3, y:1}, {x:4, y:1}, {x:5, y:1}, {x:6, y:1}, {x:7, y:1}, {x:8, y:1}, {x:9, y:1}],
    [{x:0, y:2}, {x:1, y:2}, {x:2, y:2}, {x:3, y:2}, {x:4, y:2}, {x:5, y:2}, {x:6, y:2}, {x:7, y:2}, {x:8, y:2}, {x:9, y:2}],
    [{x:0, y:3}, {x:1, y:3}, {x:2, y:3}, {x:3, y:3}, {x:4, y:3}, {x:5, y:3}, {x:6, y:3}, {x:7, y:3}, {x:8, y:3}, {x:9, y:3}],
    [{x:0, y:4}, {x:1, y:4}, {x:2, y:4}, {x:3, y:4}, {x:4, y:4}, {x:5, y:4}, {x:6, y:4}, {x:7, y:4}, {x:8, y:4}, {x:9, y:4}],
    [{x:0, y:5}, {x:1, y:5}, {x:2, y:5}, {x:3, y:5}, {x:4, y:5}, {x:5, y:5}, {x:6, y:5}, {x:7, y:5}, {x:8, y:5}, {x:9, y:5}],
    [{x:0, y:6}, {x:1, y:6}, {x:2, y:6}, {x:3, y:6}, {x:4, y:6}, {x:5, y:6}, {x:6, y:6}, {x:7, y:6}, {x:8, y:6}, {x:9, y:6}],
    [{x:0, y:7}, {x:1, y:7}, {x:2, y:7}, {x:3, y:7}, {x:4, y:7}, {x:5, y:7}, {x:6, y:7}, {x:7, y:7}, {x:8, y:7}, {x:9, y:7}],
    [{x:0, y:8}, {x:1, y:8}, {x:2, y:8}, {x:3, y:8}, {x:4, y:8}, {x:5, y:8}, {x:6, y:8}, {x:7, y:8}, {x:8, y:8}, {x:9, y:8}],
    [{x:0, y:9}, {x:1, y:9}, {x:2, y:9}, {x:3, y:9}, {x:4, y:9}, {x:5, y:9}, {x:6, y:9}, {x:7, y:9}, {x:8, y:9}, {x:9, y:9}] 
  ];
  
  // ======================
  
  //ITERATION 2 - TURNING THE ROVER
  
  function turnLeft(theRover) {
    switch(theRover.direction) {
      case "W":
        theRover.direction = "S";
        console.log('turnLeft was called!');
        console.log(theRover.direction);
        break;
      case "S":
        theRover.direction = "E";
        console.log('turnLeft was called!');
        console.log(theRover.direction);
        break;
      case "E":
        theRover.direction = "N";
        console.log('turnLeft was called!');
        console.log(theRover.direction);
        break;
      default:
        theRover.direction = "W";
        console.log('turnLeft was called!');
        console.log(theRover.direction);
        break;
    }
    return theRover.direction;
  }
  
  function turnRight(theRover) {
    switch(theRover.direction) {
      case "E":
        theRover.direction = "S";
        console.log('turnRight was called!');
        console.log(theRover.direction);
        break;
      case "S":
        theRover.direction = "W";
        console.log('turnRight was called!');
        console.log(theRover.direction);
        break;
      case "W":
        theRover.direction = "N";
        console.log('turnRight was called!');
        console.log(theRover.direction);
        break;
      default:
        theRover.direction = "E";
        console.log('turnRight was called!');
        console.log(theRover.direction);
        break;
    }
    return theRover.direction;
  }
  
  
  // const ifObstacle = (theRover) => {
  //   if ((((theRover.x + 1) === 3) && (theRover.y === 2)) || ((theRover.x === 3) && ((theRover.y+1) === 2)) || (((theRover.x + 1) === 6) && (theRover.y === 5)) || ((theRover.x === 6) && ((theRover.y+1) === 5)) || (((theRover.x + 1) === 3) && (theRover.y === 8)) || ((theRover.x === 3) && ((theRover.y+1) === 8))) {
  //     return true;
  //   }
  //   else {
  //    return false;
  // }
  // };
  
  //ITERATION 3 - MOVING THE ROVER
  
  function moveForward(theRover) {
    
    //Add obstacles to the map
    
    // if (ifObstacle === true) {
    //   console.log(`Warning, there's an obstacle in the way`);
    //   return `Warning, there's an obstacle in the way`
    // } else if (ifObstacle === false) {
   
      if (theRover.x >= 0 && theRover.x < 9 && theRover.y >= 0 && theRover.y < 9) {
      
      console.log('moveForward was called');
      
          if (theRover.direction === 'E') {
            theRover.x++;
            console.log('x: ' + theRover.x + ', y:' + theRover.y);
          } else if (theRover.direction === 'W') {
            theRover.x--;
            console.log('x: ' + theRover.x + ', y:' + theRover.y);
          } else if (theRover.direction === 'N') {
            theRover.y--;
            console.log('x: ' + theRover.x + ', y:' + theRover.y);
          } else if (theRover.direction === 'S') {
            theRover.y++;
            console.log('x: ' + theRover.x + ', y:' + theRover.y);
          }
  
      let newPosition = {x:theRover.x, y:theRover.y};
      
      theRover.travelLog.push(newPosition);
      
    } else {
      console.log("The rover can't go outside of the grid!"); 
    } 
    // }
  }
  
  // moveForward(rover);
  
  //BONUS 2 - MOVE BACKWARDS
  
  function moveBackward(theRover) {
    
    //BONUS 1 - ENFORCE BOUNDARIES (don't let rover go outside the grid)
    
    if (theRover.x >= 0 && theRover.x < 9 && theRover.y >= 0 && theRover.y < 9) {
      
      console.log('moveBackward was called');
          if (theRover.direction === 'E') {
            theRover.x--;
            console.log('x: ' + theRover.x + ', y:' + theRover.y);
          } else if (theRover.direction === 'W') {
            theRover.x++;
            console.log('x: ' + theRover.x + ', y:' + theRover.y);
          } else if (theRover.direction === 'N') {
            theRover.y++;
            console.log('x: ' + theRover.x + ', y:' + theRover.y);
          } else if (theRover.direction === 'S') {
            theRover.y--;
            console.log('x: ' + theRover.x + ', y:' + theRover.y);
          }
  
      let newPosition = {x:theRover.x, y:theRover.y};
      
      theRover.travelLog.push(newPosition);
      
    } else {
      console.log("The rover can't go outside of the grid!"); 
    } 
  }
  
  
  //ITERATION 4 - ADDING FULL COMMANDS
  
  function command(theRover, orders) {
    for (let i = 0; i < orders.length; i++) {
      let order = orders[i];
      switch (order) {
        case 'l':
          turnLeft(theRover);
          break;
        case 'r':
          turnRight(theRover);
          break;
        case 'f':
          moveForward(theRover);
          break;
        case 'b':
          moveBackward(theRover);
          break;
        
        //BONUS 3 - VALIDATE INPUTS
        default:
          console.log('${order} is not a valid command!');
      }
    }
    
    //ITERATION 5 - TRACKING
    
    console.log(theRover.travelLog);
  }
  
  command(rover1, 'rffrfflfrff');
  
  console.log(obstacleOne.position);
  
  
  //BONUS 4 - ADD OBSTACLES AND OTHER ROVERS
  
  //If the rover is about to hit the obstacle, don't move forward and print a warning
  
  //Let the rovers take turn making moves, if a rover is about to crash with another rover, don't move and print a warning
  
  
  
  
  
  
  
  
  
  
  
  