import React from 'react';

export default class PDFTron {
  init = (source, element) => {
    new window.PDFTron.WebViewer({
      path: '/WebViewer/lib',
      initialDoc: source,
    }, element);
  }
}