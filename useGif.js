import axios from "axios";
import { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

export const useGif = (tag) => {
  const [gif, setGif] = useState("");

  const fetchGifs = async (tag) => {
    const {
      data: { data },
    } = await axios
      .get(tag ? `${url}&tag=${tag}` : url)
      .catch((er) => console.log(er.message));
    const imageSrc = data?.images.downsized_large.url;
    setGif(imageSrc);
  };

  useEffect(() => {
    fetchGifs(tag);
  }, [tag]);

  return { gif, fetchGifs };
};
