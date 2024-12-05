# Next.js 15 Runtime Error: Accessing Node.js Environment Variables in Client-Side Code

This repository demonstrates a common error in Next.js 15 applications where accessing Node.js environment variables (e.g., `process.env`) in client-side code results in a runtime error.  The error occurs because the browser environment does not have access to the `process` object.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`. You'll see a runtime error in the browser's console.

## Solution

The solution involves using the `getServerSideProps` function or the `getStaticProps` function in Next.js to fetch the environment variables during the server-side rendering phase.  This ensures the variables are available on the client-side without directly accessing the `process` object in the browser.