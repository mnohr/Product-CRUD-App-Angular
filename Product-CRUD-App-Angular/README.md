# Simple CRUD Application with Angular
This project is a simple CRUD (Create, Read, Update, Delete) application built using Angular. It demonstrates key concepts such as reactive programming, cross-component communication, state management, and custom pipes and directives. The application manages a list of products with basic functionalities including viewing, adding, editing, and deleting products.

## Features

- Product list display
- Product details view
- Product creation and editing
- Product search functionality
- Cross-component communication using RxJS
- Custom pipe for currency formatting
- Custom directive for highlighting products
- Error handling
- Basic UI styling with Angular Material

## Tools and Technologies
- Angular 14+
- Angular Material
- RxJS
- Mock API services (e.g., mockapi.io)

## Getting Started
### Prerequisites
Ensure you have the following installed on your machine:

Node.js (v14.x or higher)
Angular CLI (v14 or higher)

### Installation
Clone the repository
```
git clone https://github.com/yourusername/simple-crud-angular.git
cd simple-crud-angular
```
Install dependencies

```
npm install
```
Update the environment.ts 
mockapi has been used.Update the following key in the `src\app\environments\environment.ts` 
```
apiUrl: 'https://your-mockapi-id.mockapi.io/api/v1/',
```
Run the application

```
ng serve
```
Open your browser and navigate to http://localhost:4200/.
