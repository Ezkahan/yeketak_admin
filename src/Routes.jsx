import Index from "pages";
import { Route, Router } from "react-router-dom";

const Routers = () => {
  return (
    <Router>
      <Route path="/">
        <Index />
      </Route>
    </Router>
  );
};

export default Routers;
