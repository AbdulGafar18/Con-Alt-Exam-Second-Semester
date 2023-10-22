import {Link} from "react-router-dom";
import ErrorTest from "../ErrorTest";
import ErrorBoundary from "react-error-boundary"

export default function Root() {
  return (
    <>
    <ErrorBoundary>
      <h1>Welcome to My Counting App</h1>
      <p>
        Below is my  <Link to="/counter">Counter App</Link> </p>

        <ErrorTest/>
      <Link to="amaxeme"> Error 404Page</Link>
     <p>Created by AbdulGafar</p>
     </ErrorBoundary>     
    </>
  );
 }
