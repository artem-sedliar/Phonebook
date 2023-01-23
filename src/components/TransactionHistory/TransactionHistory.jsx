import css from './TransactionHistory.module.css'
import PropTypes from "prop-types";

export const TransactionHistory = ({ items }) => {
    return(
    <table className={css.transaction}>
  <thead>
    <tr className={css.title}>
      <th className={css.th}>Type</th>
      <th className={css.th}>Amount</th>
      <th className={css.th}>Currency</th>
    </tr>
  </thead>
    <tbody>
     {items.map(({id, type, amount, currency}) => (
    <tr key = {id}>
      <td>{type}</td>
      <td>{amount}</td>
    <td>{currency}</td>
    </tr>
   ))}
  </tbody>

  
</table>   
    )
}

TransactionHistory.propTypes = {
 items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
        currency:PropTypes.string.isRequired
     })
 )

}