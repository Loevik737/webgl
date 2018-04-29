const speed = 0.001;
let translate = [0,0,-speed];
let zoomIn = false;
function renderLoop() {
    if(zoomIn){
      if(modelViewMatrix[14] > -5){
        zoomIn = false;
      }else {
        translate[2] = speed;
      }
    }else {
      if(modelViewMatrix[14] < 1){
        zoomIn = true;
      }
      else {
        translate[2] = -speed;
      }
    }

    drawScene(gl, translate);
    requestAnimationFrame(renderLoop);
  }
