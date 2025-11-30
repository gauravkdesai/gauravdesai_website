/**
 * Security utilities for the website
 * Lightweight helpers for common security tasks
 */

/**
 * Sanitize user input to prevent XSS attacks
 * Escapes HTML special characters
 * @param {string} input - The input string to sanitize
 * @returns {string} - Sanitized string
 */
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
  };
  
  return input.replace(/[&<>"'/]/g, (char) => map[char]);
};

/**
 * Validate email format
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if valid email format
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Safely open external links (additional layer beyond rel="noopener noreferrer")
 * @param {string} url - URL to open
 * @param {boolean} newTab - Whether to open in new tab
 */
export const safeOpenLink = (url, newTab = true) => {
  if (!url) return;
  
  // Validate URL format
  try {
    const urlObj = new URL(url);
    // Only allow http and https protocols
    if (!['http:', 'https:', 'mailto:'].includes(urlObj.protocol)) {
      console.warn('Invalid URL protocol:', urlObj.protocol);
      return;
    }
  } catch (e) {
    console.error('Invalid URL:', url);
    return;
  }
  
  if (newTab) {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  } else {
    window.location.href = url;
  }
};

/**
 * Rate limiting helper for user actions (e.g., form submissions)
 * @param {Function} fn - Function to rate limit
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} - Rate limited function
 */
export const rateLimit = (fn, delay = 1000) => {
  let lastCall = 0;
  
  return (...args) => {
    const now = Date.now();
    if (now - lastCall < delay) {
      console.warn('Action rate limited');
      return;
    }
    lastCall = now;
    return fn(...args);
  };
};
