
import { useState } from "react";
import { ClipboardList, CheckCircle2, Clock, Circle } from "lucide-react";

function AssignmentTracker({ assignments, setAssignments }) {
  const [filter, setFilter] = useState("all");

  const filteredAssignments =
    filter === "all"
      ? assignments
      : assignments.filter((item) => item.status === filter);

  const statusStyles = {
    pending: "bg-orange-100 text-orange-600",
    "in-progress": "bg-blue-100 text-blue-600",
    completed: "bg-green-100 text-green-600",
  };

  const statusIcons = {
    pending: Clock,
    "in-progress": Circle,
    completed: CheckCircle2,
  };

  function changeStatus(id) {
    setAssignments((previous) =>
      previous.map((item) => {
        if (item.id !== id) return item;

        const nextStatus = {
          pending: "in-progress",
          "in-progress": "completed",
          completed: "pending",
        };

        return {
          ...item,
          status: nextStatus[item.status],
        };
      })
    );
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Assignment Tracker
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Keep track of your tasks
          </p>
        </div>

        <ClipboardList className="text-blue-600" />
      </div>

      <div className="mb-5 flex flex-wrap gap-2">
        {["all", "pending", "in-progress", "completed"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`rounded-lg px-3 py-2 text-xs font-semibold capitalize transition ${
              filter === item
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300"
            }`}
          >
            {item === "all" ? "All" : item.replace("-", " ")}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filteredAssignments.map((assignment) => {
          const Icon = statusIcons[assignment.status];

          return (
            <div
              key={assignment.id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-100 p-3 dark:border-slate-800"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-blue-50 p-2 text-blue-600 dark:bg-slate-800">
                  <ClipboardList size={20} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-800 dark:text-white">
                    {assignment.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    {assignment.course}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Due: {assignment.dueDate}
                  </p>
                </div>
              </div>

              <button
                onClick={() => changeStatus(assignment.id)}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ${statusStyles[assignment.status]}`}
              >
                <Icon size={13} />
                {assignment.status.replace("-", " ")}
              </button>
            </div>
          );
        })}

        {filteredAssignments.length === 0 && (
          <p className="py-8 text-center text-sm text-slate-400">
            No assignments found.
          </p>
        )}
      </div>
    </section>
  );
}

export default AssignmentTracker;
