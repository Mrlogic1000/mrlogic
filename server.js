const express = require("express");
const cors = require('cors')
const bodyParser = require('body-parser')
// require('dotenv').config()
const database = require("./models/dbHelper")

console.log(process.env.BROWSER)

// const header = "SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA =" +
// " 'projects' AND TABLE_NAME = 'loads'"
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.get("/",(req,res)=>{
database.fetch()
.then((apliance)=>{
    res.send(apliance)
})
.catch((error)=>{
    if(error){
        res.status.json({message:'unable to retriev data from server'})
    }
})

})
app.post("/load",(req,res)=>{
    // const {name,quantity,wattage} =req.body 
    // let sql = `INSERT INTO loads(name,quantity,wattage) VALUES('${name}','${quantity}','${wattage}')`  
   
    database.create(req.body)
    .then((apliance)=>{
        console.log(apliance)

    })

    
    })

app.post('/update',(req,res)=>{
    const {id} = req.body
    database.update(id,req.body)
    .then((count)=>{
        if(count>0){
            res.send("The item update successfully")
        }else{
            res.send('The item could not find in database')
        }
    })
    
})
app.post('/delete',(req,res)=>{
    const {id} = req.body
    console.log(id)
   
    database.deleteObj(id)
    .then((count)=>{
        if(count>0){
            res.send("The item deleted successfully")
        }
       
    })
    .catch((error)=>{
        console.log(error)
    })
})
const PORT = '4000'
app.listen(PORT,()=>{
    console.log(`Sever is running at ${PORT}`)
})