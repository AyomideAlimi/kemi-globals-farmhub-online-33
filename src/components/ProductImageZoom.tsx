
import { useState } from 'react';
import { motion } from 'framer-motion';

interface ProductImageZoomProps {
  src: string;
  alt: string;
  className?: string;
}

const ProductImageZoom = ({ src, alt, className = '' }: ProductImageZoomProps) => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className={`relative overflow-hidden cursor-zoom-in ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-300"
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsZoomed(true)}
      />
      
      {isZoomed && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center cursor-zoom-out"
          onClick={() => setIsZoomed(false)}
        >
          <motion.img
            src={src}
            alt={alt}
            className="max-w-[90vw] max-h-[90vh] object-contain"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
          />
        </div>
      )}
    </div>
  );
};

export default ProductImageZoom;
