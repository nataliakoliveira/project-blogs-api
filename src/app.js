const express = require('express');
const { loginRouter, userRouter, categoriesRouter, postRouter } = require('./routers');

// ...

const app = express();

app.use(express.json());
app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoriesRouter);
app.use('/post', postRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
