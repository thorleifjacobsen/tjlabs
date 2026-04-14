import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ArrowUpRight, Tag, Package, Users, QrCode, MapPin, BarChart3, CreditCard, Bell, Layers } from 'lucide-react';
import { AnimateIn } from '@/components/AnimateIn';

export function Projects() {
  const t = useTranslations('projects');

  return (
    <section id="projects" className="border-t border-[var(--color-border)] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateIn className="mb-14">
          <p className="text-sm font-medium text-[var(--color-accent)] uppercase tracking-widest mb-3">
            {t('label')}
          </p>
          <h2 className="font-display text-4xl text-[var(--color-text)] mb-4">{t('title')}</h2>
          <p className="text-[var(--color-text-secondary)] max-w-xl leading-relaxed" style={{ fontWeight: 300 }}>{t('subtitle')}</p>
        </AnimateIn>

        <div className="space-y-16">

          {/* ── LostTags ─────────────────────────────────────────────── */}
          <AnimateIn from="left">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Image side */}
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden border border-[var(--color-border)] bg-gradient-to-br from-blue-50 to-indigo-50 p-8 flex items-center justify-center min-h-[320px]">
              <div className="relative">
                {/* Phone mockup shell */}
                <div className="w-56 bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                  {/* Status bar */}
                  <div className="bg-[oklch(0.32_0.08_248)] h-8 flex items-center justify-between px-4">
                    <span className="text-white text-[10px] font-bold tracking-wide">LostTags</span>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 rounded-full bg-white/60" />
                      <div className="w-1 h-1 rounded-full bg-white/60" />
                      <div className="w-1 h-1 rounded-full bg-white/60" />
                    </div>
                  </div>
                  {/* App content mock */}
                  <div className="p-3 space-y-2">
                    <div className="bg-blue-50 rounded-xl p-3 flex items-center gap-2">
                      <div className="w-8 h-8 bg-[oklch(0.32_0.08_248)] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Tag className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-[10px] font-semibold text-gray-800">MacBook Pro 16"</div>
                        <div className="text-[9px] text-gray-500">Kontor, skuff 2</div>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3 flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                        <QrCode className="w-4 h-4 text-gray-600" />
                      </div>
                      <div>
                        <div className="text-[10px] font-semibold text-gray-800">Sony kamera</div>
                        <div className="text-[9px] text-gray-500">Veske, lomme A</div>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3 flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 text-gray-600" />
                      </div>
                      <div>
                        <div className="text-[10px] font-semibold text-gray-800">AirPods Max</div>
                        <div className="text-[9px] text-gray-500">Stue, sofa</div>
                      </div>
                    </div>
                    {/* QR badge preview */}
                    <div className="mt-2 bg-white border border-gray-100 rounded-xl p-2 flex items-center justify-center gap-2">
                      <Image src="/losttags-preview.png" alt="LostTags QR badge" width={60} height={60} className="rounded" />
                      <div className="text-[9px] text-gray-500 text-center">
                        Custom<br />QR badge
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -top-3 -right-6 bg-white border border-[var(--color-border)] rounded-xl px-3 py-2 shadow-lg">
                  <div className="text-[10px] text-[var(--color-text-muted)]">{t('losttags_stat_label')}</div>
                  <div className="text-sm font-bold text-[var(--color-primary)]">+2 400</div>
                </div>
              </div>
            </div>

            {/* Text side */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[oklch(0.32_0.08_248)] flex items-center justify-center">
                  <Tag className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-[var(--color-text)]">LostTags</h3>
                  <span className="text-xs text-[var(--color-text-muted)]">losttags.com</span>
                </div>
              </div>

              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                {t('losttags_desc')}
              </p>

              {/* Feature list */}
              <ul className="space-y-2 mb-6">
                {[t('losttags_f1'), t('losttags_f2'), t('losttags_f3'), t('losttags_f4')].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                    <span className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Tech stack */}
              <a
                href="https://losttags.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:gap-3 transition-all"
              >
                {t('view')} losttags.com <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          </AnimateIn>

          {/* ── Inventoriz ───────────────────────────────────────────── */}
          <AnimateIn from="right">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Text side */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl overflow-hidden border border-[var(--color-border)] flex-shrink-0">
                  <Image src="/inventoriz-logo.svg" alt="Inventoriz" width={40} height={40} />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-[var(--color-text)]">Inventoriz</h3>
                  <span className="text-xs text-[var(--color-text-muted)]">inventoriz.com</span>
                </div>
              </div>

              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                {t('inventoriz_desc')}
              </p>

              <ul className="space-y-2 mb-6">
                {[t('inventoriz_f1'), t('inventoriz_f2'), t('inventoriz_f3'), t('inventoriz_f4')].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                    <span className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="https://inventoriz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:gap-3 transition-all"
              >
                {t('view')} inventoriz.com <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Image side — dashboard mockup */}
            <div className="rounded-2xl overflow-hidden border border-[var(--color-border)] bg-gradient-to-br from-slate-50 to-blue-50 p-6 min-h-[320px] flex items-center justify-center">
              <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                {/* Sidebar + main layout */}
                <div className="flex h-52">
                  {/* Mini sidebar */}
                  <div className="w-12 bg-[oklch(0.24_0.058_245)] flex flex-col items-center py-3 gap-3">
                    <div className="w-6 h-6 rounded-md bg-white/20 flex items-center justify-center">
                      <Package className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div className="w-6 h-6 rounded-md flex items-center justify-center">
                      <Layers className="w-3.5 h-3.5 text-white/50" />
                    </div>
                    <div className="w-6 h-6 rounded-md flex items-center justify-center">
                      <MapPin className="w-3.5 h-3.5 text-white/50" />
                    </div>
                    <div className="w-6 h-6 rounded-md flex items-center justify-center">
                      <BarChart3 className="w-3.5 h-3.5 text-white/50" />
                    </div>
                  </div>
                  {/* Main content */}
                  <div className="flex-1 p-3 space-y-2">
                    <div className="text-[10px] font-bold text-gray-700 mb-1">Items (24)</div>
                    {[
                      { name: 'MacBook Pro', loc: 'Office', qty: 3 },
                      { name: 'Monitor 27"', loc: 'Storage', qty: 5 },
                      { name: 'Keyboard', loc: 'Office', qty: 8 },
                      { name: 'USB Hub', loc: 'Cabinet', qty: 4 },
                    ].map((item) => (
                      <div key={item.name} className="flex items-center gap-2 text-[9px] bg-gray-50 rounded-lg px-2 py-1.5">
                        <div className="w-4 h-4 rounded bg-[oklch(0.93_0.025_245)] flex-shrink-0" />
                        <span className="font-medium text-gray-700 flex-1 truncate">{item.name}</span>
                        <span className="text-gray-400">{item.loc}</span>
                        <span className="font-bold text-[oklch(0.32_0.08_248)]">x{item.qty}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Bottom stats bar */}
                <div className="bg-[oklch(0.984_0.007_245)] border-t border-gray-100 px-3 py-2 flex justify-between text-[9px]">
                  <div className="text-center">
                    <div className="font-bold text-[oklch(0.32_0.08_248)]">24</div>
                    <div className="text-gray-400">{t('inventoriz_stat_items')}</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-[oklch(0.32_0.08_248)]">6</div>
                    <div className="text-gray-400">{t('inventoriz_stat_locs')}</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-[oklch(0.32_0.08_248)]">3</div>
                    <div className="text-gray-400">{t('inventoriz_stat_users')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
