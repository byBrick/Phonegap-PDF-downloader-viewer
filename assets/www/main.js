


function downloadAndOpenPDF(url, fileName, folder) {
    var fileTransfer = new FileTransfer();
    var filePath = folder + fileName;

    console.log('################# filepath');
    console.log(filePath);

    fileTransfer.download(
        url,
        filePath,
        function(entry) {
            console.log('********OK!', filePath);
            window.plugins.pdfViewer.showPdf(filePath);
        },
        function (error) {
            console.log('Failed, do something');
            console.log(error.code);
            console.log(error.source);
            console.log(error.target);
            console.log(error.http_status);
            alert('Oh no, something went wrong');
        }
    );
}



