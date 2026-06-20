"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

interface AdminHeaderProps {
  user?: { name?: string | null; email?: string | null } | null;
}

export default function AdminHeader({ user }: AdminHeaderProps) {
  const router = useRouter();

  const handleSignOut = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <header className="h-16 border-b border-white/7 bg-[#080D1A] flex items-center justify-between px-6">
      <h1 className="text-sm text-[#8B9CB8]">
        Welcome back, <span className="text-[#E2E8F0] font-medium">{user?.name ?? user?.email}</span>
      </h1>
      <Button variant="ghost" size="sm" onClick={handleSignOut}>
        <LogOut className="h-4 w-4 mr-2" />
        Sign Out
      </Button>
    </header>
  );
}
