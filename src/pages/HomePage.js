import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div>HomePage</div>
      <div>
        <p>Go to <Link to="/product">product page</Link></p>
      </div>
    </>
  );
}

export default HomePage;
