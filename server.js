var http = require('http')
    ,app = require('./config/express')
    db = require('./config/database');

http.createServer(app).listen(process.env.PORT, function() {
    console.log('Servidor escutando na porta: ' + this.address().port);
});

