"use client";

import { useUser } from "@clerk/nextjs";
import { UserButton } from '@clerk/nextjs'
import React from 'react'
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { app } from '../../FirebaseConfig';

function Dashboard() {
  const db = getFirestore(app);
  const { user, isSignedIn } = useUser();

  const isBusinessRegistered = async () => {
  const docRef = doc(db, "BUSINESS", "SF");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }

  }
  return (
    
    <div>Dashboard
    <UserButton />
    </div>
  )
}

export default Dashboard