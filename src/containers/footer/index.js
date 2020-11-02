import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBook } from "react-icons/fa";
import { VscLibrary } from "react-icons/vsc";
import {useTranslation} from "react-i18next";

const Footer = () => {
  const {t, i18n} = useTranslation();
  
    return (
      <div className="container p-0">
        <div className="row justify-content-around m-0 p-0 py-1">
          <div className="col py-2 text-center">
          <NavLink  to={`/`} className="text-white" activeClassName='font-weight-bold'>
              <h3 className="d-md-none m-0 p-0">
                <FaBook/>
              </h3>
              <h5 className="d-none d-md-block  m-0 p-0">
                <FaBook/>
              </h5>
              <div className="d-none d-md-block ">{t('footer.courses')}</div>
          </NavLink >
          </div>
          <div className="col py-2 text-center">
            <NavLink  to={`/myCourses`} className="text-white" activeClassName='font-weight-bold'>
              <h3 className="d-md-none m-0 p-0">
                <VscLibrary/>
              </h3>
              <h5 className="d-none d-md-block  m-0 p-0">
                <VscLibrary/>
              </h5>
              <div className="d-none d-md-block">{t('footer.library')}</div>
            </NavLink >
          </div>
        </div>
      </div>
    );
}
export default Footer;