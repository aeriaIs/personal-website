"use client";

import Link from "next/link";

import { Mail } from "lucide-react";

import { Container } from "@/components/container";
import { Button } from "@/components/ui";
import { SiLinkedin } from "react-icons/si";

export default function CallToAction() {
  return (
    <Container id="contact" className="w-full max-w-5xl h-full p-6 py-8 flex flex-col md:flex-row justify-center items-center gap-20">
      {/* CTA */}
      <div className="text-6xl ">
        <h5 className="text-muted-foreground">Reach Me</h5> <p className="font-semibold text-primary italic">Out -</p>
      </div>
      <div className="mt-2 flex flex-col justify-center items-center gap-4">
        <Link href="#mailto:yalfantyo@gmail.com" className="w-fit text-lg font-semibold">
          <Button variant="outline" className="rounded-md" size="lg">
            <Mail className="size-6" />
            <p className="ml-2">Contact Me</p>
          </Button>
        </Link>
        <Link href="https://www.linkedin.com/in/yudhoalfantyo" className="w-fit text-lg font-semibold">
          <Button className="bg-blue-600 hover:bg-blue-700 rounded-md" size="lg">
            <SiLinkedin className="size-6" />
            <p className="ml-2">Contact Me</p>
          </Button>
        </Link>
      </div>
    </Container>
  );
}
