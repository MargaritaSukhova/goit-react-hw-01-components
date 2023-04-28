import PropTypes from 'prop-types';

export default function StatisticItem({ label, percentage }) {
  return (
 <li class="item">
      <span class="label">{label}</span>
      <span class="percentage">{percentage}%</span>
    </li>
  )
}

StatisticItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
}

   
    