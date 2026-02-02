import React from 'react';

/**
 * SafeLink component for external links
 * Enforces rel="noopener noreferrer" and target="_blank" by default
 * Performs basic URL protocol validation
 */
const SafeLink = ({ href, children, className, target = '_blank', ...props }) => {
  if (!href) return <span className={className} {...props}>{children}</span>;

  // Basic protocol validation
  const isValidProtocol = (url) => {
    try {
      const parsed = new URL(url, window.location.origin);
      return ['http:', 'https:', 'mailto:', 'tel:'].includes(parsed.protocol);
    } catch {
      return false;
    }
  };

  const safeHref = isValidProtocol(href) ? href : '#';

  const rel = target === '_blank' ? 'noopener noreferrer' : undefined;

  return (
    <a 
      href={safeHref} 
      target={target} 
      rel={rel} 
      className={className} 
      {...props}
    >
      {children}
    </a>
  );
};

export default SafeLink;
