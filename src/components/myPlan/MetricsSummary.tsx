interface IMetricsSummaryProps {
  exercises: number;
  minutes: number;
  calories: number;
}

const MetricsSummary = ({ exercises, minutes, calories }: IMetricsSummaryProps) => {
  const stats = [
    { label: "Exercises", value: exercises },
    { label: "Minutes", value: minutes },
    { label: "Calories", value: calories },
  ];

  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-white/10 bg-zinc-900 p-5"
        >
          <p className="text-sm text-white/40">{stat.label}</p>
          <p className="mt-1 font-display text-3xl font-bold text-[#ccff00]">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MetricsSummary;