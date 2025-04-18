import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
app.use(cors());

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = "https://localhost:5173/"; // Frontend callback URI

app.get("/login", (req, res) => {
  const scope = "user-read-private user-read-email";
  const redirectUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${CLIENT_ID}&scope=${scope}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;
  res.redirect(redirectUrl);
});

app.get("/callback", async (req, res) => {
  const code = req.query.code;

  try {
    const response = await axios.post("https://accounts.spotify.com/api/token", new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: REDIRECT_URI,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    }), {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    const { access_token, refresh_token } = response.data;
    res.redirect(`http://localhost:5173/?access_token=${access_token}&refresh_token=${refresh_token}`);
  } catch (error) {
    res.status(500).send("Error exchanging code for token");
  }
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
