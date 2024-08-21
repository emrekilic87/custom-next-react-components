import React from 'react';

interface ButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
  round?: boolean | number | string;
}

const Button: React.FC<ButtonProps> = ({
  text = 'Button',
  onClick = () => {},
  className = '',
  round = false,
}) => {
  // Determine the rounded class or inline style
  const roundClass = typeof round === 'boolean'
    ? round ? 'rounded-full' : ''
    : typeof round === 'number' || (typeof round === 'string' && !round.startsWith('rounded-'))
    ? '' // We'll handle arbitrary values with inline styles
    : round; // Use string directly for predefined Tailwind classes like "rounded-lg"

  const roundStyle = typeof round === 'number' || (typeof round === 'string' && !round.startsWith('rounded-'))
    ? { borderRadius: typeof round === 'number' ? `${round}px` : round }
    : {};

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-white ${roundClass} ${className}`}
      style={roundStyle}
    >
      {text}
    </button>
  );
};

export default Button;
