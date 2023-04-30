import PropTypes from "prop-types";
import FriendListItem from "components/FriendListItem/FriendListItem";
import css from "../FriendList/FriendList.module.css"

export default function FriendList( {friends} ) {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => {
        return (
          <FriendListItem key={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline}  />
        )
      })}
    </ul>
  )
}

FriendList.propTypes = {
friends: PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.string.isRequired
}).isRequired).isRequired
}