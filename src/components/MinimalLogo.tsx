const MinimalLogo = ({ className = '' }: { className?: string }) => (
  <svg className={className} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="40" height="40" rx="12" fill="#3B82F6"/>
    <path d="M16 24C16 19.5817 19.5817 16 24 16C28.4183 16 32 19.5817 32 24C32 28.4183 28.4183 32 24 32C19.5817 32 16 28.4183 16 24Z" fill="#fff"/>
    <circle cx="24" cy="24" r="4" fill="#3B82F6"/>
  </svg>
);

export default MinimalLogo; 