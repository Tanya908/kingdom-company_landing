import ButtonIcon from "@/assets/icons/ButtonIcon.svg?react";

type ButtonVariant = "primary" | "secondary" | "primaryOutlined";

type ButtonProps = {
    children: React.ReactNode;
    variant?: ButtonVariant;
    href?: string;
    onClick?: () => void;
    className?: string;
    showIcon?: boolean;
    type?: "button" | "submit"
    disabled?: boolean;
};

export default function Button({
                                   children,
                                   variant = "primary",
                                   href,
                                   onClick,
                                   className = "",
                                   showIcon = true,
                                   type = "button",
                                   disabled = false,
                               }: ButtonProps) {

    const variantClass = {
        primary: "button-primary",
        secondary: "button-secondary",
        primaryOutlined: "button-primaryOutlined",
    };

    const classes = ` button-base ${variantClass[variant]} ${className} `;

    const content = (
        <>
            {children}
            {showIcon && (
                <ButtonIcon className="w-4 h-4 text-current" />
            )}
        </>
    );

    if (href) {
        return (
            <a href={href} className={classes} type={type} onClick={onClick}>
                {content}
            </a>
        );
    }

    return (
        <button onClick={onClick}  className={classes} disabled={disabled}>
            {content}
        </button>
    );
}
