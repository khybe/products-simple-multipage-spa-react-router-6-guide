import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h2>Home Page!</h2>
      <p>
        Go to <Link to="/products">the products page</Link>
      </p>
    </>
  );
};

export default HomePage;
