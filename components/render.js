 let translate =  [0, -3.0, -10.0];
 function renderLoop() {
    translate[0] = -5 +rng()*5;
    drawScene(gl, programInfo, buffers, translate);
    window.setTimeout(renderLoop, 1000 / 60);
  }