import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Courses from './containers/course/Courses';
import CourseDetail from './containers/course/CourseDetail';
import UserCourses from './containers/course/UserCourses';
import SignIn from './containers/auth/SignIn';
import SignUp from './containers/auth/SignUp';
import Header from './containers/header';
import Footer from './containers/footer';
import NoMatch from './components/noMatch';

const App = () => {
    return (
        <BrowserRouter>
        <div className="container-fluid bg-dark p-0 m-0  border-bottom shadow-sm">
          <Header />
        </div>
        <div className="container p-0">
          <Switch>
              <Route path="/" exact component={Courses} />
              <Route path="/courses/:id"  component={CourseDetail} />
              <Route path="/myCourses"  component={UserCourses} />
              <Route path="/signin"  component={SignIn} />
              <Route path="/signup"  component={SignUp} />
              <Route component={NoMatch}/>
          </Switch>
        </div>
        
        <div className="container-fluid bg-dark fixed-bottom border-top p-0 shadow-lg"> 
          <Footer />
        </div>
        </BrowserRouter>
    );
}
export default App;