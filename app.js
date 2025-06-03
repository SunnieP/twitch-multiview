const clientId = "YOUR_CLIENT_ID";
const accessToken = "YOUR_ACCESS_TOKEN";
const channels = [
  "sunniep", "xqc", "pokimane", "shroud",
  "valkyrae", "myreshatv", "kai_cenat", "fuslie"
];

const container = document.getElementById("stream-grid");

channels.forEach((channel) => {
  const streamDiv = document.createElement("div");
  streamDiv.className = "stream-embed";

  const iframe = document.createElement("iframe");
  iframe.src = `https://player.twitch.tv/?channel=${channel}&parent=localhost&autoplay=false`;
  iframe.allowFullscreen = true;

  streamDiv.appendChild(iframe);
  container.appendChild(streamDiv);
});
