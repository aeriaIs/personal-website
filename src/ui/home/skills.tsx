import { SiCss3, SiGit, SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";

import { Container } from "@/components/container";

const SKILLS = [
  {
    name: "HTML",
    icon: <SiHtml5 className="fill-muted-foreground group-hover:fill-primary" />
  },
  {
    name: "CSS",
    icon: <SiCss3 className="fill-muted-foreground group-hover:fill-primary" />
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="fill-muted-foreground group-hover:fill-primary" />
  },

  {
    name: "React",
    icon: <SiReact className="fill-muted-foreground group-hover:fill-primary" />
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="fill-muted-foreground group-hover:fill-primary" />
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="fill-muted-foreground group-hover:fill-primary" />
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="fill-muted-foreground group-hover:fill-primary" />
  },
  {
    name: "React Native",
    icon: <SiReact className="fill-muted-foreground group-hover:fill-primary" />
  },
  {
    name: "Git",
    icon: <SiGit className="fill-muted-foreground group-hover:fill-primary" />
  }
];

export default function Skills() {
  return (
    <Container className="w-full max-w-2xl h-full p-6 py-8 flex flex-col justify-center items-center gap-20">
      {/* my skills */}
      <h5 className="text-center text-4xl text-muted-foreground">The skills and technologies that I use:</h5>
      <div className="mt-2 w-full flex flex-wrap justify-center items-center gap-8">
        {SKILLS.map((skill, index) => (
          <div key={index} className="group w-fit flex flex-row justify-between items-center gap-x-2">
            <div className="size-8 flex justify-center items-center rounded-full ring ring-muted-foreground group-hover:ring-primary">
              {skill.icon}
            </div>
            <h5 className="text-muted-foreground group-hover:text-primary">{skill.name}</h5>
          </div>
        ))}
      </div>
    </Container>
  );
}
