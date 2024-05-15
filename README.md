# GraphQL Subscriptions with React and Node.js

This project demonstrates how to implement GraphQL subscriptions using React on the client-side and Node.js on the server-side. It allows users to create new blogs, which are then broadcasted in real-time to all connected clients using GraphQL subscriptions.

The source code for this project is based on a tutorial found here: https://vishalrana9915.medium.com/graphql-subscriptions-using-react-and-node-a1d16226f01e

## Prerequisites

- Node.js (v14 or later)
- npm (Node Package Manager)

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-repo/graphql-subscriptions.git
```

2. Navigate to the project directory:

```bash
cd graphql-subscriptions
```

3. Install the dependencies for the server:

```bash
cd backend
npm install
```

4. Install the dependencies for the client:

```bash
cd ../subscriptions_demo
npm install
```

### Running the Project

1. Start the server:

```bash
cd backend
npm start
```

The server will start running on http://localhost:4000. You should see the following messages in the console:

```bash
🚀 Query endpoint ready at http://localhost:4000/graphql
🚀 Subscription endpoint ready at ws://localhost:4000/graphql
```

2. In a new terminal window, start the client:

```bash
cd subscriptions_demo
npm start
```

The client will start running on http://localhost:3000.

3. Open your web browser and navigate to http://localhost:4000/graphql to access the Apollo Sandbox.

### Testing Subscriptions

To test the GraphQL subscriptions, you can use the Apollo Sandbox:

1. In the Apollo Sandbox, create a new subscription by running the following query:

```graphql
subscription BlogStream {
  newBlog {
    content
    author
    id
  }
}
```

2. In a new tab or window, create a new blog by running the following mutation:

```graphql
mutation AddBlog($content: String!, $author: String!) {
  addNewBlog(content: $content, author: $author) {
    content
    author
    id
  }
}
```

Provide the necessary values for $content and $author in the query variables section.

3. After executing the mutation, you should see the new blog appearing in the subscription stream in the first tab or window.

### Project Structure

`backend/`: Contains the server-side code for the GraphQL API and subscriptions.    
`subscriptions_demo/`: Contains the React client application.

### Technologies Used

* React
* Node.js
* Apollo Server
* Apollo Client
* GraphQL
* WebSockets

