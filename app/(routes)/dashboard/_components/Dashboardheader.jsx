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
} from "@/components/ui/dropdown-menu"


function DashboardHeader() {
  const { user } = useUser();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null; // Avoid hydration mismatch

  return user && (
    <div className="p-4 px-20">

      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex items-center gap-2 float-right mr-500">
            <h1 className="font-bold bg-blue-600 capitalize">{user?.fullName}</h1>
            <ChevronDown />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>


    </div>
  );
}

export default DashboardHeader;
