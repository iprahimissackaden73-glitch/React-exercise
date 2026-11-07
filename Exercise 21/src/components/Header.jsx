
import {
  Bell,
  Search,
  Menu,
  Moon,
  Sun,
} from "lucide-react";

function Header({
  darkMode,
  setDarkMode,
  setOpen,
  search,
  setSearch,
}) {
  return (
    <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setOpen(true)}
          className="rounded-lg p-2 hover:bg-slate-200 dark:hover:bg-slate-800 lg:hidden"
        >
          <Menu />
        </button>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Welcome back, Ibrahim! 👋
          </h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Here's what's happening with your learning today.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 sm:flex dark:border-slate-700 dark:bg-slate-900">
          <Search size={18} className="text-slate-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search courses..."
            className="w-36 bg-transparent text-sm outline-none dark:text-white"
          />
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="rounded-xl border border-slate-200 bg-white p-3 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
        >
          {darkMode ? <Sun size={19} /> : <Moon size={19} />}
        </button>

        <button className="relative rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900 dark:text-white">
          <Bell size={19} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
            I
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-slate-800 dark:text-white">
              Ibrahim
            </p>
            <p className="text-xs text-slate-500">Student</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
