import { useTranslations } from 'next-intl';
import { Globe, Code2, Layers, Smartphone, ShoppingCart, Wrench } from 'lucide-react';

export function Services() {
  const t = useTranslations('services');

  const items = [
    { icon: Globe,        title: t('web_title'),       desc: t('web_desc') },
    { icon: Code2,        title: t('software_title'),  desc: t('software_desc') },
    { icon: ShoppingCart, title: t('saas_title'),      desc: t('saas_desc') },
    { icon: Smartphone,   title: t('pwa_title'),       desc: t('pwa_desc') },
    { icon: Layers,       title: t('fullstack_title'), desc: t('fullstack_desc') },
    { icon: Wrench,       title: t('consulting_title'),desc: t('consulting_desc') },
  ];

  return (
    <section id="services" className="border-t border-[var(--color-border)] py-24 bg-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-widest mb-3">
            {t('label')}
          </p>
          <h2 className="font-display text-4xl text-[var(--color-text)] mb-4">{t('title')}</h2>
          <p className="text-[var(--color-text-secondary)] max-w-xl leading-relaxed">{t('subtitle')}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] hover:border-[var(--color-primary)] hover:shadow-md transition-all duration-200"
            >
              <div className="w-11 h-11 rounded-xl bg-[var(--color-primary)] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-[var(--color-text)] mb-2">{title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
