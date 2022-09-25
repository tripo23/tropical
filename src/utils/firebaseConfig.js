// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, where, query, doc, getDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8-gHRnD-lvozaeAiIqmtTYMcApKS-DZY",
  authDomain: "tropical-plantas.firebaseapp.com",
  projectId: "tropical-plantas",
  storageBucket: "tropical-plantas.appspot.com",
  messagingSenderId: "233670506262",
  appId: "1:233670506262:web:b021a66edf44b0591cc237"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const firestoreFetch = async (categoryID) => {
    
    let IDcategory = parseInt(categoryID);
    let q;

    if (categoryID) {
        /* Me trae solo los productos correspondientes a la categoría */
        q = query(collection(db, "products"), where('categoryID', '==', IDcategory));
    } else {
        /* Me trae todos los productos */
        q = query(collection(db, "products"));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
    return dataFromFirestore
}

export const firestoreFetchSingleDoc = async (docID) => {
    const docRef = doc(db, "products", docID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        let result = {
            id: docID,
            ...docSnap.data()
          }
          return result
    } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    }
}

export default db;