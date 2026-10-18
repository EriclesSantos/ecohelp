import React from 'react';

interface MobileFrameProps {
  children: React.ReactNode;
}

export function MobileFrame({ children }: MobileFrameProps) {
  return (
    <div className="h-dvh bg-[radial-gradient(circle_at_top,#d9efe0_0%,#edf4ef_35%,#f5f7f6_100%)] flex items-center justify-center md:p-6">
      <div className="w-full h-full bg-white overflow-hidden relative flex flex-col md:max-w-[390px] md:h-[844px] md:rounded-[40px] md:shadow-2xl md:border-[10px] md:border-gray-900">
        <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl z-50" />
          <p className="bg-amber-50 text-amber-950 text-center text-xs pt-2 md:pt-8 pb-2 px-3" role="note">
            Protótipo acadêmico · dados simulados
          </p>
        <div className="flex-1 min-h-0 overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
