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

function sauvegarderFeuilleDePersonnage(nom, points) {
  // Créer une référence à l'emplacement dans la base de données où vous voulez sauvegarder les données
  const ref = firebase.database().ref('feuilles-de-personnage/' + nom);

  // Enregistrer les données dans la base de données
  ref.set({
    nom: nom,
    points: points
  }).then(() => {
    console.log('Données sauvegardées avec succès');
  }).catch((error) => {
    console.error('Erreur lors de la sauvegarde des données : ', error);
  });
}

