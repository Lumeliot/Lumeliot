

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
