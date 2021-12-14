const readline = require('readline');
const fs = require('fs');
const ACCESS_LOG = './access.log';

const ip1 =  '89.123.1.41';
const ip2 =  '34.48.240.111';

const readStream = fs.createReadStream(ACCESS_LOG);
const write1 = fs.createWriteStream(ip1 + '_requests.log');
const write2 = fs.createWriteStream(ip2 + '_requests.log');

const readInterface = readline.createInterface({
    input: readStream,
});

readInterface.on('line', function(line) {
    if (line.includes(ip1)) {
        write1.write(line + '\n');
    }else if(line.includes(ip2)){
        write2.write(line + '\n');

    }
});