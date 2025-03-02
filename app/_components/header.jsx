"use client"
import { Button } from "@/components/ui/button";
import React from "react";
import { useUser, UserButton } from "@clerk/nextjs";
import Link from 'next/link'



function Header() {
  
const {user, isSignedIn}=useUser();
  return (

        <div className="flex items-center justify-between padding p-5 md:pl-130 bg-black text-white">
          <ul className="flex gap-14">
            <li className="hover:text-red-900 cursor-pointer">Product</li>
            <li className="hover:text-red-900 cursor-pointer">Pricing</li>
            <li className="hover:text-red-900 cursor-pointer">Contact Us</li>
            <li className="hover:text-red-900 cursor-pointer">About Us</li>
          </ul>
          {isSignedIn ? <UserButton/>: 
          <Link href={'/sign-in'}><Button>Sign up</Button></Link>}
          
      
        </div>
    

  );
  
}

export default Header;
