import Pusher from "pusher-js";

const pusher = new Pusher("186aebe912003e50c14b", {
  cluster: "eu",
});

export default pusher;
