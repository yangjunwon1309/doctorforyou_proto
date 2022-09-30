$(document).ready(function(){
  loadPage();
});
function loadPage(url) {
  if (url == undefined) {
    $('#container').load('home.html #util',hijackLinks);
  } else {
    $('#container').load(url +'#util',hijackLinks);
  }
}

function hijackLinks() {
  $('#container a').click(function(e)) {
    e.preventDefault();
    loadPage(e.target.href);
  }
}
