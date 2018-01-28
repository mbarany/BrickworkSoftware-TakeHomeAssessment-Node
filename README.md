# BrickworkSoftware-TakeHomeAssessment-Node

## Architecture Overview
The service will require some sort of web application that can route `/tracking/track.gif` to a controller as well
as a long running service that will run in the background and process tasks.
It will also require a database and a queueing system like RabbitMQ or Amazon SQS.

The service endpoint will lookup the subdomain from the http request. It will find a tenant id from the database.
Then it will add a message containing tenant id and referrer url to the queue to process the scraping in an non-blocking fashion.
A consumer of the queue will run continuously in the background. It will pull each message from the queue and scrape the
corresponding referrer url from the message.

In terms of the scraped data that the admin needs, the service could expose an additional API endpoint to fetch the scraped data.

## Getting Started
- `npm install`
- `npm start`


License
=======

    Copyright 2018 Michael Barany

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
