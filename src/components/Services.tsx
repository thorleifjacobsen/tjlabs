import { useTranslations, useLocale } from 'next-intl';
import { Globe, Code2, Layers, Smartphone, ShoppingCart, Wrench, Printer, Cpu, Wifi, Monitor, ArrowRight } from 'lucide-react';
import { AnimateIn } from '@/components/AnimateIn';

export function Services() {
  const t = useTranslations('services');
  const locale = useLocale();
  const base = locale === 'nb' ? '' : '/en';

  const items = [
    { icon: Globe,        title: t('web_title'),        desc: t('web_desc'),        href: `${base}/tjenester/nettside` },
    { icon: Code2,        title: t('software_title'),   desc: t('software_desc'),   href: null },
    { icon: ShoppingCart, title: t('saas_title'),       desc: t('saas_desc'),       href: `${base}/tjenester/webapplikasjon` },
    { icon: Smartphone,   title: t('pwa_title'),        desc: t('pwa_desc'),        href: null },
    { icon: Layers,       title: t('fullstack_title'),  desc: t('fullstack_desc'),  href: null },
    { icon: Wrench,       title: t('consulting_title'), desc: t('consulting_desc'), href: null },
    { icon: Wifi,         title: t('iot_title'),        desc: t('iot_desc'),        href: `${base}/tjenester/elektronikk` },
    { icon: Printer,      title: t('print_title'),      desc: t('print_desc'),      href: null },
    { icon: Cpu,          title: t('pcb_title'),        desc: t('pcb_desc'),        href: `${base}/tjenester/elektronikk` },
    { icon: Monitor,      title: t('pc_title'),         desc: t('pc_desc'),         href: null },
  ];

  return (
    <section id="services" className="border-t border-[var(--color-border)] py-24 bg-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateIn className="mb-14">
          <p className="text-sm font-medium text-[var(--color-accent)] uppercase tracking-widest mb-3">
            {t('label')}
          </p>
          <h2 className="font-display text-4xl text-[var(--color-text)] mb-4">{t('title')}</h2>
          <p className="text-[var(--color-text-secondary)] max-w-xl leading-relaxed" style={{ fontWeight: 300 }}>{t('subtitle')}</p>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc, href }, i) => (
            <AnimateIn key={title} delay={i * 70}>
              <div className="group h-full p-7 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] hover:border-[var(--color-primary)] hover:shadow-lg transition-all duration-300 cursor-default flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display text-lg mb-2 text-[var(--color-text)]">{title}</h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed text-base flex-1" style={{ fontWeight: 300 }}>{desc}</p>
                {href && (
                  <a
                    href={href}
                    className="inline-flex items-center gap-1.5 mt-4 text-sm text-[var(--color-primary)] hover:underline"
                  >
                    {t('les_mer')} <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
