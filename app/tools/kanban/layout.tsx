
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Kanban Board Online - Simple Task Management",
  description: "Personal Kanban board for to-do lists. Track tasks with 'To Do', 'In Progress', and 'Done' columns.",
};

export default function KanbanLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
