import firebase from 'firebase';

class Firebase {
  constructor() {
    this.init();
    this.checkAuth();
  }
  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyCprGmtzNttNO3i4ZTiVSyuGEjgGTnxMEw',
        authDomain: 'social-67c20.firebaseapp.com',
        databaseURL: 'https://social-67c20.firebaseio.com',
        projectId: 'social-67c20',
        storageBucket: 'social-67c20.appspot.com',
        messagingSenderId: '439178756992',
        appId: '1:439178756992:web:a6b53bdc437a6b54743765',
        measurementId: 'G-NH0QBMES2M',
      });
    }
  };

  checkAuth = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase.auth.signInAnonymously();
      }
    });
  };

  send = (messages) => {
    messages.forEach((item) => {
      const message = {
        text: item.text,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user: item.user,
      };
      this.db.push(message);
    });
  };

  parse = (message) => {
    const {user, text, timestamp} = message.val();
    const {key: _id} = message;
    const createdAt = new Date(timestamp);

    return {_id, createdAt, text, user};
  };

  get = (callback) => {
    this.db.on('child_added', (snapshot) => callback(this.parse(snapshot)));
  };

  off() {
    this.db.off();
  }

  get db() {
    return firebase.database().ref('messages');
  }

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }
}

export default new Firebase();
