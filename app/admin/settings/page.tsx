import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl font-bold text-[#E2E8F0]">Settings</h1>
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Notifications</CardTitle>
          <CardDescription>Configure email notification settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1.5">
            <Label>Admin Email</Label>
            <Input defaultValue="" placeholder="admin@example.com" readOnly />
            <p className="text-xs text-[#8B9CB8]">Set via ADMIN_EMAIL environment variable</p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Booking Window</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-[#8B9CB8]">Working Hours</span>
            <span className="text-[#E2E8F0]">09:00 AM – 06:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#8B9CB8]">Slot Duration</span>
            <span className="text-[#E2E8F0]">60 minutes</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#8B9CB8]">Working Days</span>
            <span className="text-[#E2E8F0]">Monday – Friday</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
