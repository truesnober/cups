"use client";

import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  DollarOutlined,
  CarOutlined,
  StarOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { ADVANTAGES } from "@/constants";
import styles from "./Advantages.module.css";

const iconMap = {
  safety: SafetyCertificateOutlined,
  check: CheckCircleOutlined,
  dollar: DollarOutlined,
  truck: CarOutlined,
  support: HeartOutlined,
  star: StarOutlined,
};

const Advantages = () => {
  return (
    <section id="advantages" className={styles.advantages}>
      <div className={styles.container}>
        <span className={styles.label}>Почему выбирают нас</span>
        <h2 className={styles.title}>Наши преимущества</h2>
        <p className={styles.subtitle}>
          Мы предлагаем больше, чем просто стаканы
        </p>

        <div className={styles.grid}>
          {ADVANTAGES.map((advantage) => {
            const IconComponent =
              iconMap[advantage.icon] || CheckCircleOutlined;
            return (
              <div key={advantage.id} className={styles.card}>
                <div className={styles.iconWrapper}>
                  <IconComponent className={styles.icon} />
                </div>
                <h3 className={styles.cardTitle}>{advantage.title}</h3>
                <p className={styles.cardDescription}>
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
