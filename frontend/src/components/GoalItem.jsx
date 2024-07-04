import { useDispatch } from 'react-redux'
import { deleteGoal } from '../features/goals/goalSlice'
import { Link } from 'react-router-dom'

function GoalItem({ goal }) {
  const dispatch = useDispatch()

  return (
    <div className='goal'>
      <div>{new Date(goal.createdAt).toLocaleString('en-US')}</div>
      <h2>{goal.text}</h2>
      <Link to={`/update/${goal._id}`}>
        <button className='btn btn-block'>Update</button>
      </Link>
      
      <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default GoalItem