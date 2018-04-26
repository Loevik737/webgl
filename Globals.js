const canvas = document.querySelector('#glcanvas'),
	  gl = canvas.getContext('webgl'),
	  width = window.innerWidth,
	  height = window.innerHeight,
	  rng = d3.randomUniform(0, 0.006),
	  numPoints = 1000;
	  
var   shaderProgram = null,
  	  programInfo = null,
  	  buffers = null;