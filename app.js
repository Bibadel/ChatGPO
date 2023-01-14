const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1538511",
  key: "72aad3006762a835f55e",
  secret: "0e1a33039949bdc497b2",
  cluster: "eu",
  useTLS: true
});

pusher.trigger("my-channel", "my-event", {
  message: "C'est bueger ?"
});