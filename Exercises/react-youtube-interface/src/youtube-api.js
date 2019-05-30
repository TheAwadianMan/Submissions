
import axios from "axios";

const KEY = `AIzaSyBYxsEoWP__tYedZ_cfJ5rBBFRl4SIXh5U`;

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});