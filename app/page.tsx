"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";


export default function Page() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    AOS.init({ once: true });
    // Reset scroll on reload
    if (typeof window !== "undefined") {
      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      };
    }
  }, []);

  return (
    <div>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headText}>
          <Image src="/public/img/logo1.png" alt="SFB Solutions Logo" width={300} height={200} className={styles.hT} />
          <h1>
           &nbsp; &nbsp; სრულყოფილი გადაწყვეტილებები თქვენი სავაჭრო სივრცისთვის
            <span> — ერთი პარტნიორი, ყველა საჭიროებისთვის</span>
          </h1>

          {showText && (
            <p>
              ტექნიკური აღჭურვა, კონსულტაცია, მონტაჟი და შემდგომი <br />
              — დაგეხმარებით, რომ თქვენი ბიზნესის ოპერაციები <br />
              თანამედროვე სტანდარტებზე გადაიყვანოთ.
            </p>
          )}

          <button
            onClick={() => setShowText((prev) => !prev)}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {showText ? "დამალეთ" : "ჩამოშალეთ"}
          </button>
        </div>

        <Image src="/public/img/1.png" alt="Main visual" width={803.88} height={535.91} className={styles.headRImg} />
      </header>

      {/* Main */}
      <main>
        <div className={styles.aboutUS}>
          <p className={styles.aboutUsHeadTXT}>ჩვენს შესახებ</p>
          <p className={styles.aboutUSMain}>
            &nbsp; &nbsp; &nbsp; Solutions For F&B — ჩვენი მისიაა გავამარტივოთ თქვენი
            <br />
            ბიზნესის ოპერაციები ყველა ეტაპზე: კონცეფციიდან ტექნიკურ <br />
            ინსტალაციამდე. ვმუშაობთ როგორც მცირე ზომის მაღაზიებთან, <br />
            ასევე მსხვილ საცალო ქსელებთან. ჩვენი გამოცდილება მოიცავს <br />
            როგორც F&B სექტორს, ასევე საცალო ვაჭრობის ფართო სპექტრს <br />—
            ყველგან, სადაც ტექნიკური სიზუსტე და ოპტიმიზაცია აუცილებელია.
          </p>
        </div>
        <Image src="/public/img/3.png" alt="About us image" width={360} height={308} data-aos="fade-left" data-aos-delay="300" />
      </main>

      {/* Footer */}
      <footer>
        <div className={styles.footerCont}>
          <p className={styles.footerP}>მომსახურება</p>
          <div className={styles.container}>
            <div className={styles.item} data-aos="fade-up" data-aos-delay="200">
              <Image src="/public/img/4.1.png" alt="Business Consulting" width={89} height={81} className={styles.itemImg} />
              <h2>
                ბიზნეს <br /> კონსულტაცია
              </h2>
              <ul>
                <li>ბიზნეს პროცესების ანალიზი</li>
                <li>ტექნიკური საჭიროებების განსაზღვრა</li>
                <li>ინდივიდუალური გადაწყვეტილებების დაგეგმვა</li>
              </ul>
            </div>

            <div className={styles.item} data-aos="fade-up" data-aos-delay="300">
              <Image src="/public/img/4.2.png" alt="Technical Equipment" width={91} height={82} className={styles.itemImg} />
              <h2>
                ტექნიკური <br /> აღჭურვა
              </h2>
              <ul>
                <li>სავაჭრო თაროები და სტენდები</li>
                <li>სარეკლამო მონიტორები</li>
                <li>ვიდეოკონტროლისა და უსაფრთხოების სისტემები</li>
              </ul>
            </div>

            <div className={styles.item} data-aos="fade-up" data-aos-delay="400">
              <Image src="/public/img/4.3.png" alt="Installation" width={80} height={88} className={styles.itemImg} />
              <h2>
                მონტაჟი და <br /> ინსტალაცია
              </h2>
              <ul>
                <li>
                  პროფესიონალური მონტაჟი და სრულყოფილი ინსტალაცია თქვენი ტექნიკისა და სისტემების
                  სწრაფად და საიმედოდ.
                </li>
              </ul>
            </div>

            <div className={styles.item} data-aos="fade-up" data-aos-delay="500">
              <Image src="/public/img/4.4.png" alt="Technical Support" width={67} height={82} className={styles.itemImg} />
              <h2>ტექნიკური სერვისი და მხარდაჭერა</h2>
              <ul>
                <li>
                  გრძელვადიანი ტექნიკური მხარდაჭერა და სერვისები თქვენი ბიზნესის შეუფერხებლად
                  ფუნქციონირებისთვის.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.contactInfo}>
          <h2>
            <FontAwesomeIcon icon={faPhone} /> საკონტაქტო ინფორმაცია
          </h2>
          <p>
            <strong>ელ. ფოსტა:</strong> info@sfbsolutions.ge
          </p>
          <p>
            <strong>ელ. ფოსტა:</strong> service@sfbsolutions.ge
          </p>
          <p>
            <strong>ელ. ფოსტა:</strong> sales@sfbsolutions.ge
          </p>
          <p>
            <strong>მისამართი:</strong> თბილისი, წერეთლის ქუჩა Nº115
          </p>
        </div>
      </footer>
    </div>
  );
}
