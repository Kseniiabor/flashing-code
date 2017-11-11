
var Particle = require('particle-api-js');
var particle = new Particle();


/*var username = 'kseniiabortsova@gmail.com';
var password = 'DaVinci1995'
particle.login({username: username, password: password}).then(
  function(data){
    console.log('API call completed on promise resolve: ', data.body.access_token);
  },
  function(err) {
    console.log('API call completed on promise fail: ', err);
  }
);
*/

var deviceId = '340028000d47343432313031';
var token = '732b56d15a7556216b735eb0820ae26762195b11';


var fnPr = particle.callFunction({ deviceId: deviceId, name: 'led', argument: 'on', auth: token });

fnPr.then(
  function (data) {
console.log('Function called succesfully:', data);
  }, function (err) {
    console.log('An error occurred:', err);
  });
