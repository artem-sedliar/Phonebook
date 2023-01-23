import css from './FriendListItem.module.css'
import PropTypes from "prop-types";

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={css.item} >
            <span className={isOnline ? css.online : css.ofline}>{isOnline}</span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
</li>
)   
    
}

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired

}