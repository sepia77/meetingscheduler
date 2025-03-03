"use client";
import React from "react";
import { useUser, signOut } from "@clerk/nextjs"; // Direct import for signOut
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

function Header() {
  const { user } = useUser();
  const handleSignOut = () => {
    signOut(); // Directly use signOut
  };

  return (
    <div className="flex padding p-5 md:pl-130 bg-black text-white">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex float-right ml-200">
            <h1 className="font-bold capitalize border-b-stone-950">{user?.fullName}</h1>
            <ChevronDown />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="float-right ml-215">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Home</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem onClick={handleSignOut}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Header;
