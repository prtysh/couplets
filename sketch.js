var input;
var couplet=[];

function setup() {
  noCanvas();
  lexicon = new RiLexicon();
  input=createInput();
  input.changed(processRita);
  input.size(300);
  }

function processRita(){
  var s = input.value();
  createP(s);
  var rs = new RiString(s);
  var words = rs.words();
  rhymeWord = words[words.length - 1];
  for(i = 0; i < rs.pos().length; i++){
    couplet[i] = lexicon.randomWord(rs.pos()[i]);
    if(i+1 == rs.pos().length){couplet[i] = random(lexicon.rhymes(rhymeWord))};
  }
  i=0;
  console.log(lexicon.rhymes(rhymeWord));
  var sent = "";
  for(i = 0; i < rs.pos().length; i++){
    sent += couplet[i] + " ";
  }

  console.log(sent);
  createP(sent);
  i = 0;
  couplet = [];
}
/*
function draw(){

}
*/
function intersect(a, b) {
    var d = {};
    var results = [];
    for (var i = 0; i < b.length; i++) {
        d[b[i]] = true;
    }
    for (var j = 0; j < a.length; j++) {
        if (d[a[j]])
            results.push(a[j]);
    }
    return results;
}
