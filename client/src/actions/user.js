import axios from "axios";

export const auth = async (username, password) => {
  try {
    const response = axios.post(`http://localhost:3000/`, {
      username,
      password,
    });
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};

export const registration = async (username, email, password) => {
  try {
    const response = axios.post(`http://localhost:3000/`, {
      username,
      email,
      password,
    });
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};
