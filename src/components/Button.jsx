import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  href,
  onClick,
  type = 'button',
  disabled = false,
  ...props 
}) => {
  const baseStyles = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  
  const Component = href ? motion.a : motion.button;
  
  const componentProps = href 
    ? { href, ...props }
    : { type, onClick, disabled, ...props };

  return (
    <Component
      className={`${baseStyles} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      {...componentProps}
    >
      {children}
    </Component>
  );
};

export default Button;
