import { CheckCircle, AlertCircle, Loader2, User } from "lucide-react"
import { cn } from "@/lib/utils"

interface AttendanceStatusProps {
  status: "idle" | "detecting" | "recognized" | "unknown"
}

export function AttendanceStatus({ status }: AttendanceStatusProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium",
        status === "idle" && "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
        status === "detecting" && "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300",
        status === "recognized" && "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300",
        status === "unknown" && "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300",
      )}
    >
      {status === "idle" && (
        <>
          <User className="h-4 w-4" />
          <span>Ready</span>
        </>
      )}
      {status === "detecting" && (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>Detecting...</span>
        </>
      )}
      {status === "recognized" && (
        <>
          <CheckCircle className="h-4 w-4" />
          <span>Recognized</span>
        </>
      )}
      {status === "unknown" && (
        <>
          <AlertCircle className="h-4 w-4" />
          <span>Unknown Face</span>
        </>
      )}
    </div>
  )
}
