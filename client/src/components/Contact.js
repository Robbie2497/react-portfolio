import React from 'react';

function Contact () {
    return (
        <div className="container containerbackground">
    <div className="row">
      <div className="col-sm-12">
        <h2 className="center contact-text">Contact Me!</h2>
      </div>
      <div className="row">
        <div className="col-sm-12 card gray">
          <h3>Email: <a href="mailto:robbie2497@gmail.com"><u className="black"> robbie2497@gmail.com</u></a></h3>
          <h3>Phone: <u>(760) 553-0573</u></h3>
          <h3>Facebook:<a rel="noopener noreferrer" href="https://www.facebook.com/robert.mcgrew24" target="_blank"><u className="black"> Robert McGrew</u></a></h3>
        <h3>LinkedIn:<a rel="noopener noreferrer" href="https://www.linkedin.com/in/robbie-mcgrew-b487b2181/" target="_blank"><u className="black"> Robbie2497</u></a></h3>
        <h3>Github:<a rel="noopener noreferrer" href="https://github.com/Robbie2497" target="_blank"><u className="black"> Robbie2497</u></a></h3>
        </div>
      </div>
    </div>

  </div>
    );
}

export default Contact;