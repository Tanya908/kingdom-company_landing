import { motion, useTransform, MotionValue } from "framer-motion";

type AnimatedWordProps = {
    word: string;
    index: number;
    total: number;
    progress: MotionValue<number>;
};

const AnimatedWord = ({ word, index, total, progress }: AnimatedWordProps) => {
    const start = index / total;
    const end = start + 1 / total;

    const color = useTransform(
        progress,
        [start, end],
        ["var(--color-gray)", "var(--color-black)"]
    );

    return (
        <motion.span style={{ color }}>
            {word}{" "}
        </motion.span>
    );
};

export default AnimatedWord;
