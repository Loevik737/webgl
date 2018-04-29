
function main() {

  if (!gl) {
    alert('Unable to initialize. Your browser may not support WebGL.');
    return;
  }

  gl.clearColor(0.0, 0.0, 0.0, 0.0);  // Clear to black, fully opaque
  gl.clearDepth(1.0);                 // Clear everything
  gl.enable(gl.DEPTH_TEST);           // Enable depth testing
  gl.depthFunc(gl.LEQUAL);            // Near things obscure far things
  gl.viewport(0, 0, width, height);
  gl.enable(gl.BLEND);
  //gl.blendFunc(gl.SRC_COLOR, gl.DST_COLOR);
  gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

  // Initialize a shader program; this is where all the lighting
  // for the vertices and so forth is established.
  shaderProgram = initShaderProgram(gl, vsSource, fsSource);

  // Collect all the info needed to use the shader program.
  // Look up which attribute our shader program is using
  // for aVertexPosition and look up uniform locations.
  programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
      vertexColor: gl.getAttribLocation(shaderProgram, 'aColor'),
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
    },
  };

  let positions = [],
      colors = [],
      rngPos = function(){return Math.random() * (1 - (-1)) + -1},
      rngCol =function(){return Math.random() * (1 - 0) + 0};

  for(let i = 0; i<vertexCount; i++){
      positions.push(rngPos());
      positions.push(rngPos());
      positions.push(rngPos());
      if(positions[positions.length-3] >= 0){
          colors.push.apply(colors, COLORS.RED);
      }
      else{
          colors.push.apply(colors, COLORS.BLUE);
      }
  }
  console.log(colors)
  console.log(positions)

  buffers = initBuffers(gl, positions, colors);

  {
    const posNumComponents = 3;
    const colNumComponents = 4;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;

    gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
    gl.vertexAttribPointer(
        programInfo.attribLocations.vertexPosition,
        posNumComponents,
        type,
        normalize,
        stride,
        offset);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    gl.enableVertexAttribArray(programInfo.attribLocations.vertexColor);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.color);
    gl.vertexAttribPointer(
        programInfo.attribLocations.vertexColor,
        colNumComponents,
        type,
        normalize,
        stride,
        offset);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

  }
  gl.useProgram(programInfo.program);

  renderLoop();
}
