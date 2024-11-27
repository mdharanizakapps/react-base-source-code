import React from "react"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion"
import { ZAKAccordionComponent, ZAKAccordionContentComponent, ZAKAccordionItemComponent, ZAKAccordionTriggerComponent } from "../ui_library_generated_components/AccordionGenComponent"

// import { Alert } from "../ui/alert"


export const AccordionComponent = () => {
    return (
        <div className="flex gap-6 w-full">

            <div className="flex flex-col gap-6 w-1/2">
                <div className="text-center">
                    shadcn/ui Component
                </div>

                <div className="flex gap-6  w-full" >
                    {/* <div className="w-40">
                        Default
                    </div> */}
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Is it styled?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It comes with default styles that matches the other
                                components&apos; aesthetic.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Is it animated?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It&apos;s animated by default, but you can disable it if you
                                prefer.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                {/* <div className=" flex gap-6">
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
                </div> */}

            </div>
            <div className="flex flex-col gap-6  w-1/2">
                <div className="text-center">
                    Generated Component
                </div>
                <div className="flex gap-6 w-full">
                    {/* <div className="w-40">
                        Default
                    </div> */}
                    <ZAKAccordionComponent type="single" collapsible className="w-full">
                        <ZAKAccordionItemComponent value="item-1">
                            <ZAKAccordionTriggerComponent>Is it accessible?</ZAKAccordionTriggerComponent>
                            <ZAKAccordionContentComponent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </ZAKAccordionContentComponent>
                        </ZAKAccordionItemComponent>
                        <ZAKAccordionItemComponent value="item-2">
                            <ZAKAccordionTriggerComponent>Is it styled?</ZAKAccordionTriggerComponent>
                            <ZAKAccordionContentComponent>
                                Yes. It comes with default styles that matches the other
                                components&apos; aesthetic.
                            </ZAKAccordionContentComponent>
                        </ZAKAccordionItemComponent>
                        <ZAKAccordionItemComponent value="item-3">
                            <ZAKAccordionTriggerComponent>Is it animated?</ZAKAccordionTriggerComponent>
                            <ZAKAccordionContentComponent>
                                Yes. It&apos;s animated by default, but you can disable it if you
                                prefer.
                            </ZAKAccordionContentComponent>
                        </ZAKAccordionItemComponent>
                    </ZAKAccordionComponent>
                </div>

                {/* <div className=" flex gap-6">
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
                </div> */}

            </div>
        </div>



    )
}