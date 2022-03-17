// async-await.js

const fetch = require("node-fetch");

async function getUserGitHub(username) {
  const url = `https://api.github.com/users/${username}`;
  const response = await fetch(url);
  const responseJson = await response.json();

  if (response.status !== 200)
    throw Error("El usuario no posee perfil en github");

  return responseJson.name;
}

(async function () {
  try {
    const name = getUserGitHub("pedroot");
    console.log(name);
  } catch (error) {
    console.error(error);
  }
})();

getUserGitHub("pedroot")
  .then((name) => console.log(name))
  .catch((e) => console.error(e));
