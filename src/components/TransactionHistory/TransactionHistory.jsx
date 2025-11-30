import PropTypes from "prop-types";

import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return items.length > 0 ? (
    <table className={styles.table}>
      <thead className={styles.tableHead}>
        <tr className={styles.tableHead}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.tableBody}>
        {items.map((item) => (
          <tr key={item.id} className={styles.tableRow}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <p>No transactions found</p>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
