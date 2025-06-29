import { Button } from "@heroui/button";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt, FaDirections } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";

import ContactForm from "@/components/contactForm";
import FAQ from "@/components/Faq";
import { Container } from "@/components/UI/container";

function MailIcon() {
  return <IoMdMail />;
}

function PhoneIcon() {
  return <FaPhoneAlt />;
}

function DirectionIcon() {
  return <FaDirections />;
}

function LocationIcon() {
  return <FaLocationDot />;
}

function InstagramIcon() {
  return <BsInstagram />;
}

function XIcon() {
  return <FaXTwitter />;
}

function FacebookIcon() {
  return <BiLogoFacebookSquare />;
}

function LinkedinIcon() {
  return <BsLinkedin />;
}

export default function AboutPage() {
  const socials = [
    {
      icon: <InstagramIcon />,
      href: "https://www.instagram.com/formula1properties?r=nametag",
    },
    {
      icon: <XIcon />,
      href: "https://www.instagram.com/formula1properties?r=nametag",
    },
    {
      icon: <FacebookIcon />,
      href: "https://www.facebook.com/formula1properties/",
    },
    {
      icon: <LinkedinIcon />,
      href: "https://www.linkedin.com/in/oluwayomi-alao-93255684/",
    },
  ];

  return (
    <>
      <section className="my-32">
        <Container>
          <div className="md:flex flex-col gap-8">
            <h1 className="font-semibold text-5xl md:text-6xl text-left md:basis-[45%]">
              Contact Us
            </h1>

            <p className="text-default-600 basis-[60%] mt-4">
              ‘Yomi’ as popularly called, is an avid real estate broker and a
              business development consultant, who in 2015 founded Formula One
              Properties Ltd, a real estate management and consulting company
              based in the federal capital territory of Nigeria, Abuja
            </p>
          </div>

          <div className="mt-16 w-full h-[30rem] bg-[url('/office.jpg')] bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden" />
        </Container>
      </section>

      <section>
        <Container>
          <div className="flex flex-col md:flex-row justify-between">
            {/* left */}
            <div className="flex flex-col gap-8 flex-wrap basis-[30%]">
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-4xl tracking-tight">
                  Get In Touch
                </h3>
                <div className="flex flex-wrap gap-4">
                  <Button
                    className="rounded-sm"
                    size="lg"
                    startContent={<MailIcon />}
                  >
                    <Link
                      className="text-lg"
                      href="mailto:formula1properties@gmail.com"
                    >
                      formula1properties@gmail.com
                    </Link>
                  </Button>
                  <Button
                    className="rounded-sm"
                    size="lg"
                    startContent={<PhoneIcon />}
                  >
                    <Link className="text-lg" href="tel:+2348103691985">
                      0810 369 1985
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-4xl tracking-tight">
                  Our Office
                </h3>

                <div className="flex items-center gap-2 text-default-500">
                  <LocationIcon />
                  <span className="text-default-500 text-small">
                    Sunnyvale Estate, Northwall Dr, Dakwo District, Abuja
                  </span>
                </div>
                <div>
                  <Button
                    className="rounded-sm"
                    size="lg"
                    startContent={<DirectionIcon />}
                  >
                    <Link
                      className="text-lg"
                      href="https://maps.app.goo.gl/1pPrKahCo58eX78c9"
                    >
                      Directions
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-4xl tracking-tight">
                  Connect With Us
                </h3>
                <div className="flex flex-wrap gap-4">
                  {socials.map((item, index) => (
                    <Button
                      key={index}
                      isIconOnly
                      aria-label="Like"
                      className="rounded-sm"
                      size="lg"
                    >
                      <Link className="text-lg" href={item.href}>
                        {item.icon}
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* right */}
            <div className="mt-16 md:mt-0 basis-[65%]">
              <h3 className="font-bold text-4xl tracking-tight mb-4">
                You Can Send Us A Message
              </h3>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <FAQ />
    </>
  );
}
