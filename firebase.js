import { initializeApp, getApps } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCRzsGLEl0NdmXo3oxbBq1QzXshHhZiPKQ",
  authDomain: "brainfood-c5636.firebaseapp.com",
  databaseURL: "https://brainfood-c5636-default-rtdb.firebaseio.com",
  projectId: "brainfood-c5636",
  storageBucket: "brainfood-c5636.firebasestorage.app",
  messagingSenderId: "398436761537",
  appId: "1:398436761537:web:dfccab7ef907d9653db940",
};

export const isFirebaseConfigured = firebaseConfig.apiKey !== '';

let db = null;
try {
  if (isFirebaseConfigured) {
    const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    db = getDatabase(app);
  }
} catch (e) {}

export { db };
