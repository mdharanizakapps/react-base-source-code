import { ProjectDetailsData } from "../../../pages/ProjectGenerator"
import { Input } from "../../ui/input"



export const ProjectDetails = (
    { projectDetailData,
        handleProjectDetailsInputChange
    }: {
        projectDetailData: ProjectDetailsData,
        handleProjectDetailsInputChange: any
    }
) => {




    return (
        <div className="flex flex-col gap-3 p-2">
            <div className="flex items-center">
                <div className="w-[20%]">Project Name:</div>
                <div>
                    <Input
                        name="projectName"
                        onChange={(event) => handleProjectDetailsInputChange(event)}
                        value={projectDetailData.projectName}
                    />
                </div>
            </div>
            <div className="flex items-center">
                <div className="w-[20%]">Project Description:</div>
                <div>
                    <Input
                        name="projectDescription"
                        onChange={(event) => handleProjectDetailsInputChange(event)}
                        value={projectDetailData.projectDescription}
                    />
                </div>
            </div>
            <div className="flex items-center">
                <div className="w-[20%]">Prefix: </div>
                <div>
                    <Input
                        name="prefix"
                        onChange={(event) => handleProjectDetailsInputChange(event)}
                        value={projectDetailData.prefix}
                    />
                </div>
            </div>
            <div className="flex items-center">
                <div className="w-[20%]">Suffix:</div>
                <div>
                    <Input
                        name="suffix"
                        onChange={(event) => handleProjectDetailsInputChange(event)}
                        value={projectDetailData.suffix}
                    />
                </div>
            </div>
        </div>
    )
}