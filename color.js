$(function(){
function changeTheme(color) {
  $("html").attr("class", color);
}

function changeColor(color) {
  $("body").attr("class", color);
}

$("a.theme").click(function(){
  changeTheme(this.id);
});

$("a.color").click(function(){
  changeColor(this.id);
});
})
