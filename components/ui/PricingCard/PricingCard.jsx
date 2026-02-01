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
        <p className={styles.description}>{plan.description}</p>
      </div>

      <div className={styles.priceSection}>
        {plan.price !== null ? (
          <>
            <span className={styles.price}>
              {plan.price.toLocaleString("ru-RU")}
            </span>
            <span className={styles.priceUnit}>{plan.priceUnit}</span>
          </>
        ) : (
          <span className={styles.priceLabel}>{plan.priceLabel}</span>
        )}
      </div>

      <p className={styles.quantity}>
        от {plan.minQuantity.toLocaleString("ru-RU")} {plan.quantityUnit}
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
