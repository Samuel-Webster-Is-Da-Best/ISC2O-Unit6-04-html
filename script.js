document.getElementById('button').addEventListener('click', math)

function math () {
  // read values
  const height = document.getElementById('height').value
  const top = document.getElementById('top').value
  const bottom = document.getElementById('bottom').value
  // check if its unacceptable
  if (height <= 0) {
    alert('you must use numbers above 0')
    return
  }
  if (height <= 0) {
    alert('you must use numbers above 0')
    return
  }
  if (height <= 0) {
    alert('you must use numbers above 0')
    return
  }
  // do math, return answer, and clear input boxes
  alert(top * height / 2 + bottom * height / 2)
  document.getElementById('height').value = ''
  document.getElementById('top').value = ''
  document.getElementById('bottom').value = ''
}
