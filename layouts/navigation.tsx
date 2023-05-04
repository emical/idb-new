/* eslint-disable react/react-in-jsx-scope */
import {Nav, Navbar, Container, Button, Image, Dropdown, NavDropdown, Col, Row} from 'react-bootstrap'
import Link from 'next/link'
import {menuJson} from 'data/menu'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'

export default function Navigation() {
  const router = useRouter()
  const [baseURL, setHost] = useState('')
  useEffect(() => {
    if (!router.isReady) return
    else {
      setHost(window.location.origin)
    }
  }, [router.isReady])

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <header>
      <Container>
        <Navbar variant="light" expand="md" className="flex items-center flex-wrap  ">
          <Navbar.Brand className="pt-3">
            <Link href="/">
              <a>
                EMI Calculator
                {/* <Image src="/logo-ipsum.png" alt="Grouparoo Logo" width={150} height={80} /> */}
              </a>
            </Link>
            <span className="d-none ">EMI Calculator</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mt-2">
              {menuJson.menu?.menuitems.map((menu: {menuId: any; menuName: any; url: any; submenuitems: any}) => (
                <>
                  <NavDropdown
                    className="pr-2 py-2 align-text-top text-xl text-white font-bold"
                    title={menu.menuName}
                    id="basic-nav-dropdown"
                  >
                    <Container className="eventsNav pt-0 mt-0">
                      <Row>
                        <Col xs="12" md="6" className="text-left">
                          {menu?.submenuitems?.map((submenuitem: {id: any; submenuName: any}) => (
                            <>
                              <Dropdown.Item>
                                <Link href={baseURL + menu.menuId + '/' + submenuitem?.id + menu?.url}>
                                  <a className="nav-link" role="button">
                                    {submenuitem.submenuName} {menu.menuName}
                                  </a>
                                </Link>
                              </Dropdown.Item>
                              <Dropdown.Divider />
                            </>
                          ))}
                        </Col>
                      </Row>
                    </Container>
                  </NavDropdown>
                </>
              ))}
              {/* <Nav.Link>
                  <Link href="/ menu">
                    <a className="nav-link" role="button">
                      Home Loan
                    </a>
                  </Link>
                </Nav.Link>

                <Nav.Link>
                  <Link href="/community">
                    <a className="nav-link d-md-none d-lg-block" role="button">
                      Student Loan
                    </a>
                  </Link>
                </Nav.Link> */}
            </Nav>
            {/* <a
                href="https://github.com/grouparoo/grouparoo"
                target="_blank"
                rel="noreferrer"
                className="col-sm-12 d-md-none d-lg-inline-block col-lg-1 p-0 mx-lg-1 mx-0 mt-2"
              >
                <Button variant="outline-dark" size="sm" className="w-100">
                  <FontAwesomeIcon icon={['fab', 'github']} size="xs" /> Star
                </Button>
              </a> */}
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  )
}
