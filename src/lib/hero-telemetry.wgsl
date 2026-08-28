struct Params {
  time: f32,
  texel: vec2f,
}

@group(0) @binding(0) var<uniform> params: Params;

fn sdBox(p: vec2f, b: vec2f) -> f32 {
  let d = abs(p) - b;
  return length(max(d, vec2f(0.0))) + min(max(d.x, d.y), 0.0);
}

fn rotate(p: vec2f, a: f32) -> vec2f {
  let c = cos(a);
  let s = sin(a);
  return vec2f(c * p.x + s * p.y, -s * p.x + c * p.y);
}

fn hash21(p: vec2f) -> f32 {
  return fract(sin(dot(p, vec2f(127.1, 311.7))) * 43758.5453);
}

fn angularShard(p: vec2f, t: f32) -> f32 {
  var acc = 1.0;
  for (var i = 0; i < 6; i = i + 1) {
    let fi = f32(i);
    let q = rotate(p - vec2f(0.42, -0.08), 0.38 + fi * 0.52 + t * 0.045);
    let blade = sdBox(q, vec2f(0.62, 0.008 + fi * 0.003));
    acc = min(acc, blade);
  }
  let wedge = sdBox(rotate(p - vec2f(0.38, -0.02), -0.72 + t * 0.02), vec2f(0.18, 0.18));
  return min(acc, wedge);
}

fn signalField(p: vec2f, t: f32) -> f32 {
  var acc = 0.0;
  for (var i = 0; i < 5; i = i + 1) {
    let fi = f32(i);
    let q = rotate(p, 0.55 + fi * 0.21);
    let y0 = -0.28 + fi * 0.12;
    let y = y0 + 0.018 * sin(q.x * 7.2 + t * (0.22 + fi * 0.07) + fi);
    let d = abs(q.y - y);
    acc += (1.0 - smoothstep(0.0, 0.0034, d)) * (0.26 - fi * 0.03);
    let tick = abs(fract(q.x * 2.4 + t * 0.08 + fi * 0.16) - 0.5);
    acc += (1.0 - smoothstep(0.0, 0.0018, abs(d - 0.016)))
      * (1.0 - smoothstep(0.44, 0.5, tick))
      * 0.08;
  }
  return acc;
}

@fragment
fn fs_main(@location(0) uv: vec2f) -> @location(0) vec4f {
  let aspect = params.texel.y / max(params.texel.x, 1.0e-6);
  let p = (uv - vec2f(0.5)) * vec2f(aspect, 1.0);
  let t = params.time;

  let dShard = angularShard(p, t);
  let fill = 1.0 - smoothstep(-0.0015, 0.006, dShard);
  let line = 1.0 - smoothstep(0.0, 0.0055, abs(dShard));
  let glow = exp(-max(dShard, 0.0) * 14.0);

  let traces = signalField(p, t);
  let cell = floor(uv * vec2f(36.0, 20.0));
  let h = hash21(cell);
  let spark = step(0.968, h) * (0.4 + 0.6 * sin(t * 1.7 + h * 36.0));

  let flash = vec3f(0.784313, 0.941176, 0.290196);
  let ink = vec3f(0.066667, 0.066667, 0.066667);
  let leftClear = smoothstep(0.28, 0.64, uv.x);
  var a = fill * 0.10 + line * 0.34 + glow * 0.10 + traces * 0.30 + spark * 0.07;
  a *= 0.62 * leftClear;
  a = clamp(a, 0.0, 0.38);
  let col = mix(flash, ink, spark * 0.25 + line * 0.08);
  return vec4f(col * a, a);
}
