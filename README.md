# 𝓟𝓲.𝑗𝑠 API (Under development)
Custom userscript API for MPP. Licensed under MIT.

### How to install:
Just put 𝓟𝓲.𝑗𝑠 [minified code](https://raw.githubusercontent.com/SuperPowerPlumber/pi.js/main/pi.js-min/pi.min.js) to your userscript code (or browser console).\
\
Source code (Unminified): [pi.js-src/pi.js](https://github.com/SuperPowerPlumber/pi.js/tree/main/pi.js-src/pi.js)

# Documentation
## `chat` property

### Sending Messages

```js
pijs.chat.send(message);
```

This function will send a message to everyone in the channel. Influenced by chat buffer.

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
#### pijs.chat.setOnMsg(Function func);
```

Sets an event listener that executes each time anyone sends a chat message. Also returns the index of the event created using `setOnMsg`.\
\
```js
pijs.chat.clearOnMsg(eventIndex);
```

Clears a onMsg event. (Requires event index).

### Structure of Incoming Messages (`sendArray`)

See [here](https://github.com/aeiou879/mppdocumentation/blob/main/allmessages).


## `piano` property

### Playing a note

```js
pijs.piano.pressKey(noteKey, volume);
```

This function will "press" a note on the piano, which everyone can hear.

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
pijs.client.sendArray(String messageType, Object clientMsg);```
