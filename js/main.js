
    window.onload = function () {
        var fileupload = document.getElementById("FileUpload1");
        var filePath = document.getElementById("spnFilePath");
        var image = document.getElementById("imgFileUpload");
        image.onclick = function () {
            fileupload.click();
        };
        fileupload.onchange = function () {
            var fileName = fileupload.value.split('\\')[fileupload.value.split('\\').length - 1];
            filePath.innerHTML = "<b>Selected File: </b>" + fileName;
        };
    };
