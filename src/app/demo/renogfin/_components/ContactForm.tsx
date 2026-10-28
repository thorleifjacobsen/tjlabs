'use client';

import { useState, type FormEvent } from 'react';
import { SERVICES } from './data';
import { CheckIcon } from './icons';

const field =
  'w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-[#0d9488] focus:outline-none focus:ring-2 focus:ring-[#ccfbf1]';
const label = 'mb-1.5 block text-sm font-medium text-slate-900';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div role="status" className="flex items-start gap-3 rounded-lg border border-teal-200 bg-[#ccfbf1] p-6">
        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0d9488] text-white">
          <CheckIcon className="h-4 w-4" />
        </span>
        <p className="pt-1 font-medium text-slate-900">Takk! Vi tar kontakt med deg så snart som mulig.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="rf-name" className={label}>
            Navn
          </label>
          <input id="rf-name" name="name" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="rf-company" className={label}>
            Bedrift (valgfritt)
          </label>
          <input id="rf-company" name="company" autoComplete="organization" className={field} />
        </div>
        <div>
          <label htmlFor="rf-email" className={label}>
            E-post
          </label>
          <input id="rf-email" name="email" type="email" required autoComplete="email" className={field} />
        </div>
        <div>
          <label htmlFor="rf-phone" className={label}>
            Telefon
          </label>
          <input id="rf-phone" name="phone" type="tel" autoComplete="tel" className={field} />
        </div>
      </div>
      <div>
        <label htmlFor="rf-service" className={label}>
          Hva gjelder det?
        </label>
        <select id="rf-service" name="service" className={field} defaultValue="">
          <option value="" disabled>
            Velg tjeneste
          </option>
          {SERVICES.map((s) => (
            <option key={s.id} value={s.id}>
              {s.title}
            </option>
          ))}
          <option value="annet">Annet</option>
        </select>
      </div>
      <div>
        <label htmlFor="rf-message" className={label}>
          Melding
        </label>
        <textarea
          id="rf-message"
          name="message"
          rows={5}
          required
          placeholder="Fortell kort om lokalet eller boligen, og hvor ofte du ønsker renhold."
          className={field}
        />
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-lg bg-[#0d9488] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#0f766e] sm:w-auto"
      >
        Send forespørsel
      </button>
    </form>
  );
}
