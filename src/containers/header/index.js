import { NavLink } from 'react-router-dom';
import { FaEllipsisV } from "react-icons/fa";
import LanguageSelectorModal from './LanguageSelectorModal';
import {useTranslation} from "react-i18next";
import {  getCurrentUser } from '../../actions/authActions';

const Head = props => {
  const user = getCurrentUser();
  const {t, i18n} = useTranslation();
  return (
    <div className="container p-0">
      <div
      className="row m-0 p-0 "
      style={{ height: "4rem" }}
    >
      <div className="col p-0 text-left d-flex align-items-center">
        <h3>
          <NavLink className="text-white" to={`/`}>
             {t('brand')}
          </NavLink>
        </h3>
      </div>
      <div className="col-auto d-flex align-items-center">
        <ul className="list-inline list-unstyled m-0">
          <li className="list-inline-item pl-5">
              <div className="btn-group dropleft">
                  <a  className="border-0 text-white" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <h4 className="d-md-none m-0 p-0">
                      <FaEllipsisV />
                    </h4>
                    <h5 className="d-none d-md-block">
                      <FaEllipsisV />
                    </h5>
                  </a>
                  <div className="dropdown-menu">
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#languageSelectorModal"
                    >
                      {t('language')}
                    </a>
                    
                    {user&&<><div className="dropdown-divider"></div><a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#signOut"
                    >
                       {t('auth.signout')}
                    </a></>} 
                </div>
              </div>
          </li>
        </ul>
      </div>
    </div>
    <LanguageSelectorModal />
  </div>
  );
};
export default Head;