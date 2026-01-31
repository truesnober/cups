"use client";

import { useState, useEffect } from "react";
import { Button, Drawer } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import Image from "next/image";
import { NAVIGATION_ITEMS } from "@/constants";
import styles from "./Header.module.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = () => {
    handleNavClick("#contact");
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <a
          href="#home"
          className={styles.logo}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
        >
          <Image
            src="/img/logo2.png"
            alt="L&G"
            width={120}
            height={40}
            priority
            className={styles.logoImage}
          />
        </a>

        <nav className={styles.nav}>
          {NAVIGATION_ITEMS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className={styles.navLink}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button
          type="primary"
          className={styles.orderButton}
          onClick={handleContactClick}
        >
          Связаться
        </Button>

        <button
          className={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Открыть меню"
        >
          <MenuOutlined />
        </button>

        <Drawer
          placement="right"
          closable={false}
          onClose={() => setIsMobileMenuOpen(false)}
          open={isMobileMenuOpen}
          className={styles.mobileDrawer}
          width={280}
        >
          <div className={styles.mobileDrawerHeader}>
            <Image
              src="/img/logo.png"
              alt="CupCoffee"
              width={100}
              height={33}
              className={styles.logoImage}
            />
            <button
              className={styles.closeButton}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <CloseOutlined />
            </button>
          </div>
          <nav className={styles.mobileNav}>
            {NAVIGATION_ITEMS.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={styles.mobileNavLink}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
            <Button
              type="primary"
              block
              size="large"
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleContactClick();
              }}
              style={{ marginTop: "24px" }}
            >
              Связаться
            </Button>
          </nav>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
