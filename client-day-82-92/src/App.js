import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext.js';
import Home from './components/Home.js';
import RestaurantDetails from './components/RestaurantDetails.js';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import Filter from './components/FilterCard.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAswkSwsy0bnTyPLGLwDZKjZTzoVQaM5EA",
  authDomain: "zomoto-clone-424905.firebaseapp.com",
  projectId: "zomoto-clone-424905",
  storageBucket: "zomoto-clone-424905.appspot.com",
  messagingSenderId: "985885188289",
  appId: "1:985885188289:web:14b3a060c25599cd72b440"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<RestaurantDetails />} />
          <Route path="/filter" element={<Filter />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export { auth, provider };
export default App;
