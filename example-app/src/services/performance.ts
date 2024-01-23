export type Executable<T> = () => T

export function measureExecutionTime<T = void>(e: Executable<T>, label?: string): T {
    const start = performance.now()
    const result = e()
    const end = performance.now()

    if (!label) label = "Execution"
    console.log(`${label}: ${end - start}ms`)

    return result
}


export type AsyncExecutable<T> = () => Promise<T>

export async function measureExecutionTimeAsync<T = void>(e: AsyncExecutable<T>, label?: string): Promise<T> {
    const start = performance.now()
    const result = await e()
    const end = performance.now()

    if (!label) label = "Async execution"
    console.log(`${label}: ${end - start}ms`)

    return result
}
