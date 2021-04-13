/*𝓟𝓲.𝑗𝑠 (Under development)*/

window.pijs = {};

/*chat*/
pijs.chat = {};
pijs.chat.send = (message) =>{
    MPP.client.sendArray([{m:"a", message: message}]);
};

pijs.chat.local = (message, color) =>{
    var msgs = $("#chat").children(0).html();
    var msgColor = color || "#FFFFFF";
    $("#chat").children().eq(0).html(`${msgs}<li style="color: ${msgColor}; opacity: 1;"><span class="message">${message}</span></li>`);
};

pijs.chat.setPlayerChatOutput = (func) =>{
    MPP.chat.send = func;
};

pijs.chat.setOnMsg = (func) =>{
    MPP.client.on("a", func);
    var chatEvents = MPP.client._events["a"];
    return chatEvents[chatEvents.length - 1];
};

pijs.chat.clearOnMsg = (eventIndex) =>{
    MPP.client._events["a"].splice(eventIndex, 1);
};


/*piano*/
pijs.piano = {};
pijs.piano.pressKey = (noteKey, volume) =>{
    MPP.press(noteKey, volume);
};

pijs.piano.pressLocal = (noteKey, volume) =>{
    MPP.piano.play(noteKey, volume, MPP.client.getOwnParticipant(), 0);
};

Object.defineProperty(pijs.piano, "keys", {  
  get: function(){
         return MPP.piano.keys;
  }
});


/*client*/
pijs.client = {};
pijs.client.sendArray = (arrayType, objArray) =>{
    var sendArrayArgs = {m:arrayType};
    Object.assign(sendArrayArgs, objArray);
    MPP.client.sendArray([sendArrayArgs]);
};

pijs.client.on = (eventType, eventFunc) =>{
    MPP.client.on(eventType, eventFunc);
};
