// Component - Logo da empresa com efeito hover
'use client';

export function Logo() {
    return (
        <div className="flex flex-col items-center gap-4 mb-8">
            <div className="group cursor-pointer">
                <svg
                    className="w-16 h-16 text-green-500 transition-transform duration-300 group-hover:scale-110"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12 21.35c-4.42 0-8-3.58-8-8 0-4.42 3.58-8 8-8s8 3.58 8 8c0 4.42-3.58 8-8 8zM12 5.35c-2.93 0-5.32 2.39-5.32 5.35 0 1.93.99 3.65 2.5 4.67C9.18 16.31 10.5 17 12 17c1.5 0 2.82-.69 3.82-1.63 1.51-1.02 2.5-2.74 2.5-4.67 0-2.96-2.39-5.35-5.32-5.35z" />
                </svg>
            </div>
            <h1 className="text-4xl font-bold text-green-500">EverLeaf</h1>
        </div>
    );
}
