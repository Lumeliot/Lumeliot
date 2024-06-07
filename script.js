function saveCharacter() {
  const character = {
    name: document.getElementById('name').value,
    race: document.getElementById('race').value,
    class: document.getElementById('class').value,
    background: document.getElementById('background').value
  };
  localStorage.setItem('character', JSON.stringify(character));
  alert('Personnage sauvegardé!');
}

function loadCharacter() {
  const character = JSON.parse(localStorage.getItem('character'));
  if (character) {
    document.getElementById('name').value = character.name;
    document.getElementById('race').value = character.race;
    document.getElementById('class').value = character.class;
    document.getElementById('background').value = character.background;
    alert('Personnage chargé!');
  } else {
    alert('Aucun personnage trouvé.');
  }
}

