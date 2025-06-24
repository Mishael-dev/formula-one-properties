import Image from "next/image";
import { Button } from "@heroui/button";
import Link from "next/link";
import {Divider} from "@heroui/divider";

export default function Hero() {
  const stats = [
    { number: "120k", label: "Deals Closed" },
    { number: "1500", label: "Houses Sold" },
    { number: "10k", label: "customers" },
  ];
  return (
    <section className="mb-10">
      <div className="h-[600px] w-auto object-cover overflow-hidden relative ">
        {/* <video
          autoPlay
          muted
          loop
          playsInline
          className="max-w-full max-h-full h-full w-auto lg:h-auto lg:w-full object-cover"
          src="/video.mp4"
        ></video> */}
        <Image
          src="/hero.jpg"
          alt="image of a house"
          layout="fill"
          objectFit="cover"
          className="max-w-full max-h-full h-full w-auto lg:h-auto lg:w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 z-10"></div>

        {/* hero content */}
        <div className="absolute inset-0 z-20 flex flex-col text-white gap-4 justify-center pb-6 lg:max-w-[60rem] px-4 lg:px-10 ">
          <h1 className="text-[36px] md:text-left lg:text-[70px] font-bold">
            The Abuja Real Estate Company
          </h1>
          {/* <ul className="flex flex-col list-disc pl-8">
              <li>No page builders</li>
              <li>No wordpress</li>
            </ul> */}
          <p className="md:text-lg text-justify">
            We are a dynamic group of young and aggressive professionals,
            deploying our vast knowledge of the FCT (Abuja), to help our clients
            secure both High and Timely returns on their real estate
            Investments.
          </p>
          <div className="flex gap-2 mt-4">
            <Button color="primary" className="lg:px-10 lg:py-6 lg:text-lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button className="lg:px-10 lg:py-6 lg:text-lg">
              <Link href="/contact">Explore Listings</Link>
            </Button>
          </div>

          <div className="flex gap-8 mt-8 justify-between">

            <div className="flex flex-col">
              <span className="font-semibold text-2xl md:text-5xl tracking-tighter">
                250k+
              </span>{" "}
              <span className="tracking-widest text-sm">Deals Closed</span>
            </div>

            <Divider orientation="vertical" />

            <div className="flex flex-col">
              <span className="font-semibold text-2xl md:text-5xl tracking-tighter">
                12k+
              </span>{" "}
              <span className="tracking-widest text-sm">Customers</span>
            </div>

            <Divider orientation="vertical" />

            <div className="flex flex-col">
              <span className="font-semibold text-2xl md:text-5xl tracking-tighter">
                10k+
              </span>{" "}
              <span className="tracking-widest text-sm">Houses Sold</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
