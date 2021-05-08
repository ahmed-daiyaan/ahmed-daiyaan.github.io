var htmlEl;
htmlEl = document.getElementsByTagName('html')[0];
console.log(htmlEl);
var currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
console.log(currentTheme);
if (currentTheme==null) {
  htmlEl.dataset.theme = 'light';
}
else {
  htmlEl.dataset.theme = currentTheme;
}
function onLoadHandler() {
  quote_generator();
  var btns = document.getElementsByClassName("menu-item");
  for (var i = 0; i < 5; i++) {
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
      localStorage.setItem('theme', 'light');
    }
    else {
      htmlEl.dataset.theme = 'dark';
      localStorage.setItem('theme', 'dark');
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
     
    });
}