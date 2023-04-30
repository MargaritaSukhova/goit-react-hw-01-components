import PropTypes from "prop-types";
import css from "../TransactionHistoryItem/TransactionHistoryItem.module.css"

export default function TransactionHistoryItem( {type, amount, currency} ) {
  return (
        <tr>
      <td className={css.tableItem}>{type}</td>
      <td className={css.tableNumber}>{amount}</td>
      <td className={css.tableNumber}>{currency}</td>
    </tr>
  )
}

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
}