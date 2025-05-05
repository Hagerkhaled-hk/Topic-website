import React , {Component} from "react";

import webDesign from "/webDesign.png"


class Nav_two extends  Component
{
render()
{
    return(
    <>
         <nav className="nav_two">

<section>
    <div>
        <h2>discover. learn. enjoy</h2>
    </div>
    <div>
        <p>platform for creatives around the world</p>
    </div>
    <div>
        <i className="bi bi-search"></i>
        <div>
            <p>search</p>
        </div>

         <input type="search" placeholder="design, code, marketing, finance ..."/>
     </div>

</section>


<section>
    <div className="card_holder">
        <aside className="aside_one">
            <div>
                <h3>web design</h3>

                <p>When you search for free CSS templates, you will notice that TemplateMo is one of the best
                    websites.</p>



            </div>
            <div>
                 <img src={webDesign} className="nav_two_photo" alt="photo"/>
             </div>
        </aside>

        <aside className="aside_two">
            <div>
                <h3>finance</h3>
                <p>Topic Listing Template includes homepage, listing page, detail page, and contact page. You
                    can feel free to edit and adapt for your CMS requirements.</p>

                <div className="learn_more">
                    <p>learn more</p>
                </div>

            </div>

            <div>
                <p>share:
                </p>

                <ul>
                    <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                    <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                    <li><a href="#"><i className="social-icon-link bi-pinterest"></i></a></li>
                </ul>


                <section>
                    <i className="bi bi-bookmark"></i>
                </section>



            </div>


        </aside>

    </div>

</section>
</nav>
        
        
        </>
    )
}
}

export default  Nav_two