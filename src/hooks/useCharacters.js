import { useState, useEffect } from "react";

const useCharacters = (url) => {
  const [characters, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data.results));
  }, [url]);
  return characters;
};

export default useCharacters;
