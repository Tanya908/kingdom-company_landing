import MainLogo from "@/assets/MainLogo.svg?react";
import { useState } from "react";
import { usePreloader } from "../../hooks/usePreloader";

type PreloaderProps = {
    onFinish: () => void;
};

const Preloader = ({ onFinish }: PreloaderProps) => {
    const [visible, setVisible] = useState(true);

    const progress = usePreloader({
        duration: 400,
        onFinish: () => setVisible(false),
    });

    return (
        <div
            onTransitionEnd={() => {
                if (!visible) onFinish();
            }}
            className={`section-x fixed inset-0 z-50 flex items-center justify-center flex-col bg-[var(--color-white)]
                        transition-opacity duration-50 ${visible ? "opacity-100 " : "opacity-0 pointer-events-none"}`}
        >
            <MainLogo className="text-[var(--color-black)] max-w-sm" />

            <div className="w-full max-w-md h-5 bg-[var(--color-gray)] overflow-hidden px-2 py-1.5 mt-16 rounded-3xl">
                <div className="w-full h-full overflow-hidden rounded-full">
                    <div
                        className="bg-[var(--color-black)] h-full rounded-full origin-left"
                        style={{
                            transform: `scaleX(${progress / 100})`,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Preloader;
