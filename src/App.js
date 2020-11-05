import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Courses from './containers/course/Courses';
import CourseDetail from './containers/course/CourseDetail';
import UserCourses from './containers/course/UserCourses';
import SignIn from './containers/auth/SignIn';
import SignUp from './containers/auth/SignUp';
import Header from './containers/header';
import NoMatch from './components/noMatch';

const App = () => {
    return (
      <div className="container-fluid min-vh-100">
        <div className="row min-vh-100">
          <BrowserRouter>
          <div className="col-auto p-0 m-0  border-right shadow-lg">
            <Header />
          </div>
          <div className="col d-flex p-0 m-0 align-items-center justify-content-center">
            <Switch>
                <Route path="/" exact component={Courses} />
                <Route path="/courses" exact component={Courses} />
                <Route path="/courses/:id"  component={CourseDetail} />
                <Route path="/myCourses"  component={UserCourses} />
                <Route path="/signin"  component={SignIn} />
                <Route path="/signup"  component={SignUp} />
                <Route component={NoMatch}/>
            </Switch>
          </div>
          </BrowserRouter>
        </div>
      </div>
    );
}
export default App;