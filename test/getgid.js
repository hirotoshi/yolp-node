var Yolp = require('../lib/yolp');
var app_id = require('./config').appid;

var yolp = new Yolp( app_id );
yolp.getGid( '東京ミッドタウン', 35.6668, 139.7314 , { 'address' : '東京都港区赤坂９丁目７－１' } , function( error, result ) {
  console.log( result );
} );
