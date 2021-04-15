/*𝓟𝓲.𝑗𝑠 API source code (Under development)*/

window.pijs = {};
var getter = (obj, prop, func) =>{
    Object.defineProperty(obj, prop, { get: func });
};

var setter = (obj, prop, func) =>{
    Object.defineProperty(obj, prop, { set: func });
};

/*chat*/
pijs.chat = {};
pijs.chat.send = (message) => {
    function sendFromBuffer() {

        if (pijs.chat.buffer.length === 0) return;

        pijs.chat.bufferCount++;

        MPP.client.sendArray([{
            m: "a",
            message: pijs.chat.buffer[0]
        }]);

        pijs.chat.buffer.shift();

        setTimeout(() => {
            pijs.chat.bufferCount--;
            
            sendFromBuffer();
        }, MPP.client.isOwner() ? 2500 : 6500);
    };

    pijs.chat.buffer.push(message);
    if (pijs.chat.bufferCount < (MPP.client.isOwner() ? 10 : 4)) sendFromBuffer();
};

pijs.chat.bufferCount = 0;
pijs.chat.buffer = [];
pijs.chat.clearBuffer = () =>{
    pijs.chat.buffer = [];
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

getter(pijs.piano, "keys", () =>{
    return MPP.piano.keys;
});

/*player*/
getter(pijs, "player", ()=>{
    var player = MPP.client.getOwnParticipant();
    player.setName = (nickname) => {
        MPP.client.sendArray([{"m":"userset","set":{"name":nickname}}]);
    };
    return player;
});


/*players*/
getter(pijs, "players", ()=>{
    var players = {};
    Object.values(MPP.client.ppl).forEach(function(player){
        players[player._id] = player;
    });
    return players;
});


/*client*/
pijs.client = {};
pijs.client.sendArray = (messageType, clientMsg) =>{
    var sendArrayArgs = {m:messageType};
    Object.assign(sendArrayArgs, clientMsg);
    MPP.client.sendArray([sendArrayArgs]);
};

pijs.client.on = (eventType, eventFunc) =>{
    MPP.client.on(eventType, eventFunc);
};
