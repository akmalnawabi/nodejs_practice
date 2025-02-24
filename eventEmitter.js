const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`user info name:${name} and id:${id}`);
});

customEmitter.emit("response", "akmal", 7);
