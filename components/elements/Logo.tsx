import Link from "next/link";

type LogoProps = {
    className?: string;
    width?: number;
    height?: number;
};

export default function Logo({ className = "", width = 186, height = 36 }: LogoProps) {
    return (
        <Link href="/" className={className}>
            <svg
                width={width}
                height={height}
                viewBox="0 0 186 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Gradient definitions */}
                <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00D4FF" />
                        <stop offset="100%" stopColor="#8338EC" />
                    </linearGradient>
                    <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#00D4FF" />
                        <stop offset="50%" stopColor="#ffffff" />
                        <stop offset="100%" stopColor="#FF006E" />
                    </linearGradient>
                </defs>

                {/* Logo Icon - Modern geometric design */}
                <g>
                    {/* Outer circle */}
                    <circle cx="18" cy="18" r="16" fill="url(#logoGradient)" opacity="0.2" />

                    {/* Main icon shape */}
                    <circle cx="18" cy="18" r="12" fill="none" stroke="url(#logoGradient)" strokeWidth="2" />

                    {/* Inner design - tech inspired */}
                    <path
                        d="M 18 10 L 22 14 L 18 18 L 14 14 Z"
                        fill="url(#logoGradient)"
                    />
                    <path
                        d="M 18 18 L 22 22 L 18 26 L 14 22 Z"
                        fill="url(#logoGradient)"
                        opacity="0.7"
                    />

                    {/* Accent dots */}
                    <circle cx="10" cy="18" r="1.5" fill="#00D4FF" />
                    <circle cx="26" cy="18" r="1.5" fill="#FF006E" />
                </g>

                {/* Text - "Nexus" */}
                <text
                    x="42"
                    y="24"
                    fontFamily="Space Grotesk, sans-serif"
                    fontSize="20"
                    fontWeight="700"
                    fill="url(#textGradient)"
                    letterSpacing="0.5"
                >
                    Nexus
                </text>
            </svg>
        </Link>
    );
}
