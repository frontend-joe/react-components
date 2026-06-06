import { useEffect } from "react";

const VERT = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAG = `
precision highp float;

uniform float time;
uniform vec2 resolution;

void main() {
  vec4 abyssColor = vec4(0.0, 0.0, 0.0, 1.0);

  vec2 uv = (gl_FragCoord.xy - 0.5 * resolution.xy) / resolution.y * 0.6;

  float r = length(uv);

  // Neutral grey tunnel, brighter in the depths fading to a darker grey rim.
  vec3 brightGrey = vec3(0.9);
  vec3 dimGrey = vec3(0.55);
  vec4 tunnelColor = vec4(mix(brightGrey, dimGrey, smoothstep(0.32, 0.5, r)), 1.0);

  float y = fract(r / 0.005 / (r - 0.01) + time);
  y = smoothstep(0.01, 4.0, y);

  float x = length(uv);
  x = smoothstep(0.5, 0.01, x);

  gl_FragColor = mix(tunnelColor, abyssColor, x) * y;
}
`;

export const useWebGLBackground = (canvasRef) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext("webgl");
    if (!gl) return;

    const compile = (type, src) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      return shader;
    };

    const program = gl.createProgram();
    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW,
    );

    const posAttr = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(posAttr);
    gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0);

    const timeLoc = gl.getUniformLocation(program, "time");
    const resLoc = gl.getUniformLocation(program, "resolution");

    // The canvas is scoped to the hero, so size it to its own box rather
    // than the window. Resizing the drawing buffer blanks it for a frame, so
    // we only flag the change here and apply it inside the render loop — that
    // keeps the resize and the redraw in the same frame and avoids flicker.
    let needsResize = true;
    const observer = new ResizeObserver(() => {
      needsResize = true;
    });
    observer.observe(canvas);

    const startTime = Date.now();
    let rafId;
    const render = () => {
      if (needsResize) {
        const { clientWidth, clientHeight } = canvas;
        if (canvas.width !== clientWidth || canvas.height !== clientHeight) {
          canvas.width = clientWidth;
          canvas.height = clientHeight;
          gl.viewport(0, 0, clientWidth, clientHeight);
        }
        needsResize = false;
      }
      gl.uniform1f(timeLoc, (Date.now() - startTime) / 1000);
      gl.uniform2f(resLoc, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      rafId = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buf);
    };
  }, []);
};
