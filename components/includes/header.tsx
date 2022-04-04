import Link from 'next/link';
import route from 'next/router'
import { useEffect, useState } from 'react';
import cx from 'classnames';
import { Logo, GithubLogo, MobileMenuIcon } from '../../assets/icons';
import styles from '../../styles/Btn.module.css';

interface HeaderProps {
  navItems?: {
    item_name: {
      text: string;
    }[];
    item_link: {
      id: string;
      type: string;
      slug?: string;
      uid?: string;
      link_type: 'Document' | 'Web' | 'Media';
    }
    icon_select: string;
  }[];
}

export function Header({navItems}: HeaderProps){
  const [currentPage, setCurrentPage] = useState<string | undefined>();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileClasses = 'flex-col fixed left-0 top-0 h-screen w-full'
  useEffect(() => {
    setCurrentPage(route.router?.asPath.replace('/', ''));
  });

  return (
    <header className="border-b border-primary mx-2 md:mx-8 xl:mx-16 my-4 fixed top-0 inset-x-0 z-30">
      <div className="flex flex-row items-center justify-between">
        {/* Logo */}
        <Link href="/home">
          <span>
            <p className="sr-only">Conor Morrison Logo, back to homepage</p>
            <Logo className="w-64 cursor-pointer" />
          </span>
        </Link>
        
        {/* Main Navigation */}
        {navItems ? 
          <>
            <button className="flex lg:hidden w-14 h-14 ml-auto p-2.5 relative z-20"
              onClick={() => mobileMenuOpen ? setMobileMenuOpen(false) : setMobileMenuOpen(true)}
            >
              <MobileMenuIcon isClicked={mobileMenuOpen} />
            </button>
            <nav className={cx(
              `${mobileMenuOpen ? 'flex' : 'hidden'}`, 
              `${mobileClasses} z-10 items-center justify-center lg:flex lg:flex-row lg:relative lg:h-auto lg:w-auto lg:bg-transparent`
            )}>
              {mobileMenuOpen  ?
                <div className="bg-tertiary h-screen w-screen absolute left-0 top-0 opacity-95"></div>
              : null }
              <ul className="flex flex-col items-center lg:flex-row lg:justify-end">
                {navItems?.map(item => {
                  return (
                    <NavItem
                      key={item.item_link.id}
                      currentPage={currentPage}
                      pageName={item.item_name[0].text}
                      pageSlug={item.item_link?.uid || item.item_link?.slug}
                    />
                  );
                })}
              </ul>
            </nav>
          </>
          : null
        }

        {/* Social */}
        <a 
          href="https://github.com/Cveg2112" 
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-3 border-t border-l border-r border-primary inline-block"
        >
          <GithubLogo className="text-white w-7 h-7"/>
        </a>
      </div>
    </header>
  );
}

interface NavItemProps {
  currentPage?: string;
  pageName?: string;
  pageSlug?: string;
}

function NavItem({currentPage, pageName, pageSlug}: NavItemProps){
  const [menuActive, setMenuActive] = useState(false);
  const active = (currentPage == pageSlug ) ? '' : '';
  const hoverClasses = '';
  const activeClasses = 'py-3 px-20';
  const inactiveClasses = '';
  return (
    <li 
      className={cx("overflow-hidden",
        active,
      )}
      onMouseEnter={() => setMenuActive(true)}
      onMouseLeave={() => setMenuActive(false)}
      onFocus={() => setMenuActive(true)}
      onBlur={() => setMenuActive(false)}
    >
      <Link href={'/' + pageSlug}>
        <a className={cx(
          "border-b my-2 lg:my-0 w-56 text-center text-2xl lg:text-lg",
          "inline-block relative px-14 py-3 mx-2 lg:border-b-0 border-t border-l border-r border-primary font-body text-xl text-secondary uppercase transition-all duration-150 transform origin-bottom",
          menuActive ? hoverClasses : inactiveClasses,
          currentPage == pageSlug ? activeClasses : inactiveClasses, 
        )}
        >
          <div 
            style={{
              width: 'calc(100% - 6px)',
              height: 'calc(100% - 6px)'
            }}
            className={cx("w-full h-full absolute inset-0 mx-auto my-auto bg-primary transform z-10 transition-all duration-200 ease-in-out",
              (menuActive || currentPage == pageSlug) ? 'opacity-1 translate-y-0' : 'opacity-0 -translate-y-full',
            )}
          ></div>
          <span className={cx("relative z-10", menuActive ? styles.GlitchText : '')}>{pageName}</span>
        </a>
      </Link>
    </li>
  );
}