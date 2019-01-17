const fs = require('fs');
classList = (className,cb) =>{
    const path = `./classes/${className}.json`
    console.log(path);
    
    fs.readFile(path,(err,data)=>{
        if(err){
            cb(err,null)
            return;
   

module.exports = {
    classList,
    updateClass
}
