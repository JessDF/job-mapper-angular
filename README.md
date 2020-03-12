# JobMapperAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

## Setting up the Environment
- First install the latest version of NodeJS
	- Provides some tools to build Angular projects
- Node Package Manager
	- Used to install 3rd-party libraries (i.e. Angular CLI (command-line interface)
		- `npm install -g @angular/cli`
		- Need to use `-g` b/c if you don't it'll only be installed to the current folder

## To Create/Initalize a new app
- Type: `ng new <app-name>`
- We now need a code editor - `code.visualstudio.com`
- Within command prompt (inside the folder of your new app) type: `code .`
	- This opens up visual studio within that project
- To run the development server: `ng serve`
    - Navigate to `http://localhost:4200/`. 
    - The app will automatically reload/compile if you change any of the source files.

## Rendering Components using Angular CLI - Code scaffolding
- In VS Code press: ctrl + ` 
	- This will open a terminal
- Generate a new component: `ng g c <new_component_name>`
	- G = generate
	- C = component
	- i.e. `ng g c course`
- Documentation states: Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Generating Services using Angular CLI
- Using a terminal window: `ng g s <new_service_name>`
	- G = generate
	- S = service
	- i.e. `ng g s email`

## Installing Bootstrap
- Using a terminal window: `npm install bootstrap --save`
	- Downloads bootstrap and stores in node_modules
	- `--save` adds it as a dependency in package.json

## Generating Custom Directives using Angular CLI
- Using a terminal window: `ng g d <new_directive_name>`
	- G = generate
	- d = directive
	- i.e. `ng g d input-format`

## Build

- Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

- Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

- Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

- To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
