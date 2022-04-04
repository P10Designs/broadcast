import express from 'express'
import path from 'path'

const app = express()
const port = process.env.PORT || 5050

let select = '0'

app.use('/static', express.static('./src'))

app.get('/', (req, res) => {
  res.redirect('/selector')
})

app.get('/selector', (req, res) => {
  res.sendFile(path.resolve('./src/html/selector.html'))
})

app.get('/panel', (req, res) => {
  res.sendFile(path.resolve('./src/html/panel.html'))
})

app.post('/select/:idp', (req, res) => {
  select = req.params.idp
  res.status(200).send('ok')
})

app.get('/select', (req, res) => {
  res.status(200).send(select)
})

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`)
})
