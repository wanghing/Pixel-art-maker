const myForm=document.getElementById('sizePicker');
myForm.addEventListener('submit',function(event) {
  event.preventDefault();
  makeGrid();
});


function makeGrid() {
    var i=0;
  var j=0;
  var tableOutput=document.getElementById('pixelCanvas');
  var gridHeight=document.getElementById('inputHeight').value;
  var gridWidth=document.getElementById('inputWidth').value;
  var inputColor=document.getElementById('colorPicker').value;
  while (tableOutput.firstChild) {
        tableOutput.removeChild(tableOutput.firstChild);
    }
  for (var i = 0; i < gridHeight; i++) {
    var tr = document.createElement('TR');
    tr.height='100';
    //tr.innerHTML=[i,j];
    tableOutput.appendChild(tr);
    for (var j = 0; j < gridWidth; j++) {
        var td = document.createElement('TD');
        td.width = '100';
        //td.innerHTML=[i,j];
        td.addEventListener('click', function changeColor(evt) {
            evt.target.style.backgroundColor =inputColor;
        });

        tr.appendChild(td);
    }

  }

}
