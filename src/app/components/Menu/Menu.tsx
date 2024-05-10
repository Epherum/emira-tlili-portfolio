import React from "react";
import styles from "./menu.module.scss";
import Link from "next/link";
import behance from "/public/static/behance.svg";
import instagram from "/public/static/instagram.svg";
import linkedin from "/public/static/linkedin.svg";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function NavMenu() {
  return (
    <div className={styles.navMenu}>
      <div className={styles.left}>
        <p className={styles.logo}>Emira tlili</p>
        <div className={styles.linkContainer}>
          <Link href={"/"}>Home</Link>
        </div>
        <div className={styles.linkContainer}>
          <Link href={"/projects"}>Projects</Link>
        </div>
        <div className={styles.linkContainer}>
          <Link href={"/"}>Contact</Link>
        </div>
        <div className={styles.socials}>
          <a href="https://www.behance.net/tliliemira67fa" target="_blank">
            <img
              src={behance.src}
              alt="Behance"
              className={styles.social_icon}
            />
          </a>
          <a href="https://www.instagram.com/kkitsu.exe/" target="_blank">
            <img
              src={instagram.src}
              alt="Instagram"
              className={styles.social_icon}
            />
          </a>
          <a
            href="https://jp.linkedin.com/in/amira-tlili-a3b928167"
            target="_blank"
          >
            <img
              src={linkedin.src}
              alt="Linkedin"
              className={styles.social_icon}
            />
          </a>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.imageContainer}>
          <img src="/static/1.png" alt="" />
        </div>
        <div className={styles.buttons}>
          <IoIosArrowBack />
          <p>tresors naturels</p>
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
}

export default NavMenu;