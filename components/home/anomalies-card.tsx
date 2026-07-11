import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const anomalies = [
  {
    title: "Aldolase A",
    value: "3.158 ng/mL",
    status: "Critical",
    color: "red",
  },
  {
    title: "HbA1c",
    value: "7.5 %",
    status: "Elevated",
    color: "yellow",
  },
  {
    title: "HDL",
    value: "134.3 mg/dL",
    status: "Elevated",
    color: "yellow",
  },
];

export function AnomaliesCard1() {
  return (
    <Card className="w-full max-w-md rounded-xl border border-neutral-200 shadow-[inset_0_1px_4px_rgba(255,255,255,0.3),inset_0_0_0_1px_rgba(255,255,255,0.2),inset_0_-2px_8px_rgba(255,255,255,0.2),0_6px_10px_rgba(0,0,0,0.05)] bg-white/20 backdrop-blur-sm p-2">
       <div className="p-4 bg-white rounded-md">
      <div className="flex mb-4 items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-md font-semibold tracking-tight text-neutral-900">
            Anomalies Detected
          </h1> 
          <span className="h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse" />
        </div>

        <button className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700">
          Explore
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div className="space-y-2">
        {anomalies.map((item) => (
          <div
            key={item.title}
            className="relative overflow-hidden border border-neutral-100 bg-white p-3"
          >
             
            <div
              className={`absolute left-0 top-0 h-full w-1 ${
                item.color === "red"
                  ? "bg-red-500"
                  : "bg-amber-400"
              }`}
            />

            <div className="flex justify-between gap-4">
              <div>
                <h3 className="text-[18px] font-semibold text-neutral-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-[15px] text-neutral-500">
                  Ref: Not Available
                </p>
              </div>

              <div className="flex flex-col items-end">
                <span className="text-[18px] font-semibold text-neutral-900">
                  {item.value}
                </span>

                <Badge
                  className={`mt-4 rounded-full px-4 py-1 text-sm font-medium border ${
                    item.color === "red"
                      ? "border-red-300 bg-red-100 text-red-600 hover:bg-red-100"
                      : "border-amber-300 bg-amber-100 text-amber-700 hover:bg-amber-100"
                  }`}
                >
                  {item.status}
                </Badge>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </Card>
  );
}