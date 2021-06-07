document.getElementById('button').addEventListener('click', math)

function math () {
  var height = document.getElementById('height').value
  var top = document.getElementById('top').value
  var bottom = document.getElementById('bottom').value
  alert(top*height/2+bottom*height/2)
  document.getElementById('height').value = ''
  document.getElementById('top').value = ''
  document.getElementById('bottom').value = ''
}