install: npm install  
develop: parcel index.pug  
production: parcel build index.pug parcel --public-url ./  


**production not minimized.**  
create pug.config.js with

```
  module.exports = {
    pretty: true
  };
```  

parcel build --no-minify index.pug parcel --public-url ./
