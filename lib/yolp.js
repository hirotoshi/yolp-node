var request = require('request');
var querystring = require('querystring');

var LOCALSEARCH_URL = 'http://search.olp.yahooapis.jp/OpenLocalPlatform/V1/localSearch';
var GEOCODER_URL = 'http://geo.search.olp.yahooapis.jp/OpenLocalPlatform/V1/geoCoder';
var REVERSE_GEOCODER_URL = 'http://reverse.search.olp.yahooapis.jp/OpenLocalPlatform/V1/reverseGeoCoder';
var GET_GID_URL = 'http://storage.olp.yahooapis.jp/OpenLocalPlatform/V1/getGid';

/**
 * constructer
 */
function Yolp( appid, options ) {
  this.appid = appid;
  this.options = options || {};
  this.options.appid = appid;
  this.options.outpuf = 'json';
};

/**
 * merge object
 */
function merge( defaults, options ) {
  var results = defaults || {};
  for ( var i in options ) {
    results[i] = options[i];
  }
  return results;
};

/**
 * ローカルサーチAPI
 */
Yolp.prototype.localSearch = function( query, options, callback ) {
  var params = {
    'appid' : this.appid,
    'output' : 'json',
    'query' : query,
  };
  params = merge( params, options );
  var url = LOCALSEARCH_URL + '?' + querystring.stringify( params );
  //console.log( url );
  request( url , function( error, response, result ) {
    result = JSON.parse( result );
    callback( error, result );
  } );

};

/**
 * ジオコーダAPI
 */
Yolp.prototype.geoCoder = function( query, options, callback ) {
  var params = {
    'appid' : this.appid,
    'output' : 'json',
    'query' : query,
  };
  params = merge( params, options );
  var url = GEOCODER_URL + '?' + querystring.stringify( params );
  //console.log( url );
  request( url , function( error, response, result ) {
    result = JSON.parse( result );
    callback( error, result );
  } );
};

/**
 * リバースジオコーダAPI
 */
Yolp.prototype.reverseGeoCoder = function( lat, lon, options, callback ) {
  var params = {
    'appid' : this.appid,
    'output' : 'json',
    'lat' : lat,
    'lon' : lon,
  };
  params = merge( params, options );
  var url = REVERSE_GEOCODER_URL + '?' + querystring.stringify( params );
  //console.log( url );
  request( url , function( error, response, result ) {
    result = JSON.parse( result );
    callback( error, result );
  } );
};


/**
 * 店舗名名寄せAPI
 */
Yolp.prototype.getGid = function( name, lat, lon , options, callback ) {
  var params = {
    'appid' : this.appid,
    'output' : 'json',
    'name' : name,
    'lat' : lat,
    'lon' : lon,
  };
  params = merge( params, options );
  var url = GET_GID_URL + '?' + querystring.stringify( params );
  //console.log( url );
  request( url , function( error, response, result ) {
    result = JSON.parse( result );
    callback( error, result );
  } );
};

/**
 * exports
 */
module.exports = Yolp;



