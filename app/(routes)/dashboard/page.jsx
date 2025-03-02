"use client";

import { useUser } from "@clerk/nextjs";
import { UserButton } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react';
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { app } from '../../FirebaseConfig';
import { useRouter } from "next/navigation";


function Dashboard() {
  const db = getFirestore(app);
  const { user, isSignedIn } = useUser();
  const [loading, setLoading] = useState(true);
  const [businessExists, setBusinessExists] = useState(false);  // Track if business exists
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn && user) {
      isBusinessRegistered();
    }
  }, [isSignedIn, user]);

  const isBusinessRegistered = async () => {
    if (!user) return;

    const email = user.emailAddresses && user.emailAddresses[0]?.emailAddress;
    if (!email) {
      console.log("No email found!");
      setLoading(false);
      return;
    }

    // Check localStorage for the businessCreated flag to prevent loops
    const businessCreatedFlag = localStorage.getItem("businessCreated");
    if (businessCreatedFlag === "true") {
      setBusinessExists(true);
      setLoading(false);
      return;  // Skip the business check if already created
    }

    const docRef = doc(db, "BUSINESS", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setBusinessExists(true);
      setLoading(false);
    } else {
      console.log("No such document!");
      setLoading(false);
      router.replace("/create-business");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      Dashboard
      <UserButton />
    </div>
  );
}

export default Dashboard;
