import clsx from "clsx";

import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.card}>
      <img src={avatar} alt={name} width="48" className={styles.cardAvatar} />
      <p className={styles.cardName}>{name}</p>
      <p
        className={clsx(
          styles.cardStatus,
          isOnline ? styles.online : styles.offline
        )}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
};

export default FriendListItem;
