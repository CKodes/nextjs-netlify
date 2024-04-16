'use client'
import Link from 'next/link'
import { useState } from 'react'
import '@govtechsg/sgds/css/sgds.css'
import '@govtechsg/sgds-masthead/dist/sgds-masthead/sgds-masthead.css'
import { SgdsMasthead } from '@govtechsg/sgds-masthead-react'
import { Navbar, Nav, NavDropdown } from '@govtechsg/sgds-react/Nav'
import { Footer } from '@govtechsg/sgds-react/Footer'
import Image from 'next/image'
import littleDino from '../../public/littleDino.svg'
import styles from './coreComponents.module.css'

export function MastheadSgds() {
  // TODO: Check on mobile font size.
  return <SgdsMasthead placeholder="SGDS Masthead" />
}

export function NavbarSgds() {
  const [active, setActive] = useState('home')

  const clickNavbarItem = (eventKey: any) => {
    setActive(eventKey)
  }

  const imageStyle = {
    height: '100%',
    width: 'auto',
    maxWidth: '100%',
  }

  return (
    <>
      <div className={styles.centerContainer}>
        <Navbar expand="sm">
          <Navbar.Brand href="/nextjs-netlify">
            <Image
              priority
              src={littleDino}
              alt="Little Dino Brand"
              style={imageStyle}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="landingNav" />
          <Navbar.Collapse id="landingNav">
            <Nav className="me-auto" navbarScroll activeKey={active}>
              <Nav.Item>
                <Link
                  className="nav-link"
                  href={`/a11yWeek`}
                  rel="noopener noreferrer"
                >
                  A11y Week
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href="https://www.google.com"
                  eventKey="Link Two"
                  onClick={() => clickNavbarItem('linkTwo')}
                >
                  Link Two
                </Nav.Link>
              </Nav.Item>
              <NavDropdown
                title="Dropdown"
                id="item-2"
                eventKey="item2"
                onClick={() => clickNavbarItem('dropdown')}
              >
                <NavDropdown.Item
                  href="https://www.google.com"
                  onClick={() => clickNavbarItem('dropdown')}
                >
                  Dropdown Item One
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://www.google.com"
                  onClick={() => clickNavbarItem('dropdown')}
                >
                  Dropdown Item Two
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://www.google.com"
                  onClick={() => clickNavbarItem('dropdown')}
                >
                  Dropdown Item Three
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://www.google.com"
                  onClick={() => clickNavbarItem('dropdown')}
                >
                  Dropdown Item Four
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  )
}

export function FooterSgds() {
  return (
    <Footer className={styles.black}>
      <div className={styles.centerContainer}>
        <Footer.Top>
          <Footer.Top.Header headerTitle="Imaginary Government Design System">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum illo
            delectus laborum libero id ratione quibusdam tempora assumenda quas,
            pariatur cum minus, aliquid molestiae et nisi dolorem vitae
            molestias! Voluptate commodi aliquid iusto sequi sit eligendi, quod
            numquam nihil consectetur eaque error earum laudantium! Temporibus
            accusamus pariatur quod totam quia.
          </Footer.Top.Header>
        </Footer.Top>
        <Footer.Bottom>
          <Footer.Bottom.Copyrights>
            © 2022 Government of My Imagination. Last Updated 08 Feb 2022
          </Footer.Bottom.Copyrights>
        </Footer.Bottom>
      </div>
    </Footer>
  )
}
