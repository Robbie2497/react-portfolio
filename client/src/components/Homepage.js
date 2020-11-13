import React from 'react';

function Homepage() {
    return (
        <div className="container homePageFooter">
            <div>
                <h1 className="center white">Robert McGrew</h1>
            </div>
            <img className="my-img"
                src="Profile_Picture.jpg"
                alt="Robert McGrew" />

            <section className="me">
            <p> Full stack Web Developer passionate about approaching challenges from different angles and collaborating with
                others to create meaningful web applications. Recently earned a certificate in Full Stack Development from the
                University of Utah and developed skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Node Js, MySQL, MongoDB, Express, and Handlebars JS. Known as an
                innovative problem-solver passionate about developing apps. Aim for each project is to best engage the audience for an impactful user-experience. Excited to leverage my
                 skills in the future as part of a fast-paced, quality-driven team in order to build better experiences on the web.</p>
            </section>
            <section className="me">
            <p>I have a strong passsion for learning and I have a lot to learn. I am looking for an opportunity to expand my skill set by
                working with senior developers and other begginers like myself to expand my skill set as well as give my
                best effort and bring what I have to offer to the company. I work great with others in a team setting, putting our ideas together to accomplish a task.
            </p>
            </section>
        </div>
    );
}
export default Homepage;