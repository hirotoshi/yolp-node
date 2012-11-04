var Yolp = require('../lib/yolp');
var app_id = require('./config').appid;

var yolp = new Yolp( app_id );

//キーワードのみで検索 : ex 六本木のラーメン
yolp.localSearch( '六本木 ラーメン', {} , function( error, result ) {
  console.log( result );
} );

//キーワード＋緯度経度： ex ミッドタウン周辺1km以内の焼肉
yolp.localSearch( '焼肉', { 'lat':35.6668, 'lon':139.7314, 'dist':1.0 } , function( error, result ) {
  console.log( result );
} );
