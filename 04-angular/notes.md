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

### Pipe ###
- Encapsulate any logic that involves data transformation for presention
- Doesn't change any state

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


