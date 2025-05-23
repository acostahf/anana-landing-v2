"use client";

import React from "react";
import { getQueryClient } from "@/libs/query";
import { QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const ReactQueryClientProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const queryClient = getQueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
    );
};
