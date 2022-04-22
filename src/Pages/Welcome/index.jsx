import { useParams, useHistory } from "react-router-dom";

function Welcome() {
  const params = useParams();
  const history = useHistory();
  return (
    <div>
      <h1>Welcome, {params.name}!</h1>
      <button onClick={() => history.push("/")}>Voltar</button>
    </div>
  );
}

export default Welcome;
