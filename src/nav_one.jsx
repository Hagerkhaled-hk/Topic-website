import  React,{Component} from "react"
import back from '/back.svg'
import pic2 from '/pic2.jpg'

class Nav_one extends Component 
{
render()
{
    return ( 
        <>
        <nav className="nav_one">
          <div>
            <img src={back} className="stand_img" alt="photo" />
            <h1>topic</h1>
          </div>

          <div>
            <ul>
              <li><a href="#">home</a></li>
              <li><a href="#">browse topics</a></li>
              <li><a href="#">how it works</a></li>
              <li><a href="#">faqs</a></li>
              <li><a href="#">contact</a></li>
              <li tabIndex="0">
                <a href="#">pages
                  <i className="bi bi-chevron-down"></i>
                </a>
                <section>
                  <ul>
                    <li>topics listing</li>
                    <li>contact form</li>
                  </ul>
                </section>
              </li>
            </ul>
          </div>

          <div>
            <i className="bi bi-person stand_img"></i>
            <img src={pic2} className="stand_img" alt="photo" />
            <i className="bi bi-list" tabIndex="0"></i>
            <section className="this_section"> 
              <ul>
                <li><a href="#">home</a></li>
                <li><a href="#">browse topics</a></li>
                <li><a href="#">how it works</a></li>
                <li><a href="#">faqs</a></li>
                <li><a href="#">contact</a></li>
                <li tabIndex="0">
                  <a href="#">pages
                    <i className="bi bi-chevron-down"></i>
                  </a>
                  <section>
                    <ul>
                      <li>topics listing</li>
                      <li>contact form</li>
                    </ul>
                  </section>
                </li>
              </ul>
            </section>
          </div>
        </nav>
      </>
)
}
}


export default Nav_one