### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
1.Callback Hell
2.Promises
3.Async/ await
- What is a Promise?
They play role of placeholders for values that are unknown when it was created. Instead of directly
returning the calculated value for a time consuming operation, it provides a placeholder value and a promise to deliver the actual value shortly when the time consuming process finishes.
- What are the differences between an async function and a regular function?
Values in regular functions will be delivered and the code will keep running when response is resolved/rejected.
Error handling is far more straightforward in async/await and it relies on try/catch similar to the other synchronous code.

- What is the difference between Node.js and Express.js?
Node.js is an open source, multi-platform environment that lets you build server-side apps and tools by using JS. Express.js is the most popular open-source Node.js web framework.
Node.js falls under the Frameworks (Full Stack) category while Express.js is classified under Microframeworks(Backend) category.
Node.js is built on Google's V8 engine. Express.js is built on Node.js
Express.js embodies more feautures since it is an addition to Node.js functionalities.
Node.js is used for building server-side, I/O, event driven apps. Express.js uses approaches of Node.js for building web apps and APIs.
Node.js is written in C, C++ an JS, Express.js is written in JS.
In Node.js routing is not provided, in Exprees.js routing is provided.
Express.js uses middleware for arranging functions systematically, Node.js doesn't use provision.
- What is the error-first callback pattern?
Node.js relies on asynchronous code to stay fast, so having a dependable callback pattern is crucial.
The first argument of the callback is reserved for an error object. If an error occurred, it will be returned by the first err argument.
The second argument of the callback is reserved for any successful response data. If no error occurred, err will be set to null and any successful data will be returned in the second argument.
- What is middleware?
It is code that runs in the middle of the request / response cycle!
 It's functioning as hidden translation layer, middleware enables communication and data management for distributed applications. It’s sometimes called plumbing, as it connects two applications together so data and databases can be easily passed between the “pipe.” Using middleware allows users to perform such requests as submitting forms on a web browser, or allowing the web server to return dynamic web pages based on a user’s profile.
- What does the `next` function do?
Next parameter is essential to move on to the next function.In order to tell express that we run it on every single incoming request we need to write it inside of an app.use and put it above any of our routes.
- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
Three requests are made sequentially, each req must wait for the previous one to be resolved, which can slow down the app.

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```

async funtion getUsers() {
  let baseURL = "https://api.github.com/users";
  let elie = await $.getJSON(`${baseURL}/elie`);
  let joel = await $.getJSON(`${baseURL}/joelburton`);
  let matt = await $.getJSON(`${baseURL}/mmmaaatttttt`);

  return [elie, matt, joel];
}
getUsers()