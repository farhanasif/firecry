import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyAyZ5nlER4Ft_246ppn0wJNppjoJo_7uBk",
    authDomain: "react-redux-c02aa.firebaseapp.com",
    databaseURL: "https://react-redux-c02aa.firebaseio.com",
    projectId: "react-redux-c02aa",
    storageBucket: "react-redux-c02aa.appspot.com",
    messagingSenderId: "662703363063",
    appId: "1:662703363063:web:8d98b7f0520d264c09d4f2",
    measurementId: "G-FKYVMN7L9M"
}

class Firebase {
    constructor(){
        firebase.initializeApp(firebaseConfig);
        this.auth = firebase.auth;
        this.db = firebase.firestore();
    }

    login = async(email, password) => {
        const user = await firebase.auth().signInWithEmailAndPassword(email, password).catch(err => {
            console.log(err);
            return(err);
        })

        return user;
    }

    logout = async(email, password) => {
        const logout = await firebase.auth().signOut().catch(err => {
            console.log(err);
            return(err);
        })

        return logout;
    }

    getUserState = async() => {
        return new Promise(resolve => {
            firebase.auth().onAuthStateChanged(resolve);
        })
    }

    sendVerifyMail = async() => {
        const mail = await firebase.auth().signOut().catch(err => {
            console.log(err);
            return(err);
        })

        return mail;
    }
}

export default new Firebase;