import React from 'react';

function Homepage() {
    return(
        <div className="container">
        <div>
            <h1 className="center white">Robert McGrew Portfolio</h1>
        </div>
        <img className="my-img"
            src="me.png"
            alt="Robert McGrew" />
        <section className="me">Who am I?
            <p>My name is Robert McGrew, I am 23 years old. I am from Wrightwood, California. I am a student studing
                Computer Science, but I am currently enrolled in the University of Utah's coding bootcamp learning new
                skills to apply towards my future career.
                I have been going to school for the past 3 years studing Criminal Justice minoring in Computer Science,
                but as I learned more about coding and developing, I fell in love with this field. I have since changed
                my
                major and have been studing Computer Science. I enrolled in this bootcamp to get a jumpstart on coding
                and
                learning
                this new field.
                Since enrolling in this bootcamp, I have learned a lot about front-end development and I enjoy creating
                webpages and
                applications. There are many challenges and sometimes things don't work out the way you expected them
                to,
                but I love
                problem solving and finding the solution to fix the issue. I find it very rewarding to create an
                application
                out of nothing
                and watching it come to life on the screen. </p>
        </section>
        <section className="me">Why me?
            <p>I have a strong passsion for learning and I have a lot to learn, so I am looking for an internship that
                will
                provide me with the opportunity to learn more by
                working with senior developers and other begginers like myself to expand my skill set as well as give my
                best
                effort and bring what I have to offer to the company.
                I work great with others in a team setting, putting our ideas together to accomplish a task.
            </p>
        </section>
        <section className="me">What qualifications do I have?
            <p>I am currently enrolled in the University of Utah getting a jumpstart on learning how to code.
                Afterwards, I will
                be attending Utah Valley University to finish up school and get my Bachelors Degree in Computer Science
                to further
                my education. I worked in customer service for the last 4 years 2 of which I have experience as a
                supervisor as
                well as a manager, developing life skills. Although customer service is different from coding, I have
                developed
                many useful
                skills in working with team members to accomplish goals and tasks at hand including great problem
                solving skills which have been very useful in coding. I hope to find an intership so I can
                spend my time working with code first hand everyday.
                I have experience in CSS, JavaScript, JQuery, and of course HTML. I will be studing more languages
                including C++, C#,
                Python, REACT, and much more in the coming weeks.
                I have created many front-end projects for both homework and in my free time that you can view
                <a href="projects.html">here</a>
                , but as the course progresses, I will be learning more on the back-end as well eventually sharpening my
                skills to
                learn the whole full-stack.
            </p>

        </section>
        </div>
    );
}
export default Homepage;