export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default async function ServicesPage() {
  const services = await prisma.service.findMany({ orderBy: { name: "asc" } });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#E2E8F0]">Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.length === 0 && (
          <div className="col-span-full text-center py-12 text-[#8B9CB8]">
            No services yet. Seed the database to add services.
          </div>
        )}
        {services.map((s) => (
          <Card key={s.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">{s.name}</CardTitle>
                <Badge variant={s.active ? "confirmed" : "secondary"}>{s.active ? "Active" : "Inactive"}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              {s.description && <p className="text-[#8B9CB8]">{s.description}</p>}
              <div className="flex justify-between">
                <span className="text-[#8B9CB8]">Price</span>
                <span className="text-[#E2E8F0] font-medium">£{s.price.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8B9CB8]">Duration</span>
                <span className="text-[#E2E8F0]">{s.duration} min</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
