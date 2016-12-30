import { combineReducers } from 'redux'
import { INCREMENT_COUNT } from '../../actions/types'

/* Count reducer increments a count by 1 on an INCREMENT_COUNT action */
const count = (state=0, action) => action.type === INCREMENT_COUNT ? state+1 : state

export default combineReducers({
  count,
})
