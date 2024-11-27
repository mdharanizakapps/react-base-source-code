import React from "react"
import { Button } from "../ui/button"
import { ZAKButtonComponent } from "../ui_library_generated_components/ButtonGenComponent"
import { ChevronRight, Loader2, Mail } from "lucide-react"

export const ButtonComponent = () => {
    return (
        <div className="flex gap-6 w-full">

            <div className="flex flex-col gap-6 w-1/2">
                <div className="text-center">
                    shadcn/ui Component
                </div>
                <div className="flex w-full">
                    <div className="flex gap-6 flex-col w-1/2">
                        <div className="text-center">
                            variant
                        </div>
                        <div className="flex">
                            <div className="w-40">default</div>
                            <div><Button variant="default">Button</Button></div>
                        </div>

                        <div className="flex">
                            <div className="w-40">destructive</div>
                            <div><Button variant="destructive">Button</Button></div>
                        </div>

                        <div className="flex">
                            <div className="w-40">outline</div>
                            <div><Button variant="outline">Button</Button></div>
                        </div>

                        <div className="flex">
                            <div className="w-40">secondary</div>
                            <div><Button variant="secondary">Button</Button></div>
                        </div>

                        <div className="flex">
                            <div className="w-40">ghost</div>
                            <div><Button variant="ghost">Button</Button></div>
                        </div>

                        <div className="flex">
                            <div className="w-40">link</div>
                            <div><Button variant="link">Link</Button></div>
                        </div>

                        <div className="flex">
                            <div className="w-40">Icon</div>
                            <div><Button variant="outline" size="icon"><ChevronRight /></Button></div>
                        </div>

                        <div className="flex">
                            <div className="w-40">With Icon</div>
                            <div><Button><Mail /> Login with Email</Button></div>
                        </div>

                        <div className="flex">
                            <div className="w-40">Loading</div>
                            <div> <Button disabled><Loader2 className="animate-spin" />Please wait</Button></div>
                        </div>
                    </div>


                    <div className="flex gap-6 flex-col w-1/2">
                        <div className="text-center">
                            size
                        </div>
                        <div className="flex">
                            <div className="w-40">default</div>
                            <div><Button size="default">Button</Button></div>
                        </div>

                        <div className="flex">
                            <div className="w-40">icon</div>
                            <div><Button size="icon"><ChevronRight /></Button></div>
                        </div>

                        <div className="flex">
                            <div className="w-40">lg</div>
                            <div><Button size="lg">Button</Button></div>
                        </div>

                        <div className="flex">
                            <div className="w-40">sm</div>
                            <div><Button size="sm">Button</Button></div>
                        </div>
                    </div>
                </div>
            </div>













            <div className="flex flex-col gap-6 w-1/2">
                <div className="text-center">
                    Generated Component
                </div>
                <div className="flex w-full">
                    <div className="flex gap-6 flex-col w-1/2">
                        <div className="text-center">
                            variant
                        </div>
                        <div className="flex">
                            <div className="w-40">default</div>
                            <div><ZAKButtonComponent variant="default">Button</ZAKButtonComponent></div>
                        </div>

                        <div className="flex">
                            <div className="w-40">destructive</div>
                            <div><ZAKButtonComponent variant="destructive">Button</ZAKButtonComponent></div>
                        </div>

                        <div className="flex">
                            <div className="w-40">outline</div>
                            <div><ZAKButtonComponent variant="outline">Button</ZAKButtonComponent></div>
                        </div>

                        <div className="flex">
                            <div className="w-40">secondary</div>
                            <div><ZAKButtonComponent variant="secondary">Button</ZAKButtonComponent></div>
                        </div>

                        <div className="flex">
                            <div className="w-40">ghost</div>
                            <div><ZAKButtonComponent variant="ghost">Button</ZAKButtonComponent></div>
                        </div>

                        <div className="flex">
                            <div className="w-40">link</div>
                            <div><ZAKButtonComponent variant="link">Link</ZAKButtonComponent></div>
                        </div>

                        <div className="flex">
                            <div className="w-40">Icon</div>
                            <div><ZAKButtonComponent variant="outline" size="icon"><ChevronRight /></ZAKButtonComponent></div>
                        </div>

                        <div className="flex">
                            <div className="w-40">With Icon</div>
                            <div><ZAKButtonComponent><Mail /> Login with Email</ZAKButtonComponent></div>
                        </div>

                        <div className="flex">
                            <div className="w-40">Loading</div>
                            <div> <ZAKButtonComponent disabled><Loader2 className="animate-spin" />Please wait</ZAKButtonComponent></div>
                        </div>
                    </div>


                    <div className="flex gap-6 flex-col w-1/2">
                        <div className="text-center">
                            size
                        </div>
                        <div className="flex">
                            <div className="w-40">default</div>
                            <div><ZAKButtonComponent size="default">Button</ZAKButtonComponent></div>
                        </div>

                        <div className="flex">
                            <div className="w-40">icon</div>
                            <div><ZAKButtonComponent size="icon"><ChevronRight /></ZAKButtonComponent></div>
                        </div>

                        <div className="flex">
                            <div className="w-40">lg</div>
                            <div><ZAKButtonComponent size="lg">Button</ZAKButtonComponent></div>
                        </div>

                        <div className="flex">
                            <div className="w-40">sm</div>
                            <div><ZAKButtonComponent size="sm">Button</ZAKButtonComponent></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}