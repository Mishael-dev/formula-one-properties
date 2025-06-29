import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";
import { Container } from "@/components/UI/container";
import { ScrollShadow } from "@heroui/scroll-shadow";

export default function Projects() {
  const properties = [
    {
      name: "Luxury 4-Bedroom Duplex in Guzape",
      description:
        "Spacious 4-bedroom fully detached duplex with BQ, modern fittings, POP ceiling, and ample parking space. Located in a serene and secured neighborhood.",
      location: "Guzape, Abuja",
      image: "/property.jpg",
    },
    {
      name: "3-Bedroom Apartment in Jabi Lake View",
      description:
        "Modern 3-bedroom serviced apartment with lake view, 24/7 power, security, and a swimming pool. Ideal for young professionals or small families.",
      location: "Jabi, Abuja",
      image: "/property1.jpg",
    },
    {
      name: "Affordable 2-Bedroom Flat in Kubwa",
      description:
        "Clean and affordable 2-bedroom flat in a gated compound with water and electricity. Perfect for first-time renters or young couples.",
      location: "Kubwa, Abuja",
      image: "/property2.jpg",
    },
    {
      name: "3-Bedroom Apartment in Jabi Lake View",
      description:
        "Modern 3-bedroom serviced apartment with lake view, 24/7 power, security, and a swimming pool. Ideal for young professionals or small families.",
      location: "Jabi, Abuja",
      image: "/property3.jpg",
    },
    {
      name: "Affordable 2-Bedroom Flat in Kubwa",
      description:
        "Clean and affordable 2-bedroom flat in a gated compound with water and electricity. Perfect for first-time renters or young couples.",
      location: "Kubwa, Abuja",
      image: "/property2.jpg",
    },
  ];

  return (
    <section className="my-32">
      <Container>
        <h2 className="font-semibold text-5xl md:text-7xl text-center ">
          Featured Projects
        </h2>

        <p className="md:text-lg tracking-wide text-center text-default-500 md:px-20 my-6  text-sm ">
          From luxury homes to investment-ready plots, these standout projects
          reflect the quality, innovation, and integrity that define our real
          estate brand.
        </p>

        <ScrollShadow
          hideScrollBar
          className=" flex gap-6"
          orientation="horizontal"
        >
          {properties.map((item, index) => (
            <Card
              key={index}
              className="bg-transparent border border-default-300 max-w-sm w-fit p-2 shrink-0"
            >
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl w-full"
                  src={item.image}
                  width={"full"}
                  object-fit={"cover"}
                  height={300}
                />
              </CardBody>

              <CardFooter className="pb-0 py-2 px-4 flex-col items-start gap-2">
                <p className="text-xl uppercase font-bold">{item.name}</p>
                <p className="text-default-500">{item.description}</p>
                <h4 className="text-sm text-default-600">
                  <span className="flex gap-2 items-center">
                    <CiLocationOn /> {item.location}
                  </span>
                </h4>
                <Button variant="bordered" className="w-full rounded-md">
                  <Link href={"/contact"}>Get A Quote</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </ScrollShadow>
      </Container>
    </section>
  );
}
