/**
 * Constructor
 */
function PdfViewer() {
}

/**
 * Display a new browser with the specified URL.
 * 
 * NOTE: If usePhoneGap is set, only trusted PhoneGap URLs should be loaded,
 *       since any PhoneGap API can be called by the loaded HTML page.
 *
 * @param url           The url to load
 * @param usePhoneGap   Load url in PhoneGap webview [optional] - Default: false
 */
PdfViewer.prototype.showPdf = function(url) {
	PhoneGap.exec(null, null, "PdfViewer", "showPdf", [url]);
};

/**
 * Load PdfViewer
 */


cordova.addConstructor(function() {
    window.pdfViewer = new PdfViewer();

    // backwards compatibility
    window.plugins = window.plugins || {};
    window.plugins.pdfViewer = window.pdfViewer;
});
