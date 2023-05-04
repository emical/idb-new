/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import MobileMenu from '../HeaderOne/MobileMenu'
import {useRouter} from 'next/router'
import useSticky from '../../../../hooks/useSticky'
import {isdrmenuJson} from 'data/menu'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

const HeaderTwo = () => {
  const router = useRouter()
  const [baseURL, setHost] = useState('')
  useEffect(() => {
    if (!router.isReady) return
    else {
      setHost(window.location.origin)
    }
  }, [router.isReady])

  // sticky nav
  // const {sticky} = useSticky()
  const sticky = true

  const [menuOpen, setMenuOpen] = useState(false)

  const [path, setPath] = useState('')
  useEffect(() => {
    setPath(router.pathname)
  }, [router])

  return (
    <header>
      <div className="header-top-area d-none d-lg-block">
        <div className="container-fluid">
          <div className="header-top-inner">
            <div className="row align-items-center">
              <div className="col-xl-8 col-lg-8">
                {/* <div className="header-top-icon">
                  <a href="tel:(555)674890556">
                    <i className="fas fa-phone"></i>(555) 674 890 556
                  </a>
                  <a href="mailto:info@example.com">
                    <i className="fal fa-envelope"></i>info@example.com
                  </a>
                  <i className="fal fa-map-marker-alt"></i>
                  <span>3rd Avenue, San Francisco</span>
                </div> */}
              </div>
              <div className="col-xl-4 col-lg-4">
                <div className="header-top-login d-flex f-right">
                  {/* <div className="header-user-login p-relative">
                    <span>
                      <a className="user-btn-sign-up" href="#">
                        IFSC Codes
                      </a>
                    </span>
                  </div>
                  <div className="header-user-login p-relative">
                    <span>
                      <a className="user-btn-sign-up" href="#">
                        BIN Codes
                      </a>
                    </span>
                  </div> */}

                  {/* <div className="header-social">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-vimeo-v"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={sticky ? 'sticky header-area-2 sticky-header' : 'header-area-2 sticky-header'}>
        <div className="container-fluid">
          <div className="header-main-wrapper">
            <div className="row align-items-center">
              <div className="col-3 col-lg-3 col-md-3 col-sm-9 col-9">
                <div className="header-logo">
                  <Link href="/dream-interpretation-search/1/">
                    <a className="header-logo" href="/dream-interpretation-search/1/">
                      Islamic Dream Book{/* <img src="/static/favicons/favicon.ico" alt="EMI Calculator Logo" /> */}
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-9 col-sm-3 col-3">
                <div className="header-main-right  d-flex justify-content-end">
                  <div className="main-menu mr-30 d-none d-xl-block">
                    <nav id="mobile-menu">
                      <ul>
                        {isdrmenuJson.menu?.menuitems.map(
                          (menu: {menuId: any; menuName: any; url: any; submenuitems: any}) => (
                            <li key={menu?.menuName} className="menu-item-has-children">
                              <Link href={baseURL + '/popular-dreams/' + menu.url + '?pnum=1'}>
                                <a>{menu.menuName}</a>
                              </Link>
                              <ul className="sub-menu">
                                {menu?.submenuitems?.map((submenuitem: {id: any; submenuName: any}) => (
                                  <li key={submenuitem?.id}>
                                    <Link href={baseURL + menu.menuId + '/' + submenuitem?.id}>
                                      <a> {submenuitem.submenuName} Dream Meaning</a>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          )
                        )}
                      </ul>
                    </nav>
                  </div>
                  <div className="header-btn">
                    <div className="menu-bar ml-20 xl:hidden">
                      <a
                        href="https://api.whatsapp.com/send?phone=919063900300&text=Assalamu%20Alaikum,%20I%20would%20like%20to%20interpret%20my%20dream.%20Here%20are%20details"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <WhatsAppIcon sx={{color: 'white', backgroundColor: '#25D366', borderRadius: '50%'}} />
                      </a>
                    </div>
                    <div className="menu-bar xl:hidden">
                      <a
                        className="side-toggle header-2"
                        onClick={() => {
                          setMenuOpen(!menuOpen)
                        }}
                      >
                        <div className="bar-icon">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div
        onClick={() => setMenuOpen(false)}
        onKeyDown={() => setMenuOpen(false)}
        role="button"
        className={menuOpen ? 'offcanvas-overlay overlay-signin' : 'offcanvas-overlay'}
      ></div>

      {/* <HeaderCart cartOpen={cartOpen} setCartOpen={setCartOpen} /> */}
      {/* <div onClick={() => setCartOpen(false)} className={cartOpen ? 'body-overlay opened' : 'body-overlay'}></div> */}

      {/* <SignIn signinOpen={signinOpen} setSingInOpen={setSingInOpen} /> */}
      {/* <div
        onClick={() => setSingInOpen(false)}
        className={signinOpen ? 'offcanvas-overlay overlay-open' : 'offcanvas-overlay'}
      ></div> */}

      {/* <SignUp signupOpen={signupOpen} setSingUpOpen={setSingUpOpen} /> */}
      {/* <div
        onClick={() => setSingUpOpen(false)}
        className={signupOpen ? 'offcanvas-overlay overlay-open' : 'offcanvas-overlay'}
      ></div> */}
    </header>
  )
}

export default HeaderTwo
