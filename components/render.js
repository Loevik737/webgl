let camPosition = [0,0,-0.01];
let zoomIn = false;
function renderLoop() {
    if(zoomIn){
      if(modelViewMatrix[14] < -1){
        zoomIn = false;
      }else {
        camPosition[2] = -0.001;
      }
    }else {
      if(modelViewMatrix[14] > -0.1){
        zoomIn = true;
      }
      else {
        camPosition[2] = 0.001;
      }
    }
    drawScene(gl, camPosition);

    requestAnimationFrame(renderLoop);
  }
