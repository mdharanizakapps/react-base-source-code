import React from "react"
import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "../ui/breadcrumb"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu"

import {
    ZAKBreadcrumbComponent,
    ZAKBreadcrumbEllipsisComponent,
    ZAKBreadcrumbItemComponent,
    ZAKBreadcrumbLinkComponent,
    ZAKBreadcrumbListComponent,
    ZAKBreadcrumbPageComponent,
    ZAKBreadcrumbSeparatorComponent,
} from "../ui_library_generated_components/BreadcrumbGenComponent"

import {
    ZAKDropdownMenuComponent,
    ZAKDropdownMenuContentComponent,
    ZAKDropdownMenuItemComponent,
    ZAKDropdownMenuTriggerComponent,
} from "../ui_library_generated_components/DropdownMenuGenComponent"

{/* <>
    
</> */}

export const BreadcrumbComponent = () => {
    return (
        <div className="flex gap-6 w-full">

            <div className="flex flex-col gap-6 w-1/2">
                <div className="text-center">
                    Generated Component
                </div>
                <div className="flex gap-6 flex-col">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="flex items-center gap-1">
                                        <BreadcrumbEllipsis className="h-4 w-4" />
                                        <span className="sr-only">Toggle menu</span>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="start">
                                        <DropdownMenuItem>Documentation</DropdownMenuItem>
                                        <DropdownMenuItem>Themes</DropdownMenuItem>
                                        <DropdownMenuItem>GitHub</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            <div className="flex flex-col gap-6 w-1/2">
                <div className="text-center">
                    Generated Component
                </div>
                <div className="flex gap-6 flex-col">
                    <ZAKBreadcrumbComponent>
                        <ZAKBreadcrumbListComponent>
                            <ZAKBreadcrumbItemComponent>
                                <ZAKBreadcrumbLinkComponent href="/">Home</ZAKBreadcrumbLinkComponent>
                            </ZAKBreadcrumbItemComponent>
                            <ZAKBreadcrumbSeparatorComponent />
                            <ZAKBreadcrumbItemComponent>
                                <ZAKDropdownMenuComponent>
                                    <ZAKDropdownMenuTriggerComponent className="flex items-center gap-1">
                                        <ZAKBreadcrumbEllipsisComponent className="h-4 w-4" />
                                        <span className="sr-only">Toggle menu</span>
                                    </ZAKDropdownMenuTriggerComponent>
                                    <ZAKDropdownMenuContentComponent align="start">
                                        <ZAKDropdownMenuItemComponent>Documentation</ZAKDropdownMenuItemComponent>
                                        <ZAKDropdownMenuItemComponent>Themes</ZAKDropdownMenuItemComponent>
                                        <ZAKDropdownMenuItemComponent>GitHub</ZAKDropdownMenuItemComponent>
                                    </ZAKDropdownMenuContentComponent>
                                </ZAKDropdownMenuComponent>
                            </ZAKBreadcrumbItemComponent>
                            <ZAKBreadcrumbSeparatorComponent />
                            <ZAKBreadcrumbItemComponent>
                                <ZAKBreadcrumbLinkComponent href="/docs/components">Components</ZAKBreadcrumbLinkComponent>
                            </ZAKBreadcrumbItemComponent>
                            <ZAKBreadcrumbSeparatorComponent />
                            <ZAKBreadcrumbItemComponent>
                                <ZAKBreadcrumbPageComponent>Breadcrumb</ZAKBreadcrumbPageComponent>
                            </ZAKBreadcrumbItemComponent>
                        </ZAKBreadcrumbListComponent>
                    </ZAKBreadcrumbComponent>
                </div>
            </div>
        </div>
    )
} 