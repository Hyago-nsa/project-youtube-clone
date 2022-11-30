import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: { maxResults: "50" },
  headers: {
    "X-RapidAPI-Key": "7cdd221fdcmshe81e2cffbb69b28p196c51jsn30307d358338",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
