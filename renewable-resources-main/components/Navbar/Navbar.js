import Link from 'next/link';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './Navbar.module.css';
import useGlobalContext from '@/hooks/useGlobalContext';

function NavScrollExample() {
  const [mounted, setMounted] = useState(false);
  const [activeLink, setActiveLink] = useState(0);
  useEffect(() => {
    setMounted(true);
  }, []);

  // const { activeLink } = useGlobalContext();

  const links = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'About Us',
      path: '/about',
    },
    {
      name: 'Contact',
      path: '/contact',
    },
  ];
  return (
    <>
      {mounted && (
        <Navbar expand="lg" fixed="top" className={styles.navbar}>
          <Container>
            <Navbar.Brand className={styles.logo}>
              Renewable Resources
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              ></Nav>
              <Form className="d-flex">
                <Nav>
                  {links.map((link, index) => {
                    return (
                      <Nav.Link key={index}>
                        <Link
                          className={`${styles.link} ${
                            activeLink === index ? styles.active : null
                          }`}
                          href={link.path}
                          onClick={() => setActiveLink(index)}
                        >
                          {link.name}
                        </Link>
                      </Nav.Link>
                    );
                  })}
                </Nav>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </>
  );
}

export default NavScrollExample;
