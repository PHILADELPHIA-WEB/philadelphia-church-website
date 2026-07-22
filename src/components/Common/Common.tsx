interface CardProps {
  title: string;
  description: string;
  image?: string;
  icon?: React.ReactNode;
  cta?: {
    text: string;
    href: string;
  };
  className?: string;
}

export function Card({ title, description, image, icon, cta, className = '' }: CardProps) {
  return (
    <div className={`card ${className}`}>
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
      )}
      {icon && <div className="mb-4 text-primary-600">{icon}</div>}
      <h3 className="text-xl font-bold mb-2 text-secondary-700">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {cta && (
        <a href={cta.href} className="text-primary-600 font-semibold hover:text-primary-700">
          {cta.text} →
        </a>
      )}
    </div>
  );
}

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  [key: string]: any;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-lg transition-colors duration-200';
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50',
  };
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${
        fullWidth ? 'w-full' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

interface BreadcrumbProps {
  items: Array<{ label: string; href?: string }>;
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600">
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          {item.href ? (
            <a href={item.href} className="hover:text-primary-600">
              {item.label}
            </a>
          ) : (
            <span>{item.label}</span>
          )}
          {index < items.length - 1 && <span>/</span>}
        </div>
      ))}
    </nav>
  );
}
