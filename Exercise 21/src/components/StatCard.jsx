
function StatCard({ title, value, subtitle, icon: Icon, color }) {
  const colors = {
    blue: "bg-blue-100 text-blue-600",
    purple: "bg-purple-100 text-purple-600",
    green: "bg-green-100 text-green-600",
    orange: "bg-orange-100 text-orange-600",
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {title}
          </p>
          <h3 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
            {value}
          </h3>
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
            {subtitle}
          </p>
        </div>

        <div className={`rounded-xl p-3 ${colors[color]}`}>
          <Icon size={25} />
        </div>
      </div>
    </div>
  );
}

export default StatCard;
