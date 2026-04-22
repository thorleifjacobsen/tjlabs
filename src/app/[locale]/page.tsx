import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Projects } from '@/components/Projects';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Faq } from '@/components/Faq';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isNb = locale === 'nb';
  return {
    title: isNb
      ? 'Nettside & Webutvikling | Freelance Webutvikler i Norge'
      : 'Website & Web Development | Freelance Developer in Norway',
    description: isNb
      ? 'Jeg lager nettsider, webapplikasjoner og IoT-løsninger for bedrifter i Norge. 10+ års erfaring. Ta kontakt for et uforpliktende tilbud.'
      : 'I build websites, web applications and IoT solutions for businesses in Norway. 10+ years of experience. Get in touch for a no-obligation quote.',
  };
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Projects />
      <About />
      <Faq />
      <Contact />
    </main>
  );
}
