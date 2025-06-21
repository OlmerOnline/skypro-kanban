import axios from "axios";

const URL = "https://wedev-api.sky.pro/api/kanban";

export async function fetchGetCards(token) {
  try {
    const data = await axios.get(URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data.data.tasks;
  } catch (error) {
    throw new Error(error.message);
  }
}
