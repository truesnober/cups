'use client'

import { Button } from 'antd';
import { ArrowRightOutlined, PhoneOutlined, DownOutlined } from '@ant-design/icons';
import { HERO_STATS } from '@/constants';
import styles from './Hero.module.css';

const Hero = () => {
  const handleScrollToCatalog = () => {
    const element = document.querySelector('#catalog');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.badges}>
          <span className={styles.badge}>Экологично</span>
          <span className={styles.badge}>Премиум качество</span>
          <span className={styles.badge}>Быстрая доставка</span>
        </div>

        <h1 className={styles.title}>
          <span className={styles.titleMain}>Бумажные стаканы</span>
          <span className={styles.titleAccent}>нового поколения</span>
        </h1>

        <p className={styles.subtitle}>
          Четыре размера премиум-стаканов для вашего бизнеса.
          <br />
          Идеальное решение для кофеен, ресторанов и офисов
        </p>

        <div className={styles.buttons}>
          <Button
            type="primary"
            size="large"
            icon={<ArrowRightOutlined />}
            onClick={handleScrollToCatalog}
            className={styles.primaryButton}
          >
            Смотреть каталог
          </Button>
          <Button
            size="large"
            icon={<PhoneOutlined />}
            onClick={handleScrollToContact}
            className={styles.secondaryButton}
          >
            Связаться с нами
          </Button>
        </div>

        <div className={styles.stats}>
          {HERO_STATS.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.scrollIndicator}>
          <DownOutlined />
        </div>
      </div>
    </section>
  );
};

export default Hero;
