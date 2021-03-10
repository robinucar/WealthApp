const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionariesBtn = document.getElementById('show-millionaries');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];

// fetch random user and add money

const getRandomUser = async () => {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();

  const user = data.results[0];
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };
  addData(newUser);
};

//Double money

const doubleMoney = () => {
  data = data.map((user) => {
    return { ...user, money: user.money * 2 };
  });
  updateDom();
};

// Add new obj to data arr

const addData = (obj) => {
  data.push(obj);
  updateDom();
};

//updateDom

const updateDom = (provideData = data) => {
  //clear main div
  main.innerHTML = ' <h2><strong>Person</strong>Wealth</h2>';

  provideData.forEach((item) => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
      item.money
    )}`;
    main.appendChild(element);
  });
};

//format number as money

const formatMoney = (number) => {
  return '$ ' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

//Event Listeners

addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
