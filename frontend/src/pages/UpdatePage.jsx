import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateGoal } from "../features/goals/goalSlice";
import { useNavigate } from "react-router-dom";

function UpdatePage() {
  const navigate = useNavigate();
  const [newText, setNewText] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleUpdate = async () => {
    const updatedGoalData = { text: newText };
    dispatch(updateGoal({ id, updatedGoalData }));
    navigate("/");
  };

  return (
    <div>
      <h1>Update Goal</h1>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          placeholder="Enter new goal text"
        />
        <button className="btn btn-block" onClick={handleUpdate}>
          Update Goal
        </button>
      </div>
    </div>
  );
}

export default UpdatePage;
