# Angular #
- Framework for building SPA

## Angular Building Blocks ##
    - Component (View)
    - Directive
    - Pipe
    - Service
    - Module

### Component ###
- Responsibilities
    - UI Behavior (React to user actions)
    - Presentation (Render the html)
    - State (data for UI)
- Composable

- How to create a component?
    - Create the following files (better to be in a folder dedicated for the component)
        - [**componentName**].component.ts"
            - contains the component class
                - data to be displayed (state)
                - UI event logic
        - [**componentName**].component.html
            - contains the HTML template that need to be displayed with the component is rendered
        - [**componentName**].component.css
            - contain the styles for the HTML template
    - Register the component in the module (in the "declarations" section)

### Directive ###
- Encapsulate any DOM manipulation logic
- Examples
    - add a new style / remove an existing style
    - Create / Remove dom nodes
- In other words, a directive is a component without a template
- Types of Directives
    - Attribute directive
        - manipulates the attribute values of an existing dom node
        - DOES NOT change the structure of the DOM tree
        - used with '[]'

    - Structural directive
        - Changes the structure of the DOM tree by adding new DOM nodes or removing existing DOM nodes
        - used with '*'

### Pipe ###
- Encapsulate any logic that involves data transformation for presention
- Doesn't change any state

- Custom Pipe Creation
    - Create a class implementing the PipeTransform interface
    - Decorate the class with the 'Pipe' decorator
    - Register the pipe in the module
    - Use the pipe


### Service ###
- Encapsulates any non-ui responsibility

### Module ###
- Logical grouping of application entities (components, pipes, directives, services and other dependency modules)
- Application lifecycle commences with the bootstrapping of a module
- There has to be a minimum of 1 module in an application
- Classes decorated with "NgModule" decorator

## Application Setup ##
- Angular CLI
    - > npm install @angular/cli -g

- To create a new angular application
    - > ng new <app_name>


## Component Categories ##
### Container / Smart Components ###
- Interact with other services
- Avoid user interface responsibility

### Presentation / Dumb Components ###
- Receive the data from the "Container" component and display
- Accept input from the user and pass them back to the "Container" component
- DO NOT interact with other services

## Observables ##
- Observables = inverse of lazy iterables
- Represent a stream of data generated across a time line one after another

### Source of Async in Browser ###
- User Actions (stream)
- Ajax (singular)
- Timer Events (stream)
- Web Sockets (stream)
- Server Sent Events (stream)

## Routing ##


## Authentication & Authorization ##
### Preparating the server ###
- > git pull 
- > cd 06-data-server
- > npm install
- > npm start

### Testing Using Postman ###
- Register a new user
    - make a POST request to 'http://localhost:3000/register' with the following body (Choose 'raw' and 'JSON')
    - 
        ```
            {
                "email": "tkmagesh77@gmail.com",
                "password": "adminpwd",
            }
        ```
- Login to get the authorization token
    - make a POST request to 'http://localhost:3000/login' with the following body (Choose 'raw' and 'JSON')
    - 
        ```
            {
                "email": "tkmagesh77@gmail.com",
                "password": "adminpwd",
            }
        ```
    - Copy the "accessToken" value from the response

- Access the APIs using the access-token
    - Make any request with "Authorization" Header with the value as below:
        ```
            Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRrbWFnZXNoNzdAZ21haWwuY29tIiwiaWF0IjoxNjkxNTg4OTQ4LCJleHAiOjE2OTE1OTI1NDgsInN1YiI6IjIifQ.4DK52ULeFP014uTG5CAoUWAciGfNAYBgIb2F38mRir8
        ```

## Implement the following routing with authentication ##
![image routing](./bugtracker-routing.png)

## Unit Testing ##
- Testing the functionality of an entity isolating it from all ites dependencies
- Use "Mocks" for isolating the dependencies
- In Jasmine, Mocks are called as "Spy"
