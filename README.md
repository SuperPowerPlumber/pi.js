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
pijs.chat.clearOnMsg(Integer eventIndex);
```
Clears a onMsg event. (Requires event index).

## `piano` property
### Playing a note
```js
pijs.piano.pressKey(String noteKey, volume);
```
This function will "press" a key on the piano, which everyone can hear.

### Playing a local note (for your ears only!)
```js
pijs.piano.pressLocal(String noteKey, volume);
```
Same as, pijs.piano.pressKey, but only you hear your notes.

### Changing how you play on a piano
```js
pijs.piano.setPlayerPianoOutput(Function func);
```
Using this you can change the note play function which executes after each your piano note play.

### Extracting piano key data
```js
pijs.piano.keys
```
Returns a list with all piano keys codes.

## `player` property
### pijs.player.name
Returns your player name.
### pijs.player.color
Returns your color in hexadecimal format. Depends on your _id.
### pijs.player._id
Your player identifier. Depends on your IP address.
### pijs.player.id
Your temporary identifier. Changes after each rejoining the game.
### pijs.player.x
Returns your cursor position on x-axis.
### pijs.player.y
Returns your cursor position on y-axis.
### Setting your name
```js
pijs.player.setName(nickname);
```
Sets your player name. Maximum name length is 40 characters.

## `players` property
Returns a list of all players in the room where you are. Each player on a list contains these properties:
* **name**
* **color**
* **_id**
* **id**
* **x**
* **y**

```js
pijs.players[String _id];
```
To get properties of the player, you need to use his/her _id.

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
