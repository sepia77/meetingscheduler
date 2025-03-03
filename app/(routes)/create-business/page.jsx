"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useUser } from "@clerk/nextjs"; 
import { app } from 'app/FirebaseConfig';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

function CreateBusiness() {
    const [businessName, setBusinessName] = useState();
    const db = getFirestore(app);
    const router = useRouter();

    const { user, isSignedIn } = useUser();

    const onCreateBusiness = async () => {
        if (!user) {
            console.log("User is not signed in");
            return;
        }

        const email = user.emailAddresses && user.emailAddresses[0]?.emailAddress;

        if (!email) {
            console.log("No email found!");
            return;
        }

        try {
            // Saving the data to Firestore
            await setDoc(doc(db, 'Business', email), {
                businessName: businessName,
                email: email,
                userName: user.fullName
            });

            console.log("Document saved");
            toast("New Business Created!");

            // After saving the business, set a flag to indicate creation is done
            localStorage.setItem("businessCreated", "true"); // Store the flag
            router.replace("/dashboard");
        } catch (error) {
            console.error("Error saving document:", error);
        }
    };

    return (
        <div className='p-14 items-center flex flex-col gap-20'>
            <h1 className='font-bold text-2xl'>Meeting Scheduler</h1>

            <div className='flex flex-col items-center gap-4 max-w-3xl'>
                <h2 className='text-4xl font-bold'>What should we call your business?</h2>
                <p className='text-slate-500'>You can always change this later from settings</p>
                <div className='w-full'>
                    <label className='text-slate-400'>Team Name</label>
                    <Input placeholder='team name' className='mt-2' 
                        onChange={(event) => setBusinessName(event.target.value)} />
                </div>
                <Button className='w-full'
                        disabled={!businessName}
                        onClick={onCreateBusiness}>Create Business</Button>
            </div>
        </div>
    );
}

export default CreateBusiness;
