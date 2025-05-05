import React from 'react'
import root from 'react-dom/client'
import Nav_one from './nav_one.jsx'
import Nav_two from './nav_two.jsx'
import Fst_sec from './first_sec.jsx'
import Second_sec from './second_sec.jsx'
import Third_sec from './third_sec.jsx'
import Footer from './footer.jsx'
import './nav.css'
import './main_cards.css'
import './main_search.css'
import './main_topic.css'
import './footer.css'



root.createRoot(document.getElementById("root")).render(
  <>
  <Nav_one/>
  <Nav_two/>
  <main>
  <Fst_sec/>
  <Second_sec/>
  <Third_sec/>
  </main>
  <Footer/>
  </>

)





