const clientId = "p0hejdfujchg7j5vax0ghgpfgiasqo";
const accessToken = "cfzn8c0yjyw28ndkzsc90xkkw4nwxy";
const channels = [
  "sunniep", "xqc", "pokimane", "shroud",
  "valkyrae", "myreshatv", "kai_cenat", "fuslie"
];

const container = document.getElementById("stream-grid");

channels.forEach((channel) => {
  const streamDiv = document.createElement("div");
  streamDiv.className = "stream-embed";

  const iframe = document.createElement("iframe");
  iframe.src = `https://player.twitch.tv/?channel=${channel}&parent=sunniep.github.io&autoplay=false`;
  iframe.allowFullscreen = true;

  streamDiv.appendChild(iframe);
  container.appendChild(streamDiv);
});
