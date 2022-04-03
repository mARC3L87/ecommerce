import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './HamburgerMenu.scss';

const HamburgerMenu = ({ menu, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <FontAwesomeIcon icon={faBars} onClick={handleShow}></FontAwesomeIcon>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header bsPrefix='header' closeButton></Offcanvas.Header>
        <Offcanvas.Body onClick={handleClose}>{menu}</Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default HamburgerMenu;
