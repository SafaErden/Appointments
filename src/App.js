import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Courses from './containers/course/Courses';
import CourseDetail from './containers/course/CourseDetail';
import UserCourses from './containers/course/UserCourses';
import SignIn from './containers/auth/SignIn';
import SignUp from './containers/auth/SignUp';
import Header from './containers/header';
import NoMatch from './components/noMatch';
import LanguageSelectorModal from './containers/header/LanguageSelectorModal';

const App = () => (
  <div className="container-fluid min-vh-100">
    <div className="row min-vh-100">
      <BrowserRouter>
        <nav className="navbar-fixed-left">
          <Header />
        </nav>
        <main className="col d-flex p-5 m-0 ml-200 align-items-center justify-content-center cover">
          <Switch>
            <Route path="/" exact component={Courses} />
            <Route path="/courses" exact component={Courses} />
            <Route path="/courses/:id" component={CourseDetail} />
            <Route path="/myCourses" component={UserCourses} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route component={NoMatch} />
          </Switch>
        </main>
      </BrowserRouter>
      <LanguageSelectorModal />
    </div>
  </div>
);
export default App;
