<div id="top"></div>

<!-- [![MIT License][license-shield]][license-url] -->

[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/lukaszkus/todo-app">
    <img src="logo.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">TODO App</h3>

  <p align="center">
    Todo App is a simple tool to help you organise everything.
    It’s a list of tasks you need to complete or things that you want to do.
    <br />
    <br />
    <a href="https://todo-fm.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/lukaszkus/todo-app">Report Bug</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#installation">Installation</a>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#links">Links</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://todo-fm.netlify.app/)

This projects is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). The app is connected with Firebase and perform CRUD operations in the database.

Users are able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle light and dark mode
- Add new todos to the list
- Mark todos as complete
- Update todos
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos (in progress...)

### Built With

- [React.js](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [Firebase](https://firebase.google.com/)
- Responsive Web Design - [w3schools](https://www.w3schools.com/html/html_responsive.asp), [MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

<!-- GETTING STARTED -->

## Installation

1. Create a project and a database on Firebase. How to setup Firebase and build similiar application see this [tutorial](https://blog.logrocket.com/build-crud-application-react-firebase-web-sdk-v9/).
2. Clone the repo
   ```sh
   git clone git@github.com:lukaszkus/todo-app.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `firebaseConfig.js`
   ```js
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID",
   };
   ```

<!-- ROADMAP -->

## Roadmap

- User authorization and authentication.
- Task categories.
- Calendar integration.

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

Don't forget to give the project a star!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- CONTACT -->

## Contact

@lukaszkus
<br/>
LinkedIn: [https://www.linkedin.com/in/lukasz-kus](https://www.linkedin.com/in/lukasz-kus/)
<br/>
e-mail: lukasz.kus84@outlook.com

## Links

Demo link: [https://todo-fm.netlify.app/](https://todo-fm.netlify.app/)
<br/>
Project link: [https://github.com/lukaszkus/todo-app](https://github.com/lukaszkus/todo-app)
<br/>
Frontend Mentor solution: [https://www.frontendmentor.io/solutions/todo-app-made-with-reactjs-styledcomponents-and-firebase-EvXd7GwFt](https://www.frontendmentor.io/solutions/todo-app-made-with-reactjs-styledcomponents-and-firebase-EvXd7GwFt)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/lukaszkus/todo-app/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/lukasz-kus/
[product-screenshot]: screenshot.png
