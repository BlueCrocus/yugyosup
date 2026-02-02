type ButtonVariant = 'primary' | 'secondary';

export default function Button({
  children,
  variant = 'primary',
  type = 'button',
  className = '',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant }) {
  const base =
    'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const styles =
    variant === 'primary'
      ? 'bg-emerald-600 text-white hover:bg-emerald-700'
      : 'border border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-100';

  return (
    <button type={type} className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}
