/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import {isdrmenuJson} from 'data/menu'

const MobileMenu = (props: {setMenuOpen: any; menuOpen: boolean}): JSX.Element => {
  const {setMenuOpen, menuOpen} = props

  const router = useRouter()
  const [baseURL, setHost] = useState({})
  useEffect(() => {
    if (!router.isReady) return
    else {
      setHost(window.location.origin)
    }
  }, [router.isReady])

  const [home, setHome] = useState('')

  const openMobileMenu = (menuId: string) => {
    if (menuId == home) {
      setHome('')
    } else {
      setHome(menuId)
    }
  }

  return (
    <div className="fix">
      <div className={menuOpen ? 'side-info info-open' : 'side-info'}>
        <div className="side-info-content">
          <div className="offset-widget offset-logo">
            <div className="row align-items-center">
              <div className="col-9">
                <a href="/dream-interpretation-search/1/">
                  Islamic Dream Book
                  {/* <img src="/static/favicons/favicon.ico" alt="EMI Calculator Logo" /> */}
                </a>
              </div>
              <div className="col-3 text-end">
                <button className="side-info-close" onClick={() => setMenuOpen(false)}>
                  <i className="fal fa-times"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="mm-menu mb-30 d-block d-xl-none">
            <ul>
              {isdrmenuJson.menu?.menuitems.map((menu: {menuId: any; menuName: any; url: any; submenuitems: any}) => (
                <li key={menu.menuName} className={menu.menuId ? 'has-droupdown active' : 'has-droupdown'}>
                  <a
                    onKeyDown={() => {
                      openMobileMenu(menu.url)
                    }}
                    role="link"
                    onClick={() => {
                      openMobileMenu(menu.url)
                    }}
                  >
                    {
                      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                      <span
                        role="link"
                        onClick={(e: any) => {
                          e.stopPropagation()
                          e.preventDefault()
                          window.location.href = `/popular-dreams/${menu.url}/`
                          // router.push(`/popular-dreams/${menu.url}/`, undefined, {shallow: true})
                        }}
                      >
                        {menu.menuName}
                      </span>
                    }
                  </a>
                  <ul className={`sub-menu ${home == menu.url ? 'active' : ''}`}>
                    {menu?.submenuitems?.map((submenuitem: {id: any; submenuName: any}) => (
                      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                      <li
                        role="presentation"
                        key={submenuitem?.id}
                        onClick={(e: any) => {
                          e.stopPropagation()
                          e.preventDefault()
                          setMenuOpen(!menuOpen)
                        }}
                      >
                        <Link href={baseURL + menu.menuId + '/' + submenuitem?.id}>
                          <a>
                            {' '}
                            {submenuitem.submenuName} {menu.menuName}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
