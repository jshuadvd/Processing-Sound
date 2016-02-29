var osc, 
    fft;

function setup() {
  createCanvas(820, 256);

  osc = new p5.TriOsc(); // set frequency and type
  osc.amp(.5);
  osc.phase(1);

  fft = new p5.FFT();
  osc.start();
}

function draw() {
  background(20);

  var waveform = fft.waveform();  // analyze the waveform
  beginShape();
  strokeWeight(5);
  for (var i = 0; i < waveform.length; i++){
    var x = map(i, 0, waveform.length, 0, width);
    var y = map(waveform[i], -1, 1, height, 0);
    vertex(x, y);
  }
  endShape();

  // change oscillator frequency based on mouseX
  var freq = map(mouseX, 0, width, 40, 880);
  osc.freq(freq);

  var amp = map(mouseY, 0, height, 1, .01);
  osc.amp(amp);
}