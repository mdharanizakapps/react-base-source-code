import { useEffect, useState } from "react"
import { ComponentModel, Variant } from "../../../pages/ProjectGenerator"
import { Button as NewButton } from "./DefaultComponents/ui/button"



export const PreviewComponent = ({ currentComponentModel, componentName, variant }: {
    currentComponentModel: ComponentModel
    componentName: string,
    variant: Variant
}) => {

    // const [primaryColor, setPrimaryColor] = useState('pink'); // Default color

    // useEffect(() => {
    //     // Dynamically update the CSS variable when primaryColor changes
    //     document.documentElement.style.setProperty('--primary-color', primaryColor);
    // }, [primaryColor]);

    console.log("variant: ", variant)
    console.log("currentComponentModel: ", currentComponentModel)
    const [defaultValues, setDefaultValues] = useState(''); // Default color


    useEffect(() => {

        console.log("inside useEffect: ")
        let defaultValue = ""
        currentComponentModel?.variants?.map((item) => {
            // console.log("inside currentComponentModel :", item.name)
            defaultValue = defaultValue + `${item.value.default}`
        })
        console.log("inside useEffect defaultValue: ", defaultValue)

        setDefaultValues(defaultValue)





    }, [])


    return (
        <div>
            {componentName}
            <div
                // key={variantIndex}
                className="variant-container flex flex-col">
                {/* <h3>Variant {variantIndex + 1}: {variant.name}</h3> */}

                {/* Map through the key-value pairs in variant.value */}
                {Object.entries(variant.value).map(([key, value], valueIndex) => (
                    <div key={valueIndex} className="flex gap-8 ">
                        <label className="w-32">
                            {key}
                        </label>
                        <label className="my-2">

                            <NewButton
                                className={`${defaultValues}`}
                            >button</NewButton>
                        </label>

                    </div>
                ))}
            </div>
        </div >
    )
}