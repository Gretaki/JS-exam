/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const showUsersButton = document.getElementById('btn');

showUsersButton.addEventListener('click', () => {
  renderUserCards();
});

async function renderUserCards() {
  const users = await getUsers();

  deleteOutputElements();
  renderOutput(users);
}

async function getUsers() {
  const response = await fetch(ENDPOINT)
    .then(response => response.json());

  const data = response.map(element => ({
    login: element.login,
    avatar_url: element.avatar_url
  }));

  return data;
}

function deleteOutputElements() {
  const outputChildren = document.querySelectorAll('#output > *');
  outputChildren.forEach(child => child.remove());
}

function renderOutput(users) {
  const output = document.getElementById('output');

  for (const user of users) {
    const card = document.createElement('div');
    card.classList.add('card');
    const image = document.createElement('img');
    const login = document.createElement('p');
    image.setAttribute('src', user.avatar_url);
    image.setAttribute('title', user.avatar_url);
    // card.style.display = "flex";

    login.innerText = user.login;

    card.append(image, login);
    output.appendChild(card);
  }
}
