export const dynamic = "force-dynamic";

import { getSession } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();

  // No session = login page (middleware guards all other /admin routes)
  if (!session) return <>{children}</>;

  const pendingCount = await prisma.booking.count({ where: { status: "PENDING" } }).catch(() => 0);

  return (
    <div className="min-h-screen bg-[#080D1A] flex">
      <AdminSidebar pendingCount={pendingCount} />
      <div className="flex-1 flex flex-col ml-0 lg:ml-64">
        <AdminHeader user={{ email: session.email }} />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
