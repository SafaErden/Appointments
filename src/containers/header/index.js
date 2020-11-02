import { NavLink, useHistory } from 'react-router-dom';
import { FaAlignLeft, FaEllipsisV } from "react-icons/fa";
import languageSelectorModal from './LanguageSelectorModal';
import LanguageSelectorModal from './LanguageSelectorModal';

const Head = props => {
  
  const history = useHistory();
  (function () {
   if (history.location.pathname == "/" ){
    history.push("/home/wall");
   } 
  })();
  const routeChange = (path) =>{ 
    history.push(path);
  }

  return (
    <div className="container p-0">
      <div
      className="row m-0 p-0 "
      style={{ height: "4rem" }}
    >
      <div className="col-auto p-0 text-left d-flex align-items-center">
        <h3>
          <NavLink  to={`/category/article`}>
            <FaAlignLeft className="mr-2 text-first"/> {"Project-X"}
            {props.brand}
          </NavLink>
        </h3>
      </div>
      <div className="col mr-auto d-flex align-items-center">
        <form className="md-form w-100 d-none d-md-flex">
          <input
            className="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
            className="searchBar bg-light mr-auto ml-auto theBorder rounded p-2"
            onClick={() => routeChange('/search/writing')}
          />
        </form>
      </div>
      <div className="col-auto d-flex align-items-center">
        <ul className="list-inline list-unstyled m-0">
          <li className="list-inline-item pl-5">
              <div className="btn-group dropleft">
                  <a  className="border-0 bg-white" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                      Language
                    </a>
                    <div className="dropdown-divider"></div>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#signOut"
                    >
                      SignOut
                    </a>
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