function onLoadHandler() {
  var btns = document.getElementsByClassName("menu-item");
  for (var i = 0; i < 4; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  };
};