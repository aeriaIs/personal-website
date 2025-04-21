"use client";

import Link from "next/link";

import { Mail } from "lucide-react";
import { SiLinkedin } from "react-icons/si";

import { Container } from "@/components/container";
import { Button } from "@/components/ui";

export default function CallToAction() {
  return (
    <Container id="contact" className="w-full max-w-5xl h-full p-6 py-8 flex flex-col md:flex-row justify-center items-center gap-20">
      {/* CTA */}
      <div className="text-6xl ">
        <h5 className="text-muted-foreground">Reach Me</h5> <p className="font-semibold text-primary italic">Out -</p>
      </div>
      <div className="mt-2 flex flex-col justify-center items-center gap-4">
        <Button variant="outline" className="rounded-md" size="lg">
          <Link href="#mailto:yalfantyo@gmail.com" target="_blank" className="w-fit flex justify-center items-center text-lg font-semibold">
            <Mail className="size-6" />
            <p className="ml-2">Contact Me</p>
          </Link>
        </Button>
        <Button className="bg-blue-600 hover:bg-blue-700 rounded-md" size="lg">
          <Link
            href="https://www.linkedin.com/in/yudhoalfantyo"
            target="_blank"
            className="w-fit flex justify-center items-center text-lg font-semibold"
          >
            <SiLinkedin className="size-6" />
            <p className="ml-2">Contact Me</p>
          </Link>
        </Button>
      </div>
    </Container>
  );
}
