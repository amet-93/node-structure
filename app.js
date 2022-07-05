const express = require('express');
const app = express();
const cors = require('cors')
const PORT = process.env.PORT || 9000
app.use(express.json({ limit: '20mb' }))
app.use(express.urlencoded({ extended: true }))
app.use(cors())
const routes = require('./routes')
routes(app)
app.listen(PORT, () => console.log(`Server running on ${PORT}`))
