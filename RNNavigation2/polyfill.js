// polyfill.js
if (typeof global.DOMException === 'undefined') {
  class DOMException extends Error {
    constructor(message, name) {
      super(message);
      this.name = name || 'DOMException';
    }
  }
  
  // Assign it to all possible global scopes just to be safe
  global.DOMException = DOMException;
  globalThis.DOMException = DOMException;
  if (typeof window !== 'undefined') {
    window.DOMException = DOMException;
  }
}