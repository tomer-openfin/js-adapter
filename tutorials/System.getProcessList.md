Retrieves an array of all of the processes that are currently
running across all runtimes. Each element in the array is an object containing the uuid
and the name of the application to which the process belongs.
# Example
```js
fin.System.getProcessList().then(ProcessList => console.log(ProcessList)).catch(err => console.log(err));
```

### Response structure
```js
[
        {
        processId: 5346, // The native os process id.
        uuid: 'someUuid', // Parent app uuid
        name: 'someAppName', // Parent app name
        type: 'Browser', // Could be either 'Browser', 'Tab' or 'GPU'. Note that chrome developer tools fires up an additional tab process.
        runtimeVersion: 'stable',
        nonPagedPoolUsage: 113016,
        pageFaultCount: 114310, 
        pagedPoolUsage: 772200,
        pagefileUsage: 47882240,
        peakNonPagedPoolUsage: 115992,
        peakPagedPoolUsage: 836192,
        peakPagefileUsage: 67727360,
        peakWorkingSetSize: 121729024,
        workingSetSize: 110465024
        cpuUsage: 0.25, // Percentage of CPU used since the last call to getProcessList. First call returns 0.
    },
    // ...
]
```
All fields are optional
