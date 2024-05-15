import * as React from "react";
import BlogCard from "../blog/BlogCard";
import { gql, useQuery, useSubscription } from "@apollo/client";

const GET_BLOGS = gql`
  query GetBlogs {
    getBlogs {
      id
      content
      author
    }
  }
`;

const GET_LATEST_BLOG = gql`
  subscription GetNewBlogs {
    newBlog {
      id
      author
      content
    }
  }
`;

export default function Home() {
  // creating local state for blogs, so that once we get subscription event for
  // new blog, we can update the state and see the latest blog on the UI
  const [blogs, setBlogs] = React.useState([]);
  // adding query to fetch all the blogs
  const { data } = useQuery(GET_BLOGS);

  React.useEffect(() => {
    if (data?.getBlogs?.length > 0) {
      setBlogs(data?.getBlogs);
    }
  }, [data]);

  // Creating subscription for blogs //
  useSubscription(GET_LATEST_BLOG, {
    onSubscriptionData: (subscriptionData) => {
      // This function will get triggered one a publish event is being initiated by the server
      // when new blog is being added
      if (subscriptionData?.subscriptionData?.data?.newBlog) {
        // we are updating the state of blogs
        setBlogs([...blogs, subscriptionData?.subscriptionData?.data?.newBlog]);
      }
    },
  });

  return blogs.map(({ id, author, content }) => {
    return <BlogCard key={id} content={content} sender={author} id={id}></BlogCard>;
  });
}