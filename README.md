# 𝓟𝓲.𝑗𝑠 API (Under development)
Custom userscript API for MPP. Licensed under MIT.

### How to install:
Just put 𝓟𝓲.𝑗𝑠 [minified code](https://raw.githubusercontent.com/SuperPowerPlumber/pi.js/main/pi.js-min/pi.min.js) to your userscript code (or browser console).\
\
Source code (Unminified): [pi.js-src/pi.js](https://github.com/SuperPowerPlumber/pi.js/tree/main/pi.js-src/pi.js)

# Documentation

## `chat` Property

### Sending Messages

```js
pijs.chat.send(message);
```

This function will send a message to everyone in the channel. Influenced by chat buffer.

### Logging Local Messages (for your eyes only!)

```js
pijs.chat.local(String message, String color);
```

Makes local customizable messages in chat which only you can see. Supports HTML. Not affected by chat buffer.

### Changing how you chat

```js
pijs.chat.setPlayerChatOutput(Function cb());
```

Using this you can change the message output function which executes after pressing enter key when you send message.

### Adding a Chat Listener

```js
#### pijs.chat.setOnMsg(func);
```

Sets an event listener that executes each time anyone sends a chat message. Also returns the index of the event created using `setOnMsg`.\
\
```js
pijs.chat.clearOnMsg(eventIndex);
```

Clears a onMsg event. (Requires event listener).

### Structure of Incoming Messages (`sendArray`)

See [here](https://github.com/aeiou879/mppdocumentation/blob/main/allmessages).


## `piano` Property

### Playing a Note

```js
pijs.piano.pressKey(noteKey, volume);
```

This function will "press" a note on the piano, which everyone can hear.

### Playing a Local Note (for your ears only!)

```js
pijs.piano.pressLocal(noteKey, volume);
```

Same as, pijs.piano.pressKey, but only you hear your notes.

### Extracting Piano Key Data

```js
pijs.piano.keys
```

Returns a list with all piano keys codes.
