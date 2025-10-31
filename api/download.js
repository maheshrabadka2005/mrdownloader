export default async function handler(req, res) {
  const videoURL = req.query.url;

  if (!videoURL) {
    return res.status(400).json({ error: "No URL provided" });
  }

  // Example only — real video download logic will go here
  res.status(200).json({
    success: true,
    download: videoURL // temporary for testing
  });
}