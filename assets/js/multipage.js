// If absolute URL from the remote server is provided, configure the CORS
// header on that server.

// Loaded via <script> tag, create shortcut to access PDF.js exports.
var pdfjsLib = window['pdfjs-dist/build/pdf'];

// The workerSrc property shall be specified.
pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';



// var url = 'assets/documents/MarcoPellegrino_Portfolio.pdf';
var url = 'https://raw.githubusercontent.com/Marco-Pellegrino/marco-pellegrino.github.io/main/assets/documents/MarcoPellegrino_Portfolio.pdf';

var thePdf = null;
var scale = 3.0;

pdfjsLib.getDocument(url).promise.then(function(pdf) {
    thePdf = pdf;
    viewer = document.getElementById('pdf-viewer');
    
    for(page = 1; page <= pdf.numPages; page++) {
      canvas = document.createElement("canvas");    
      canvas.className = 'pdf-page-canvas';         
      viewer.appendChild(canvas);            
      renderPage(page, canvas);
    }
});

function renderPage(pageNumber, canvas) {
    thePdf.getPage(pageNumber).then(function(page) {
      viewport = page.getViewport({ scale: scale });
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      canvas.style.width = "100%"          
      page.render({canvasContext: canvas.getContext('2d'), viewport: viewport});
});
}