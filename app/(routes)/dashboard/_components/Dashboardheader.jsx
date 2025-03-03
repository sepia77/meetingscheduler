"use client"; 

import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function DashboardHeader() {
  const { user } = useUser();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true); // This prevents rendering before hydration
  }, []);

  if (!hasMounted) return null; // Prevent mismatch during SSR

  return user && (
    <div className="p-4 px-20">
      <DropdownMenu>
        <DropdownMenuTrigger>
        <div className="flex float-right ml-230">
        <h1 className="font-bold bg-amber-100 capitalize border-b-stone-950 ">{user?.fullName}</h1>
            <ChevronDown />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Home</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default DashboardHeader;
