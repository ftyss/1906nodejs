var redis = require('redis'),
    RDS_PORT = 6379,
    RDS_HOST = '192.168.203.131',
    RDS_OPTS = { password: 'fangtao123' },
    client = redis.createClient(RDS_PORT, RDS_HOST, RDS_OPTS);

client.on('ready', function(res) {
    console.log('ready')
})