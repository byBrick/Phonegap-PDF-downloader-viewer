

//A method to strip odd characters in strings
String.prototype.replaceAll = function(str1, str2, ignore) {
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
};

//document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is ready
//function onDeviceReady() {
//    console.log("device ready");
//    // oadAndOpenPDF($(this).attr('href'), $(this).attr('data-pdffilename'), '/sdcard/FolderToUse/');
//}

//    initAnimation();
//}

function createFolder(folder) {
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onRequestFileSystemSuccess, null);

    function onRequestFileSystemSuccess(fileSystem) {
        var entry=fileSystem.root;
        entry.getDirectory(folder, {create: true, exclusive: false}, onGetDirectorySuccess, onGetDirectoryFail);
    }

    function onGetDirectorySuccess(dir) {
        console.log("Created dir "+dir.name);
    }

    function onGetDirectoryFail(error) {
        console.log("Error creating directory "+error.code);
        alert('Could not create directory for PDF storage.');
    }
}



function downloadAndOpenPDF(url, fileName, folder) {

    console.log('************ FILENAME');
    console.log(fileName);

    console.log('********* FOLDER');
    console.log(folder);

//    fileName = fileName.replaceAll(' ', '-');

//    fileName = 'apor.pdf';

    nativeGet(url, fileName, folder);
}

function nativeGet(url, fileName, folder) {
    var fileTransfer = new FileTransfer();
    var filePath = folder + fileName;

    console.log('################# filepath');
    console.log(filePath);

    fileTransfer.download(
        url,
        filePath,
//        '/sdcard/ABB-Optimizer/hej.pdf',
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



