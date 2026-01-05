import { cn } from "@/lib/utils";

interface LightbulbProps {
	className?: string;
	size?: number;
	isOn?: boolean;
	color?: string;
}

const Lightbulb = ({
	className,
	size = 24,
	isOn = true,
	color = "currentColor",
}: LightbulbProps) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(className)}
		>
			{/* Lightbulb glass */}
			<path
				d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z"
				fill={isOn ? color : "none"}
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				opacity={isOn ? 0.3 : 1}
			/>
			{/* Filament */}
			<path
				d="M9 21h6"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M10 18h4"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			{/* Glow effect when on */}
			{isOn && (
				<circle
					cx="12"
					cy="9"
					r="3"
					fill={color}
					opacity="0.2"
				/>
			)}
		</svg>
	);
};

export { Lightbulb };

