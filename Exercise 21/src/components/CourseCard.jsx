
function CourseCard({ course }) {
  const progressColor = {
    blue: "bg-blue-600",
    yellow: "bg-yellow-500",
    purple: "bg-purple-600",
    green: "bg-green-600",
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-2xl dark:bg-slate-800">
            {course.icon}
          </div>

          <div>
            <h3 className="font-bold text-slate-800 dark:text-white">
              {course.name}
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              {course.instructor}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm text-slate-500 dark:text-slate-400">
          Course Progress
        </span>
        <span className="font-bold text-slate-800 dark:text-white">
          {course.progress}%
        </span>
      </div>

      <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">
        <div
          className={`h-full rounded-full ${progressColor[course.color]}`}
          style={{ width: `${course.progress}%` }}
        />
      </div>

      <div className="mt-5 border-t border-slate-100 pt-4 dark:border-slate-800">
        <p className="text-xs text-slate-400">NEXT LESSON</p>
        <p className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-200">
          {course.nextLesson}
        </p>
      </div>

      <button className="mt-4 w-full rounded-xl bg-blue-50 py-2.5 text-sm font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white dark:bg-slate-800">
        Continue Learning →
      </button>
    </div>
  );
}

export default CourseCard;
