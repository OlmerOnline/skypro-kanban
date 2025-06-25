import axios from "axios";

const URL = "https://wedev-api.sky.pro/api/kanban";

export async function fetchGetTasks(token) {
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

export async function fetchAddTask(token, task) {
  try {
    const data = await axios.post(URL, task, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "",
      },
    });

    return data.data.tasks;
  } catch (error) {
    console.log(error.response.data.error);
    throw new Error(error.message);
  }
}
