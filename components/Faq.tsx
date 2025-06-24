import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Container } from "@/components/UI/container";

export default function FAQ() {
  const questions = [
    {
      question: "What services does your real estate company offer?",
      answer:
        "We offer a comprehensive range of real estate services, including buying, selling, renting, and property management for residential and commercial properties. We also provide market analysis and investment advisory.",
    },
    {
      question:
        "How do I start the process of buying a home with your company?",
      answer:
        "The first step is to schedule a consultation with one of our experienced agents. We'll discuss your needs, budget, and preferences, and then guide you through the entire home-buying process, from property search to closing.",
    },
    {
      question: "What is the typical commission rate for selling a property?",
      answer:
        "Our commission rates are competitive and vary depending on the type of property and services required. We believe in transparent pricing and will provide you with a clear breakdown during our initial consultation.",
    },
    {
      question: "How do you determine the market value of my property?",
      answer:
        "We utilize a combination of market analysis techniques, including comparative market analysis (CMA) of recently sold properties in your area, current market trends, and property specific features to determine an accurate market value.",
    },
  ];
  return (
    <section className="my-32">
      <Container>
        <h2 className="font-semibold text-5xl md:text-7xl text-center ">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-wrap gap-10 justify-center mt-16">
          {questions.map((item, index) => (
            <Card key={index} className="max-w-full w-[400px] p-3">
              <CardHeader className="flex gap-3">
                <h3 className="text-xl font-semibold">{item.question}</h3>
              </CardHeader>
              <CardBody>
                <p className="text-default-600">{item.answer}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
