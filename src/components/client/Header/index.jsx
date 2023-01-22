import Logo from "../../../assets/client/hos.jpg";
import { Wrapper, Infors, Nav, ModalMenu } from "./styled-index";
import percentage from "../../../assets/client/percentage.json";
import address from "../../../assets/client/address.json";
import writing from "../../../assets/client/writing.json";
import call from "../../../assets/client/call.json";
import Lottie from "lottie-react";
import Buttons from "./buttons";
import { useTranslation } from "react-i18next";
import MenuModal from "./menu";
import { useState } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import * as React from 'react';
import Box from '@mui/material/Box';
import { NavLink } from "react-router-dom";
import Modal from '@mui/material/Modal';
import "./index.css"
const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  bradius: '20px',
};


function Header() {
  const [openm, setOpenM] = React.useState(false);
  const handleOpen = () => setOpenM(true);
  const handleClose = () => setOpenM(false);

  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [opens, setOpens] = useState(false);
  const HendelChange = (e) => {
    let LangVal = e.target.value;
    window.location.reload();
    window.localStorage.setItem("i18nextLng", LangVal);
  };
  const HendelChange2 = (e) => {
    window.location.reload();
    let LangVal = e.target.value;
    window.localStorage.setItem("i18nextLng", LangVal);
  };
  const ValLang = () => {
    return window.localStorage.getItem("i18nextLng");
  };
  return (
    <Wrapper>
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <Infors>
        <Nav>
          <ul>
            <li>
              <NavLink to={"/aksiya"}>
                <p>
                  <Lottie animationData={percentage} />
                </p>
                {t("Header.0")}
              </NavLink>
            </li>
            <li>
              <NavLink to={"/manzil"}>
                <p>
                  <Lottie animationData={address} />
                </p>
                {t("Header.1")}
              </NavLink>
            </li>
            <li>
              
              <div>
                <Button onClick={handleOpen}><a href="#">
                <p>
                  <Lottie animationData={writing} />
                </p>
                {t("Header.2")}
              </a></Button>
                    <Modal
                      open={openm}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                      <div className="divc">
                      <h2>Qabulga yozilish</h2>
                      <input required placeholder="F.I.SH" type="text" />
                      <input required type="number" placeholder="Telefon raqam" />
                      <button>Submit</button>
                      
                      </div>

                      </Box>
                    </Modal>
                </div>
            </li>
            <li>
              <a href="tel:+998972770303 ">
                <p>
                  <Lottie animationData={call} />
                </p>
                +998 (97) 277 0303
              </a>
            </li>
            <li className="buttons">
              {ValLang() === "uz" ? (
                <>
                  <button
                    className="buttonRu"
                    value="ru"
                    onClick={HendelChange}
                    data-aos="zoom-out"
                  >
                    RU
                  </button>
                </>
              ) : (
                <button
                  data-aos="zoom-out"
                  className="buttonUz"
                  value="uz"
                  onClick={HendelChange2}
                >
                  UZ
                </button>
              )}
              <button>togle</button>
            </li>
          </ul>
        </Nav>
        <Buttons />
      </Infors>
      <ModalMenu>
        <Button onClick={() => setOpen(true)}>
          <i class="bx bx-menu"></i>
        </Button>
        <Nav>
          <ul>
            <li>
              {ValLang() === "uz" ? (
                <>
                  <button
                    className="buttonRu"
                    value="ru"
                    onClick={HendelChange}
                  >
                    RU
                  </button>
                </>
              ) : (
                <button className="buttonUz" value="uz" onClick={HendelChange2}>
                  UZ
                </button>
              )}
            </li>
          </ul>
        </Nav>
        <MenuModal open={open} setOpen={setOpen} />
      </ModalMenu>
    </Wrapper>
  );
}

export default Header;
