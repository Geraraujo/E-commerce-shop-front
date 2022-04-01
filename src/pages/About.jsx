import React from "react";
import "./About.css";

function About() {
  return (
    <div>
      <h1>About this project</h1>
      <p className="about-text">
        This project was performed with the target of fulfilling all the requirements of the final
        project of the Hack Academy 2022 Coding Bootcamp, which consisted of the creation of an
        E-commerce, in a period of time of three weeks.
      </p>

      <p>
        We used Bootstrap templates as the basis of the project, and the technologies applied were:
      </p>
      <ul className="ul-list">
        <li>Node Js</li>
        <li>MySQL</li>
        <li>Sequelize</li>
        <li>React Js</li>
        <li>Vercel</li>
        <li>Supabase</li>
      </ul>

      <p>The development methodology that we used was Scrum, using Trello to divide the tasks.</p>

      <p className="about-text">
        In addition to having created the sections within the site, we implemented a section (acá
        iría el link a la page de admin) where it is possible to perform administrator actions.
      </p>

      <p>Use these credentials to login:</p>

      <h4>Login:</h4>

      <ul className="ul-list">
        <li>E-mail: user@gmail.com</li>
        <li>Password: user</li>
      </ul>

      <h4>Admin page:</h4>

      <ul className="ul-list">
        <li>E-mail: Admin@gmail.com</li>
        <li>Password: admin</li>
      </ul>
    </div>
  );
}

export default About;
