import { Container } from "@/components/UI/container";

export default function AboutPage() {
  const items = [
    {
      header: "Acceptance of Terms",
      description:
        "By accessing and using the Formula One Properties website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use. If you do not agree with any part of these terms, you must not use this website. These terms may be updated periodically without prior notice, and your continued use of the site following such changes constitutes your acceptance of the new terms. It is your responsibility to review these terms regularly to ensure you are aware of any modifications. Your compliance with these terms is crucial for a positive experience for all users of our platform.",
    },
    {
      header: "Intellectual Property Rights",
      description:
        "All content on this website, including but not limited to text, graphics, logos, images, audio clips, video clips, data compilations, and software, is the exclusive property of Formula One Properties or its content suppliers and is protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our site without the prior written consent of Formula One Properties. Unauthorized use may lead to legal action.",
    },
    {
      header: "User Conduct and Responsibilities",
      description:
        "You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our website. You are responsible for ensuring that any information you provide is accurate, current, and complete. Any fraudulent or misleading information may result in the termination of your access to our services and potential legal consequences.",
    },
    {
      header: "Limitation of Liability",
      description:
        "Formula One Properties, its affiliates, directors, employees, agents, and licensors shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including but not limited to, lost profits, lost data, or business interruption, arising out of your access to, use of, or inability to use this website or any websites linked to this website, even if Formula One Properties has been advised of the possibility of such damages. This limitation of liability applies to the fullest extent permitted by law in the applicable jurisdiction. We strive for accuracy but cannot guarantee error-free operation at all times.",
    },
    {
      header: "Disclaimer of Warranties",
      description:
        "This website and its content are provided on an 'as is' and 'as available' basis, without any warranties of any kind, either express or implied, including but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance. Formula One Properties does not warrant that the website will be uninterrupted, error-free, secure, or that defects will be corrected, or that the website or the server that makes it available are free of viruses or other harmful components. Your reliance on any information provided on this website is solely at your own risk.",
    },
    {
      header: "Links to Third-Party Websites",
      description:
        "Our website may contain links to third-party websites or services that are not owned or controlled by Formula One Properties. These links are provided for your convenience and information only. Formula One Properties has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. We do not endorse or make any representations about them, or any information, software, or other products or materials found there, or any results that may be obtained from using them. You access third-party websites at your own risk.",
    },
    {
      header: "Governing Law and Jurisdiction",
      description:
        "These Terms of Use and your use of the Formula One Properties website shall be governed by and construed in accordance with the laws of Switzerland, without regard to its conflict of law provisions. Any legal action or proceeding arising out of or related to these Terms of Use or your use of the website shall be instituted exclusively in the courts located in Switzerland. By using this website, you irrevocably consent to the exclusive jurisdiction and venue of such courts. This ensures that any disputes are resolved efficiently and under a clear legal framework consistent with our operational base.",
    },
  ];

  return (
    <section>
      <Container>
        <h1 className="font-semibold text-5xl md:text-6xl md:basis-[45%] text-center">
          Terms of Use
        </h1>
        <div className="flex justify-center">
          <span className="text-default-500">Last Updated 24 June 2025</span>
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
