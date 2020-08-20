import React from 'react';

function Projects() {
    return (
<div className="container">
        <h1 className="center white">Projects</h1>
        <div className="row">
            <div className="col-sm-4">
                <img className="imgOne"
                rel="noopener noreferrer"
                    src="https://www.poolparty.biz/wp-content/uploads/2018/06/SEMANTiCS-who-should-attend.png"
                    alt="semantics" />
            </div>
            <div className="col-sm-4">
                <p>In this project I took pre-developed website which had many bugs and was not accessible. Each element
                    in the HTML was set to div, so it wasn't very sematic. I refactored the code using semantics to make
                    the website more accessible. This was a challenging yet rewarding activity as I searched through the
                    code looking for ways to fix the bugs, and how to change the elements so that they were semantically
                    correct.
                </p>
            </div>
            <div className="col-sm-4">
               <a rel="noopener noreferrer" href="https://robbie2497.github.io/Week-1-Homework/" target="_blank">Click here to see the  application live!</a>
            </div>
        </div>

        <div className="row">
            <div className="col-sm-4">
                <img className="imgOne"
                    src="data:image/jpeg;base64,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"
                    rel="noopener noreferrer"
                    alt="Password generator" />
            </div>
            <div className="col-sm-4">
                <p>In this project I created a password generator. When the page loads, you will be presented with a
                    page that shows a password
                    generator. When the red "Generate Password" button is clicked, you will be prompted to choose how
                    many characters
                    you would like in your random password. After you enter a number, you will confirm if you would like
                    uppercase letters
                    in your password. Next you will confirm whether or not you would like numbers in your password. The
                    last prompt will ask
                    you to confirm if you would like symbols as well. Once you have answered all the questions, your
                    random password will be
                    shown in the box above the red "Generate Password" button.
                </p>
            </div>
            <div className="col-sm-4">
                <a rel="noopener noreferrer" href="https://robbie2497.github.io/week-3-homework/" target="_blank">Click here to see the  application live!</a>
            </div>
        </div>

        <div className="row">
            <div className="col-sm-4">
                <img className="imgOne"
                    src="https://blog.rescuetime.com/wp-content/uploads/2018/01/photo-1506485338023-6ce5f36692df-1000x486.jpeg"
                    rel="noopener noreferrer"
                    alt="Daily Schedule" />
            </div>
            <div className="col-sm-4">
                <p>In this project I created a daily schedule application. You can enter text into the desired time
                    frame and
                    press the save button to save text to the local storage to prevent it from deleting when the page is
                    refreshed. I also added a clear button to remove the text in one single click. As the day moves on,
                    the
                    text box will change colors. Green for future time, Red for current time, and gray for past time.
                </p>
            </div>
            <div className="col-sm-4">
                <a rel="noopener noreferrer" href="https://robbie2497.github.io/week-5-homework/" target="_blank">Click here to see the  application live!</a>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-4">
                <img className="imgOne"
                    src="https://cdn2.scratch.mit.edu/get_image/project/368827932_144x108.png"
                    rel="noopener noreferrer"
                    alt="Scratch Game" />
            </div>
        <div className="col-sm-4">
            <p>In this project I created game using Scratch. This was the very first thing I created when I first started getting into coding. I leared how "if then" statements work, and also learned a little about how to create a simple game using
            code. This project was a lot of fun and I hope to apply the new skills I learn to create an application that is more 
            elaborate in the future!
            </p>
        </div>
        <div className="col-sm-4">
            <a rel="noopener noreferrer" href="https://scratch.mit.edu/projects/368827932/" target="_blank">Click here to see the  application live!</a>
        </div>
    </div>

    <div className="row">
        <div className="col-sm-4">
            <img className="imgOne"
                src="foodtruck.png"
                rel="noopener noreferrer"
                alt="Project 1" />
        </div>
        <div className="col-sm-4">
            <p>In this project I worked with a team to create an application that would allow a user to find a foodtruck and place 
                an order ahead of time. We implemented a Google Maps API to display the food truck's location and we used a weather API to display the weather conditions for the location where the food truck is. I learned a lot about working with a team and merging code together to create an application together.
            </p>
        </div>
        <div className="col-sm-4">
            <a rel="noopener noreferrer" href="https://robbie2497.github.io/Project-1/" target="_blank">Click here to see the  application live!</a>
        </div>
    </div>

    <div className="row">
        <div className="col-sm-4">
            <img className="imgOne"
            rel="noopener noreferrer"
                src="Project-2.png"
                alt="Project 2" />
        </div>
        <div className="col-sm-4">
            <p>In this project I worked with a team to create an application that would allow a user to create an account and search for movies. The user also has the option to save any searched movies to their "favorites" list. The account the user creates is then saved to a database, so the user can log in at anytime to view saved movies, or add more!
            </p>
        </div>
        <div className="col-sm-4">
            <a rel="noopener noreferrer" href="https://robbie2497.github.io/Project-1/" target="_blank">Click here to see the  application live!</a>
        </div>
    </div>

        

    </div>
    );
}
export default Projects;