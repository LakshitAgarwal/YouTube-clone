export const buttonTags = [
  "All",
  "Computer programming",
  "Podcasts",
  "Live",
  "Databases",
  "Consumer Electronics",
  "Recently uploaded",
  "New to you",
];

const GOOGLE_API_KEY = "AIzaSyBSejHVgBvws-G_Z-K2XazcUm9pmSKzibM";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_SUGGESTIONS_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
