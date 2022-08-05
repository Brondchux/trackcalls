# TrackCalls

# Project Description

Build and make your API calls to alphavantage cryptocurrency endpoints using our pre-selected routes or write your own custom endpoints.

---

## Table of Content

1. [Project Description](https://github.com/Brondchux/trackcalls#project-description)
2. [User Story](https://github.com/Brondchux/trackcalls#user-story)
3. [Acceptance Criteria](https://github.com/Brondchux/trackcalls#acceptance-criteria)
4. [Tech Stack](https://github.com/Brondchux/trackcalls#tech-stack)
5. [Post MVP Enhancements](https://github.com/Brondchux/trackcalls#post-mvp-enhancements)
6. [Useful Links](https://github.com/Brondchux/trackcalls#useful-links)
7. [Collaborators](https://github.com/Brondchux/trackcalls#collaborators)
8. [Credits](https://github.com/Brondchux/trackcalls#credits)
9. [License](https://github.com/Brondchux/trackcalls#license)

---

## User Story

```md
As a user visiting the website...
I want to be able to creat a service that communicates with the Alphavantage API
I want it to be capable of injecting different functions and parameters given the endpoints available in the API Documentation
I want to see the responses from the service called output in JSON format
```

---

## Acceptance Criteria

```md
Example Params: function: CURRENCY_EXCHANGE_RATE, from_currency: BTC, to_currency: USD

Your solution must at least support the example params provided above.
Bonus points if you integrate the API further given the documentation!
Please implement your solution using JavaScript/Node.
There is no limit to the tools or dependencies, i.e, use all of the resources you'd like.
Assume your solution is for production code following SOLID principles.
Solve or identify security risks, scalability considerations, and edge cases in your solution.
```

---

## Useful Links

1. 🗂 View the repository on [Github](https://github.com/Brondchux/trackcalls)
2. 🌍 This app is deployed with [Vercel](https://vercel.app/)

---

## Tech Stack

I choose the stack below because the needs of the project is minimal and in it's MVP phase. Will introduce frameworks and other libraries as the application scales.

1. Vanilla JavaScript (ES6)
2. Classic CSS 3
3. Plain HTML 5

---

## Post MVP Enhancements

1. Upgrade the UI for a more plesant experience for our users
2. Replace "demoKey" file with ".env"
3. Using React & Redux to manage our states and quicker re-rendering of updated components
4. Populate the below fields with more values (could come from other APIs or manual entry)

```js
/**
 * markets = ["USD", "NGN", "JPY", "CNY"];
 * currencies = ["BTC", "USD", "NGN", "JPY", "CNY"];
 * symbols = ["BTC", "ETH"];
 */
```

5. Introduce NodeJS & ExpressJS to create routes that masks the "alphavantage" API and other benefits that comes with them
6. Add MongoDB for persistense so authenticated users can keep track of API calls they built
7. Deploy this project on AWS to make it accessible to many and utilize other benefits AWS offers
8. We could switch from vanilla CSS to bootstrap to save us some time writing our rules
9. Come up with a much better name that anounces what our SaaS has to offer
10. Add test coverage to aid CI/CD automation
11. Complete the feature to allow users add "optional" parameters when building their API calls
12. Implement many other features that will come up when other collaborators come in

---

## Credits

[TrackVia](https://trackvia.com/) for giving me this software engineer assessment opportunity.

[Alpha Vantage](https://www.alphavantage.co/documentation/) for making this api available with good documentation.

---

## Collaborators

Gospel Chukwu [@brondchux](https://github.com/brondchux)

Want to contribute? ping me brondchux@gmail.com

## License

[![LICENSE](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/licenses/MIT)
