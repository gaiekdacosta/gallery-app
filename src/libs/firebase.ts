import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD7t0E19iY9x2wKQXE0kW6MjKGg_NqbVHE",
    authDomain: "projeto-galeria-a7819.firebaseapp.com",
    projectId: "projeto-galeria-a7819",
    storageBucket: "projeto-galeria-a7819.appspot.com",
    messagingSenderId: "728210915522",
    appId: "1:728210915522:web:faff91d6801599deee3b5b"
};

const firebaseApp = initializeApp(firebaseConfig);

export const storage = getStorage(firebaseApp)