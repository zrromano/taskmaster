# Design Document

## Section 0 Introduction

### 0.1 Overview

__Development name:__ Taskmaster

__Actual name:__ tbd

__Proposed domain name:__ tbd

__Purpose:__ Help keep track of users' responsibilities with an easy to use interface.

__Target:__ Anyone that wants to improve productivity or reduce the stress of managing daily tasks.

### 0.2 Phases

  * Phase one - Develop basic front end
  
  * Phase two - Develop and connect REST API

  * Phase three - Present in class
  
  * Phase four - Deployment
  
  * Phase five - Implement advanced/extra features and improve UX/UI
  
## Section 1 Content Structure

### 1.1 Site Map

 ![sitemap](https://github.com/zrromano/taskmaster/blob/master/src/images/sitemap.png?raw=true)
 
### 1.2 Content Types
 
#### 1.2.1 Users

User data and settings

 * username: unique string
 
 * password: salted and hashed string
 
 * theme: string
 
 __Added in phase five__
 
 * firstName: string
 
 * lastName: string
 
 * email: unique string matching email pattern
 
 * verified: boolean
 
 
#### 1.2.2 Taskset

All **Task**s and **Tasklist**s associated with a particular user

 * username: string matching associated account username
 
 * collection: array of **Task**s and **Tasklists**s
 

#### 1.2.2.1 Tasklist

A collection of similar tasks

 * name: string unqiue to taskset
 
 * tasks: array of **Task**s
 
#### 1.2.2.2 Task

A single task and associated information

 * description: string
 
 * due: **due** object
 
 * complete: boolean
 
#### 1.2.2.2.1 Due

An object describing when and how often a task is due. Top level properties describe when a task repeats, one should be chosen and the others should be set to null.

 * once: { int of day, month, year }
 
 * daily: boolean (no need to set to false, only true if used)
 
 * weekly: array of days due ["SUN","MON","TUE","WED","THU","FRI","SAT"]
 
 * monthly: int of day
 
 * yearly: { int of day, month }
 
## Section 2 Design
 
### 2.1 Guidelines

* All pages should be mobile responsive using CSS media queries.

* Colors should follow the "60-30-10 rule". *(roughly 60% primary color, 30% secondary color, 10% accent color. The primary color is usually your background, so white, grey, or a muted version of the secondary color.)*

* Users will be able to choose a color scheme defining a primary color, secondary color, and accent color as well as a primary and secondary text color.

### 2.2 Themes

* *Add themes here as they are developed. Should include the hex codes of primary color, secondary color, accent color, primary text, and secondary text.*

## Section 3 Functionality

### 2.1 Environment Variables

Sensitive development information should be stored in a .env file in the root of the project and read into the program through environment variables. React applications need environment variables to start with "REACT_APP_"

```
In .env:
REACT_APP_EXAMPLE=example

In front end:
print(process.env.REACT_APP_EXAMPLE);

In back end:
// Unknown - will need to look into how Python does this
```

### 2.2 Front End

 * Single Page Application developed using React

 * Make calls to the back end to send and retrieve data
 
 * Display retrieved data
 
 * Recieve and send user input through forms
 
 * Save user authentication token to local storage

### 2.3 Back End

**note** Here is a flask tutorial: https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world

 * REST API developed using Python Flask
 
 * Database will be PostgreSQL using Flask-SQLalchemy

 * Hash and salt password upon creation or update of user accounts
 
 * Compare given password to hashed password in database and return an authentication token
 
 * Compare current date to due dates on get request for tasks and tasklists. Update due date in return data and database before responding to request.
 
 * (Phase 5) Send verification email to users upon account creation.
 
 * (Phase 5) Send reminder emails/notifications to users when a task is overdue.
 
### 2.3.1 API Routes

tbd
