const express = require('express')
const app = express();
const tasks = require('./routes/tasks')

app.use(express.json());


app.get('/hello', (req,res) => {
    res.send('hello world')
})

app.use('/api/v1/tasks', tasks);

const port = 3000;
app.listen(port, () => `server is listening on ${port}`)