var webshot = require('webshot');

var options = {
    phantomPath: "C:\\Users\\meines\\Downloads\\phantomjs-2.1.1-windows\\bin\\phantomjs.exe"
};

webshot('ourcodeworld.com', 'ourcodeworld-image.png', options, (err) => {
    if(err){
        console.log("An error ocurred ", err);
    }
    // screenshot now saved to ourcodeworld-image.png
});