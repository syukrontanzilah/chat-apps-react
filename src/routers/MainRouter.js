import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {LoginPage, RegisterPage, HomePage, GetStartedPage} from '../pages'
import {routes,routesAuth} from './routes'
import {useSelector, useDispatch} from 'react-redux'
import { getData } from '../utils/localStorage';
import { WhyUsPage, LearnMorePage, FeaturesPage } from '../pages/Info';
// import { GetStartedPage } from '../pages/GetStarted';


const MainRouter = () => {
  const [activeRoute, setActiveRoute] = useState(routesAuth)
  const {isLoggedIn} = useSelector(state => state.authState)
  const token = getData("token")
  const dispatch = useDispatch()


  useEffect(()=>{
    if(token){
      setActiveRoute(routes)
      dispatch({
        type:"LOGIN"
      })
    }else {
      setActiveRoute(routesAuth)
    }
  },[token])
  
  useEffect(()=>{
    if(isLoggedIn){
      setActiveRoute(routes)
    }else{
      setActiveRoute(routesAuth)
    }
  },[isLoggedIn])


  return (
    <div className="mainApp__wrapper">

    <Router>
      <Switch>
        {
          activeRoute.map((route, i)=>{
            return (
              <Route path={route.path} exact={route.exact}>
                {<route.component />}
              </Route>
            )
          })
        }
        
        <Route path="/register">
          <RegisterPage/>
        </Route>

        <Route path="/why-us">
          <WhyUsPage/>
        </Route>

        <Route path="/learn-more">
        <LearnMorePage/>
        </Route>

        <Route path="/features">
        <FeaturesPage/>
        </Route>

        <Route path="/get-started">
          <GetStartedPage/>
        </Route>

      </Switch>
      
    </Router>
    </div>

  )
}

export default MainRouter

