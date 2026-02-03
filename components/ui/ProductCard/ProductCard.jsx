"use client";

import { useState } from "react";
import { Button } from "antd";
import {
  CheckOutlined,
  LeftOutlined,
  RightOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import ColorCarousel from "../ColorCarousel";
import styles from "./ProductCard.module.css";

// SVG иконки
const BoxIcon = ({ className }) => (
  <svg
    className={className}
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18s.41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9zM12 4.15L6.04 7.5 12 10.85l5.96-3.35L12 4.15zM5 15.91l6 3.38v-6.71L5 9.21v6.7zm14 0v-6.7l-6 3.37v6.71l6-3.38z" />
  </svg>
);

const InboxIcon = ({ className }) => (
  <svg
    className={className}
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-3h3.56c.69 1.19 1.97 2 3.45 2s2.75-.81 3.45-2H19v3zm0-5h-4.99c0 1.1-.9 2-2 2s-2-.9-2-2H5V5h14v9z" />
  </svg>
);

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVariantChange = (variant) => {
    setSelectedVariant(variant);
  };

  const currentIndex = product.variants.findIndex(
    (v) => v.id === selectedVariant?.id,
  );

  const handlePrev = (e) => {
    e.stopPropagation();
    const newIndex =
      currentIndex > 0 ? currentIndex - 1 : product.variants.length - 1;
    setSelectedVariant(product.variants[newIndex]);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const newIndex =
      currentIndex < product.variants.length - 1 ? currentIndex + 1 : 0;
    setSelectedVariant(product.variants[newIndex]);
  };

  const handleOrder = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleImageClick = () => {
    if (selectedVariant?.image) {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleModalBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  if (product.isSkeleton) {
    return (
      <div className={`${styles.card} ${styles.skeletonCard}`}>
        <div className={styles.imageContainer}>
          <div className={styles.image}>
            <div className={styles.skeletonPlaceholder}>
              <svg
                width="80"
                height="100"
                viewBox="0 0 80 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 10 L70 10 L65 90 L15 90 Z"
                  fill="#E8E8E8"
                  stroke="#D0D0D0"
                  strokeWidth="2"
                  strokeDasharray="8 4"
                />
                <ellipse
                  cx="40"
                  cy="10"
                  rx="30"
                  ry="8"
                  fill="#E8E8E8"
                  stroke="#D0D0D0"
                  strokeWidth="2"
                  strokeDasharray="8 4"
                />
              </svg>
              <span className={styles.comingSoon}>Скоро</span>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.header}>
            <h3 className={styles.size}>
              <span
                className={styles.skeletonBar}
                style={{ width: "80px", height: "28px" }}
              />
              <span className={styles.skeletonBadge}>NEW</span>
            </h3>
          </div>

          <div className={styles.skeletonTextLines}>
            <span className={styles.skeletonBar} style={{ width: "100%" }} />
            <span className={styles.skeletonBar} style={{ width: "70%" }} />
          </div>

          <div className={styles.skeletonColors}>
            <div className={styles.skeletonColorDot} />
            <div className={styles.skeletonColorDot} />
            <div className={styles.skeletonColorDot} />
          </div>

          <div className={styles.dimensions}>
            <span className={styles.skeletonDimension} />
            <span className={styles.skeletonDimension} />
            <span className={styles.skeletonDimension} />
          </div>

          {/* Скелетон для информации об упаковке */}
          <div className={styles.packaging}>
            <div className={styles.skeletonPackagingItem}>
              <div className={styles.skeletonPackagingIcon} />
              <span className={styles.skeletonBar} style={{ width: "60px" }} />
            </div>
            <div className={styles.skeletonPackagingItem}>
              <div className={styles.skeletonPackagingIcon} />
              <span className={styles.skeletonBar} style={{ width: "80px" }} />
            </div>
          </div>

          <div className={styles.footer}>
            <span
              className={styles.skeletonBar}
              style={{ width: "70px", height: "20px" }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          {product.variants.length > 1 && (
            <button
              className={`${styles.imageArrow} ${styles.imageArrowLeft}`}
              onClick={handlePrev}
            >
              <LeftOutlined />
            </button>
          )}
          <div
            className={styles.image}
            style={{
              ...(selectedVariant?.customSize || {}),
              backgroundImage: selectedVariant?.customSize?.noGradient
                ? selectedVariant?.image
                  ? `url(${selectedVariant.image})`
                  : "none"
                : selectedVariant?.image
                  ? `url(${selectedVariant.image}), radial-gradient(ellipse at center, #fff5f0 0%, #f5f0eb 50%, #f0e6dd 100%)`
                  : "radial-gradient(ellipse at center, #fff5f0 0%, #f5f0eb 50%, #f0e6dd 100%)",
            }}
            onClick={handleImageClick}
          >
            {!selectedVariant?.image && (
              <div className={styles.placeholder}>
                <svg
                  width="80"
                  height="100"
                  viewBox="0 0 80 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 10 L70 10 L65 90 L15 90 Z"
                    fill="#E0E0E0"
                    stroke="#BDBDBD"
                    strokeWidth="2"
                  />
                  <ellipse
                    cx="40"
                    cy="10"
                    rx="30"
                    ry="8"
                    fill="#E0E0E0"
                    stroke="#BDBDBD"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            )}
          </div>
          {product.variants.length > 1 && (
            <button
              className={`${styles.imageArrow} ${styles.imageArrowRight}`}
              onClick={handleNext}
            >
              <RightOutlined />
            </button>
          )}
        </div>

        <div className={styles.content}>
          <div className={styles.header}>
            <h3 className={styles.size}>
              {product.size}
              <CheckOutlined className={styles.checkIcon} />
            </h3>
          </div>

          <p className={styles.description}>{product.description}</p>

          <ColorCarousel
            variants={product.variants}
            selectedVariant={selectedVariant}
            onVariantChange={handleVariantChange}
          />

          <div className={styles.dimensions}>
            {product.dimensions.height ? (
              <>
                <span>↕ высота {product.dimensions.height}</span>
                <span>∅ верх {product.dimensions.topDiameter}</span>
                <span>∅ низ {product.dimensions.bottomDiameter}</span>
              </>
            ) : (
              <span className={styles.dimensionsUnknown}>
                Размеры уточняются
              </span>
            )}
          </div>

          {/* Добавленная секция с информацией об упаковке */}
          {product.packaging && (
            <div className={styles.packaging}>
              <div className={styles.packagingItem}>
                <BoxIcon className={styles.packagingIcon} />
                <span className={styles.packagingLabel}>В рукаве:</span>
                <span className={styles.packagingValue}>
                  {product.packaging.sleeve} шт.
                </span>
              </div>
              <div className={styles.packagingItem}>
                <InboxIcon className={styles.packagingIcon} />
                <span className={styles.packagingLabel}>В коробке:</span>
                <span className={styles.packagingValue}>
                  {product.packaging.box.toLocaleString()} шт.
                </span>
              </div>
            </div>
          )}

          <div className={styles.footer}>
            <div className={styles.price}>
              от {product.price.toFixed(2)} {product.priceUnit}
            </div>
            <Button
              type="primary"
              onClick={handleOrder}
              className={styles.orderButton}
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
              style={
                isButtonHovered
                  ? {
                      transform: "scale(1.05)",
                      boxShadow: "0 4px 16px rgba(29, 185, 84, 0.5)",
                      backgroundColor: "#15a049",
                      borderColor: "#15a049",
                    }
                  : {}
              }
            >
              Заказать
            </Button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modal} onClick={handleModalBackdropClick}>
          <div className={styles.modalContent}>
            <button className={styles.modalClose} onClick={handleCloseModal}>
              <CloseOutlined />
            </button>
            <img
              src={selectedVariant.image}
              alt={selectedVariant.name}
              className={styles.modalImage}
            />
            {product.variants.length > 1 && (
              <>
                <button
                  className={`${styles.modalArrow} ${styles.modalArrowLeft}`}
                  onClick={handlePrev}
                >
                  <LeftOutlined />
                </button>
                <button
                  className={`${styles.modalArrow} ${styles.modalArrowRight}`}
                  onClick={handleNext}
                >
                  Заказать
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
