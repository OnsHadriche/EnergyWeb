import { PropagateLoader } from "react-spinners";

const Spinner = () => {
  const override = {
    display: "flex",
    alignItems: "center",
    height: "100vh",
    justifyContent: "center",
  };
  return <PropagateLoader color="#58b2ca" cssOverride={override} />;
};

export default Spinner;
