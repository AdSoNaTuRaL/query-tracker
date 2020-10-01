<h1 align="center">Query Tracker</h1>

<p align="center">:rocket: Project made for the company <a href="https://www.ahimas.es/">Ahí+</a> who I am currently interning (10/8/2020) </p>

<div align="center">
  <sub>Query Tracker project. Built with ❤︎ by
    <a href="https://github.com/AdSoNaTuRaL">Adson Henrique</a>
  </sub>
</div>

<br>

# :pushpin: Table of Contents

* [Problem](#interrobang-problem)
* [Solution](#thinking-solution)
* [Technologies](#computer-technologies)
* [Features](#rocket-features)
* [How to Run](#construction_worker-how-to-run)
* [Found a bug? Missing a specific feature?](#bug-issues)

# :framed_picture: Web Screenshot
<div>
   <img src="https://user-images.githubusercontent.com/26275918/94809370-ceb6fd80-03f2-11eb-8f23-944a16528ee4.png">
</div>

# :interrobang: Problem
The problem that the company faced was that it needed interns, like me, to execute SQL queries in production databases, related to customer support.
And since it was a production database, they couldn't take the risk of running any bad query (☠️ **DELETE WITHOUT WHERE** ☠️), so we prepared the queries
and sent those queries to someone who checked their integrity and ran them in production, because we (the interns) only had read access to the database.

# :thinking: Solution
The solution created by me was to create a form (front-end) where you select who will run the query (in the future I think about putting a login so that 
the user who will run the query, is automatically selected and also avoid possible fraud) and insert the query you want to run.
The back-end receives this data, creates the connection to the database with credentials that have read and write access.
If everything is correct, executes the query and stores it in another table when the query was launched, by whom, what querie text and other useful information and returns 
for the user an error message or success.
Yes, there were a thousand other ways to solve the problem without having to create an application just for that. But I also did it to train and consolidate my 
knowledge with typescript and those other technologies mentioned below.

# :computer: Technologies
This project was made using the follow technologies:

* [Typescript](https://www.typescriptlang.org/)      
* [React](https://reactjs.org/)
* [Mysql](https://github.com/mysqljs/mysql)
* [Express](https://expressjs.com/)      

# :rocket: Features

* Project to collect data from the user who intends execute query in the production database

# :construction_worker: How to run
```bash
# Clone Repository
$ git clone https://github.com/AdSoNaTuRaL/query-tracker.git
```
### 📦 Run API

```bash
# Go to server folder
$ cd query-tracker/back-end

# Install Dependencies
$ yarn install

# Run Aplication
$ yarn dev:server
```
Access API at http://localhost:3333/

### 💻 Run Web Project

```bash
# Go to web folder
$ cd query-tracker/front-end

# Install Dependencies
$ yarn install

# Run Aplication
$ yarn start
```
Go to http://localhost:3000/ to see the result.

# :bug: Issues

Feel free to **file a new issue** with a respective title and description on the [query-tracker](https://github.com/AdSoNaTuRaL/query-tracker/issues) repository. If you already found a solution to your problem, **I would love to review your pull request**!
