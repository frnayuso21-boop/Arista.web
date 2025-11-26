import React from 'react';

interface AristaLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

const AristaLogo: React.FC<AristaLogoProps> = ({ 
  className = "", 
  width = 120, 
  height = 40 
}) => {
  return (
    <img
      src={`${import.meta.env.BASE_URL}Arista - Logotipo Final WEB PNG.png`}
      alt="Arista Logo"
      width={width}
      height={height}
      className={className}
      style={{ 
        display: 'block',
        objectFit: 'contain',
        maxWidth: '100%',
        height: 'auto',
        filter: 'brightness(0) invert(1)'
      }}
    />
  );
};

export default AristaLogo;