"use client";

import { useUser } from "@clerk/nextjs";
import { UserButton } from '@clerk/nextjs';
import React, { useEffect } from 'react';
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { app } from '../../FirebaseConfig';

function Dashboard() {
  const db = getFirestore(app);
  const { user, isSignedIn } = useUser();

  useEffect(() => {
    if (isSignedIn && user) {
      isBusinessRegistered();
    }
  }, [isSignedIn, user]);  // Include `user` in the dependency array to trigger when the user changes.

  const isBusinessRegistered = async () => {
    if (!user) return;

    // Access the email address correctly
    const email = user.emailAddresses && user.emailAddresses[0]?.emailAddress;

    console.log("User Emails:", user.emailAddresses);  // Log the full array to check structure
    console.log("User Email:", email);

    if (!email) {
      console.log("No email found!");
      return;
    }

    const docRef = doc(db, "BUSINESS", email); // Use email as the document ID
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  return (
    <div>
      Dashboard
      <UserButton />
    </div>
  );
}

export default Dashboard;
