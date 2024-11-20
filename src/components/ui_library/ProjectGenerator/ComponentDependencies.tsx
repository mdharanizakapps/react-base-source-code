import { useEffect, useState } from "react"
import { ComponentModel, ConfigFile } from "../../../pages/ProjectGenerator"
import { Copy } from "lucide-react"

export const Dependencies = ({ selectedComponentModel }: { selectedComponentModel: ComponentModel[] }) => {

    const [selectedComponentModelData, setSelectedComponentModel] = useState<ComponentModel[]>([])
    const [dependencyInstallationCommand, setDependencyInstallationCommand] = useState<string>("")

    const [dependencyComponents, setDependencyComponents] = useState<string[]>([])

    const [dependedncyHooksFile, setDependedncyHooksFile] = useState<string[]>([])
    const [dependencyFileChanges, setDependencyFileChanges] = useState<ConfigFile[]>([])



    useEffect(() => {
        console.log("inside Dependencies usseefect", selectedComponentModel)
        setSelectedComponentModel(selectedComponentModel)

        generateExternalDependencies(selectedComponentModel)
        generateDependentComponents(selectedComponentModel)
        generateDependentHooksFiles(selectedComponentModel)
        generateDependencyFileChanges(selectedComponentModel)

    }, [selectedComponentModel])

    // const genertaeExternalDependencies = (selectedComponentModel: ComponentModel[]) => {

    //     const externalDependencies: string[] = [];

    //     selectedComponentModel.forEach((item) => {
    //         externalDependencies.push(...item.dependencies.external); // Spread the array and add each item
    //     });
    //     console.log("Dependencies - externalDependencies: ", externalDependencies)
    //     const externalDependencyCommand = `npm install ${externalDependencies.join(' ')}`
    //     setDependencyInstallationCommand(externalDependencyCommand)
    // }

    const generateExternalDependencies = (selectedComponentModel: ComponentModel[]) => {
        // Create a set to ensure uniqueness
        const externalDependencies = new Set<string>();

        // Iterate through the components and add dependencies to the set
        selectedComponentModel.forEach((item) => {
            item.dependencies.external.forEach((dependency) => externalDependencies.add(dependency));
        });

        // Convert the set back to an array and generate the installation command
        const uniqueDependencies = Array.from(externalDependencies);
        const externalDependencyCommand = `npm install ${uniqueDependencies.join(' ')}`;

        // Update the state with the generated command
        setDependencyInstallationCommand(externalDependencyCommand);

        console.log("Unique Dependencies - externalDependencies: ", uniqueDependencies);
        console.log("Generated Command: ", externalDependencyCommand);
    };

    const generateDependentComponents = (selectedComponentModel: ComponentModel[]) => {
        console.log("Dependencies - generateDependentComponents: ", selectedComponentModel)

        // Create a set to ensure uniqueness
        const dependentComponents = new Set<string>();

        // Iterate through the components and add dependencies to the set
        selectedComponentModel.forEach((item) => {
            item.dependencies.components.forEach((components) => dependentComponents.add(components));
        });

        // Convert the set back to an array and generate the installation command
        const uniqueDependentComponents = Array.from(dependentComponents);
        console.log("uniqueDependentComponents: ", uniqueDependentComponents);
        setDependencyComponents(uniqueDependentComponents)

    }

    const generateDependentHooksFiles = (selectedComponentModel: ComponentModel[]) => {
        console.log("Dependencies - generateDependentHooksFiles: ", selectedComponentModel)

        // Create a set to ensure uniqueness
        const dependentHooksFiles = new Set<string>();

        // Iterate through the HooksFiles and add dependencies to the set
        selectedComponentModel.forEach((item) => {
            item.dependencies.hooks.forEach((hooksFiles) => dependentHooksFiles.add(hooksFiles));
        });

        // Convert the set back to an array and generate the installation command
        const uniqueDependentHooksFiles = Array.from(dependentHooksFiles);
        console.log("uniqueDependentHooksFiles: ", uniqueDependentHooksFiles);
        setDependedncyHooksFile(uniqueDependentHooksFiles)

    }

    const generateDependencyFileChanges = (selectedComponentModel: ComponentModel[]) => {
        console.log("Dependencies - generateDependentFileChanges: ", selectedComponentModel)

        // Create an array to store all config files
        const allConfigFiles: ConfigFile[] = [];

        // Loop through each component model and extract its configFiles
        selectedComponentModel.forEach((item) => {
            // Push the configFiles from each item into the allConfigFiles array
            if (item.configFiles) {
                allConfigFiles.push(...item.configFiles);
            }
        });

        // Now allConfigFiles contains all the config files from all component models
        console.log("All Config Files: ", allConfigFiles);
        setDependencyFileChanges(allConfigFiles)

    }



    return (
        <div className="p-2 flex flex-col gap-3 ">

            <div className=" flex justify-between gap-2">

                <div className="w-1/5 font-bold">
                    Selected Components:
                </div>
                <div className="w-4/5">

                    <ul className="grid grid-cols-4">
                        {
                            // dependencyComponents.map((item, index) => {
                            //     return (
                            //         <li>
                            //             {index + 1}.  {item}
                            //         </li>
                            //     )
                            // })
                            selectedComponentModelData.map((item, index) => {
                                return (
                                    <li>
                                        {index + 1}.  {item.component}
                                    </li>
                                )
                            })
                        }
                    </ul>

                </div>
            </div>

            <div className=" flex justify-between gap-2">

                <div className="w-1/5 font-bold">
                    Dependent Components:
                </div>
                <div className="w-4/5">
                    {
                        dependencyComponents.length > 0
                            ?
                            <ul className="grid grid-cols-4">
                                {
                                    dependencyComponents.map((item, index) => {
                                        return (
                                            <li>
                                                {index + 1}.  {item}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            :
                            <span>No dependent componets required</span>}



                </div>
            </div>
            <div className=" flex items-center justify-between gap-2">

                <div className="w-1/5 font-bold">
                    NPM Installation:
                </div>
                <div className="w-4/5">

                    <div className=" w-11/12 mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 p-1 dark:bg-zinc-900 text-white flex justify-between items-center">
                        <div className="p-1">
                            {
                                dependencyInstallationCommand
                            }
                        </div>
                        <div className="p-1">
                            <Copy color="#ffffff"
                                onClick={() => {
                                    if (dependencyInstallationCommand) {
                                        navigator.clipboard.writeText(dependencyInstallationCommand)
                                        // .then(() => {
                                        //     alert("Command copied to clipboard!");
                                        // })
                                        // .catch((err) => {
                                        //     console.error("Failed to copy command: ", err);
                                        // });
                                    }
                                }}
                            />

                            {/* <button

                                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                                onClick={() => {
                                    if (dependencyInstallationCommand) {
                                        navigator.clipboard.writeText(dependencyInstallationCommand)
                                        // .then(() => {
                                        //     alert("Command copied to clipboard!");
                                        // })
                                        // .catch((err) => {
                                        //     console.error("Failed to copy command: ", err);
                                        // });
                                    }
                                }}
                            >
                                Copy
                            </button> */}
                        </div>
                    </div>
                </div>


                {/* <div className="">

                    <div className=" bg-gray-800 text-white w-11/12 rounded-md p-2">
                        <div className="flex justify-between">
                            <span>

                            </span>
                            <button

                                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                                onClick={() => {
                                    if (dependencyInstallationCommand) {
                                        navigator.clipboard.writeText(dependencyInstallationCommand)
                                        // .then(() => {
                                        //     alert("Command copied to clipboard!");
                                        // })
                                        // .catch((err) => {
                                        //     console.error("Failed to copy command: ", err);
                                        // });
                                    }
                                }}
                            >
                                Copy
                            </button>
                        </div>
                        <div className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900">
                            {
                                dependencyInstallationCommand
                            }
                        </div>
                    </div>


                </div> */}

            </div>

            <div className=" flex justify-between gap-2">

                <div className="w-1/5 font-bold">
                    Required Hooks files:
                </div>
                <div className="w-4/5">
                    {
                        dependedncyHooksFile.length > 0 ?

                            <ul>
                                {
                                    dependedncyHooksFile.map((item, index) => {
                                        return (
                                            <li>
                                                {index + 1}.  {item}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            :

                            <span>
                                No Hooks files are required
                            </span>

                    }



                </div>
            </div>

            <div className=" flex justify-between gap-2">

                <div className="w-1/5 font-bold">
                    Required files changes:
                </div>
                <div className="w-4/5">
                    {
                        dependencyFileChanges.length > 0 ?

                            dependencyFileChanges.map((item, index) => {
                                return (
                                    <div className=" flex justify-between gap-2">

                                        <div className="w-1/5">
                                            {index + 1}. {item.fileName}
                                        </div>
                                        <div className="w-4/5">
                                            {item.changes}
                                        </div>
                                    </div>
                                )
                            })

                            :

                            <span>
                                No file changes are required
                            </span>

                    }
                </div>
            </div>

        </div>
    )
}