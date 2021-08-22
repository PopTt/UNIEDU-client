import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import About from './pages/AboutUs.js'
import CoursePage from './pages/CoursePage'
import Registration from './pages/Registration';
import EnrolledCourse from './components/EnrolledCourse'
import Tutor from './pages/Tutor'
import contact from './pages/contact'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { StickyShareButtons } from 'sharethis-reactjs';
import './App.css';

function App() {
  const [name, setName] = useState('')
  const [loginStatus, setLoginStatus] = useState(false)

  useEffect(() => {
    (
        async () => {
          const response = await axios.get('/api/users/' + `${localStorage.getItem("id")}`, { headers: {"Authorization" : `Bearer ${localStorage.getItem("accessToken")}`}}).catch((err) => {
            if(err && err.response){
                setName('')
                setLoginStatus(false)
            }
          })

          if(response && response.data) {
            setName(response.data.data.username)
            setLoginStatus(true)
          }
        }
    )()
  })

  useEffect(() => {
    localStorage.setItem("cat_id", "")
  })

  return (
    <div className="App">
      <StickyShareButtons
          config={{
            alignment: 'left', // alignment of buttons (left, right)
            color: 'social', // set the color of buttons (social, white)
            enabled: true, // show/hide buttons (true, false)
            font_size: 16, // font size for the buttons
            hide_desktop: false, // hide buttons on desktop (true, false)
            labels: 'counts', // button labels (cta, counts, null)
            language: 'en', // which language to use (see LANGUAGES)
            min_count: 0, // hide react counts less than min_count (INTEGER)
            networks: [
              // which networks to include (see SHARING NETWORKS)
              'linkedin',
              'facebook',
              'twitter',
              'pinterest',
              'email',
            ],
            padding: 12, // padding within buttons (INTEGER)
            radius: 4, // the corner radius on each button (INTEGER)
            show_total: true, // show/hide the total share count (true, false)
            show_mobile: true, // show/hide the buttons on mobile (true, false)
            show_toggle: true, // show/hide the toggle buttons (true, false)
            size: 48, // the size of each button (INTEGER)
            top: 250, // offset in pixels from the top of the page

            url: 'https://www.sharethis.com', // (defaults to current url)
            image: 'https://bit.ly/2CMhCMC',  // (defaults to og:image or twitter:image)
            description: 'custom text',       // (defaults to og:description or twitter:description)
            title: 'custom title',            // (defaults to og:title or twitter:title)
            message: 'custom email text',     // (only for email sharing)
            subject: 'custom email subject',  // (only for email sharing)
            username: 'custom twitter handle' // (only for twitter sharing)
 
          }}
        />

      <Router>
        <Navbar name={name} login={loginStatus} />
        <Switch>
          <Route path = '/' exact component={Home}/>
          <Route path = '/login' component={Login}/>
          <Route path = '/register' component={Registration}/>
          <Route path = '/tutor' component={Tutor}/>
          <Route path = '/contact' component={contact}/>
          <Route path = '/about-us' component={About}/>
          <Route path = '/courses' component={CoursePage}/>     
          <Route path = '/my-course' component={EnrolledCourse}/>  
        </Switch>
      </Router>
    </div>
  );
}

export default App;
