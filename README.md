:# Portfolio
Website with personal works and information

 1- The first step was to create the structure of the website
 
 This website is structured as follows based on the categories in which each work can be differentiated:

Pages:
- Home
- Github
- Design
- Wordpress
- Video 
- Contact

Commons:
- Navbar
- Categories
- Footer

Once the structure is thought out I have created a design file in Figma to visualize the web in more detail, components, calls, functionalities, and pages.

The next step is to create the project configuration in Vs Code:
- Assembled with Webpack
- Developed with React
- Typed with Typescript
- Styled with Emotion
- Published to Github Pages with Github Action

The main problem arose when publishing the project with Github Action, since most of the images were not rendered, coming from a .json file that did not import the images dynamically. So I proceeded to change the .json file for a .js file, and import all the images into an exportable object.