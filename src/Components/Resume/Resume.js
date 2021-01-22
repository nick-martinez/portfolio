import React from 'react';
import "../../index.css";
import PDFViewer from '../PDFViewer/PDFViewer';
import WebViewerBackend from "../../Backend/webviewer";

function Resume() {
  return (
    <div className="resume">
      <PDFViewer 
        backend={WebViewerBackend}
        src='../../../Resume.pdf'
      />
    </div>
  );
}

export default Resume;
