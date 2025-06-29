import { Container } from "@/components/UI/container";
import { Image } from "@heroui/image";
import { Card } from "@heroui/card";
import CTA from "@/components/cta";
import { Divider } from "@heroui/divider";

export default function AboutPage() {
  const services = [
    {
      title: "Buying and Selling Houses",
      description:
        "Formula One Properties excels in facilitating seamless and efficient transactions for both property buyers and sellers within the dynamic Abuja real estate market. We provide unparalleled expert guidance, in-depth market analysis, and access to an extensive portfolio of prime property listings. Our dedicated team is committed to helping you discover your ideal home or achieve the highest possible value for your current property, meticulously navigating every step of the process to ensure a smooth and successful experience from initial consultation to final closing.",
      image: "/buying.jpg",
    },
    {
      title: "Renovation Services",
      description:
        "Revitalize and transform your property with the exceptional renovation services offered by Formula One Properties. Whether your goal is to modernize an outdated space, integrate contemporary features, or meticulously prepare a property for a lucrative sale, our highly skilled team of experienced contractors is committed to delivering superior craftsmanship and innovative design solutions. We focus on significantly enhancing both the aesthetic appeal and practical functionality of your property, ensuring that your unique vision is brought to life with precision and excellence.",
      image: "/renovation.jpg",
    },
    {
      title: "Property Management",
      description:
        "Entrust your valuable real estate assets to Formula One Properties for comprehensive and stress-free property management solutions. Our services encompass every aspect of property oversight, from meticulous tenant screening and drafting robust lease agreements to efficient rent collection and proactive maintenance coordination. We are dedicated to ensuring your investment is not only impeccably maintained but also consistently profitable. Our primary objective is to provide complete peace of mind to property owners, maximizing your returns while meticulously minimizing any potential hassles or operational burdens.",
      image: "/management.jpg",
    },
  ];

  return (
    <>
      <section className="my-32">
        <Container>
          <div className="md:flex items-end gap-8">
            <h1 className="font-semibold text-5xl md:text-6xl text-left md:basis-[45%]">
              Let's Bring Your Vision To life
            </h1>

            <p className="text-default-600 mt-8 basis-[60%]">
              At Formula One Properties Ltd, we specialize in helping
              individuals and businesses secure premium lands, homes, and
              investment-ready properties across Abuja. Led by our founder,
              Yomi, we combine speed, professionalism, and local market
              expertise to bring your real estate vision to life — from buying
              and selling to leasing and development consulting.
            </p>
          </div>

          <div className="mt-16 w-full h-[30rem] bg-[url('/services.jpg')] bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden"></div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="md:flex justify-between">
            <h2 className="font-semibold text-5xl md:text-7xl">What We Do</h2>

            <div className="basis-[60%] mt-16 md:mt-0">
              <p className="text-default-700 leading-6 text-justify">
                At Formula One Properties Ltd, we specialize in helping
                individuals and businesses secure premium lands, homes, and
                investment-ready properties across Abuja. Led by our founder,
                Yomi, we combine speed, professionalism, and local market
                expertise to bring your real estate vision to life — from buying
                and selling to leasing and development consulting.
              </p>

              <div>
                {services.map((item, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-4xl md:text-5xl mt-16">
                      {item.title}
                    </h3>

                    <p className="text-default-700 leading-6 text-justify mt-4">
                      {item.description}
                    </p>

                    <Image src={item.image} className="mt-4" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
