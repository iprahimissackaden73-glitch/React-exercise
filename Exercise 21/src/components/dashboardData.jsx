
export const courses = [
  {
    id: 1,
    name: "React.js Development",
    instructor: "John Smith",
    progress: 75,
    nextLesson: "React Hooks",
    color: "blue",
    icon: "⚛️",
  },
  {
    id: 2,
    name: "JavaScript Fundamentals",
    instructor: "Sarah Johnson",
    progress: 90,
    nextLesson: "Async JavaScript",
    color: "yellow",
    icon: "🟨",
  },
  {
    id: 3,
    name: "UI/UX Design",
    instructor: "Michael Brown",
    progress: 45,
    nextLesson: "Design Systems",
    color: "purple",
    icon: "🎨",
  },
  {
    id: 4,
    name: "Python Programming",
    instructor: "David Wilson",
    progress: 60,
    nextLesson: "Python Functions",
    color: "green",
    icon: "🐍",
  },
];

export const initialAssignments = [
  {
    id: 1,
    title: "Build React Todo App",
    course: "React.js Development",
    dueDate: "Nov 10, 2026",
    status: "pending",
  },
  {
    id: 2,
    title: "JavaScript Array Methods",
    course: "JavaScript Fundamentals",
    dueDate: "Nov 12, 2026",
    status: "in-progress",
  },
  {
    id: 3,
    title: "Create Landing Page",
    course: "UI/UX Design",
    dueDate: "Nov 14, 2026",
    status: "completed",
  },
  {
    id: 4,
    title: "Python Functions Exercise",
    course: "Python Programming",
    dueDate: "Nov 16, 2026",
    status: "pending",
  },
];

export const announcements = [
  {
    id: 1,
    title: "Welcome to your Learning Dashboard!",
    message: "Your learning journey starts here. Keep learning every day.",
    time: "2 hours ago",
    type: "info",
  },
  {
    id: 2,
    title: "New React Course Available",
    message: "A new advanced React course has been added.",
    time: "Yesterday",
    type: "course",
  },
  {
    id: 3,
    title: "Assignment Reminder",
    message: "Remember to complete your upcoming assignments.",
    time: "2 days ago",
    type: "reminder",
  },
];
