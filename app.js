const express = require('express');
const app = express();
const path = require('path');
const process = require('process');
//require('dotenv').config();
const PORT = 3030;
const methodoverride = require('method-override');
const bodyParser = require("body-parser")
const session = require('express-session');
const cookieParser = require('cookie-parser')
const cookieSession = require('./middlewares/cookieSession');





app.listen(PORT, () => console.log(`
Servidor escuchando en el puerto ${PORT}
http://localhost:${PORT}
`))