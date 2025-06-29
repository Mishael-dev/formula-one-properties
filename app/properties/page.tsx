import Search from "@/components/property-search";
import { Container } from "@/components/UI/container";
import { Image } from "@heroui/image";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import PropertyList from "@/components/properylist";

export default function Properties() {
  return (
    <>
      <Container>
        <div>
          <div className="overflow-hidden md:h-96 rounded-xl">
            <Image className="w-full z-0" src="propertieshero.jpg" />
          </div>
          <Search />
        </div>

        <Suspense fallback={<div>Loading properties...</div>}>
          <PropertyList />
        </Suspense>
      </Container>
    </>
  );
}
