import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged,} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from "../firebase/firebase.init";

firebaseInitialize();

const useFirebase=()=>{
    const [user,setUser]=useState({});



    const auth = getAuth();


const signInUsingGoogle=()=>{
    const googleProvider = new GoogleAuthProvider();
  return signInWithPopup(auth, googleProvider)
    



}
useEffect(()=>{
const unsubscribed = onAuthStateChanged(auth,user=>{
    if(user){
        setUser(user);
    }
    else{
        setUser({})
    }
});
return ()=>unsubscribed;
},[auth])
const logOut=()=>{
   signOut(auth)
   .then(()=>{})
}


    return {user,signInUsingGoogle,logOut};
}

export default useFirebase;