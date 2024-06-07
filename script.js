function saveCharacter() {
  const character = {
    name: document.getElementById('name').value,
    race: document.getElementById('race').value,
    class: document.getElementById('class').value,
    background: document.getElementById('background').value
  };

  // Utiliser Firebase pour sauvegarder les données
  const dbRef = firebase.database().ref('feuilles-de-personnage');
  dbRef.push(character)
    .then(() => {
      alert('Personnage sauvegardé avec succès!');
    })
    .catch((error) => {
      console.error('Erreur lors de la sauvegarde du personnage : ', error);
      alert('Erreur lors de la sauvegarde du personnage. Veuillez réessayer.');
    });
}


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
