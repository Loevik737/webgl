const vsSource = `
attribute vec4 aVertexPosition;
attribute vec4 aColor;
uniform mat4 uModelViewMatrix;
uniform mat4 uRotationMatrix;
uniform mat4 uProjectionMatrix;
varying mediump vec4 vColor;

void main() {
  gl_Position = uProjectionMatrix * uModelViewMatrix *  aVertexPosition;
  gl_PointSize = 15.0;
  vColor = aColor;
}`;
