"use client";
import { Container } from "@/components/UI/container";
import { Image } from "@heroui/image";
import Search from "@/components/property-search";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { CiLocationOn } from "react-icons/ci";
import { Button } from "@heroui/button";
import Link from "next/link";
import { properties } from "@/demo";
import { Chip } from "@heroui/chip";
import { Property } from "@/demo";
import { useSearchParams } from "next/navigation";

function filterProperties(term: string | null): Property[] {
  if (!term) return properties; // show all if no search term
  const searchTerm = term.toLowerCase();
  return properties.filter((item) =>
    item.title.toLowerCase().includes(searchTerm)
  );
}


function formatPrice(price: any) {
  return new Intl.NumberFormat("en-NG").format(price);
}

export default function Properties() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search"); // e.g., "Asokoro"

  return (
    <>
      <Container>
        <div>
          <div className="overflow-hidden md:h-96 rounded-xl">
            <Image src="propertieshero.jpg" className="w-full z-0" />
          </div>
          <Search />
        </div>

        {/* property div */}
        <div className="flex flex-wrap gap-4  justify-center mt-8">
          {filterProperties(search).map((item, index) => (
            <Card
              key={index}
              className=" border-default-300 max-w-xs p-2 shrink-0"
            >
              <CardHeader>
                <Chip>
                  <span className="mr-1">&#8358;</span>{" "}
                  {formatPrice(item.price)}
                </Chip>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl w-full"
                  src="/property.jpg"
                />
              </CardBody>
              
              <CardFooter className="pb-0 py-2 px-4 flex-col items-start gap-2">
                <p className="text-xl uppercase font-bold">{item.title}</p>
                <p className="text-default-500">{item.description}</p>
                <h4 className="text-sm text-default-600">
                  <span className="flex gap-2 items-center">
                    <CiLocationOn /> {item.location}
                  </span>
                </h4>
                <Button variant="ghost" className="w-full">
                  <Link href={"/"}>Get A Quote</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
}
