"use client";

import { Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import styles from "./PricingCard.module.css";

const PricingCard = ({ plan }) => {
  const handleOrder = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`${styles.card} ${plan.isPopular ? styles.popular : ""}`}>
      {plan.badge && <div className={styles.badge}>{plan.badge}</div>}

      <div className={styles.header}>
        <h3 className={styles.name}>{plan.name}</h3>
        {/* <p className={styles.description}>{plan.description}</p> */}
      </div>

      <div className={styles.priceSection}>
        {typeof plan.price === "number" ? (
          <>
            <span className={styles.price}>
              {plan.price.toLocaleString("ru-RU")}
            </span>
            <span className={styles.priceUnit}>{plan.priceUnit}</span>
          </>
        ) : plan.price ? (
          <span className={styles.priceLabel}>{plan.price}</span>
        ) : (
          <span className={styles.priceLabel}>{plan.priceLabel}</span>
        )}
      </div>

      <p className={`${styles.quantity} ${!plan.minQuantity ? styles.hidden : ""}`}>
        {plan.minQuantity ? (
          <>
            {typeof plan.minQuantity === "number"
              ? plan.minQuantity.toLocaleString("ru-RU")
              : plan.minQuantity}{" "}
            {plan.quantityUnit}
          </>
        ) : (
          "\u00A0"
        )}
      </p>

      <Button
        type={plan.isPopular ? "primary" : "default"}
        size="large"
        block
        onClick={handleOrder}
        className={styles.button}
      >
        Заказать
      </Button>

      <ul className={styles.features}>
        {plan.features.map((feature, index) => (
          <li key={index} className={styles.feature}>
            <CheckOutlined
              className={`${styles.checkIcon} ${
                feature.included ? styles.included : styles.excluded
              }`}
            />
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
