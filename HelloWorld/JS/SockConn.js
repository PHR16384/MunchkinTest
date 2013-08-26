﻿var socket = io.connect('http://munchtest-djt.rhcloud.com:80');

var chat = io.connect('http://munchtest-djt.rhcloud.com:80/chat');
chat.on('connect', function () {
    // chat socket connected
});

window.WEB_SOCKET_SWF_LOCATION = "js/WebSocketMain.swf";

socket.on('monstersDB', function (data) {
    //console.log(data.monstersDB[1].name);
    $('#monsterDB').text(data.monstersDB[35].name);
});
socket.on('treasureDB', function (data) {
    //console.log(data.treasureDB[1]);
    $('#treasureDB').text(data.treasureDB[1].idcards);
});
socket.on('cardsDB', function (data) {
    //console.log(data.cardsDB[1]);
    $('#cardsDB').text(data.cardsDB[96].name);
});
socket.on('gearDB', function (data) {
    //console.log(data.gearDB[1]);
    $('#gearDB').text(data.gearDB[28].race);
});
socket.on('hirelingDB', function (data) {
    //console.log(data.hirelingDB[0]);
    $('#hirelingDB').text(data.hirelingDB[0].name);
});
socket.on('one_shotDB', function (data) {
    //console.log(data.one_shotDB[1]);
    $('#one_shotDB').text(data.one_shotDB[6].gold);
});
socket.on('typeDB', function (data) {
    //console.log(data.typeDB[1]);
    $('#typeDB').text(data.typeDB[7].type);
});
socket.on('doorsDB', function (data) {
    //console.log(data.doorsDB[1]);
    $('#doorsDB').text(data.doorsDB[80].idcards);
});

// sending via client_data
$(document).ready(function () {
    $('#text').keypress(function (e) {
        socket.emit('client_data', { 'letter': String.fromCharCode(e.charCode) });
    });
});
