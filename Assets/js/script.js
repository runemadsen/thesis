 
$html = $('<textarea id="codeeditor" width=400px height=400px></textarea>');

$(document).ready(function(){

 $('.content').append($html)


});





var codeeditor = CodeMirror(document.getElementById("codeeditor"), {
            mode:  "javascript",
            styleActiveLine: true,
            lineNumbers: true,
            lineWrapping: true,
            autoCloseTags: true,
            autoCloseBrackets: true,
            // value: "<!DOCTYPE html><html><head><script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.7/p5.min.js"></script>",
             theme : 'solarized',
            extraKeys: {
    "Tab": "indentMore"
  }
            
        });

// codeeditor.setValue("<!DOCTYPE html><html><head><script src='https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.7/p5.min.js'></script><script src='https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.7/addons/p5.dom.min.js'></script></head><body><script> \n \n function setup(){\n }\n function draw(){ \n } \n </script></body></html>");
        codeeditor.setValue("function setup(){\n createCanvas(200,200); \n }\n function draw(){ ellipse(40,40,20,20); \n } ");
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
  

