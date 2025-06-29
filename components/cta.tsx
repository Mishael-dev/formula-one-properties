import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import { Avatar, AvatarGroup } from "@heroui/avatar";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="flex max-w-full p-2">
      <Card
        className="flex justify-center items-center p-10 md:p-20 mx-auto"
        style={{ backgroundImage: "url('/ctabg.svg')" }}
      >
        <div className="flex items-center justify-center flex-col gap-4">
          <h2 className="font-bold text-4xl tracking-tight max-w-4xl text-center text-primary-foreground text-wrap">
            Abuja’s Most Trusted Real Estate Partner
          </h2>
          <div className="flex flex-col gap-4 items-center justify-between">
            <p className="text-primary-foreground/70 max-w-[50rem] text-center text-sm md:text-lg text-wrap">
              We have We’ve partnered with over 50 businesses and helped 100+
              clients find their dream homes across Abuja, Nigeria.
            </p>
            <AvatarGroup isBordered>
              <Avatar src="https://lh3.googleusercontent.com/a-/ALV-UjX8hyb8akPL1YtQ_kYz9PWsM4llfZiDdE-tVYQWkwMSDkz2SLA=w40-h40-p-rp-mo-br100" />
              <Avatar src="https://lh3.googleusercontent.com/a-/ALV-UjXqDBy8FWJM_Q-JACB0C87rCTQgNxHHsWwyp7TzzNoIYa10YfhW=w40-h40-p-rp-mo-br100" />
              <Avatar src="https://lh3.googleusercontent.com/a-/ALV-UjUY51kirksy7nHcU0yXh7oEUd5vFKnzM7KlNoe2ua-f_lMxGdxE=w40-h40-p-rp-mo-br100" />
              <Avatar src="https://lh3.googleusercontent.com/a-/ALV-UjWUo91aMdiwB7Q5jfDKFP27f9s0_tB4cu7eKkyNkuA1rqCKL2k=w40-h40-p-rp-mo-br100" />
              <Avatar src="https://lh3.googleusercontent.com/a/ACg8ocLWKgT7-_ITlzrRr0cwDLMYIu46H_o0hQdXJ4VEnzaZ7ozD5A=w40-h40-p-rp-mo-br100" />
              <Avatar src="https://lh3.googleusercontent.com/a/ACg8ocIdsL490cataznYCdh0yChRbg9sRuYMb6MVxTnKA0HzqJQn8Q=w40-h40-p-rp-mo-br100" />
            </AvatarGroup>

            <p className="text-primary-foreground/60 text-sm">
              ⭐⭐⭐⭐⭐ 5.0 on google
            </p>
          </div>
          <Button className="bg-primary-foreground" size="lg">
            <Link href="/contact">Call Us</Link>
          </Button>
        </div>
      </Card>
    </section>
  );
}
