import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaGoogleDrive, FaPinterestP, FaVine, FaRegCopyright } from "react-icons/fa";
import LanguageSelectorModal from './LanguageSelectorModal';
import {useTranslation} from "react-i18next";
import { logout } from '../../actions/authActions';

const Head = props => {
  const handleLogOut = () => {
    logout();
    window.location.reload();
  }
  
  const { isLoggedIn } = useSelector(state => ({
    isLoggedIn: state.authReducer.isLoggedIn
  }));
  
  const {t, i18n} = useTranslation();
  return (
    <div className="min-vh-100 d-flex flex-column justify-content-between pl-2">
      <div className="mt-5">
        <div className="ml-2 mb-5">
          <h4 className="brand">
            <NavLink className="" to={`/`}>
              <u>{t('brand')}</u>
            </NavLink>
          </h4>
        </div>
        <div className="pt-5">
          <NavLink  to={`/courses`} className="dropdown-item font-weight-bold" activeClassName='text-white bg-success'>
            {t('footer.courses')}
          </NavLink >
            <NavLink  to={`/myCourses`} className="dropdown-item font-weight-bold" activeClassName='text-white bg-success'>
              {t('footer.library')}
            </NavLink >
            <a
              className="dropdown-item font-weight-bold"
              href="#"
              data-toggle="modal"
              data-target="#languageSelectorModal"
            >
              {t('language')}
            </a>
            {isLoggedIn&&<>
            <div className="dropdown-divider"></div>
            <a
              className="dropdown-item font-weight-bold"
              href="#"
              onClick={handleLogOut}
            >
                {t('auth.signout')}
            </a></>} 
        </div>
      </div>
      <div className="mb-2 ml-1 mr-2">
        <ul className="list-unstyled mb-2">
          <li className="list-inline-item">
               <FaFacebook />
          </li>
          <li className="list-inline-item">
               <FaTwitter />
          </li>
          <li className="list-inline-item">
               <FaGoogleDrive />
          </li>
          <li className="list-inline-item">
               <FaPinterestP />
          </li>
          <li className="list-inline-item">
               <FaVine />
          </li>
        </ul>
        <small>{t('reserved')} <FaRegCopyright /></small>
    </div>
    <LanguageSelectorModal />
  </div>
  );
};
export default Head;