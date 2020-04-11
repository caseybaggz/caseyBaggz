---
path: "/work/pattyrn"
dateFrom: "2018-08-01"
dateTo: "2018-08-01"
description: "Performance Web App"
link: "https://pattyrn.com"
title: "Pattyrn"
group: "work"
---

Where do I start? 🤔

Since I've had my hand in almost everything for Pattyrn, let's break this down real nice like...

## The Name 📝
When I was approached by WNDYR, they had the idea to build a product that would focus on understanding how people work. The single starting point we had would eventually become our North Start for Pattyrn (5 Key Areas). After doing some thinking and research, I jotted down close to around 100 names for the product, but always knew it would be Pattyrn - I knew it from the moment I finished writing the "n".

We chose the name Pattyrn because it grounded the science behind our product which was recognizing data patterns that are relative to performance and crucial in understanding "how people work". Thus, the product was officially brought to life.

Of course, since this is tech, you can't have a rational name that is properly spelled, so we decided to carry over the WNDYR brand and replace the "e" with a "y".

## The Brand 💅
Alright, let's get this over with - I hate the WNDYR brand. It's outdated, cold, and too corporate for my liking. Thus, I wanted to make sure Pattyrn was fresh and more progressive with an innovative feel like your modern tech B2B brands bring to the table.

For that reason, we went with a more vibrant color theme that was still in the traditional B2B warehouse (purples) and used a simple font for headlines that would give a playful, yet stable feeling.

Carrying on with this theme, we chose to bring in Emoji's and line based illustrations since that's the world we now live in. 🤓🤷‍♀️💅

## The Product Design
As you can probably tell by now, I'm big on minimalism. I don't think products need to be filled to the brim with features in order to be successful. Apple never had to do that and neither do half the beautiful apps that exist in the world today.

Thus, for the product, since we are basically a performance analytics app that has the ability to really affect someone mentally and physically (career), it was/is very important that we maintain a playful design that includes micro-animations and borders trendy where necessary.

Additionally, since the goal for Pattyrn is to be a high-end product, I wanted to make sure we were doing more with the design than just vomiting a chart library over every page. We've all seen a line chart - there's nothing unique to interesting about it. Thus, when I present data, I try to do so in a way that allows the user to quickly understand the information we need to portray while without an overused chart.

Lastly, to build off the playful strategy, I chose to use the Octalysis Framework to bring a deep level of gamification which will help drive activity and hopefully a positive change in our users behaviors.

## The Tech 🤓
At the end of the day, I love React and have yet to find another library/framework that is successful in delivering an easy to use composable light-weight option. Yes, I've tried Vue - get over it. My goal with this product was to deliver as performant of a front-end as possible since our API would be so advanced regarding algorithms.

With this in mind, we chose (and still choose) to use everything that is built in to React and Create React App for the essentials. Additionally, we would never bring in another UI related tool, unless it was a utility. This not only would help keep our bundle size down but ensure that we maintain full control of all UI Components as much as possible. We don't use Redux, we don't use a UI framework, we build our own _everything_. AND, we still ship faster than most teams.

Because we want to keep moving forward without being pulled back into the past, we are heavy into testing using Jest for components, and Cypress for E2E testing. Combine this with precise and clean code, you will get a FE that has on average 1 bug every 6mo that is **findable _and_ fixable within 5min.** ⬅ I'm very proud about that.

## Super N3rDy Stuff 🤓🤓🤓
We are a Trunk-Based Dev team, so it's crucial to have a proper automation setup. For our team, I found the best setup to be our current pipeline which runs unit tests for every commit, deploys a unique build to easily review & QA each PR, runs E2E tests for the PR. When approved and merged to master we do it all over again for the dev environment, then staging, then we deploy to prod and auto tag the release. 😉

## The Strategy
As the acting product owner, I wanted to make sure we are accomplishing delivering data that not only is unique and interesting, but we are doing so in a way that is hard to duplicate. This is why we specifically have a Research and Data Analyst who's number one mission is to build a statistics dictionary for us which helps us understand how people work most efficiently.

Combine this with gamification using the Octalysis Framework mentioned above and now we have an interesting product that has the power to both improve people's lives and also drive activity through fun actions like mini-tournaments, etc.

Of course, everything is user tested at every level from designs, to the prototype build which we internally release first, then test with our lighthouse customers. Once we pass the lighthouse phase, we finally ship to the public. This may seem like a long process, but when you are working with performance analytics, you need to make sure they are as accurate as possible before they get into the hands of the users.