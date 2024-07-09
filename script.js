const radahnHP = document.getElementById("RadahnHP");
const radahnAtk = document.getElementById("RadahnAtk");
const radahnDef = document.getElementById("RadahnDef");
const radahnButton = document.getElementById("RadahnButton");
const maleniaHP = document.getElementById("MaleniaHP");
const maleniaAtk = document.getElementById("MaleniaAtk");
const maleniaDef = document.getElementById("MaleniaDef");
const maleniaButton = document.getElementById("MaleniaButton");

const radahn = {
  hp: 50,
  atk: 30,
  def: 25,
  attack: function (target) {
    target.hp -= this.atk - target.def;
  },
};

const malenia = {
  hp: 40,
  atk: 45,
  def: 15,
  attack: function (target) {
    target.hp -= this.atk - target.def;
  },
};

console.log(radahn.hp);

radahnButton.addEventListener("click", function (target) {
  radahn.attack(malenia);
});

maleniaButton.addEventListener("click", function (target) {
  malenia.attack(radahn);
});

window.requestAnimationFrame(function update() {
  radahnHP.textContent = `HP: ${radahn.hp}`;
  maleniaHP.textContent = `HP: ${malenia.hp}`;
  radahnAtk.textContent = `Attack: ${radahn.atk}`;
  maleniaAtk.textContent = `Attack: ${malenia.atk}`;
  radahnDef.textContent = `Defense: ${radahn.def}`;
  maleniaDef.textContent = `Defense: ${malenia.def}`;
  window.requestAnimationFrame(update);
});
