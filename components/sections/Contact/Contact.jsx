'use client';

import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  SendOutlined,
  WhatsAppOutlined,
  InstagramOutlined,
} from '@ant-design/icons';
import { CONTACTS, SOCIAL_LINKS } from '@/constants';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Свяжитесь с нами</span>
          <h2 className={styles.title}>
            Готовы начать
            <br />
            сотрудничество?
          </h2>
          <p className={styles.description}>
            Мы всегда рады ответить на ваши вопросы и обсудить детали сотрудничества
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>
              <PhoneOutlined />
            </div>
            <div className={styles.contactText}>
              <span className={styles.contactLabel}>Телефон</span>
              <a href={`tel:${CONTACTS.phone.replace(/\s/g, '')}`} className={styles.contactValue}>
                {CONTACTS.phone}
              </a>
            </div>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>
              <MailOutlined />
            </div>
            <div className={styles.contactText}>
              <span className={styles.contactLabel}>Email</span>
              <a href={`mailto:${CONTACTS.email}`} className={styles.contactValue}>
                {CONTACTS.email}
              </a>
            </div>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>
              <EnvironmentOutlined />
            </div>
            <div className={styles.contactText}>
              <span className={styles.contactLabel}>Адрес</span>
              <span className={styles.contactValue}>{CONTACTS.address}</span>
            </div>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>
              <ClockCircleOutlined />
            </div>
            <div className={styles.contactText}>
              <span className={styles.contactLabel}>Режим работы</span>
              <span className={styles.contactValue}>{CONTACTS.workingHours}</span>
            </div>
          </div>
        </div>

        <div className={styles.socials}>
          <span className={styles.socialsLabel}>Мы в соцсетях:</span>
          <div className={styles.socialLinks}>
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={social.name}
              >
                {social.icon === 'telegram' && <SendOutlined style={{ fontSize: '24px' }} />}
                {social.icon === 'whatsapp' && <WhatsAppOutlined style={{ fontSize: '24px' }} />}
                {social.icon === 'instagram' && <InstagramOutlined style={{ fontSize: '24px' }} />}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
