import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const NavBar = () => {
  return (
    <div className="flex flex-row items-center justify-around gap-4 sticky inset-0 w-full h-16 bg-card border-b-2 border-border px-[2.5rem]">
      <div>
        <h1 className="font-semibold text-3xl font-mono text-primary">gDEV</h1>
      </div>
      <Separator orientation="vertical" className="h-6 bg-foreground" />
      {/* NAViGATION LINKS */}
      <div className="flex items-center justify-center gap-4">
        <Button variant="ghost" className="font-semibold">Home</Button>
        <Button variant="ghost" className="font-semibold">About</Button>
        <Button variant="ghost" className="font-semibold">Career</Button>
        <Button variant="ghost" className="font-semibold">Contact</Button>
      </div>
      <Separator orientation="vertical" className="h-6 bg-foreground" />
      {/* EXTERNAL LINKS */}
      <div className="flex items-center justify-center gap-4">
        <Button variant="ghost" size="icon">
          <Linkedin />
        </Button>
        <Button variant="ghost" size="icon">
          <Github />
        </Button>
        <Button variant="ghost" size="icon">
          <Twitter />
        </Button>
        <Button variant="ghost" size="icon">
          <Instagram />
        </Button>
      </div>
    </div>
  );
};
