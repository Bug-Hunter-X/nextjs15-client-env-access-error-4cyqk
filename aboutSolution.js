```javascript
// pages/about.js

export async function getServerSideProps(context) {
  const myVariable = process.env.MY_VARIABLE;
  return {
    props: {
      myVariable: myVariable
    },
  };
}

export default function About({myVariable}) {
  console.log(myVariable);
  return (
    <div>
      <h1>About Page</h1>
      <p>My variable: {myVariable}</p>
    </div>
  );
}
```