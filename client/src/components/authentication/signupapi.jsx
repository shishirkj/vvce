import axios from 'axios'

export function registerUserApi(form) {

    const config = {
      headers: {
        "Content-type": "application/json",
      },
      withCredentials: true,
    };
  
    return axios.post('http://localhost:4000/api/v1/signup', form, config);
  }
    
  