import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const anomalies1 = [
  {
    title: "CTX-II",
    value: ">500 ng/mmol",
    status: "Critical",
    color: "red",
  },
  {
    title: "CRP",
    value: ">3 mg/L",
    status: "Critical",
    color: "red",
  },
  {
    title: "Aldolase A",
    value: ">8 U/L",
    status: "Critical",
    color: "red",
  },
];

const anomalies12 = [
  {
    title: "CTX-II",
    value: "<300 ng/mmol",
    status: "Good",
    color: "green",
  },
  {
    title: "CRP",
    value: "<1 mg/L (ideal)",
    status: "Good",
    color: "green",
  },
  {
    title: "Aldolase A",
    value: "1–7.5 U/L",
    status: "Good",
    color: "green",
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
        {anomalies1.map((item) => (
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

            <div className="flex w-60 justify-between gap-4">
              <div>
                <h3 className="text-[18px] font-semibold text-neutral-900">
                  {item.title}
                </h3>

                
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

export function AnomaliesCard12() {
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
        {anomalies12.map((item) => (
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

            <div className="flex w-60 justify-between gap-4">
              <div>
                <h3 className="text-[18px] font-semibold text-neutral-900">
                  {item.title}
                </h3>

                
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

const anomalies2 = [
  {
    title: "CK-MM",
    value: ">300 U/L",
    status: "Critical",
    color: "red",
  },
  {
    title: "Aldolase A",
    value: ">8 U/L",
    status: "Critical",
    color: "red",
  }, 
  {
    title: "CRP",
    value: ">3 mg/L",
    status: "Critical",
    color: "red",
  },
];

const anomalies22 = [
  {
    title: "CK-MM",
    value: "25–170 U/L",
    status: "Good",
    color: "green",
  },
  {
    title: "Aldolase A",
    value: "1–7.5 U/L",
    status: "Good",
    color: "green",
  }, 
  {
    title: "CRP",
    value: "<1 mg/L (ideal)",
    status: "Good",
    color: "green",
  },
];

export function AnomaliesCard2() {
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
        {anomalies2.map((item) => (
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

            <div className="flex w-60 justify-between gap-4">
              <div>
                <h3 className="text-[18px] font-semibold text-neutral-900">
                  {item.title}
                </h3>

                
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

export function AnomaliesCard22() {
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
        {anomalies22.map((item) => (
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

            <div className="flex w-60 justify-between gap-4">
              <div>
                <h3 className="text-[18px] font-semibold text-neutral-900">
                  {item.title}
                </h3>

                
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

const anomalies3 = [
  {
    title: "CTX-II",
    value: ">500 ng/mmol",
    status: "Critical",
    color: "red",
  },
  {
    title: "CRP",
    value: ">3 mg/L",
    status: "Critical",
    color: "red",
  },
  {
    title: "Aldolase A",
    value: ">8 U/L",
    status: "Critical",
    color: "red",
  },
];

const anomalies32 = [
  {
    title: "CTX-II",
    value: "<300 ng/mmol",
    status: "Good",
    color: "green",
  },
  {
    title: "CRP",
    value: "<1 mg/L (ideal)",
    status: "Good",
    color: "green",
  },
  {
    title: "Aldolase A",
    value: "1–7.5 U/L",
    status: "Good",
    color: "green",
  },
];

export function AnomaliesCard3() {
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
        {anomalies3.map((item) => (
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

            <div className="flex w-60 justify-between gap-4">
              <div>
                <h3 className="text-[18px] font-semibold text-neutral-900">
                  {item.title}
                </h3>

                
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

export function AnomaliesCard32() {
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
        {anomalies32.map((item) => (
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

            <div className="flex w-60 justify-between gap-4">
              <div>
                <h3 className="text-[18px] font-semibold text-neutral-900">
                  {item.title}
                </h3>

                
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

const anomalies4 = [
  {
    title: "CTX-II",
    value: ">500 ng/mmol",
    status: "Critical",
    color: "red",
  },
  {
    title: "CRP",
    value: ">3 mg/L",
    status: "Critical",
    color: "red",
  },
  {
    title: "Aldolase A",
    value: ">8 U/L",
    status: "Critical",
    color: "red",
  },
];

const anomalies42 = [
  {
    title: "CTX-II",
    value: "<300 ng/mmol",
    status: "Good",
    color: "green",
  },
  {
    title: "CRP",
    value: "<1 mg/L (ideal)",
    status: "Good",
    color: "green",
  },
  {
    title: "Aldolase A",
    value: "1–7.5 U/L",
    status: "Good",
    color: "green",
  },
];

export function AnomaliesCard4() {
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
        {anomalies4.map((item) => (
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

            <div className="flex w-60 justify-between gap-4">
              <div>
                <h3 className="text-[18px] font-semibold text-neutral-900">
                  {item.title}
                </h3>

                
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

export function AnomaliesCard42() {
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
        {anomalies42.map((item) => (
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

            <div className="flex w-60 justify-between gap-4">
              <div>
                <h3 className="text-[18px] font-semibold text-neutral-900">
                  {item.title}
                </h3>

                
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