var soap = require('soap');

var url = 'http://localhost:8000/wsdl?wsdl';

soap.createClient(url, function(err, client) {
    if (err) {
        console.log('Error creating SOAP client');
        console.log('Error!');
    }

    client.serverVersion({}, function(err, result) {
        if (err) {
            console.log('Error calling serverVersion()');
            console.log(err);
        }
        console.log(result);
    });
});

