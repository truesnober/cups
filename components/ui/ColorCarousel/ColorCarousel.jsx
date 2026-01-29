'use client'

import { useRef, useState, useEffect } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import styles from './ColorCarousel.module.css';

const ColorCarousel = ({ variants, selectedVariant, onVariantChange }) => {
  const carouselRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const checkScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', checkScrollButtons);
      window.addEventListener('resize', checkScrollButtons);
      return () => {
        carousel.removeEventListener('scroll', checkScrollButtons);
        window.removeEventListener('resize', checkScrollButtons);
      };
    }
  }, [variants]);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -100 : 100;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const renderPlaceholder = (variant) => {
    if (variant.color) {
      return (
        <div
          className={styles.colorPlaceholder}
          style={{ backgroundColor: variant.color }}
        />
      );
    }
    return (
      <div className={styles.patternPlaceholder}>
        <span>?</span>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {showLeftArrow && (
        <button
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={() => scroll('left')}
          aria-label="Предыдущий"
        >
          <LeftOutlined />
        </button>
      )}

      <div ref={carouselRef} className={styles.carousel}>
        {variants.map((variant) => (
          <button
            key={variant.id}
            className={`${styles.item} ${selectedVariant?.id === variant.id ? styles.active : ''}`}
            onClick={() => onVariantChange(variant)}
            title={variant.name}
          >
            <div className={styles.miniCard}>
              {variant.thumb ? (
                <img
                  src={variant.thumb}
                  alt={variant.name}
                  className={styles.thumbImage}
                />
              ) : (
                renderPlaceholder(variant)
              )}
            </div>
          </button>
        ))}
      </div>

      {showRightArrow && (
        <button
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={() => scroll('right')}
          aria-label="Следующий"
        >
          <RightOutlined />
        </button>
      )}
    </div>
  );
};

export default ColorCarousel;
