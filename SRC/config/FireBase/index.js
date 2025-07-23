import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAfYuXmtncCNljdcqJrkYyr1kuPwBaHOSk',
  authDomain: 'resalaundry-firebase.firebaseapp.com',
  projectId: 'resalaundry-firebase',
  storageBucket: 'resalaundry-firebase.appspot.com',
  messagingSenderId: '251738154724',
  appId: '1:251738154724:web:7c8fb0f403a4f0e2cdeef1',
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export {database};
