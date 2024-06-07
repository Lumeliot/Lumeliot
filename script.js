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

//firebase
window.onload = function() {
  loadCharacter();
}
 <script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyClIUyVdI8V7_paFfleHckFObtmpKBM_ZA",
    authDomain: "feuille-de-personnage.firebaseapp.com",
    projectId: "feuille-de-personnage",
    storageBucket: "feuille-de-personnage.appspot.com",
    messagingSenderId: "444461706985",
    appId: "1:444461706985:web:fa5a02cbd06aaaa0be0a78",
    measurementId: "G-M8BZ4SDBG2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
