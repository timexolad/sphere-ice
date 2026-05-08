export function Button({ className = '', children }) {
    return (
        <button className={`btn ${className}`}>
            <span className="relative text-gray-300 flex items-center justify-center gap-2">
                {children}
            </span>
        </button>
    )
}