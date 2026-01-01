
'use client'

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function MainMenu() {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Helper: Exact match or starts with path
  const isActive = (path: string, exact = true) =>
    exact ? pathname === path : pathname.startsWith(path);

  const handleMouseEnter = (dropdownName: string) => {
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <ul className="main-menu__list">
      {/* Home Mega Menu */}
      <li 
        className={`dropdown megamenu ${isActive("/", true) || isActive("/index2", true) ? "current" : ""} ${activeDropdown === 'home' ? 'active' : ''}`}
        onMouseEnter={() => handleMouseEnter('home')}
        onMouseLeave={handleMouseLeave}
      >
        <Link href="/">Home</Link>
        <ul>
          <li>
            <section className="home-showcase">
              <div className="container">
                <div className="home-showcase__inner">
                  <div className="row">
                    {/* Home 01 */}
                    <div className="col-lg-6">
                      <div className="home-showcase__item">
                        <div className="home-showcase__image">
                          <Image
                            src="/assets/images/home-showcase/home-showcase-1-1.jpg"
                            alt="Home 01"
                            width={400}
                            height={300}
                          />
                          <div className="home-showcase__buttons">
                            <Link
                              href="/"
                              className="thm-btn home-showcase__buttons__item"
                            >
                              Multi Page <span className="icon-right-arrow"></span>
                            </Link>
                            <Link
                              href="/onepage"
                              className="thm-btn home-showcase__buttons__item"
                            >
                              One Page <span className="icon-right-arrow"></span>
                            </Link>
                          </div>
                        </div>
                        <h3 className="home-showcase__title">Home Page 01</h3>
                      </div>
                    </div>

                    {/* Home 02 */}
                    <div className="col-lg-6">
                      <div className="home-showcase__item">
                        <div className="home-showcase__image">
                          <Image
                            src="/assets/images/home-showcase/home-showcase-1-2.jpg"
                            alt="Home 02"
                            width={400}
                            height={300}
                          />
                          <div className="home-showcase__buttons">
                            <Link
                              href="/index2"
                              className="thm-btn home-showcase__buttons__item"
                            >
                              Multi Page <span className="icon-right-arrow"></span>
                            </Link>
                            <Link
                              href="/index2-onepage"
                              className="thm-btn home-showcase__buttons__item"
                            >
                              One Page <span className="icon-right-arrow"></span>
                            </Link>
                          </div>
                        </div>
                        <h3 className="home-showcase__title">Home Page 02</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </li>
        </ul>
      </li>

      {/* About */}
      <li className={isActive("/about") ? "current" : ""}>
        <Link href="/about">About</Link>
      </li>

      {/* Pages - Simple Link */}
      <li className={isActive("/team") ? "current" : ""}>
        <Link href="/team">Pages</Link>
      </li>

      {/* Services - Simple Link */}
      <li className={isActive("/services") ? "current" : ""}>
        <Link href="/services">Services</Link>
      </li>

      {/* Shop - Simple Link */}
      <li className={isActive("/products") ? "current" : ""}>
        <Link href="/products">Shop</Link>
      </li>

      {/* Blog - Simple Link */}
      <li className={isActive("/blog") ? "current" : ""}>
        <Link href="/blog">Blog</Link>
      </li>

      {/* Contact */}
      <li className={isActive("/contact") ? "current" : ""}>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
}
