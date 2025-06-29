import { Divider } from "@heroui/divider"
import { Container } from "./UI/container"

export default function Achievements(){
    return <section className="py-20">
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
}