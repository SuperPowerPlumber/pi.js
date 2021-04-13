# 𝓟𝓲.𝑗𝑠 API (Under development)
Custom userscript API for MPP. Licensed under MIT.

### How to install:
Just put 𝓟𝓲.𝑗𝑠 [minified code](https://github.com/SuperPowerPlumber/pi.js/blob/main/pi.js-min/pi.min.js) to your userscript code (or browser console).\
\
Source code (Unminified): [pi.js-src/pi.js](https://github.com/SuperPowerPlumber/pi.js/tree/main/pi.js-src/pi.js)

## Documentation
### pijs.chat
#### pijs.chat.send(message);
Sends your messages to everyone in chat.
#### pijs.chat.local(message, color);
Makes local customizable messages in chat which only you can see. Supports HTML.
#### pijs.chat.setPlayerChatOutput(func);
Using this you can change the message output function which executes after pressing enter key when you send message.\
\
`func` is `function(message){...}`
#### pijs.chat.setOnMsg(func);
Sets a event function that executes each time someone (you too) sends message. Also, returns a index of the event created using `setOnMsg`. \
\
`func` is `function(msg){}`
* `msg.a` is message.
* `msg.p` is a info about message sender.
#### pijs.chat.clearOnMsg(eventIndex);
Clears a onMsg event. (Requires event index).
### pijs.piano
#### pijs.piano.pressKey(noteKey, volume);
Presses note on piano which everyone hear.
#### pijs.piano.pressLocal(noteKey, volume);
Same as, pijs.piano.pressKey, but only you hear your notes.
#### pijs.piano.keys
Returns a list with all piano keys codes.
