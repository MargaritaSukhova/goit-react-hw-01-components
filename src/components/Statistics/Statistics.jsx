import stats from './Statistics/data.json';

export default function Statistics({ title, stats }) {
  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>

      <ul class="stat-list">
        {stats.map(stat => {
          <StatisticItem
            key={stat.id}
            label={stat.label}
            percentage={stat.percentage}
          />;
        })}
      </ul>
    </section>
  );
}
