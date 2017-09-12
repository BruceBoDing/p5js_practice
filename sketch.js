var field;
var button;
function setup() {
  createCanvas(400, 300);
  field = createInput();
  button = createButton("Get rhymes!");
  button.mousePressed(findRhymes);
  background(50);
  textSize(32);
  noStroke();
  fill(255);
}
function draw() {
}
function findRhymes() {
  background(50);
  var lexicon = new RiLexicon();
  var rhymes = lexicon.rhymes(field.value());
  if (rhymes.length > 0) {
    text(rhymes.join(" "),
      10, 10, width-10, height-10);
  }
}