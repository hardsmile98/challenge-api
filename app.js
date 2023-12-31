const express = require('express')
const cors = require('cors');
const app = express()
const port = 8080

app.use(
    cors({
      origin: '*',
      preflightContinue: true,
    }),
  );

app.get('/', (req, res) => {
  res.status(200).json({ user: 'data' })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})