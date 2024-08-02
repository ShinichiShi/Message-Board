const express = require('express')
const uniqid = require('uniqid')
const router = express.Router()
const messages = [
    {
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ipsam minus soluta quas eligendi, aperiam modi sit! Cupiditate perspiciatis adipisci commodi perferendis aperiam id laboriosam obcaecati earum. Dolorem a laudantium voluptatem praesentium necessitatibus, ab nostrum eos quibusdam unde harum debitis voluptate officia saepe, assumenda quam tenetur in. Pariatur itaque dolore, doloribus totam, magnam veritatis modi amet at nesciunt facilis, est recusandae velit magni cum sint. Eius nemo architecto officia reprehenderit reiciendis iste delectus nesciunt! Deleniti dolor ipsum dignissimos molestias, vel, eaque corporis magnam, impedit autem eum cum consequuntur possimus! Mollitia ipsum optio, assumenda, omnis beatae natus deserunt hic temporibus iure, neque excepturi dolor impedit similique? Esse alias laboriosam facere nesciunt iure quaerat quam corporis repudiandae molestias porro, sed libero beatae!",
      user: "Amando",
      desc:"desc",
      likes:4,
      added: new Date(),
      uid:uniqid()
    },
    {
      text: "Hello World!",
      user: "Charles",
      desc:"dsfs",
      likes:9,
      added: new Date(),
      uid:uniqid()
    }
  ];
  
//searches for index file in views and passes those args and renders it
router.get('/',(req,res)=>{
  res.render('index',{title:'mini Message',messages:messages})
})

router.get('/messages',(req,res)=>{
  res.render('form');
})
router.get('/messages/:user',(req,res)=>{
  res.render('display',{messages:messages, person:req.params.user})
})

router.post('/newMessages',(req,res)=>{
  const {messageText,messageUser, messageDesc} = req.body;
  messages.push({text:messageText,user:messageUser,likes:0, desc: messageDesc, uid:uniqid(), added:new Date(),likes:0})
  res.redirect('/')
})

module.exports = router