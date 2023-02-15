import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCM1-sLUqmrZZqMt_Jl82pSna-pfAd6Taw',
  authDomain: 'chat-gpt-523a3.firebaseapp.com',
  projectId: 'chat-gpt-523a3',
  storageBucket: 'chat-gpt-523a3.appspot.com',
  messagingSenderId: '131738413462',
  appId: '1:131738413462:web:465f56802b8f17252615b7',
}

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }
