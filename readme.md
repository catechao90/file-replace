#Installation

```javascript 
npm install --save file-replace
```

#Useage

```javascript 
var FileReplace = require('file-replace');
FileReplace.go('d_03.png//fileName', 'kaowei//dest folder name', function(files) {
  console.log(files.length);
})
```