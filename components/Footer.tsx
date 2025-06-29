"use client";

import Link from "next/link";
import { Container } from "@/components/UI/container";
import Image from "next/image";
import { Input } from "@heroui/input";
import { Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoFacebook, IoLogoLinkedin } from "react-icons/io5";
import ContactForm from "./contactForm";

function Form() {
  return (
    <form
      method="POST"
      action={"https://formsubmit.co/themishaeldaap@gmail.com"}
      className="flex flex-col gap-2"
    >
      <Input
        type="email"
        placeholder="your email"
      />
      <Textarea
        className=""
        label="Your Message"
        placeholder="what do you want to tell us"
        // eslint-disable-next-line no-console
      />
      <Button
        type="submit"
        variant="flat"
        color="primary"
      >
        Send
      </Button>
    </form>
  );
}

export default function Footer() {
  const links = {
    header: "Links",
    items: [
      { href: "/home", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/services", label: "Services" },
      { href: "/contact", label: "Contact" },
      { href: "/terms", label: "Terms" },
      { href: "/policy", label: "Privacy Policy" },
    ],
  };

  const pages = {
    header: "Pages",
    items: [
      { href: "/home", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/services", label: "Services" },
      { href: "/contact", label: "Contact" },
    ],
  };

  const socials = {
    header: "Socials",
    items: [
      {
        href: "https://www.instagram.com/formula1properties?r=nametag",
        label: "Instagram",
        icon: <FaInstagram className="text-2xl" />,
      },
      {
        href: "https://x.com/F1Properties",
        label: "X",
        icon: <FaXTwitter className="text-2xl" />,
      },
      {
        href: "https://www.linkedin.com/company/f1-properties/?originalSubdomain=au",
        label: "Linked In",
        icon: <IoLogoLinkedin className="text-2xl" />,
      },{
        href: "https://www.linkedin.com/company/f1-properties/?originalSubdomain=au",
        label: "Facebook",
        icon: <IoLogoFacebook className="text-2xl" />,
      },
    ],
  };

  return (
    <footer className="mt-20">
      <Container>
        <section className="flex flex-wrap gap-4 justify-between">
          <div className="flex flex-col md:w-96 w-full">
            <Form />
            <div className="flex items-end mb-4 mt-8">
              <Image src={"/logo.png"} alt="logo" width={100} height={80} />
              <div className="flex flex-col font-bold text-lg leading-none uppercase">
                <span className="leading-none text-[#F9E603]">Formula one</span>
                <span className="leading-none tracking-widest">Properties</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className=" text-default-600">{links.header}</h3>
            <ul className="flex mt-2 gap-1 flex-col font-light">
              {links.items.map((item, index) => (
                <Link key={index} href={item.href}>{item.label}</Link>
              ))}
            </ul>
          </div>

          <div>
            <h3 className=" text-default-600">{pages.header}</h3>
            <ul className="flex mt-2 gap-1 flex-col font-light">
              {pages.items.map((item, index) => (
                <Link key={index} href={item.href}>{item.label}</Link>
              ))}
            </ul>
          </div>

          <div>
            <h3 className=" text-default-600">{socials.header}</h3>
            <ul className="flex mt-2 gap-1 flex-col font-light">
              {socials.items.map((item, index) => (
                <Link key={index} href={item.href}>
                  <span className="flex items-center gap-2">
                    {item.icon}
                    {item.label}
                  </span>
                </Link>
              ))}
            </ul>
          </div>
        </section>
      </Container>

      <div className="flex justify-between text-xs  px-4 py-6">
        <span className="text-center text-sm">
          &copy;2025 Formula One Properties. All rights reserved.{" "}
        </span>

        <div className="hidden md:flex justify-between gap-4 ">
          <Link href={"/terms"} className="text-sm tracking-tight">
            Terms and Conditions
          </Link>
          <Link href={"/policy"} className="text-sm tracking-tight">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
