import {useEffect, useRef, useState} from "react";

type UsePreloaderOptions = {
    duration?: number;
    onFinish: () => void;
}

export const usePreloader = ({ duration = 400, onFinish, }:UsePreloaderOptions) => {
    const [progress, setProgress] = useState(0);

    const startTime = useRef<number | null>(null);
    const rafId = useRef<number | null>(null);
    const finished = useRef(false);
    const onFinishRef = useRef(onFinish);

    useEffect(() => {
        onFinishRef.current = onFinish;
    }, [onFinish])

    useEffect(() => {
        const animate = (time: number) => {
            if (startTime.current === null) {
                startTime.current = time;
            }

            const elapsed = time - startTime.current;
            const t = Math.min(elapsed / duration, 1);

            const eased = 1 - Math.pow(1 - t, 4);

            const value = 40 + eased * 55;
            setProgress(Math.min(value, 100));

            if (t < 1) {
                rafId.current = requestAnimationFrame(animate);
            } else if (!finished.current) {
                finished.current = true;
                setProgress(100);
                onFinishRef.current();
            }
        };

        rafId.current = requestAnimationFrame(animate);

        return () => {
            if (rafId.current) cancelAnimationFrame(rafId.current);
        };
    }, [duration]);
    return progress;
}
