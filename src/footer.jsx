import React from "react";
import back from '/back.svg'

function Footer()
{
    return(
        <>
        <footer>
    <div>
    <img src={back} className="stand_img" alt="photo"/>

<h3>Topic</h3>
</div>

<div>
    <h3>resources</h3>
    <ul>
        <li>home</li>
        <li>how it works</li>
        <li>FAQs</li>
        <li>contact</li>
    </ul>
</div>


<div>
<h3>information</h3>
<ul>
    <li>305-240-9671</li>
    <li>info@company.com</li>
</ul>

</div>

<div>
    <section> english</section>
    
        <ul> 
            <li> Copyright © 2048 Topic Listing Center. All rights reserved.</li>
    
    
    
        <li> Design: TemplateMo</li> 
        </ul>
</div>




 </footer>
        
        </>
    )
}

export default Footer