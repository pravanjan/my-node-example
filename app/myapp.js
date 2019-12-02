const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080 ;

app.listen(PORT, ()=>{
    console.log(`request to default controller `);
    console.log(`Server listening on port ${PORT}`);
});

app.get('/query/:app_name/',async (req,res)=>{
    let app_name = req.params.app_name;
    res.send(app_name);

});
module.exports =app;