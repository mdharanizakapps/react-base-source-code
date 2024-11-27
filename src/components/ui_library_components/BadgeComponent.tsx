import React from "react"
import { Badge } from "../ui/badge"
import { ZAKBadgeComponent } from "../ui_library_generated_components/BadgeGenComponent"

export const BadgeComponent = () => {

    return (
        <div className="flex gap-6 w-full">

            <div className="flex flex-col gap-6 w-1/2">
                <div className="text-center">
                    shadcn/ui Component
                </div>
                <div className="flex gap-6 flex-col">
                    <div className="flex">
                        <div className="w-40">default</div>
                        <div><Badge variant="default">Badge</Badge></div>
                    </div>

                    <div className="flex">
                        <div className="w-40">destructive</div>
                        <div><Badge variant="destructive">Badge</Badge></div>
                    </div>

                    <div className="flex">
                        <div className="w-40">outline</div>
                        <div><Badge variant="outline">Badge</Badge></div>
                    </div>

                    <div className="flex">
                        <div className="w-40">secondary</div>
                        <div><Badge variant="secondary">Badge</Badge></div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-6 w-1/2">
                <div className="text-center">
                    Generated Component
                </div>
                <div className="flex gap-6 flex-col">
                    <div className="flex">
                        <div className="w-40">default</div>
                        <div><ZAKBadgeComponent variant="default">Badge</ZAKBadgeComponent></div>
                    </div>

                    <div className="flex">
                        <div className="w-40">destructive</div>
                        <div><ZAKBadgeComponent variant="destructive">Badge</ZAKBadgeComponent></div>
                    </div>

                    <div className="flex">
                        <div className="w-40">outline</div>
                        <div><ZAKBadgeComponent variant="outline">Badge</ZAKBadgeComponent></div>
                    </div>
                    <div className="flex">
                        <div className="w-40">secondary</div>
                        <div><ZAKBadgeComponent variant="secondary">Badge</ZAKBadgeComponent></div>
                    </div>
                </div>
            </div>
        </div>
    )
}