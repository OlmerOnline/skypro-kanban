export function setLocalStorage(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

export function getLocalStorage() {
  return JSON.parse(localStorage.getItem("user"));
}

export function clearLocalStorage() {
  localStorage.clear();
}
