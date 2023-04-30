import StatisticItem from '../StatisticsItem/StatisticsItem';
import PropTypes from 'prop-types';
import css from "../Statistics/Statisctics.module.css";

export default function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(stat => {
          return (
              <StatisticItem
            key={stat.id}
            label={stat.label}
            percentage={stat.percentage}/>
          )
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired).isRequired
}