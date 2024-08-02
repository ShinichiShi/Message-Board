const express = require('express')
const app = express()
const indexRouter = require('./src/routes/index')
// const newRoutes = require('./routes/index')
const path = require('path')

app.use(express.static('public'))
app.use('/css',express.static('dist'))

//now tell what type of file the view enjine handling
app.set('view engine','ejs')
//declare ur view over here by telling where it is
app.set('views',path.join(__dirname,'src/views'))
app.use(express.urlencoded({extended:true}))
//route /

app.use('/',indexRouter)
// app.use((err, req, res, next) => {
//     res.send('ere')
//   });
app.listen(3000,()=> console.log('listening bruh'))