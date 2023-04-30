import PropTypes from "prop-types";
import TransactionHistoryItem from "../TransactionHistoryItem/TransactionHistoryItem";
import css from "../TransactionHistory/TransactionHistory.module.css"

export default function TransactionHistory({items}) {
  return (
    <table className={css.transactionHistory}>
  <thead className={css.tableHead}>
    <tr>
      <th className={css.tableHeadItem}>Type</th>
      <th className={css.tableHeadItem}>Amount</th>
      <th className={css.tableHeadItem}>Currency</th>
    </tr>
  </thead>

      <tbody>
        {items.map(item => {
          return (
            <TransactionHistoryItem key={item.id} type={item.type} amount={item.amount} currency={item.currency} />
          )
        })}
  </tbody>
</table>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired).isRequired
}