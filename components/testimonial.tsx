import { Avatar, AvatarGroup } from "@heroui/avatar";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import Link from "next/link";
import { Container } from "@/components/UI/container";
import { ScrollShadow } from "@heroui/scroll-shadow";

export default function Testimonial() {
  const reviews = [
    {
      name: "Jimi Ojomo",
      text: "Resourceful, trustworthy, and reliable. He came through every time I made an inquiry. Very professional and straightforward which is rare in an industry where people are not focused about their pockets than customer's satisfaction.",
      avatar:
        "https://lh3.googleusercontent.com/a-/ALV-UjUY51kirksy7nHcU0yXh7oEUd5vFKnzM7KlNoe2ua-f_lMxGdxE=w40-h40-p-rp-mo-br100",
      url: "https://www.google.com/maps/contrib/101257651364043245728/reviews?hl=en",
    },
    {
      name: "Bach and houses",
      text: "An amazing realtor, great personality, vast experience and knowledge.  I really enjoyed working with you and will be looking forward to more business ventures together.",
      avatar:
        "https://lh3.googleusercontent.com/a-/ALV-UjWUo91aMdiwB7Q5jfDKFP27f9s0_tB4cu7eKkyNkuA1rqCKL2k=w40-h40-p-rp-mo-br100",
      url: "https://www.google.com/maps/contrib/111298111409133488578/reviews?hl=en",
    },
    {
      name: "moses paku",
      text: "Formula one properties is your best plug in real estate, they are trust worthy and reliable, my dream of owning a home was possible through them.",
      avatar:
        "https://lh3.googleusercontent.com/a/ACg8ocLWKgT7-_ITlzrRr0cwDLMYIu46H_o0hQdXJ4VEnzaZ7ozD5A=w40-h40-p-rp-mo-br100",
      url: "https://www.google.com/maps/contrib/106257501031137049600/reviews?hl=en",
    },
    {
      name: "Abolade Oladejo",
      text: "Top notch realtor that will go to any length to ensure client satisfaction. Fully recommend!",
      avatar:
        "https://lh3.googleusercontent.com/a/ACg8ocIdsL490cataznYCdh0yChRbg9sRuYMb6MVxTnKA0HzqJQn8Q=w40-h40-p-rp-mo-br100",
      url: "https://www.google.com/maps/contrib/106174560934023627330/reviews?hl=en",
    },
    {
      name: "Fatima Buhari",
      text: "I will recommend them any day, any time. It was great doing business.",
      avatar:
        "https://lh3.googleusercontent.com/a/ACg8ocJ0Mwh8rhzVcXQjC9DlKONxx3kYYbVFfKGh7W_cL4dfHAk8tQ=w40-h40-p-rp-mo-br100",
      url: "https://www.google.com/maps/contrib/108781430575687208427/reviews?hl=en",
    },
    {
      name: "Olugbenga George-Taylor",
      text: "They Helped me to get a buyer for my property. Everything went smooth.",
      avatar:
        "https://lh3.googleusercontent.com/a-/ALV-UjX8hyb8akPL1YtQ_kYz9PWsM4llfZiDdE-tVYQWkwMSDkz2SLA=w40-h40-p-rp-mo-br100",
      url: "https://www.google.com/maps/contrib/109070353609650196896/reviews?hl=en",
    },
    {
      name: "ThankGod Coleman",
      text: "He has vast knowledge in real estate. He is honest and trustworthy.",
      avatar:
        "https://lh3.googleusercontent.com/a/ACg8ocLdOh7xRomavr5hUT7kv8XpVsp4naVki3rtDNL6abgaVn0-tA=w40-h40-p-rp-mo-br100",
      url: "https://www.google.com/maps/contrib/118062644656765580728/reviews?hl=en",
    },
    {
      name: "Benson Paddy",
      text: "Very Professional And Honest.", // The text was cut off in the provided markup
      avatar:
        "https://lh3.googleusercontent.com/a-/ALV-UjXqDBy8FWJM_Q-JACB0C87rCTQgNxHHsWwyp7TzzNoIYa10YfhW=w40-h40-p-rp-mo-br100",
      url: "https://www.google.com/maps/contrib/117092320966586659532/reviews?hl=en",
    },
  ];

  return (
    <section className="my-32">
      <Container>
        <h2 className="font-semibold text-5xl md:text-7xl text-center ">
          What our Clients Say
        </h2>
        <div className="flex flex-col gap-4 items-center justify-between">
          <p className="text-default-500 max-w-[50rem] text-center text-sm md:text-lg">
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

          <p className="text-default-400 text-sm">⭐⭐⭐⭐⭐ 5.0 on google</p>
        </div>

        <ScrollShadow
          hideScrollBar
          className="h-[35rem] mt-16 flex flex-wrap gap-10 justify-center"
        >
          {reviews.map((item, index) => (
            <Card className="max-w-full w-96 p-2" key={index}>
              <CardHeader className="justify-between">
                <div className="flex gap-5">
                  <Avatar
                    isBordered
                    radius="full"
                    size="lg"
                    src={item.avatar}
                  />
                  <div className="flex flex-col gap-1 items-start justify-center">
                    <h4 className="font-semibold leading-none text-default-600">
                      {item.name}
                    </h4>
                  </div>
                </div>
              </CardHeader>
              <CardBody className="px-3 py-0">
                <p>{item.text}</p>
              </CardBody>
              <CardFooter className="gap-3">
                <Button
                  className="bg-transparent text-foreground border-default-200"
                  color="primary"
                  size="md"
                  variant={"bordered"}
                >
                  <Link href={item.url}>View</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </ScrollShadow>
      </Container>
    </section>
  );
}
