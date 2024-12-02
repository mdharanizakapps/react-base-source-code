import React from "react";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "../ui/avatar"
import { ZAKAvatarComponent, ZAKAvatarFallbackComponent, ZAKAvatarImageComponent } from "../ui_library_generated_components/AvatarGenComponent"

export const AvatarComponent = () => {
    return (
        <div className="flex gap-6 w-full">

            <div className="flex flex-col gap-6 w-1/2">
                <div className="text-center">
                    shadcn/ui Component
                </div>
                <div className="flex gap-6">
                    <div className="w-40">
                        Default
                    </div>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>

            <div className="flex flex-col gap-6 w-1/2">
                <div className="text-center">
                    Generated Component
                </div>
                <div className="flex gap-6">
                    <div className="w-40">
                        Default
                    </div>
                    <ZAKAvatarComponent>
                        <ZAKAvatarImageComponent src="https://github.com/shadcn.png" alt="@shadcn" />
                        <ZAKAvatarFallbackComponent>CN</ZAKAvatarFallbackComponent>
                    </ZAKAvatarComponent>
                </div>
            </div>
        </div>
    )
}