function drawScene(gl, translate) {

  // Clear the canvas before we start drawing on it.
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  mat4.perspective(projectionMatrix, // destination matrix
                   fieldOfView,
                   aspect,
                   zNear,
                   zFar);

  mat4.translate(modelViewMatrix,     // destination matrix
                 modelViewMatrix,     // matrix to translate
                 translate);            // amount to translate

  mat4.rotate(modelViewMatrix,     // destination matrix
               modelViewMatrix,     // matrix to translate
               0, [0,0,1]);         // rotation amount, axis

  mat4.scale(modelViewMatrix,     // destination matrix
              modelViewMatrix,     // matrix to translate
              [1.00,1.00,1.00]);  //scale the x,y or z axis

  // Set the shader uniforms

  gl.uniformMatrix4fv(
      programInfo.uniformLocations.projectionMatrix,
      false,
      projectionMatrix);

  gl.uniformMatrix4fv(
      programInfo.uniformLocations.modelViewMatrix,
      false,
      modelViewMatrix);


  {//type, offset, number of vertices to draw
    const offset = 0;
    gl.drawArrays(gl.Points, offset, vertexCount);
  }
}
