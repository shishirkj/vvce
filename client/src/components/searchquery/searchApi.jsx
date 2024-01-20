import axios from "axios";

export function getSearchQuery(input) {

    const config = {
      headers: {
        "Content-type": "multipart/form-data",
      },
      withCredentials: true,
    };
  
    return axios.get(`http://localhost:4000/api/v1/search?q=${input}`, config);
  }
    
  