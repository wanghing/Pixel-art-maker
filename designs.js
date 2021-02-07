const myForm=document.getElementById('sizePicker');
// Evenlistener will be triggered every time the form is submitted
myForm.addEventListener('submit',function(event) {
  event.preventDefault();
  makeGrid();
});

/**
 * first get the input from the document
 * loops to draw the grid
 * 'click' on the 'td' to trigger function of changing colour
 */
function makeGrid() {
  var i=0;
  var j=0;
  var tableOutput=document.getElementById('pixelCanvas');
  var gridHeight=document.getElementById('inputHeight').value;
  var gridWidth=document.getElementById('inputWidth').value;
  var inputColor=document.getElementById('colorPicker').value;
  // clear the elements of table to redraw the nwe grid again
  while (tableOutput.firstChild) {
    tableOutput.removeChild(tableOutput.firstChild);
  }
  for (var i = 0; i < gridHeight; i++) {
    var tr = document.createElement('TR');
    tr.height='100';
    tableOutput.appendChild(tr);
    for (var j = 0; j < gridWidth; j++) {
        var td = document.createElement('TD');
        td.width = '100';
        td.addEventListener('click', function changeColor(evt) {
            evt.target.style.backgroundColor =inputColor;
        });

        tr.appendChild(td);
    }

  }

}
