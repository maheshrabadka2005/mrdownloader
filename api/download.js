const ytdl = require("ytdl-core");

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const videoUrl = req.query.url;
  if (!videoUrl) {
    return res.status(400).json({ error: "No URL given" });
  }

  if (!ytdl.validateURL(videoUrl)) {
    return res.status(400).json({ error: "Invalid YouTube link" });
  }

  const info = await ytdl.getInfo(videoUrl);
  const format = ytdl.chooseFormat(info.formats, { quality: "highest" });
  res.json({
    title: info.videoDetails.title,
    download: format.url
  });
};