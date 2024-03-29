# Jump Park Test
A test made for the JumpPark company.

Online Demo (it won't get to connect to the API due to not enabled CORS):  
[Click here](https://jump-park-test.netlify.com/)

## Instructions to run locally:
In order to run the project locally, you have to have the following prerequisites installed in your machine:
- Node.js
- NPM

After that, follow the instructions:
- Clone the project;
- Run `npm i` to install the dependencies;
- Run `npm start` to start the webpack server.

## Info
It cointains:

### **General:**
* Webpack (3 config files set)
   * Img Loader
   * Font Loader
   * Alias: "~" == "./src/"
   * Auto bundle injection (html-webpack-plugin)
* CSS Modules
* Styled-components
* SASS Ready
* [React](https://reactjs.org/)
* [Axios](https://github.com/axios/axios)
* [React Helmet](https://github.com/nfl/react-helmet)
* [Sweet Alert](https://sweetalert.js.org/)

### **Development:**
* [PropTypes](https://github.com/facebook/prop-types)
* [Classnames](https://github.com/JedWatson/classnames)
* Utility components
   * Favicon (just put your [favicomatic](http://www.favicomatic.com/) (obsessive) files in the component images folder)
   * Metas (integrated with helmet, an easy way to define meta tags (for almost all social networks))
* Development server: 0.0.0.0:8080
* ESLint
   * React
   * Prettier
   * Custom rules
   * Airbnb extended
   * Extra stuff (check .eslintrc.js)
* Prettier
* Hot Module Replacement + React Hot Loader
* Cheap Module Source Map
* [Blueprint Templates](https://marketplace.visualstudio.com/items?itemName=teamchilla.blueprint) (VSCode)

### **Production:**
* CSS Auto prefix (production)
* CSS Extract Plugin
* UglifyJS
* Image Minifier
* Disabled temporarily: PurifyCSS (remove not used CSS (only global ones))
* MinifyCSS

### **NPM Scripts**
* `npm start`: Start webpack development server (port 8080)
* `npm build`: Make a build
