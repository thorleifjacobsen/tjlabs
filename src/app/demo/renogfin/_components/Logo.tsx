// Horizontal lockup: the round mark from the logo, with the wordmark set beside it
export default function Logo({ size = 'md' }: { size?: 'md' | 'lg' }) {
  const mark = size === 'lg' ? 'h-14 w-14' : 'h-11 w-11 md:h-12 md:w-12';
  const text = size === 'lg' ? 'text-2xl' : 'text-xl md:text-[22px]';
  return (
    <span className="flex items-center gap-3">
      <img src="/demo/renogfin/logo-mark.png" alt="" className={mark} />
      <span className={`${text} font-medium tracking-[0.28em] text-[#1e3364]`}>REN&amp;FIN</span>
    </span>
  );
}
