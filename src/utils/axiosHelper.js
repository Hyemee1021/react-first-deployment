import axios from "axios";

const apiUrl = "http://www.omdbapi.com/?apikey=212bd8d2&t=";

export const fetchMovie = async (str) => {
  //promise

  //   axios.get(apiUrl).then((response) => {
  //     console.log(response);
  //   });

  //async await

  try {
    //detructering data from response
    // response.data
    const { data } = await axios.get(apiUrl + str);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
