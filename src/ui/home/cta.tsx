"use client";

import Link from "next/link";

import { Mail } from "lucide-react";
import { SiLinkedin } from "react-icons/si";

import { Container } from "@/components/container";
import { Button } from "@/components/ui";
import { CONNECTS } from "./about-me";

export default function CallToAction() {
  return (
    <Container id="contact" className="w-full h-full flex flex-col justify-center items-center">
      {/* CTA */}
      <div className="w-full max-w-5xl h-full p-6 py-8 flex flex-col md:flex-row justify-center items-center gap-20">
        <div className="text-6xl">
          <h5 className="text-muted-foreground">Reach Me</h5> <p className="font-semibold text-primary italic">Out -</p>
        </div>
        <div className="mt-2 flex flex-col justify-center items-center gap-4">
          <Button variant="outline" className="w-full rounded-md" size="lg">
            <Link
              href="#mailto:yalfantyo@gmail.com"
              target="_blank"
              className="w-fit flex justify-center items-center text-lg font-semibold"
            >
              <Mail className="size-6" />
              <p className="ml-2">Email Me</p>
            </Link>
          </Button>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-md" size="lg">
            <Link
              href="https://www.linkedin.com/in/yudhoalfantyo"
              target="_blank"
              className="w-fit flex justify-center items-center text-lg font-semibold"
            >
              <SiLinkedin className="size-6" />
              <p className="ml-2">Connect with Me</p>
            </Link>
          </Button>
        </div>
      </div>
      <div className="w-full h-fit py-5 flex flex-col justify-center items-center gap-4">
        <h5 className="text-sm text-neutral-300 dark:text-neutral-500">Social Media</h5>
        <div className="w-full max-w-1/4 flex justify-center items-center gap-x-5">
          {CONNECTS.map((connect, index) => (
            <a key={index} href={connect.href} target="_blank" rel="noopener noreferrer">
              <div className="group size-8 flex justify-center items-center rounded-full ring ring-muted-foreground hover:ring-primary">
                {connect.icon}
              </div>
            </a>
          ))}
        </div>
        <h5 className="mt-2 text-muted-foreground">2024 &copy; Yudho Alfantyo</h5>
      </div>
    </Container>
  );
}
