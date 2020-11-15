const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()


app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (reg,res) => {
  const articles = [{
    title: 'Test Article',
    createdAt: Date.now(),
    description: 'Hello there'
  }]
  res.render('index', {articles : articles})
})

app.listen(5000)
