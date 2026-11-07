
import { useState } from "react";

import {
  BookOpen,
  ClipboardCheck,
  Trophy,
  Clock,
} from "lucide-react";

import Sidebar from "./Sidebar";
import Header from "./Header";
import StatCard from "./StatCard";
import CourseCard from "./CourseCard";
import AssignmentTracker from "./AssignmentTracker";
import Announcements from "./Announcements";

import {
  courses,
  initialAssignments,
  announcements,
} from "./dashboardData";

function Dashboard() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [assignments, setAssignments] = useState(initialAssignments);
  const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [sortByProgress, setSortByProgress] = useState(false);

  const completedAssignments = assignments.filter(
    (item) => item.status === "completed"
  ).length;

  const filteredCourses = courses
    .filter((course) =>
      course.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      sortByProgress ? b.progress - a.progress : a.id - b.id
    );

  const stats = [
    {
      title: "Enrolled Courses",
      value: courses.length,
      subtitle: "Currently learning",
      icon: BookOpen,
      color: "blue",
    },
    {
      title: "Completed Tasks",
      value: completedAssignments,
      subtitle: "Assignments finished",
      icon: ClipboardCheck,
      color: "green",
    },
    {
      title: "Learning Progress",
      value: "68%",
      subtitle: "Overall performance",
      icon: Trophy,
      color: "purple",
    },
    {
      title: "Study Hours",
      value: "24h",
      subtitle: "This week",
      icon: Clock,
      color: "orange",
    },
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950">

        <Sidebar
          activePage={activePage}
          setActivePage={setActivePage}
          open={open}
          setOpen={setOpen}
        />

        <main className="min-h-screen p-4 sm:p-6 lg:ml-64 lg:p-8">

          <Header
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            setOpen={setOpen}
            search={search}
            setSearch={setSearch}
          />

          {activePage === "Dashboard" && (
            <>
              <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat) => (
                  <StatCard key={stat.title} {...stat} />
                ))}
              </section>

              <section className="mb-8">
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                      My Courses
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">
                      Continue where you left off.
                    </p>
                  </div>

                  <button
                    onClick={() => setSortByProgress(!sortByProgress)}
                    className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                  >
                    {sortByProgress ? "Highest Progress ↓" : "Sort by Progress"}
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {filteredCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>

                {filteredCourses.length === 0 && (
                  <p className="py-8 text-center text-slate-500">
                    No courses found.
                  </p>
                )}
              </section>

              <section className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                <AssignmentTracker
                  assignments={assignments}
                  setAssignments={setAssignments}
                />

                <Announcements announcements={announcements} />
              </section>
            </>
          )}

          {activePage === "My Courses" && (
            <section>
              <h2 className="mb-5 text-xl font-bold text-slate-900 dark:text-white">
                My Courses
              </h2>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </section>
          )}

          {activePage === "Assignments" && (
            <AssignmentTracker
              assignments={assignments}
              setAssignments={setAssignments}
            />
          )}

          {activePage === "Announcements" && (
            <Announcements announcements={announcements} />
          )}

          {activePage === "Settings" && (
            <section className="rounded-2xl bg-white p-6 dark:bg-slate-900">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Settings
              </h2>

              <div className="mt-5 flex items-center justify-between">
                <p className="text-slate-700 dark:text-slate-300">
                  Enable Dark Mode
                </p>

                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="rounded-xl bg-blue-600 px-4 py-2 text-white"
                >
                  {darkMode ? "Turn Off" : "Turn On"}
                </button>
              </div>
            </section>
          )}

          <footer className="mt-10 border-t border-slate-200 py-5 text-center text-xs text-slate-400 dark:border-slate-800">
            © 2026 EduSpace. Keep learning, keep growing.
          </footer>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
