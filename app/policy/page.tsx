import { Container } from "@/components/UI/container";
import { Image } from "@heroui/image";
import { Card } from "@heroui/card";
import CTA from "@/components/cta";
import { Divider } from "@heroui/divider";

export default function AboutPage() {
  const items = [
  {
    header: "Information We Collect",
    description: "Formula One Properties collects various types of information from and about users of our website, including personal identifiers such as names, email addresses, phone numbers, and physical addresses, especially when you register, inquire about properties, or subscribe to our newsletters. We also gather demographic information and details about your property preferences and search history to better understand your needs. Additionally, we may collect technical data, including IP addresses, browser types, operating systems, and website usage patterns, through cookies and similar tracking technologies. This data helps us improve our website's functionality and tailor our services to provide a more personalized and efficient experience for all our users, ensuring we can effectively match you with suitable properties."
  },
  {
    header: "How We Use Your Information",
    description: "The information we collect is primarily used to provide, maintain, and improve our services to you. This includes facilitating your property searches, responding to your inquiries, sending you relevant property listings, and managing your account. We may also use your data to personalize your experience on our website, offer targeted advertising based on your interests, and for internal analytical purposes to enhance our marketing strategies and operational efficiency. Furthermore, your information may be used to communicate important updates, policy changes, or security alerts. Our goal is to leverage this data responsibly to deliver the best possible real estate service, keeping you informed and connected to opportunities that align with your requirements."
  },
  {
    header: "Sharing and Disclosure of Information",
    description: "Formula One Properties may share your personal information with trusted third parties who assist us in operating our website, conducting our business, or serving our users, provided those parties agree to keep this information confidential. This includes sharing with real estate agents, brokers, financial institutions, and service providers (e.g., for website hosting, data analysis, email delivery). We may also disclose your information when required by law, such as to comply with a subpoena or similar legal process, or when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request. We do not sell or rent your personal information to third parties for their marketing purposes without your explicit consent, upholding our commitment to your privacy."
  },
  {
    header: "Data Security and Retention",
    description: "We are committed to protecting the security of your personal information. Formula One Properties implements a variety of industry-standard security measures, including encryption, firewalls, and secure socket layer (SSL) technology, to maintain the safety of your data when you enter, submit, or access your personal information. Despite our efforts, no method of transmission over the internet or method of electronic storage is 100% secure. Therefore, while we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security. We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including for legal, accounting, or reporting requirements. Once data is no longer needed, it is securely disposed of."
  },
  {
    header: "Your Privacy Rights and Choices",
    description: "You have certain rights regarding the personal information we hold about you. You may request to access, update, correct, or delete your personal data at any time by contacting us directly. You also have the right to object to the processing of your personal information, request that we restrict the processing of your data, or request data portability. If you have subscribed to our marketing communications, you can opt-out at any time by following the unsubscribe instructions included in each email or by contacting us. We are dedicated to empowering you with control over your personal information, ensuring transparency and compliance with applicable data protection laws. Please reach out to our privacy team for any concerns or requests regarding your data."
  }
];

  return (
    <section>
      <Container>
        <h1 className="font-semibold text-5xl md:text-6xl md:basis-[45%] text-center">
          Privacy Policy
        </h1>
        <div className="flex justify-center">
          <span className="text-default-500">
            Last Updated 24 June 2025
          </span>
        </div>

        <div className="mt-16">
          {items.map((item, index) => (
            <div key={index} className="pb-8">
              <h2 className="font-semibold text-3xl md:text-4xl">
                {item.header}
              </h2>

              <p className="text-default-500 leading-6 text-justify mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
