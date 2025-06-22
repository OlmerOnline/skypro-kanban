import axios from "axios";

const URL = "https://wedev-api.sky.pro/api/user";

export async function login(user) {
  try {
    const data = await axios.post(URL + "/login", user, {
      headers: {
        "Content-Type": "",
      },
    });

    return data.data.user;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}

export async function registration(user) {
  try {
    const data = await axios.post(URL, user, {
      headers: {
        "Content-Type": "",
      },
    });

    return data.data.user;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}
