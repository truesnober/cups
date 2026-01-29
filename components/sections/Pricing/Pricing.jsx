'use client'

import { PRICING_PLANS } from '@/constants';
import PricingCard from '../../ui/PricingCard';
import styles from './Pricing.module.css';

const Pricing = () => {
  return (
    <section id="pricing" className={styles.pricing}>
      <div className={styles.container}>
        <span className={styles.label}>Тарифы</span>
        <h2 className={styles.title}>Выберите свой план</h2>
        <p className={styles.subtitle}>
          Гибкие условия для любого масштаба бизнеса
        </p>

        <div className={styles.grid}>
          {PRICING_PLANS.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
