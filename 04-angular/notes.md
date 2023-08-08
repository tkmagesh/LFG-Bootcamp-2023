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
