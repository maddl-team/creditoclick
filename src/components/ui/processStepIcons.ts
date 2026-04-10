import { ClipboardList, FileText, Send, UserCheck } from "lucide-react";

export const PROCESS_STEP_ICON_MAP = {
    clipboardList: ClipboardList,
    userCheck: UserCheck,
    fileText: FileText,
    send: Send,
} as const;

export type ProcessStepIconKey = keyof typeof PROCESS_STEP_ICON_MAP;
