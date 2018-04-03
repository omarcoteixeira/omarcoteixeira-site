import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import api from './api';
import config from './config.json';

let app = express();
app.server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', api({ config }));

app.server.listen(process.env.PORT || config.port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server started on ${app.server.address().port}`);
});