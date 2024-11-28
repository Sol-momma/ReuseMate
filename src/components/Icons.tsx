import { LucideProps } from "lucide-react";

export const Icons = {
    logo: (props:LucideProps) => (
        <svg {...props} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <g>
            <path
                d="M120 100c40 30 10 100 -30 90s-50 -60 -20 -80 30 -40 50 -10z"
                fill="#60a5fa"
                opacity="1"
            ></path>
            <path
                d="M392 100c-40 30 -10 100 30 90s50 -60 20 -80 -30 -40 -50 -10z"
                fill="#60a5fa"
                opacity="1"
            ></path>

            <ellipse
                cx="256"
                cy="256"
                rx="140"
                ry="130"
                fill="#87befb"
                opacity="1"
            ></ellipse>
    
            <circle
                cx="210"
                cy="240"
                r="12"
                fill="#222222"
            ></circle>
            <circle
                cx="302"
                cy="240"
                r="12"
                fill="#222222"
            ></circle>
    
            <ellipse
                cx="256"
                cy="280"
                rx="15"
                ry="10"
                fill="#222222"
            ></ellipse>
    
            <path
                d="M240 300c10 20 40 20 50 0"
                fill="none"
                stroke="#222222"
                stroke-width="3"
            ></path>
    
            <path
                d="M150 360c20 50 160 50 200 0 40 0 50 -80 0 -100H150c-50 20 -40 100 0 100z"
                fill="#558ce7"
                opacity="1"
            ></path>
        </g>
    </svg>
    ),
}
