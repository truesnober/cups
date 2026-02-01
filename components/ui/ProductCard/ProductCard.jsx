"use client";

import { useState } from "react";
import { Button } from "antd";
import {
  ArrowRightOutlined,
  CheckOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import ColorCarousel from "../ColorCarousel";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

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

  return (
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
          {/* <p className={styles.name}>{product.name}</p> */}
        </div>

        <p className={styles.description}>{product.description}</p>

        <ColorCarousel
          variants={product.variants}
          selectedVariant={selectedVariant}
          onVariantChange={handleVariantChange}
        />

        <div className={styles.dimensions}>
          <span>∅ {product.dimensions.diameter}мм</span>
          <span>↕ {product.dimensions.height}мм</span>
        </div>

        <div className={styles.footer}>
          <div className={styles.price}>
            от {product.price.toFixed(2)} {product.priceUnit}
          </div>
          <Button
            type="primary"
            shape="circle"
            icon={<ArrowRightOutlined />}
            onClick={handleOrder}
            className={styles.orderButton}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
            style={
              isButtonHovered
                ? {
                    transform: "scale(1.15)",
                    boxShadow: "0 4px 16px rgba(29, 185, 84, 0.5)",
                    backgroundColor: "#15a049",
                    borderColor: "#15a049",
                  }
                : {}
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
