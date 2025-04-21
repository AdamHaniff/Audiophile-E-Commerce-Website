import { useNavigate } from "react-router-dom";

function GoBackBtn() {
  // VARIABLES
  const navigate = useNavigate();

  return (
    <button className="back-btn" onClick={() => navigate(-1)} type="button">
      Go Back
    </button>
  );
}

export default GoBackBtn;
