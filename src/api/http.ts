const BASE_URL = "http://localhost:5000/api";

export async function http<T>(
    endpoint: string,
    options?: RequestInit
): Promise<T> {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
        headers: {
            "Content-Type": "application/json",
            ...options?.headers,
        },
        ...options,
    });

    if (!res.ok) {
        const message = await res.text();
        throw new Error(message || "Server error");
    }

    return res.json();
}
