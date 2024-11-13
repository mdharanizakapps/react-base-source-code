import { useEffect, useState } from "react"
import { ComponentModel } from "../../../pages/ProjectGenerator"

export const StepsToGenerate = ({ selectedComponentModel }: { selectedComponentModel: ComponentModel[] }) => {

    const [selectedComponentModelData, setSelectedComponentModel] = useState<ComponentModel[]>([])


    const [currentComponent, setCurrentComponent] = useState<string>()
    const [currentComponentModel, setCurrentComponentModel] = useState<ComponentModel>()



    useEffect(() => {
        console.log("inside StepsToGenerate usseefect", selectedComponentModel)
        setSelectedComponentModel(selectedComponentModel)
        setCurrentComponent(selectedComponentModel[0].value)
        setCurrentComponentModel(selectedComponentModel[0])
    }, [selectedComponentModel])


    const handleComponentSelection = (item: string) => {
        console.log("inside handleComponentSelection item:", item)
        console.log("inside handleComponentSelection item:", item)
        const filteredComponents = selectedComponentModelData.filter((component: ComponentModel) =>
            component.value == item
        );
        setCurrentComponentModel(filteredComponents[0])

    }

    return (
        <div className="flex">
            <div className="">
                {
                    selectedComponentModelData.map((item, index) => {
                        return (
                            <div key={index} onClick={() => { handleComponentSelection(item.value) }}>
                                {item.name}
                            </div>
                        )
                    })
                }
            </div>
            <div className="">
                Title: {currentComponent}
                <div>
                    {
                        currentComponentModel?.name
                    }
                </div>

            </div>
        </div>
    )
}