var Yolp = require('../lib/yolp');
var app_id = require('./config').appid;

var yolp = new Yolp( app_id );

/**
 * 住所文字列を指定して緯度経度取得
 */
yolp.geoCoder( '東京都港区赤坂９丁目７－１', {} , function( error, result ) {
  console.log( result );
} );


/**
 * 緯度経度から住所取得
 */
yolp.reverseGeoCoder( 35.6668, 139.7314, {} , function( error, result ) {
  console.log( result );
} );
