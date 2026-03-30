import * as React from "react";

export function BackgroundLines() {
    return (
        <div className="absolute inset-x-0 inset-y-0 pointer-events-none -z-10 overflow-hidden h-full">
            <div className="mx-auto h-full max-w-7xl flex justify-between px-6">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="w-px h-full bg-slate-200/90"
                        style={{
                            maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
