# Dagens Lunch - Nära Gleerups

![dagens-lunch](https://user-images.githubusercontent.com/13545738/54869541-6b2e2780-4d9a-11e9-80db-d717226e67ea.png)

The static front-end for my daily lunch scraper written in GatsbyJS. The site is available at `https://lunch.adamkarlsten.com` and the JSON api that feeds it is available at `https://lunch-api.adamkarlsten.com`.

Mainly a project dedicated to freshening up on web scraping techniques, but also learning how GatsbyJS works by building the simplest kind of static site.

## How it works:
The [API server](https://github.com/acarlsten/lunch-api) is a regular Express app that serves a static db.json file. It uses node-schedule to run all the scraping scripts every day at 05:00. When it's done it makes a call to the frontend's webhook, triggering a rebuild of the site.

The frontend is hosted on Netlify and updated via this repository.
