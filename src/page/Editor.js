import React, { useEffect,useState, useRef } from 'react'
import { addStyles, EditableMathField } from 'react-mathquill'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Modal from 'react-modal';
import Basic from './Basic'
import Parser from 'html-react-parser'; // render HTML 

var Latex = require('react-latex');
// inserts the required css to the <head> block.
// you can skip this, if you want to do that by yourself.
addStyles()
//https://openbase.com/js/react-latex/documentation
//https://www.youtube.com/watch?v=yxbhtFruNOM
//https://latexeditor.lagrida.com/
//https://oeis.org/wiki/List_of_LaTeX_mathematical_symbols#Geometry
//https://oeis.org/wiki/List_of_LaTeX_mathematical_symbols#Geometry
//https://www.overleaf.com/learn/latex/Mathematical_expressions

const modules = {
  toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
     /*  [{ script: "sub" }, { script: "super" }], */
      //  ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      //  [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
      //  ["link", "image", "video"],
      //  ["clean"],
  ],
};



const Editor = () => {
  const [latex, setLatex] = useState('\\frac{1}{\\sqrt{2}}\\cdot 2')
  const [showmathpopup, setShowmathpopup] = useState(false);
  const editorRef = useRef();
  const [string, setString] = useState("");

  useEffect(() => {
/*     if (editorRef == null) {
      return;
    }
    const element = document.getElementById("editor");

    element.addEventListener(
      "input",
      function () {
        setString( );
      },
      false
    );
 */  }, [string]);

  const setText = (e) => {
    setString(string + e);
  };
  const changevalue = () =>
  {
    setString(string);
  }

  const openpopup =() =>
  {
    setShowmathpopup(true);
  }

  const handlemathpopupClose=() => {
    setShowmathpopup(false)
  }



  return (
    <div>
{/* <Latex>What is $(3\times 4) \div (5-3)$</Latex>
<Latex displayMode={true}>$(1 \div 2)$</Latex>
<Latex>$(a_1^2 + a_2^2 = a_3^2)$</Latex>
<Latex>$(a_1 + a_2 = a_3)$</Latex>
<Latex>$a^2$</Latex>
<Latex>$a_2$</Latex>    */}



<button onClick={openpopup}>Open</button>

<Modal
isOpen={showmathpopup}
/*  onAfterOpen={} */
onRequestClose={handlemathpopupClose}
contentLabel="Example Modal"
>
<div style={{ width: '100%', height: 300 }}>
<div style={{ height: 40, width: '100%', textAlign: 'right' }}>
<button onClick={handlemathpopupClose} style={{ width: 30, height: 30, border: 'none' }}>X</button>
</div>
<div style={{ height: 200, width: '100%' }}>
<div><Latex>{string}</Latex></div>

<EditableMathField
        latex={string}
        style={{ width: '100%', height: 100 }}

      />

{/* <div onChange={changevalue}
        className='txteditor'
        ref={editorRef}

        contentEditable="true"
        id="editor"
>{string}</div> */}
<textarea onChange={(e) => setString(e.target.value)} value={string} 
style={{ width: '100%' }}/>
<div>
{/*    <textarea 
value={this.state.textvalue} />  */}
{/* <ReactQuill  modules={modules} theme="snow" 
placeholder="Question Title"
style={{ width: '100%', fontSize: 18, color: '#000', height: 50 }}

/> */}

</div>
<div style={{ marginTop: 50 }}>    
  <Basic setText={setText} />
</div>
</div>


</div>

</Modal>
  
      
    </div>
  )
}
export default Editor;