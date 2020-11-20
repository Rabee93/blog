const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()


mongoose.connect('mongodb://localhost/blog'){useNewUrlParser:true, usedUnifiedTopology: true})

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)
app.use(express.urlencoded({ extended: false}))

app.get('/', (reg,res) => {
  const articles = [{
    title: 'Test Article',
    createdAt: new Date(),
    description: 'Hello there'
  },
{
  title: 'Test Article 2',
  createdAt: new Date(),
  description: 'Hello there 2'


}]
  res.render('articles/index', {articles : articles})
})

app.listen(5000)
