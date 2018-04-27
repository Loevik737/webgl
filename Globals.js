const canvas = document.querySelector('#glcanvas'),
		  gl = canvas.getContext('webgl'),
		  vertexCount = 5;

var   shaderProgram = null,
  	  programInfo = null,
  	  buffers = null;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create a perspective matrix, a special matrix that is
// used to simulate the distortion of perspective in a camera.
// Our field of view is 45 degrees, with a width/height
// ratio that matches the display size of the canvas
// and we only want to see objects between 0.1 units
// and 100 units away from the camera.

const fieldOfView = 45 * Math.PI / 180,   // in radians
			width = canvas.width,
			height = canvas.height,
 			aspect = width / height,
 			zNear = 0.01,
 			zFar = 100.0,
 			projectionMatrix = mat4.create();
			modelViewMatrix = mat4.create();
