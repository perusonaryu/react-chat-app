import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyD_a9WROpL7QWSNS4q-2Q7C1HbOmyrIYi8",
    authDomain: "realtimechat-app-b57fc.firebaseapp.com",
    databaseURL: "https://realtimechat-app-b57fc-default-rtdb.firebaseio.com",
    projectId: "realtimechat-app-b57fc",
    storageBucket: "realtimechat-app-b57fc.appspot.com",
    messagingSenderId: "813349424765",
    appId: "1:813349424765:web:090bfedb11953a47a82b14",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const messagesRef = database.ref('messages');

export const pushMessage = ({name,text}) =>{
    messagesRef.push({name,text});
}

// const app = initializeApp(firebaseConfig);
