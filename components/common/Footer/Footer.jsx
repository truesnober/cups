"use client";

import Image from "next/image";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  SendOutlined,
  WhatsAppOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import { CONTACTS, SOCIAL_LINKS, COMPANY_INFO } from "@/constants";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.info}>
            <a href="#home" className={styles.logo}>
              <Image
                src="/img/logo2.png"
                alt="CupCoffee"
                width={120}
                height={40}
                className={styles.logoImage}
              />
            </a>
            <div>
              <div className={styles.div}>
                <p className={styles.description}>{COMPANY_INFO.description}</p>
              </div>
              <div className={styles.copyrighte}>
                <p className={styles.copyright}>{COMPANY_INFO.copyright}</p>
              </div>
            </div>
          </div>
          <div className={styles.contacts}>
            <div className={styles.contactItem}>
              <PhoneOutlined />
              <div className={styles.phonesList}>
                {CONTACTS.phones.map((phone, index) => (
                  <a
                    key={index}
                    href={`tel:${phone.number.replace(/\s/g, "")}`}
                  >
                    {phone.number}{" "}
                    <span className={styles.contactName}>({phone.name})</span>
                  </a>
                ))}
              </div>
            </div>
            <div className={styles.contactItem}>
              <MailOutlined />
              <div className={styles.emailsList}>
                {CONTACTS.emails.map((email, index) => (
                  <a key={index} href={`mailto:${email}`}>
                    {email}
                  </a>
                ))}
              </div>
            </div>
            <div className={styles.contactItem}>
              <EnvironmentOutlined />
              <span>
                {CONTACTS.address[0]}
                <br />
                {CONTACTS.address[1]}
              </span>
            </div>
            <div className={styles.contactItem}>
              <ClockCircleOutlined />
              <span>{CONTACTS.workingHours}</span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottomLinks}>
            {/* <a href="#">Политика конфиденциальности</a>
            <a href="#">Условия использования</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
