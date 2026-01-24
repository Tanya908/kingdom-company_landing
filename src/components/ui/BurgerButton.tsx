type BurgerButtonProps = {
    isOpen: boolean
    onClick: () => void
    size?: number
    color?: string

}

const BurgerButton = ({ isOpen, onClick, size = 32, color = "#060D16" }: BurgerButtonProps) => {
    const common = {
        transformBox: "fill-box" as const,
        transformOrigin: "center" as const,
    }

    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="grid place-items-center"
            style={{ width: size, height: size }}
        >
            <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
                {/* TOP */}
                <rect
                    x="0"
                    y="8.5"
                    width="32"
                    height="2"
                    rx="1"
                    fill={color}
                    style={common}
                    className={`transition-transform duration-300 ease-in-out ${
                        isOpen
                            ? "translate-y-[6px] rotate-45 scale-x-[0.75]"
                            : "translate-y-0 rotate-0 scale-x-100"
                    }`}
                />
                {/* MIDDLE */}
                <rect
                    x="0"
                    y="14.5"
                    width="32"
                    height="2"
                    rx="1"
                    fill={color}
                    style={common}
                    className={`transition-all duration-200 ease-in-out ${
                        isOpen ? "opacity-0 scale-x-[0.5]" : "opacity-100 scale-x-100"
                    }`}
                />
                {/* BOTTOM */}
                <rect
                    x="0"
                    y="20.5"
                    width="32"
                    height="2"
                    rx="1"
                    fill={color}
                    style={common}
                    className={`transition-transform duration-300 ease-in-out ${
                        isOpen
                            ? "-translate-y-[6px] -rotate-45 scale-x-[0.75]"
                            : "translate-y-0 rotate-0 scale-x-100"
                    }`}
                />
            </svg>
        </button>
    )
}

export default BurgerButton
