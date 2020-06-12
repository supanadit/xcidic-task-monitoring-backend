# Task Monitoring

[![Build Status](https://travis-ci.com/supanadit/xcidic-task-monitoring-backend.svg?branch=master)](https://travis-ci.com/supanadit/xcidic-task-monitoring-backend)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/63871f6b7ba24a81b787b81fd236c8e8)](https://www.codacy.com/manual/supanadit/xcidic-task-monitoring-backend?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=supanadit/xcidic-task-monitoring-backend&amp;utm_campaign=Badge_Grade)
[![CodeFactor](https://www.codefactor.io/repository/github/supanadit/xcidic-task-monitoring-backend/badge)](https://www.codefactor.io/repository/github/supanadit/xcidic-task-monitoring-backend)

This is task monitoring backend for interview test from [XCIDIC](https://www.xcidic.com/), so basically i just split the project into two versions which is Backend version & Frontend version,
and this one is the backend version, the frontend version itself will be splatted into two versions which is the Angular version and ReactJS version, as i mentioned on the phone call that i am not familiar with ReactJS, instead i used Angular and Vue JS
but of course i can do React JS if it supposed to be, but take time between 1 or 2 weeks before it ready to work with real project, so this project is a test for the interview, and the duration is no longer than a week, so i decided to write a two version of Frontend system,
and the Angular is the primary tool for the Frontend.

## Requirements
1. Node JS v12.18.0+
2. MariaDB 10.4.13+

## Quickstart
- run installation `npm install`
- create a database called `task_monitoring` in MySQL or MariaDB
- run migration with `npx sequelize-cli db:migrate`
- run seeder with `npx sequelize-cli db:seed`
- run the app`npm start`
- open in browser [http://localhost:3000](http://localhost:3000)

## Project Task
1. Make a simple CRUD application for task monitoring, with (MongoDB/PostgreSQL/MySQL, ExpressJs, ReactJs and NodeJs).
2. This application is used by TWO USER GROUPS: employee & manager.  Each user according to their respective user group can login & do the following;
3. Employee: can add, edit & delete the daily task.
4. Manager: can see all employee daily task(s).

## Duration
Duration of this test is 1 (one) week (starting 1 day after this email has been sent) or deadline at June 19th, 2020.

## Important Notes from XCIDIC
You can adjust the business process as you like as you are the project owner.

## Scoring Points
1. You able to use react
2. Your business process design and analytics
3. Your database schema modeling
4. Your code style
5. Your design on application
6. You are required to mention all the documentation in this project and give a rough outline of them.

## Additional Points
1. Sent the test result early
2. The result saved to the Version Control System (Github, bitbucket, tfs, etc)
3. The result is deployed on Cloud  (Bluemix, heroku, openshift, gcp, etc)
4. Using additional NPM/Bower package.
5. Performance page load under 2sec
6. Use automated deployment and automated testing process (Travis, Jenkins, codeship, etc)

## Contributor
Just don't, this is my test interview project :)

## License
Copyright 2020 Supan Adit Pratama

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.