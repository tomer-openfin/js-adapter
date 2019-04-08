export interface ProcessInfo {
    processId?: number;
    uuid?: string;
    name?: string;
    type?: string;
    runtimeVersion?: string;
    nonPagedPoolUsage?: number;
    pageFaultCount?: number;
    pagedPoolUsage?: number;
    pagefileUsage?: number;
    peakNonPagedPoolUsage?: number;
    peakPagedPoolUsage?: number;
    peakPagefileUsage?: number;
    peakWorkingSetSize?: number;
    cpuUsage?: number;
    workingSetSize?: number;
}
