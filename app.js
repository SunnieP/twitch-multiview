const clientId = "p0hejdfujchg7j5vax0ghgpfgiasqo";
const accessToken = "cfzn8c0yjyw28ndkzsc90xkkw4nwxy";
const channels = [
  "sunniep", "xqc", "pokimane", "shroud",
  "valkyrae", "myreshatv", "kai_cenat", "fuslie"
];

const container = document.getElementById("stream-grid");

channels.forEach((channel) => {
  const wrapper = document.createElement("div");
  wrapper.className = "stream-wrapper";

  const streamDiv = document.createElement("div");
  streamDiv.className = "stream-embed";
  const streamIframe = document.createElement("iframe");
  streamIframe.src = `https://player.twitch.tv/?channel=${channel}&parent=sunniep.github.io&autoplay=false`;
  streamIframe.allowFullscreen = true;
  streamDiv.appendChild(streamIframe);

  const chatDiv = document.createElement("div");
  chatDiv.className = "chat-embed";
  const chatIframe = document.createElement("iframe");
  chatIframe.src = `https://www.twitch.tv/embed/${channel}/chat?parent=sunniep.github.io`;
  chatDiv.appendChild(chatIframe);

  wrapper.appendChild(streamDiv);
  wrapper.appendChild(chatDiv);
  container.appendChild(wrapper);
});
