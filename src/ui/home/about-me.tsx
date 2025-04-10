import Image from "next/image";

import { MonitorCheck, ShieldPlus, TabletSmartphoneIcon } from "lucide-react";

import Ava from "@/assets/profile-photo.png";

import { Container } from "@/components/container";

const CONNECTS = [
  {
    name: "Linkedin",
    icon: (
      <svg
        id="linkedin"
        viewBox="0 0 512 512"
        enableBackground="new 0 0 512 512"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="size-4 fill-muted-foreground group-hover:fill-primary"
      >
        <g>
          <path
            d="M173.5,508.7c0-2.4,0-4.7,0-7c0-107.7,0-215.3,0-323c0-3-0.2-5.4,4.2-5.4c31.8,0.2,63.7,0.1,95.5,0.1   
              c0.8,0,1.6,0.2,2.9,0.4c0,14,0,27.8,0,41.7c0.4,0.1,0.7,0.3,1.1,0.4c4-5.2,7.8-10.6,12-15.7c12.2-15,27.5-26,45.5-32.6   
              c9.8-3.6,20.5-5.8,30.8-6.3c14.2-0.6,28.7-0.4,42.7,2c23,3.9,43.3,14.1,60.1,30.8c15.9,15.7,26.4,34.6,32.1,55.9   
              c3,11.3,4.9,22.9,6.7,34.4c1.2,8,1.8,16.2,1.8,24.2c0.1,65,0.1,130,0.1,195c0,1.6-0.1,3.2-0.2,5.3c-1.9,0-3.5,0-5.1,0   
              c-30.7,0-61.3-0.1-92,0.1c-5.1,0-6-1.7-6-6.3c0.1-59.8,0.3-119.7-0.1-179.5c-0.1-10.5-1.1-21.4-3.8-31.5   
              c-4.9-17.7-16.1-30.5-33.9-37c-15-5.5-30.2-6.5-45.6-2.6c-17,4.3-28.7,15.6-37.5,30.5c-6.8,11.5-8.1,24.2-8.2,36.9  
              c-0.4,60.7-0.2,121.3-0.2,182c0,2.3,0,4.6,0,7.1C241.9,508.7,208,508.7,173.5,508.7z"
          />
          <path
            d="M109.1,342.6c0,53.3-0.1,106.6,0.1,159.9c0,4.8-1,6.6-6.3,6.5c-30.5-0.3-61-0.3-91.5,0c-5,0-6.1-1.7-6.1-6.3   
              c0.1-107.1,0.1-214.3,0-321.4c0-4.3,1.2-5.8,5.6-5.8c30.8,0.2,61.6,0.2,92.5,0c4.8,0,5.7,1.8,5.7,6.1 C109.1,235.3,109.1,289,109.1,342.6z"
          />
          <path d="M56.1,4.8C89,4,108.7,27.9,108.8,57.2c0.1,30-20.9,52.4-53.9,52.3c-30.7,0-52.4-22-52.3-53.1C2.7,27.3,23.8,3.8,56.1,4.8z" />
        </g>
      </svg>
    ),
    href: "https://www.linkedin.com/in/yudho-alfantyo"
  },
  {
    name: "Github",
    icon: (
      <svg
        id="Github"
        viewBox="0 0 30 30"
        enableBackground="new 0 0 30 30"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="size-4"
      >
        <path
          clipRule="evenodd"
          d="M19,30h-3.996h-4c0,0,0.011-2.372,0-4  c-5.473,1.178-7-3-7-3c-1-2-2-3-2-3c-2-1.188,0-1,0-1c2,0,3,2,3,2c1.755,2.981,4.878,2.501,6,2c0-1,0.438-2.512,1-3  C7.636,19.508,4,17,4,12s1.004-6,2.004-7C5.802,4.507,4.965,2.685,6.035,0C6.035,0,8,0,10,3c0.991-0.991,4-1,5.001-1  C16,2,19.009,2.009,20,3c2-3,3.969-3,3.969-3c1.07,2.685,0.233,4.507,0.031,5c1,1,2,2,2,7s-3.632,7.508-8,8c0.562,0.488,1,2.21,1,3  V30z"
          fill="#141313"
          fillRule="evenodd"
          id="Cat"
          className="fill-muted-foreground group-hover:fill-primary"
        />
      </svg>
    ),
    href: "https://github.com/aeriaIs"
  },
  {
    name: "Instagram",
    icon: (
      <svg
        id="instagram"
        viewBox="0 0 56.7 56.7"
        enableBackground="new 0 0 56.7 56.7"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="size-4 fill-muted-foreground group-hover:fill-primary"
      >
        <g>
          <path
            d="M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7 
              c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z"
          />
          <circle cx="41.5" cy="16.4" r="2.9" />
          <path
            d="M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9
              h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3
              s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6
              c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z"
          />
        </g>
      </svg>
    ),
    href: "https://www.instagram.com/yudho_aerials/"
  }
];

const EXPERTISE = [
  {
    title: "Web Development",
    description: "Architecting and developing scalable web applications",
    icon: <MonitorCheck size={40} />
  },
  {
    title: "Mobile Platform",
    description: "Leading the development of cross-platform mobile solutions",
    icon: <TabletSmartphoneIcon size={40} />
  },
  {
    title: "Performance Optimization",
    description: "Optimizing applications for performance, maintainability, and long-term scalability",
    icon: <ShieldPlus size={40} />
  }
];

export default function AboutMe() {
  return (
    <Container className="w-full p-6 pt-6 md:pt-12">
      <div className="w-full flex flex-row justify-between items-center gap-x-4">
        <h5 className="text-muted-foreground">About Me</h5>
        <div className="w-full max-w-1/4 flex justify-end items-center gap-5">
          {CONNECTS.map((connect, index) => (
            <a key={index} href={connect.href} target="_blank" rel="noopener noreferrer">
              <div className="group size-8 flex justify-center items-center rounded-full ring ring-muted-foreground hover:ring-primary">
                {connect.icon}
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="mt-6 md:mt-12">
        <div className="mt-2.5 w-full flex flex-col lg:flex-row justify-between items-center lg:items-start gap-14">
          <p className="mt-10 flex-1 h-full text-foreground text-xl sm:text-[28px] text-justify leading-tight text-pretty">
            I am a software engineer with 3+ years of experience specializing in front-end development. With a focus on{" "}
            <span className="font-bold text-white">building dynamic</span> and <span className="font-bold text-white">user-friendly applications</span>, I have delivered seamless experiences across web and mobile
            platforms for over 40 projects.
          </p>

          <div className="size-64 md:size-[300px]">
            <Image
              src={Ava}
              alt="avatar"
              width={100}
              height={100}
              content="avatar"
              className="w-full h-full rounded-2xl"
              placeholder="blur"
              priority
              draggable={false}
            />
          </div>
        </div>

        <div className="w-full mt-6 md:mt-12">
          <h5 className="flex-1 text-muted-foreground text-lg sm:text-3xl text-center">My expertise includes:</h5>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EXPERTISE.map((expertise, index) => (
              <div key={index} className="flex flex-row gap-x-2">
                <div className="size-20 flex justify-center items-center">{expertise.icon}</div>
                <div className="flex flex-col justify-center items-start">
                  <h5 className="text-muted-foreground font-semibold">{expertise.title}</h5>
                  <p className="text-foreground">{expertise.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
