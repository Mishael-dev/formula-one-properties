import { Container } from "@/components/UI/container";
import { Image } from "@heroui/image";
import { Card } from "@heroui/card";
import CTA from "@/components/cta";
import { Divider } from "@heroui/divider";

export default function AboutPage() {
  return (
    <>
      <section className="my-32">
        <Container>
          <div className="md:flex items-end gap-8">
            <h1 className="font-semibold text-5xl md:text-6xl text-left md:basis-[45%]">
              We Are Building Communities
            </h1>

            <p className="text-default-600 mt-8 basis-[60%]">
              ‘Yomi’ as popularly called, is an avid real estate broker and a
              business development consultant, who in 2015 founded Formula One
              Properties Ltd, a real estate management and consulting company
              based in the federal capital territory of Nigeria, Abuja
            </p>
          </div>

          <div className="flex justify-between items-center mt-16">
            <div className="md:basis-[40%] border bg-[url('/aboutbg.svg')] bg-cover bg-center rounded-2xl">
              <Image
                alt="Yomi"
                isBlurred
                src="/about.png"
                className="w-full h-auto border"
              />
            </div>

            <div className="hidden md:block basis-[55%]">
              <Image
                alt="an image"
                src="/about2.jpg"
                className="w-full h-auto"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="md:flex justify-between">
            <h2 className="font-semibold text-5xl md:text-7xl">
              Our Story And Values
            </h2>

            <div className="basis-[60%] mt-16 md:mt-0">
              <p className="text-default-700 leading-6 text-justify">
                At Formula One Properties, I spearhead a team of aggressive
                realtors and marketing consultants, working round-the-clock to
                bring you the very best of Abuja's realty market. With over 9
                years experience in the real estate sector, and an impressive
                sales record of countless deals in both houses and lands, "I
                strongly believe I AM the go-to 🔌 plug for everything Real
                Estate in ABUJA.{" "}
              </p>
              <Card
                isBlurred
                className="bg-transparent border border-default-300 p-4 my-8"
              >
                <div className="flex gap-4">
                  <Image
                    alt="Yomi"
                    isBlurred
                    src="/about.png"
                    className="w-full h-auto border border-default-500 basis-[20%] flex-shrink-0"
                    height={70}
                    width={70}
                  />
                  <div className="basis-[70%] ">
                    <p className="leading-6 ">
                      At Formula One Properties, we believe that finding a home
                      is more than a transaction — it's a journey of trust,
                      precision, and purpose. Our mission is to redefine real
                      estate in Abuja by delivering speed, quality, and
                      integrity in every deal.
                    </p>

                    <span className="mt-8 text-default-500 italic ">
                      -Oluwayomi Alao <small>(CEO and Founder)</small>
                    </span>
                  </div>
                </div>
              </Card>
              <p className="text-default-700 leading-6 text-justify">
                With an unwavering passion for real estate and a sharp eye for
                value, Yomi has spent nearly a decade mastering the intricacies
                of Abuja’s housing and land markets. Over the years, he has
                carved a solid reputation for delivering high-quality service,
                fast transactions, and sustainable investments for individuals,
                families, developers, and institutional clients. At Formula One
                Properties, Yomi leads a focused team of aggressive,
                forward-thinking realtors and marketing consultants. Together,
                they work round-the-clock to bring clients the very best of what
                Abuja’s realty sector has to offer. Whether you’re looking to
                buy, sell, lease, or invest in property, his team ensures a
                seamless, professional experience backed by market intelligence
                and personal guidance. Yomi’s strength lies not just in his
                extensive knowledge of the local market but in his people-first
                approach. He takes pride in understanding the unique needs of
                each client and tailoring solutions that go beyond the sale.
                From land acquisition and property development to residential
                leasing and commercial investment, his insight and hands-on
                experience help clients make informed decisions that create
                long-term value. Having closed countless successful deals across
                Abuja’s most sought-after locations, Yomi confidently brands
                himself as the go-to plug 🔌 for everything Real Estate in
                ABUJA. Whether you're a first-time homebuyer, a seasoned
                investor, or a developer with a vision, Yomi is the trusted
                expert who can help you bring your real estate goals to life.
                "For me, real estate is not just about selling houses—it's about
                building trust, creating wealth, and helping people find a place
                to call home. Abuja has so much potential, and my mission is to
                help you tap into it, the right way." – Yomi If you're ready to
                take the next step toward owning, building, or investing in real
                estate in Abuja, then Yomi is the person to talk to. With his
                commitment to excellence, honest advisory, and unmatched hustle,
                he’s more than just a broker—he’s your partner in real estate
                success.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <h2 className="font-semibold text-5xl md:text-7xl text-center">
            Our Achievements
          </h2>

          <p className="text-default-700 leading-6 max-w-2xl text-center mt-4 mx-auto">
            Trusted real estate expert with 9+ years experience, delivering
            successful property deals and investment solutions across Abuja’s
            top locations.
          </p>

          <div className="flex gap-8 mt-8 justify-between">
            <div className="flex flex-col items-center">
              <span className="font-semibold text-2xl md:text-5xl tracking-tighter text-primary">
                250k+
              </span>{" "}
              <span className="tracking-widest text-sm text-center">Deals Closed</span>
            </div>

            <Divider orientation="vertical" />

            <div className="flex flex-col items-center">
              <span className="font-semibold text-2xl md:text-5xl tracking-tighter text-primary">
                12k+
              </span>{" "}
              <span className="tracking-widest text-sm text-center">Customers Served</span>
            </div>

            <Divider orientation="vertical" />

            <div className="flex flex-col items-center">
              <span className="font-semibold text-2xl md:text-5xl tracking-tighter text-primary">
                10k+
              </span>{" "}
              <span className="tracking-widest text-sm text-center">Houses Sold</span>
            </div>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
