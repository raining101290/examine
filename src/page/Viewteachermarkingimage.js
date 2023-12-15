import React, { useEffect, useState } from "react";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import "./styles.css";
import * as base from "./global";
import axios from 'axios';
import { Spinner } from "react-bootstrap";
import Header from '../Layout/Header'
import { fabric } from 'fabric';

import Input from "@material-ui/core/Input";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faCircle, faRectangleAd, faFileText, faFileExport, 
  faDeleteLeft, faDownload, faMinus, faPlus, faChartLine } from '@fortawesome/free-solid-svg-icons'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/* Viewsingleresultmath */

export default function Viewteachermarkingimage(props) {
  const { editor, onReady } = useFabricJSEditor();
  const [image64formate, setImage64formate] = useState('');
  const [profileimage, setProfileimage] = useState('');
  const [viewquestionid, setViewquestionid] = useState(props.match.params.id);
  const [imagefile, setImagefile] = useState(props.match.params.ids);
  //const [viewimageid, setViewimageid] = useState(props.match.params.ids);
  const [canvasImage, setCanvassImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [markascorrect, setMarkascorrect] = useState('');
  const [mark, setMark] = useState('');


    const onAddCircle = () => {
    //editor.addCircle();
    try {
      editor?.canvas.add(
          new fabric.Circle({
            radius: "20",
            fill: "", // fill color 
            stroke: "red",
            strokeWidth: 2
          })
      );
      editor?.canvas.renderAll();
  } catch (error) {
      console.log(error);
  }
  };
  const onAddLine = () => {
    //editor.addCircle();
    try {
      editor?.canvas.add(
          new fabric.Line([150, 10, 220, 150], {
            stroke: 'red',
         borderColor :'red'

          })
      );
      editor?.canvas.renderAll();
  } catch (error) {
      console.log(error);
  }
  };
 
  const onAddRectangle = () => {
   // editor.addRectangle();
    try {
      editor?.canvas.add(
           new fabric.Rect({
            width: 200,
            height: 100,
            fill: '', 
            stroke: 'red',
            strokeWidth: 3,
            borderColor: 'red'
          }) 
      );
      editor?.canvas.renderAll();
  } catch (error) {
      console.log(error);
  }
  };
  const onAddText = () => {
    //editor.addText("Marks-");
    try {
      editor?.canvas.add(
          new fabric.Textbox("Type something...", {
              fill: "red",
              fontSize: 20,
              fontFamily: "Arial",
              fontWeight: "bold",
              textAlign: "center",
              name: "my-text",
          })
      );
      editor?.canvas.renderAll();
  } catch (error) {
      console.log(error);
  }
  };
  const onZoomin =() => {
    editor.zoomIn()
  }
  const onZoomout =() => {
    editor.zoomOut()
  }
  const onDrawline =() => {
   // editor.onDrawline();
  /*  editor.add(new fabric.Line([50, 100, 200, 200], {
      left: 170,
      top: 150,
      stroke: 'red'
      })); */

      editor.onDrawline([50, 100, 200, 200], {
        left: 170,
        top: 150,
        stroke: 'red'
        });
  }
  const save = (image) => {
    // alert(image)
    const data = {
      profileImg: image,
      autoincrement: '6320d80eb038052bf4507063'
    }
    axios.post(base.BASE_URL + '/teacherimagemarksupdate', data)
      .then((response) => {
        console.log(response)

      }, (error) => {
        console.log(error);

      });

  }
  const onDownload = async () => { // this is for save. Yoru frontend doesn't have any problem now. 
    if(mark == "" || markascorrect == "")
    {
      alert('Insert Marks and Marks Type then try to save the file')
    }
    else
    {
   //   alert(markascorrect);
      setLoading(true);
      var data = editor.canvas.toDataURL();
      var image = new Image();
      image.setAttribute("crossorigin", "anonymous");
      image.src = data;
      const blob = await (await fetch(image.src)).blob();
      const blobURL = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobURL;
      console.log('Link....' + link.download);
  
      const file = new File([blob], 'fileName.jpg', { type: "image/jpeg", lastModified: new Date() });
      const fd = new FormData();
      fd.append('profileImg', file);
      fd.append('answertype', markascorrect);
      fd.append('useranswer', mark);
      fd.append('autoincrement', props.match.params.id);
      axios.post(base.BASE_URL + '/teacheranswerwritting', fd
      ).then(res => {
        console.log(res);
        setLoading(false);
        alert('Update Successfully')
      })
  
    }
  }
  const onExport = async () => {
    let image = new Image();
    image.crossOrigin = "anonymous";
    image.src = editor.canvas.toDataURL();
    const blob = await (await fetch(image.src)).blob();
    const blobURL = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobURL;
    link.download = "image.png";
    link.click();

  };
  const deleteSelected = () => {
    editor.canvas.remove(editor.canvas.getActiveObject());
  };


  useEffect(() => {
   // getallquestionshow();
    if (editor) {
      editor.canvas.setBackgroundImage(
        // base.IMAGE_URL + props.match.params.ids, // working with php
        base.BASE_URL + '/imageviewnodejs/' + props.match.params.ids,
        // "http://localhost:8081/image/1663015679936-5.png", // working local pc
        () => editor.canvas.renderAll(),
        { crossOrigin: "anonymous" }
      );
    }
  }, [editor]);


  return (
    <div className="App">
      <Header />
      <Row style={{ position: 'fixed', width: '90%', marginTop: 75 }}>
        <Col xd={6} sm={8} style={{ padding: 10,  }}>
          <div style={{ padding: 10, alignContent: 'space-between' }}>
          <button onClick={onAddCircle} style={{ padding: 3, marginRight: 10, marginBottom: 5 }}>
            <FontAwesomeIcon icon={faCircle} style={{ fontSize: 28, color: 'red' }}></FontAwesomeIcon>
            <div>Circel</div>
          </button>
          <button onClick={onAddLine} style={{ padding: 3, marginRight: 10, marginBottom: 5 }}>
            <FontAwesomeIcon icon={faCircle} style={{ fontSize: 28, color: 'red' }}></FontAwesomeIcon>
            <div>Line</div>
          </button>
          <button onClick={onAddRectangle} style={{ padding: 3, marginRight: 10, marginBottom: 5 }}>
            <FontAwesomeIcon icon={faRectangleAd} style={{ fontSize: 28, color: 'green' }}></FontAwesomeIcon>
            <div>Rectanglur</div>
          </button>


          <button onClick={onAddText} style={{ padding: 3, marginRight: 10, marginBottom: 5 }}>
            <FontAwesomeIcon icon={faFileText} style={{ fontSize: 28, }}></FontAwesomeIcon>
            <div>Add Text</div>
          </button>
          <button onClick={deleteSelected} style={{ padding: 3, marginRight: 10, marginBottom: 5 }}>
            <FontAwesomeIcon icon={faDeleteLeft} style={{ fontSize: 28, }}></FontAwesomeIcon>
            <div>Delete</div>
          </button>
          <button onClick={onExport} style={{ padding: 3, marginRight: 10, marginBottom: 5 }}>
            <FontAwesomeIcon icon={faDownload} style={{ fontSize: 28, }}></FontAwesomeIcon>
            <div> Download </div>
          </button>
          <button onClick={onDownload} style={{ padding: 3, marginRight: 10, marginBottom: 5 }}>
            <FontAwesomeIcon icon={faSave} style={{ fontSize: 28, }}></FontAwesomeIcon>
            <div>Save</div>
          </button>
          <button onClick={onZoomin} style={{ padding: 3, marginRight: 10, marginBottom: 5 }}>
          <FontAwesomeIcon icon={faPlus} style={{ fontSize: 28, }}></FontAwesomeIcon>
          <div>Zoom +</div>
          </button>
          <button onClick={onZoomout} style={{ padding: 3, marginBottom: 5 }}>
          <FontAwesomeIcon icon={faMinus} style={{ fontSize: 28, }}></FontAwesomeIcon>
          <div>Zoom -</div>
          </button>
          </div>
        {/*   <button onClick={onDrawline} style={{ padding: 10 }}>
          <FontAwesomeIcon icon={faChartLine} style={{ fontSize: 28, }}></FontAwesomeIcon>
          </button> */}
        </Col>
        <Col xd={6} sm={4}> 
          <div style={{ display: 'flex', marginTop: 13, marginBottom: 20 }}>
          <Input type="text" className="form-control"
                                  id="exampleInputEmail" aria-describedby="emailHelp" 
                                  placeholder="Enter marks" style={{ width: 120, fontSize: 14, marginLeft: 10,
                                  backgroundColor: 'green', color: '#ffffff' }}
                                  onChange={(e) => {
                                  
                                    setMark(e.target.value)
                                  }}
                                />

                        <select
                              style={{ padding: 6, backgroundColor: 'green', fontSize: 14, width: 150, color: '#ffffff' }}
                              className="form-control"
                              onChange={(e) => {
                                  
                                setMarkascorrect(e.target.value)
                              }}>
                              <option value="">Marks as a Correct</option>
                            
                              <option value="Correct">Correct</option>
                              <option value="Incorrect">Incorrect</option>
                          </select>
          </div>
        </Col>

      </Row>
      <Row>
        <div className="previews-wrapper">
        {loading ? (
            <Spinner
              style={{ flex: 1,
                justifyContent: 'center',
                alignItems:'center', position: 'absolute' }}
              animation="border"
              variant="danger"
            />
          ) : null}
        </div>
      </Row>

  
      <FabricJSCanvas className="sample-canvas" onReady={onReady} />
    </div>
  );
}
