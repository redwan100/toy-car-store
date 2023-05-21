import React, { useState } from 'react'
import useDynamicTitle from '../Hooks/useHook'
import SectionTitle from './Shared/SectionTitle'

const Blogs = () => {
  useDynamicTitle('Blog')
  const [show, setShow] = useState(false)

  const handleShowContent = () =>{
    setShow()
  }
  return (
    <div className="py-8">
      <div className="my-5">
        <SectionTitle title="FAQ" />
      </div>
      <div className=" grid gap-4 md:grid-cols-2">
        <div className="faq bg-slate-300">
          <h1 className="fag-title">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h1>

          <div className=" bg-slate-200 p-2">
            <p>
              An access token and a refresh token are commonly used in
              authentication systems to grant and manage user access to
              resources in a secure manner. Here's an explanation of each token
              and how they work:
            </p>
            <p>
              Access Token: An access token is a credential that is issued to a
              client (such as a web or mobile application) by an authorization
              server after the client successfully authenticates the user. It
              represents the authorization granted to the client to access
              protected resources on behalf of the user. Access tokens are
              typically short-lived and have an expiration time.
            </p>
            <p>
              Refresh Token: A refresh token is a long-lived credential that is
              also issued to a client by an authorization server. Its purpose is
              to obtain a new access token once the previous access token
              expires without requiring the user to reauthenticate. Refresh
              tokens are typically used to maintain persistent user sessions and
              improve security by reducing the exposure time of access tokens.
            </p>
          </div>
        </div>

        <div className='faq bg-red-200 text-red-500'>
          <h1 className='faq-title'>Compare SQL and NoSQL databases?</h1>
          <div className='bg-red-100 p-2'>
            <p>
              SQL (Structured Query Language) and NoSQL (Not Only SQL) are two
              different types of database management systems that have distinct
              characteristics and use cases. Here's a comparison between SQL and
              NoSQL databases:
            </p>
            <p>
              SQL: SQL databases use a structured data model based on tables
              with predefined schemas. Data is organized into rows and columns,
              and relationships between tables are established using primary and
              foreign keys. SQL databases adhere to the ACID (Atomicity,
              Consistency, Isolation, Durability) properties, which ensure data
              integrity and transactional consistency.
            </p>
            <p>
              NoSQL: NoSQL databases use a variety of data models, including
              key-value, document, columnar, and graph. They offer more flexible
              schemas and can handle unstructured or semi-structured data. NoSQL
              databases do not rely on rigid tabular structures or predefined
              schemas, allowing for greater scalability and agility. They often
              sacrifice some ACID properties for performance and scalability.
            </p>
          </div>
        </div>

        <div className='faq bg-purple-200 text-purple-500'>
          <h1 className='faq-title'>What is express js? What is Nest JS?</h1>
          <div className='bg-purple-100 p-2'>
            <p>
              Express.js is a popular and widely used web application framework
              for Node.js. It provides a minimalistic and flexible set of
              features to build web applications and APIs. Express.js is known
              for its simplicity, lightweight nature, and ease of use. It allows
              developers to handle HTTP requests, define routes, manage
              middleware, and implement various web application functionalities.
            </p>
            <p>
              Express.js is a popular and widely used web application framework
              for Node.js. It provides a minimalistic and flexible set of
              features to build web applications and APIs. Express.js is known
              for its simplicity, lightweight nature, and ease of use. It allows
              developers to handle HTTP requests, define routes, manage
              middleware, and implement various web application functionalities.
              Express.js offers a straightforward and unopinionated approach,
              giving developers the freedom to choose from a wide range of
              middleware and third-party libraries to build their applications.
              It provides routing capabilities, allowing developers to define
              routes for different HTTP methods (GET, POST, PUT, DELETE, etc.)
              and handle requests and responses. Express.js also supports
              template engines for rendering dynamic HTML content and has a rich
              ecosystem of plugins and extensions.
            </p>
            <p>
              NestJS, on the other hand, is a progressive Node.js framework
              built with TypeScript. It is designed to provide a highly modular
              and scalable architecture for building server-side applications.
              NestJS draws inspiration from Angular (a popular frontend
              framework) and applies similar concepts such as dependency
              injection, decorators, and a modular structure to backend
              development.
            </p>
          </div>
        </div>

        <div className='faq bg-pink-200 text-pink-500'>
          <h1 className='faq-title'>What is MongoDB aggregate and how does it work?</h1>

          <div className='bg-purple-100 p-2'>
            <p>
              In MongoDB, the aggregate operation is a powerful and flexible way
              to perform data processing and aggregation tasks on the data
              stored in a collection. It allows you to perform complex
              transformations, calculations, and aggregations on the documents
              in a collection, similar to SQL's GROUP BY and aggregate
              functions.
            </p>
            <p>
              The aggregate operation takes an array of stages as input. Each
              stage represents a specific operation or transformation to be
              applied to the documents. These stages are executed in the order
              they appear in the array, forming a pipeline of operations. Here's
              a general overview of how the aggregate operation works:
            </p>
            <p>
              1. Match Stage: The first stage in the pipeline is often the
              $match stage, which filters the documents based on specified
              conditions. It works similar to the find operation, allowing you
              to match documents that satisfy certain criteria.
              <br />
              2.Projection Stage: The $project stage is used to reshape the
              documents and include/exclude specific fields. It allows you to
              define the shape of the output documents by specifying which
              fields to include, rename, or exclude.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs