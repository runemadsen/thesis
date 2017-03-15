var textarea = document.getElementById("codeeditor")
var codeeditor = CodeMirror.fromTextArea(textarea, {
  mode:  "javascript",
  styleActiveLine: true,
  lineNumbers: true,
  lineWrapping: true,
  autoCloseTags: true,
  autoCloseBrackets: true,
  theme : 'solarized',
  extraKeys: {
    "Tab": "indentMore"
  }
});

function submit_code()
{
    // codeeditor.save();
    var cdn = "<script src='https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.7/p5.min.js'></script><script src='https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.7/addons/p5.dom.min.js'></script><script>"
    var endcdn="</script></body></html>"
    var code = cdn + codeeditor.getValue() + endcdn;
    // console.log(code);
    var data_url = "data:text/html;charset=utf-8;base64," + $.base64.encode(code);
    document.getElementById("result").src = data_url;
}

// Code to handle versions
// ---------------------------------------------

var counter = 1;

// Find the save button
var saveButton = document.getElementById('singlebutton');

// Find the column to put the versions in
var versionsCol = document.getElementById('versions');

// When that button is clicked
saveButton.addEventListener('click', function(e) {

  // Don't follow the link
  e.preventDefault();

  // Create a new div DOM element
  var version = document.createElement('div')
  version.className = 'version';
  version.innerHTML = '<p>Version ' + counter + '</p>';

  // Add it to the #versions column
  versionsCol.appendChild(version);

  // Increment counter for next version
  counter++;
})
