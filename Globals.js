const canvas = document.querySelector('#glcanvas'),
		  gl = canvas.getContext('webgl'),
		  vertexCount = 150000,
			fieldOfView = 45 * Math.PI / 180,   // in radians
			width = window.innerWidth,
			height =  window.innerHeight,
 			aspect = width / height,
 			zNear = 0,
 			zFar = -10,
 			projectionMatrix = mat4.create(),
			modelViewMatrix = mat4.create();
			COLORS = {
				"WHITE": [1, 1, 1, 0.5],
			  "RED": 	 [1, 0, 0, 0.5],
				"GREEN": [0, 1, 0, 0.5],
				"BLUE":  [0, 0, 1, 0.5]
			}

var   shaderProgram = null,
  	  programInfo = null,
  	  buffers = null;

canvas.width = width ;
canvas.height = height;
Object.freeze(COLORS)

// Create a perspective matrix, a special matrix that is
// used to simulate the distortion of perspective in a camera.
// Our field of view is 45 degrees, with a width/height
// ratio that matches the display size of the canvas
// and we only want to see objects between 0.1 units
// and 100 units away from the camera.
