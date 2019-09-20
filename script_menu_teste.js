var htmlMenu = [];
htmlMenu[0] = "<p id='teste'>BOA TARDE FAMILIA</p>\n<input id='press1' type='button' onclick='sumir()' value='Sumir'>\n<input id='press2' type='button' onclick='ver()' value='Ver'>";
htmlMenu[1] = '\n#teste{background-color:lime;\ntext-align: center;\n} \n';
htmlMenu[2] = "function sumir(){ document.getElementById('teste').style.visibility='hidden'};\nfunction ver(){ document.getElementById('teste').style.visibility='visible'};";
htmlMenu[3] = '<div class="mover"></div>'
htmlMenu[4] = '.mover {\nwidth: 50px;\nheight: 50px;\nbackground: red;\nposition: absolute;\nleft: var(--mouse-x);\ntop: var(--mouse-y);\n}'
// htmlMenu[5] = 'let root = document.documentElement;\nroot.addEventListener("mousemove", e => {\nroot.style.setProperty('--mouse-x', e.clientX + "px");\nroot.style.setProperty('--mouse-y', e.clientY + "px");\n});'
var h1 = document.getElementsByTagName("p");
var i;

for (i = 0; i < h1.length; i++) {
  h1[i].classList.add("draggable");
}

function editor() {
  var html = document.getElementById("html");
  var css = document.getElementById("css");
  var js = document.getElementById("js");
  var code = document.getElementById("code").contentWindow.document;

  function conteudo(){
    code.writeln(
      "<style>" +
      cssEditor.getValue() +
      "</style>" +
      htmlEditor.getValue() +
      "<script>" +
      jsEditor.getValue() +
      "</script>"
    );
  }

  document.body.onload = function() {
    code.open();
    code.writeln(
      "<style>" +
      cssEditor.getValue() +
      "</style>" +
      htmlEditor.getValue() +
      "<script>" +
      jsEditor.getValue() +
      "</script>"
    );
    code.close();
  };

  document.getElementById('demo').onclick = function myFunction () {

    code.open();
    code.writeln(
      "<style>" +
      cssEditor.getValue(cssEditor.setValue(cssEditor.getValue() +
        htmlMenu[1])) +
      "</style>" +
      "<script>" +
      jsEditor.getValue(jsEditor.setValue(jsEditor.getValue() +
        htmlMenu[2])) +
      "</script>" +
      htmlEditor.getValue(htmlEditor.setValue(htmlEditor.getValue() +
        htmlMenu[0])));
    code.close();
  };

  document.getElementById('demo2').onclick = function myFunction () {

    code.open();
    code.writeln(
      "<style>" +
      cssEditor.getValue(cssEditor.setValue(cssEditor.getValue() +
        htmlMenu[4])) +
      "</style>" +
      "<script>" +
      jsEditor.getValue(jsEditor.setValue(jsEditor.getValue() +
        htmlMenu[5])) +
      "</script>" +
      htmlEditor.getValue(htmlEditor.setValue(htmlEditor.getValue() +
        htmlMenu[3])));
    code.close();
  };

  document.body.onkeyup = function() {
    code.open();
    conteudo()
    code.writeln(
'<script type="text/javascript" src="canvas/Draggin.js/draggin.min.js">' + '</script>' +
'<script>' + 'var h1 = document.getElementsByTagName("p"); var i; for (i = 0; i < h1.length; i++) {h1[i].classList.add("draggable");}' + '</script>'
);
    code.close();
  };
}

function myFunction1() {
  if (demo.style.color == 'blue')
    document.getElementById("demo").style.color = "red";
  else {
    document.getElementById("demo").style.color = "blue"
  }
}

editor();
