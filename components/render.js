let translate = [0,0,-0.001];
let zoomIn = false;
function renderLoop() {
    if(zoomIn){
      if(modelViewMatrix[14] < -1){
        zoomIn = false;
      }else {
        translate[2] = -0.001;
      }
    }else {
      if(modelViewMatrix[14] > -0.01){
        zoomIn = true;
      }
      else {
        translate[2] = 0.001;
      }
    }
    drawScene(gl, translate);

    requestAnimationFrame(renderLoop);
  }
