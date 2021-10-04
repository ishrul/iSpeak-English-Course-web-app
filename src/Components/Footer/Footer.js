import React from "react";
import "./Footer.css";
import {
  Printer,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Google,
} from "react-bootstrap-icons";

const Footer = () => {
  return (
    <div>
      {/* full footer part */}
      <footer className="flex-rw pt-5 pb-3">
        <ul className="footer-list-top">
          <li>
            <h4 className="footer-list-header">About Pavilion</h4>
          </li>
          <li>
            <a
              href="/shop/about-mission"
              className="generic-anchor footer-list-anchor"
              itemprop="significantLink"
            >
              GET TO KNOW US
            </a>
          </li>
          <li>
            <a
              href="/promos.html"
              className="generic-anchor footer-list-anchor"
              itemprop="significantLink"
            >
              PROMOS
            </a>
          </li>
          <li>
            <a
              href="/retailers/new-retailers.html"
              className="generic-anchor footer-list-anchor"
              itemprop="significantLink"
            >
              BECOME A RETAILER
            </a>
          </li>

          <li>
            <a
              href="/job-openings.html"
              itemprop="significantLink"
              className="generic-anchor footer-list-anchor"
            >
              JOB OPENINGS
            </a>
          </li>

          <li>
            <a
              href="/shop/about-show-schedule"
              className="generic-anchor footer-list-anchor"
              itemprop="significantLink"
            >
              EVENTS
            </a>
          </li>
        </ul>
        <ul className="footer-list-top">
          <li>
            <h4 className="footer-list-header">Our Courses</h4>
          </li>

          <li>
            <a
              href="/Angels/cat/id/70"
              className="generic-anchor footer-list-anchor"
            >
              English for Beginners
            </a>
          </li>
          <li>
            <a
              href="/Home-Decor/cat/id/64"
              className="generic-anchor footer-list-anchor"
            >
              Online Learning
            </a>
          </li>
          <li>
            <a
              href="/Mugs/cat/id/32"
              className="generic-anchor footer-list-anchor"
            >
              English for Business
            </a>
          </li>
          <li>
            <a
              href="/Pet-Lover/cat/id/108"
              className="generic-anchor footer-list-anchor"
            >
              English for Kids
            </a>
          </li>
          <li>
            <a
              href="/Ladies-Accessories/cat/id/117"
              className="generic-anchor footer-list-anchor"
              target="_blank"
            >
              Reading and Vocabulary Course
            </a>
          </li>
        </ul>
        <ul className="footer-list-top">
          <li id="help">
            <h4 className="footer-list-header">Please Help Me</h4>
          </li>
          <li>
            <a
              href="/shop/about-contact"
              className="generic-anchor footer-list-anchor"
              itemprop="significantLink"
            >
              CONTACT
            </a>
          </li>
          <li>
            <a
              href="/faq.html"
              className="generic-anchor footer-list-anchor"
              itemprop="significantLink"
            >
              FAQ
            </a>
          </li>
          <li id="find-a-store">
            <a
              href="/shop/store-locator"
              className="generic-anchor footer-list-anchor"
              itemprop="significantLink"
            >
              STORE LOCATOR
            </a>
          </li>
          <li id="user-registration">
            <a
              href="/shop/user-registration?URL="
              className="generic-anchor footer-list-anchor"
              itemprop="significantLink"
            >
              NEW USERS
            </a>
          </li>
          <li id="order-tracking">
            <a
              href="/shop/order-status"
              itemprop="significantLink"
              className="generic-anchor footer-list-anchor"
            >
              ORDER STATUS
            </a>
          </li>
        </ul>
        <section className="footer-social-section flex-rw">
          <span className="footer-social-overlap footer-social-connect">
            CONNECT <span className="footer-social-small">with</span> US
          </span>
          <span className="footer-social-overlap footer-social-icons-wrapper">
            <a
              href="https://www.pinterest.com/paviliongift/"
              className="generic-anchor"
              title="Pinterest"
              itemprop="significantLink"
            >
              <Printer />
            </a>
            <a
              href="https://www.facebook.com/paviliongift"
              className="generic-anchor"
              title="Facebook"
              itemprop="significantLink"
            >
              <Facebook />
            </a>
            <a
              href="https://twitter.com/PavilionGiftCo"
              className="generic-anchor"
              title="Twitter"
              itemprop="significantLink"
            >
              <Twitter />
            </a>
            <a
              href="http://instagram.com/paviliongiftcompany"
              className="generic-anchor"
              title="Instagram"
              itemprop="significantLink"
            >
              <Instagram />
            </a>
            <a
              href="https://www.youtube.com/channel/UCYgUODvd0qXbu_LkUWpTVEg"
              className="generic-anchor"
              title="Youtube"
              itemprop="significantLink"
            >
              <Youtube />
            </a>
            <a
              href="https://plus.google.com/+Paviliongift/posts"
              className="generic-anchor"
              title="Google Plus"
              itemprop="significantLink"
            >
              <Google />
            </a>
          </span>
        </section>
        <section className="footer-bottom-section flex-rw">
          <div className="footer-bottom-wrapper">
            <i className="fa fa-copyright"></i> 2021 Mohammed Ishrul Kayes-{" "}
            <address className="footer-address">Satkania, Chittagong</address>
            <span className="footer-bottom-rights">
              {" "}
              - All Rights Reserved -{" "}
            </span>
          </div>
          <div className="footer-bottom-wrapper">
            <a
              href="/terms-of-use.html"
              className="generic-anchor"
              rel="nofollow"
            >
              Terms
            </a>
            <a
              href="/privacy-policy.html"
              className="generic-anchor"
              rel="nofollow"
            >
              Privacy
            </a>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
