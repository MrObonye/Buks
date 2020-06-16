# Buks


[![License](http://img.shields.io/badge/license-MIT-blue.svg)](http://opensource.org/licenses/MIT)

## A Library app

Buks is an application that provides users with access to books from wherever they are.
It is a virtual library that users can utilize to borrow and read their favorite books using any device.
Buks exposes RESTful API endpoints such that anyone can customize their method of consuming
the resources.

### Built With

* [NodeJS](https://nodejs.org/en/) - A JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
* [MongoDB](https://www.mongodb.com/) - A general purpose, document-based, distributed database built for modern application developers and for the cloud era.
* [Mongoose](https://mongoosejs.com/) -  An elegant mongodb object modeling for node.js which provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.
* [ExpressJS](http://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
* [Angular](https://angular.io/) - Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.

#### Getting Started

```markdown
# Clone your fork of this repository

# Ensure NodeJS, MongoDB, Mongoose and Angular cli are globally installed

# Switch to project directory
cd Buks

# Install dependencies
npm install

# Set up environment variables
Follow the template in .env.example

# Run database migrations
instructions to be added

# Start the app
- In development mode, run the following from two separate terminal windows/tabs
npm run start:client
npm run start:dev

navigate to http://localhost:8080 in your browser
- For production build, run:
npm run build
then
npm run start
```
