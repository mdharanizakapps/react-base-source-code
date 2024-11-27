import React from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, Terminal } from "lucide-react"
import { ZAKAlertComponent, ZAKAlertDescriptionComponent, ZAKAlertTitleComponent } from "../ui_library_generated_components/AlertGenComponent"

// import { Alert } from "../ui/alert"


export const AlertComponent = () => {
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
                    <Alert>
                        <Terminal className="h-4 w-4" />
                        <AlertTitle>Heads up!</AlertTitle>
                        <AlertDescription>
                            You can add components and dependencies to your app using the cli.
                        </AlertDescription>
                    </Alert>
                </div>

                <div className=" flex gap-6">
                    <div className="w-40">
                        Destructive
                    </div>
                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>
                            Your session has expired. Please log in again.
                        </AlertDescription>
                    </Alert>
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
                    <ZAKAlertComponent>
                        <Terminal className="h-4 w-4" />
                        <ZAKAlertTitleComponent>Heads up!</ZAKAlertTitleComponent>
                        <ZAKAlertDescriptionComponent>
                            You can add components and dependencies to your app using the cli.
                        </ZAKAlertDescriptionComponent>
                    </ZAKAlertComponent>
                </div>

                <div className=" flex gap-6">
                    <div className="w-40">
                        Destructive
                    </div>
                    <ZAKAlertComponent variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <ZAKAlertTitleComponent>Error</ZAKAlertTitleComponent>
                        <ZAKAlertDescriptionComponent>
                            Your session has expired. Please log in again.
                        </ZAKAlertDescriptionComponent>
                    </ZAKAlertComponent>
                </div>

            </div>
        </div>



    )
}