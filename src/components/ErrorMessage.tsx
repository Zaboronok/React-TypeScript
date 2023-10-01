interface ErrorMessage {
    error: string
}

export function ErrorMessage({ error }: ErrorMessage) {
    return (
        <p className="text-center text-red-600">{error}</p>
    )
}