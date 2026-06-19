import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-[#080D1A] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <CheckCircle2 className="h-20 w-20 text-green-400 mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-[#E2E8F0] mb-3">Payment Successful!</h1>
        <p className="text-[#8B9CB8] mb-8">Your booking and payment are confirmed. Check your email for details.</p>
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </main>
  );
}
