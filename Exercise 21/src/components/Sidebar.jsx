
import {
  LayoutDashboard,
  BookOpen,
  ClipboardList,
  Megaphone,
  Settings,
  LogOut,
  GraduationCap,
  X,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "My Courses", icon: BookOpen },
  { name: "Assignments", icon: ClipboardList },
  { name: "Announcements", icon: Megaphone },
  { name: "Settings", icon: Settings },
];

function Sidebar({ activePage, setActivePage, open, setOpen }) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-64 flex-col
        border-r border-slate-200 bg-white p-5 transition-transform
        dark:border-slate-800 dark:bg-slate-900
        ${open ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      >
        <div className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-600 p-2 text-white">
              <GraduationCap size={26} />
            </div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">
              Edu<span className="text-blue-600">Space</span>
            </h1>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="lg:hidden"
          >
            <X />
          </button>
        </div>

        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Menu
        </p>

        <nav className="flex-1 space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = activePage === item.name;

            return (
              <button
                key={item.name}
                onClick={() => {
                  setActivePage(item.name);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition
                ${
                  active
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-none"
                    : "text-slate-500 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                }`}
              >
                <Icon size={19} />
                {item.name}
              </button>
            );
          })}
        </nav>

        <div className="rounded-2xl bg-blue-50 p-4 dark:bg-slate-800">
          <p className="font-semibold text-slate-800 dark:text-white">
            Keep Learning!
          </p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Small progress every day leads to big results.
          </p>
        </div>

        <button className="mt-5 flex items-center gap-3 rounded-xl p-3 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-slate-800">
          <LogOut size={19} />
          Logout
        </button>
      </aside>
    </>
  );
}

export default Sidebar;
