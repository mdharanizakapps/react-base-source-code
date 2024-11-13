import { useEffect, useState } from "react"
import { ComponentModel, SampleComponentModelData } from "../../../pages/ProjectGenerator"

export const StepsToGenerate = ({ componentsSelected }: { componentsSelected: string[] }) => {
    const [componentModel, setComponentModel] = useState<ComponentModel[]>([])
    const [selectedComponentModel, setSelectedComponentModel] = useState<ComponentModel[]>([])
    const [componentsList, setComponentsList] = useState<string[]>([])



    useEffect(() => {
        console.log("inside StepsToGenerate usseefect", componentsSelected)
        generateCompoenetSteps(componentsSelected, SampleComponentModelData);
        setComponentModel(SampleComponentModelData)
        setComponentsList(componentsSelected)
    }, [componentsSelected])

    const generateCompoenetSteps = (componentsSelected: string[], SampleComponentModelData: ComponentModel[]) => {
        console.log("inside GenerateStepsObject")
        console.log("inside GenerateStepsObject componentsSelected: ", componentsSelected)
        console.log("inside GenerateStepsObject SampleComponentModelData: ", SampleComponentModelData)

        const filteredComponents = SampleComponentModelData.filter((component: ComponentModel) =>
            componentsSelected.includes(component.value)
        );
        console.log("filteredComponents: ", filteredComponents)
        setSelectedComponentModel(filteredComponents)
    }


    return (
        <div>
            StepsToGenerate
        </div>
    )
}