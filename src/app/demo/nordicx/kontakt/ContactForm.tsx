'use client';

import { useState } from 'react';
import { SITE, products } from '../data';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [navn, setNavn] = useState('');
  const [epost, setEpost] = useState('');
  const [telefon, setTelefon] = useState('');
  const [produkt, setProdukt] = useState('');
  const [melding, setMelding] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const subject = encodeURIComponent(
      produkt ? `Henvendelse: ${produkt}` : 'Henvendelse til NordicX'
    );
    const bodyLines = [
      `Navn: ${navn}`,
      `E-post: ${epost}`,
      telefon ? `Telefon: ${telefon}` : null,
      produkt ? `Produkt: ${produkt}` : null,
      '',
      melding,
    ].filter((line) => line !== null);
    const body = encodeURIComponent(bodyLines.join('\n'));

    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="rounded-lg border p-6 md:p-8 flex flex-col items-start gap-3"
        style={{ borderColor: 'var(--nx-line)' }}
      >
        <h2 className="font-semibold text-lg">Nesten i mål</h2>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--nx-muted)' }}>
          E-postprogrammet ditt skal nå ha åpnet en ny melding til{' '}
          {SITE.email} med det du fylte ut. Send den av gårde derfra, så
          svarer vi så raskt vi kan.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-sm font-medium underline underline-offset-2"
          style={{ color: 'var(--nx-accent)' }}
        >
          Fyll ut på nytt
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border p-6 md:p-8"
      style={{ borderColor: 'var(--nx-line)' }}
    >
      <h2 className="font-semibold text-lg mb-6">Send en melding</h2>
      <div className="flex flex-col gap-5">
        <div>
          <label htmlFor="nx-navn" className="block text-sm font-medium mb-1.5">
            Navn
          </label>
          <input
            id="nx-navn"
            name="navn"
            type="text"
            required
            value={navn}
            onChange={(e) => setNavn(e.target.value)}
            className="w-full rounded-md border px-3 py-2.5 text-sm"
            style={{ borderColor: 'var(--nx-line)' }}
          />
        </div>

        <div>
          <label htmlFor="nx-epost" className="block text-sm font-medium mb-1.5">
            E-post
          </label>
          <input
            id="nx-epost"
            name="epost"
            type="email"
            required
            value={epost}
            onChange={(e) => setEpost(e.target.value)}
            className="w-full rounded-md border px-3 py-2.5 text-sm"
            style={{ borderColor: 'var(--nx-line)' }}
          />
        </div>

        <div>
          <label htmlFor="nx-telefon" className="block text-sm font-medium mb-1.5">
            Telefon
          </label>
          <input
            id="nx-telefon"
            name="telefon"
            type="tel"
            value={telefon}
            onChange={(e) => setTelefon(e.target.value)}
            className="w-full rounded-md border px-3 py-2.5 text-sm"
            style={{ borderColor: 'var(--nx-line)' }}
          />
        </div>

        <div>
          <label htmlFor="nx-produkt" className="block text-sm font-medium mb-1.5">
            Produkt
          </label>
          <select
            id="nx-produkt"
            name="produkt"
            value={produkt}
            onChange={(e) => setProdukt(e.target.value)}
            className="w-full rounded-md border px-3 py-2.5 text-sm bg-white"
            style={{ borderColor: 'var(--nx-line)' }}
          >
            <option value="">Velg produkt (valgfritt)</option>
            {products.map((p) => (
              <option key={p.id} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="nx-melding" className="block text-sm font-medium mb-1.5">
            Melding
          </label>
          <textarea
            id="nx-melding"
            name="melding"
            required
            rows={4}
            value={melding}
            onChange={(e) => setMelding(e.target.value)}
            className="w-full rounded-md border px-3 py-2.5 text-sm"
            style={{ borderColor: 'var(--nx-line)' }}
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold text-sm transition-colors"
          style={{ backgroundColor: 'var(--nx-accent)', color: '#ffffff' }}
        >
          Send melding
        </button>
      </div>
    </form>
  );
}
