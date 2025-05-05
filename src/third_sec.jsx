import React from "react";
import question from "/question.jpg"


function Third_sec() {
    return (
        <>



            <section>

                <h2>frequently asked questions</h2>


                <div>


                    <section className="image"><img src={question} alt="" /></section>


                    <section className="topic_section">


                        <div className="topic">
                            <section className="question q_1" tabIndex="0">what is topic listing ?     <i className="bi bi-chevron-down"></i>
                            </section>
                            <section className="answer ans_1"> Topic Listing is free Bootstrap 5 CSS template. You are not allowed to redistribute this template on any other template collection website without our permission. Please contact TemplateMo for more detail. Thank you.</section>
                        </div>

                        <div className="topic">
                            <section className="question q_2" tabIndex="0">what is topic listing ?     <i className="bi bi-chevron-down"></i>
                            </section>
                            <section className="answer ans_2">Topic Listing is free Bootstrap 5 CSS template. You are not allowed to redistribute this template on any other template collection website without our permission. Please contact TemplateMo for more detail. Thank you.</section>
                        </div>

                        <div className="topic">
                            <section className="question q_3" tabIndex="0">what is topic listing ?     <i className="bi bi-chevron-down"></i>
                            </section>
                            <section className="answer ans_3">Topic Listing is free Bootstrap 5 CSS template. You are not allowed to redistribute this template on any other template collection website without our permission. Please contact TemplateMo for more detail. Thank you.</section>
                        </div>

                    </section>
                </div>


            </section>
        </>
    )
}
export default Third_sec