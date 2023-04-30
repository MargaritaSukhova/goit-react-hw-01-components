import PropTypes from 'prop-types';
import css from "../StatisticsItem/StatisticItem.module.css"
import getRandomHexColor from "utils/getRandomColor";

export default function StatisticItem({ label, percentage }) {
  return (
    <li className={css.item} style={{ backgroundColor: getRandomHexColor() }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  )
}

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}

   
    