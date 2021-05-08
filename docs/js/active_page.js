var htmlEl;
function onLoadHandler() {
  quote_generator();
  htmlEl = document.getElementsByTagName('html')[0];
  var btns = document.getElementsByClassName("menu-item");
  for (var i = 0; i < 4; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  };
};
function toggle_theme() {
    if (htmlEl.dataset.theme == 'dark') {
      htmlEl.dataset.theme = 'light';
    }
    else {
      htmlEl.dataset.theme = 'dark';
    }
}
  
function quote_generator() {
  fetch('/quotes/carly.txt')
    .then(response => response.text())
    // .then(text => console.log(text))
    .then(allText => {
      var split = allText.split('\n');
      var randomNum = Math.floor(Math.random() * split.length);
      document.getElementById("quote1").innerHTML = split[randomNum];
      document.getElementById("quote2").innerHTML = split[randomNum+1];
      console.log("Line Number\n" + (randomNum + 1))
      console.log("Random Line\n" + randomLine)
    });
}