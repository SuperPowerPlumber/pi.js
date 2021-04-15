# 𝓟𝓲.𝑗𝑠 API (Under development)
Custom userscript API for [MPP](https://multiplayerpiano.com). Licensed under MIT.

### How to install:
Just put 𝓟𝓲.𝑗𝑠 [minified code](https://raw.githubusercontent.com/SuperPowerPlumber/pi.js/main/pi.js-min/pi.min.js) to your userscript code (or browser console).\
\
Source code (Unminified): [pi.js-src/pi.js](https://github.com/SuperPowerPlumber/pi.js/tree/main/pi.js-src/pi.js)

# Documentation
## `chat` property
### Sending messages
```js
pijs.chat.send(message);
```
This function will send a message to everyone in the channel. Influenced by chat buffer. Credit to Aeiou for chat buffer code.

### Logging local messages (for your eyes only!)
```js
pijs.chat.local(message, String color);
```
Makes local customizable messages in chat which only you can see. Supports HTML. Not affected by chat buffer.

### Changing how you chat
```js
pijs.chat.setPlayerChatOutput(Function func);
```
Using this you can change the message output function which executes after pressing enter key when you send message.

### Adding a chat listener
```js
pijs.chat.setOnMsg(Function func);
```
Sets an event listener that executes each time anyone sends a chat message. Also returns the index of the event created using `setOnMsg`.
#### Removing a chat event listener
```js
pijs.chat.clearOnMsg(eventIndex);
```
Clears a onMsg event. (Requires event index).

## `piano` property
### Playing a note
```js
pijs.piano.pressKey(noteKey, volume);
```
This function will "press" a key on the piano, which everyone can hear.

### Playing a local note (for your ears only!)
```js
pijs.piano.pressLocal(noteKey, volume);
```
Same as, pijs.piano.pressKey, but only you hear your notes.

### Extracting piano key data

```js
pijs.piano.keys
```
Returns a list with all piano keys codes.


## `client` property
### Sending messages to the server
```js
pijs.client.sendArray(String messageType, Object clientMsg);
```
Each message (not confused with chat message) sended using sendArray is an object (`[{}]`) in which the parameter "m" is message type, and other parameters depending on the type of the message (ex. parameter "color"). Seeing the type, the server understands what the person wanted to do.\
\
Example:\
MPP's built-in sendArray
```js
MPP.client.sendArray([{"m":"chown","id":"0123456789abcdef01234567"}]);
```
or more simplified `pijs.client.sendArray`
```js
pijs.client.sendArray("chown", {"id":"0123456789abcdef01234567"});
```
with message type "chown" and parameter "id" gives crown to player with temp id "0123456789abcdef01234567".\
\
You can learn about message types and how to use them [here](https://github.com/aeiou879/mppdocumentation/blob/main/allmessages).

## `player` property
### `pijs.player.name
Returns your name.
