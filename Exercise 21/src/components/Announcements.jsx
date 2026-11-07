
import { Megaphone, BookOpen, Bell } from "lucide-react";

function Announcements({ announcements }) {
  const icons = {
    info: Bell,
    course: BookOpen,
    reminder: Megaphone,
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Announcements
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Latest updates and news
          </p>
        </div>

        <Megaphone className="text-blue-600" />
      </div>

      <div className="space-y-6">
        {announcements.map((announcement) => {
          const Icon = icons[announcement.type];

          return (
            <div key={announcement.id} className="flex gap-3">
              <div className="relative">
                <div className="rounded-full bg-blue-100 p-2 text-blue-600 dark:bg-slate-800">
                  <Icon size={17} />
                </div>

                {announcement.id !== announcements.length && (
                  <div className="absolute left-1/2 top-10 h-10 w-px -translate-x-1/2 bg-slate-200 dark:bg-slate-700" />
                )}
              </div>

              <div className="flex-1">
                <h3 className="text-sm font-semibold text-slate-800 dark:text-white">
                  {announcement.title}
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  {announcement.message}
                </p>

                <p className="mt-2 text-xs font-medium text-blue-600">
                  {announcement.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Announcements;
