import ChatList from '../Chat_list/ChatList'
import User from '../User-info/User'
import './List.css'
const List = () => {
  return (
    <div className='list'>
      <User/>
      <ChatList/>
    </div>
  )
}

export default List
