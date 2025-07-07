"use client"

import { useRef } from "react";

// useDebouncedCallback - hook to debounce frequent calls (e.g., input events)
// Accepts a callback function and delay in milliseconds
// Returns a debounced version of the callback which delays execution
export function useDebouncedCallback<T extends (...args: never[]) => void>(
    callback: T,
    delay: number
): (...args: Parameters<T>) => void {
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

    return (...args: Parameters<T>) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}
