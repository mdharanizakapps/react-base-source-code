
import { ChangeEvent, useEffect, useState } from "react"
import { ComponentModel } from "../../../pages/ProjectGenerator"
import { Input } from "../../ui/input"
import { Label } from "@radix-ui/react-select"
import { Button } from "../../ui/button"
import { Eye, Pencil, Plus, Save, X } from "lucide-react"

export const AddVariants = ({ selectedComponentModel }: { selectedComponentModel: ComponentModel[] }) => {

    const [selectedComponentModelData, setSelectedComponentModel] = useState<ComponentModel[]>([])

    const [currentComponentModel, setCurrentComponentModel] = useState<ComponentModel>()


    console.log("currentComponentModel: ", currentComponentModel)
    console.log("selectedComponentModelData: ", selectedComponentModelData)
    useEffect(() => {
        console.log("inside Dependencies usseefect", selectedComponentModel)
        setSelectedComponentModel(selectedComponentModel)
        setCurrentComponentModel(selectedComponentModel[0])
    }, [selectedComponentModel])


    const handleComponentSelection = (item: string) => {
        console.log("inside handleComponentSelection item:", item)
        console.log("inside handleComponentSelection item:", item)
        const filteredComponents = selectedComponentModelData.filter((component: ComponentModel) =>
            component.value == item
        );
        console.log("filteredComponents: ", filteredComponents)
        setCurrentComponentModel(filteredComponents[0])
    }


    const handleVariantKeyChange = (variantIndex: number, newName: string) => {

        console.log("inside handleVariantKeyChange: ", newName)
        console.log("inside handleVariantKeyChange variantIndex: ", variantIndex)
        console.log("inside handleVariantKeyChange currentComponentModel: ", currentComponentModel)

        const updatedVariants = currentComponentModel?.variants?.map((variant, i) =>
            i === variantIndex ? { ...variant, name: newName } : variant
        );

        setCurrentComponentModel({
            ...currentComponentModel,
            variants: updatedVariants
        });
        // 
    }


    const handleAddVariantProp = () => {
        console.log("inside handleAddVariantProp: ")
        console.log("inside handleAddVariantProp currentComponentModel: ", currentComponentModel)
        const tempObject = { ...currentComponentModel }; // Clone the current component model to avoid direct mutation
        const tempVariant = {
            name: `variant ` + (tempObject?.variants?.length ?? 0 + 1),
            value: {
                default: ""
            }
        };

        tempObject.variants = [...(tempObject.variants || []), tempVariant]; // Ensure variants is initialized as an array
        console.log("inside handleAddVariantProp tempObject: ", tempObject);

        setCurrentComponentModel(tempObject); // Set the updated object as the new state
    }

    // const handleVariantDefaultChange = (index: number, newDefault: string) => {
    //     console.log("inside handleVariantDefaultChange: ",)
    //     console.log("inside handleVariantDefaultChange index: ", index)
    //     console.log("inside handleVariantDefaultChange newDefault: ", newDefault)

    //     const updatedVariants = currentComponentModel?.variants?.map((variant, i) =>
    //         i === index
    //             ? { ...variant, value: { ...variant.value, default: newDefault } }
    //             : variant
    //     );
    //     console.log("inside handleVariantDefaultChange updatedVariants: ", updatedVariants)

    //     setCurrentComponentModel({
    //         ...currentComponentModel,
    //         variants: updatedVariants
    //     });
    // };















    // const handleVariantValueKeyChange = (variantIndex: number, valueIndex: number, newKey: string) => {
    //     console.log("inside handleVariantValueKeyChange");
    //     console.log("inside handleVariantValueKeyChange variantIndex: ", variantIndex);
    //     console.log("inside handleVariantValueKeyChange valueIndex: ", valueIndex);
    //     console.log("inside handleVariantValueKeyChange newKey: ", newKey);

    //     // Make a shallow copy of the variants array to avoid direct mutation of state
    //     const updatedVariants = [...currentComponentModel?.variants];

    //     // Access the specific variant
    //     const variant = updatedVariants[variantIndex];

    //     // Create a shallow copy of the value object
    //     const updatedValue = { ...variant.value };

    //     // Get the existing keys
    //     const keys = Object.keys(updatedValue);
    //     const oldKey = keys[valueIndex]; // The current key at the given index

    //     // If the oldKey is different from the newKey, update the key in the value object
    //     if (oldKey !== newKey) {
    //         // Replace the old key with the new key, preserving the value
    //         updatedValue[newKey] = updatedValue[oldKey];
    //         delete updatedValue[oldKey]; // Delete the old key
    //     }

    //     // Update the state with the modified variant, preserving the original structure
    //     variant.value = updatedValue; // Update the value with the new key-value structure

    //     setCurrentComponentModel({
    //         ...currentComponentModel,
    //         variants: updatedVariants,
    //     });
    // };

    const handleVariantValueKeyChange = (variantIndex: number, valueIndex: number, newKey: string) => {
        console.log("inside handleVariantValueKeyChange");
        console.log("inside handleVariantValueKeyChange variantIndex: ", variantIndex);
        console.log("inside handleVariantValueKeyChange valueIndex: ", valueIndex);
        console.log("inside handleVariantValueKeyChange newKey: ", newKey);

        // Make a shallow copy of the variants array to avoid direct mutation of state
        const updatedVariants = [...currentComponentModel?.variants];

        // Access the specific variant
        const variant = updatedVariants[variantIndex];

        // Create a shallow copy of the value object
        const updatedValue = { ...variant.value };

        // Get the current list of keys in the value object
        const keys = Object.keys(updatedValue);

        // Find the current key at the given index
        const oldKey = keys[valueIndex];

        // If the oldKey is different from the newKey, update the key in the value object
        if (oldKey !== newKey) {
            // Step 1: Create a new object to preserve order
            const newValue = {};

            // Step 2: Copy all the keys before the updated key
            for (let i = 0; i < keys.length; i++) {
                if (i === valueIndex) {
                    // Step 3: Add the new key (after removing the old one)
                    newValue[newKey] = updatedValue[oldKey];
                } else if (keys[i] !== oldKey) {
                    // Step 4: Add other existing keys without changing their order
                    newValue[keys[i]] = updatedValue[keys[i]];
                }
            }

            // Replace the old value object with the updated one
            variant.value = newValue;
        }

        // Update the state with the modified variant
        setCurrentComponentModel({
            ...currentComponentModel,
            variants: updatedVariants,
        });
    };



    // const handleVariantValueKeyChange = (variantIndex: number, valueIndex: number, newKey: string) => {
    //     console.log("inside handleVariantValueKeyChange")
    //     console.log("inside handleVariantValueKeyChange variantIndex: ", variantIndex)
    //     console.log("inside handleVariantValueKeyChange index: ", valueIndex)
    //     console.log("inside handleVariantValueKeyChange newKey: ", newKey)

    //     // Make a shallow copy of the variants array to avoid direct mutation of state
    //     const updatedVariants = [...currentComponentModel?.variants];

    //     // Access the specific variant and value object
    //     const variant = updatedVariants[variantIndex];
    //     const value = variant.value;

    //     // Get the existing keys
    //     const keys = Object.keys(value);
    //     const oldKey = keys[valueIndex]; // The current key at the given index

    //     // If the oldKey is different from the newKey, update the key in the value object
    //     if (oldKey !== newKey) {
    //         // Replace the old key with the new key
    //         value[newKey] = value[oldKey]; // Copy the value of the old key to the new key
    //         delete value[oldKey]; // Delete the old key
    //     }

    //     // Update the state with the modified variant
    //     setCurrentComponentModel({
    //         ...currentComponentModel,
    //         variants: updatedVariants,
    //     });
    // };

    const handleAddEmptyValueObject = (variantIndex) => {
        // Make a shallow copy of the variants array to avoid direct mutation of state
        if (!currentComponentModel?.variants) {
            console.error('Variants are not available');
            return;  // Exit early or handle this case
        }
        const updatedVariants = [...currentComponentModel.variants];

        // Access the variant and its value object
        const variant = updatedVariants[variantIndex];
        const value = variant.value;

        // // Generate a new unique key (you can also use a counter or timestamp if preferred)
        // const newKey = `newKey_${Date.now()}`;

        // Get the length of the value object
        const valueLength = Object.keys(variant.value).length;

        // Generate a new key based on the length of the value object
        const newKey = `custom${valueLength}`;

        // Add an empty object to the value object
        value[newKey] = "";

        // Update the state with the modified variant
        setCurrentComponentModel({
            ...currentComponentModel,
            variants: updatedVariants,
        });
    };

    const handleDeleteVariant = (variantIndex) => {
        // Ensure variants exist before proceeding
        if (!currentComponentModel?.variants) {
            console.error('Variants are not available');
            return;
        }

        const updatedVariants = currentComponentModel.variants.filter(
            (_, index) => index !== variantIndex // Filter out the variant at variantIndex
        );

        // Update the state with the modified variants array
        setCurrentComponentModel({
            ...currentComponentModel,
            variants: updatedVariants,
        });
    };



    const handleVariantValueChange = (variantIndex: number, key: string, newValue: string) => {
        const updatedVariants = currentComponentModel?.variants?.map((variant, i) => {
            if (i === variantIndex) {
                return {
                    ...variant,
                    value: {
                        ...variant.value,
                        [key]: newValue // Dynamically update the specific key within value
                    }
                };
            }
            return variant;
        });

        setCurrentComponentModel({
            ...currentComponentModel,
            variants: updatedVariants
        });
    };

    const handleDeleteValueObject = (variantIndex, valueKey) => {
        // Ensure variants exist before proceeding
        if (!currentComponentModel?.variants) {
            console.error('Variants are not available');
            return;
        }

        // Clone the variants array to avoid direct mutation
        const updatedVariants = [...currentComponentModel.variants];

        // Find the variant to update
        const variant = updatedVariants[variantIndex];

        // Clone the value object to avoid direct mutation
        const updatedValue = { ...variant.value };

        // Check if there is more than one key and if it's not the 'default' key
        const valueKeys = Object.keys(updatedValue);

        // Prevent deletion if the object has only the 'default' key
        if (valueKeys.length === 1 && valueKeys[0] !== 'default') {
            alert('At least one value must remain, and the key must be "default"!');
            return;
        }

        // If the key to be deleted is 'default', or there are other keys, proceed with deletion
        if (valueKey !== 'default') {
            delete updatedValue[valueKey]; // Delete the specific key-value pair
        }

        // Update the variant's value with the modified value object
        variant.value = updatedValue;

        // Update the state with the modified variants array
        setCurrentComponentModel({
            ...currentComponentModel,
            variants: updatedVariants,
        });
    };




    return (
        <div className="flex">
            <div className="w-[15%] p-2 flex flex-col ">
                {
                    selectedComponentModelData.map((item: ComponentModel, index) => {
                        return (

                            <div
                                className={`${currentComponentModel?.value == item.value ? "bg-[#3b87f2] text-white" : ""}`}
                                key={index}
                                onClick={() => { handleComponentSelection(item.value) }}
                            >
                                {item.isVariant ? item.name : ""}
                            </div>
                        )
                    })
                }
            </div>
            <div className="w-[100%] p-2">
                <h3>Title: {currentComponentModel?.name}</h3>
                <div>
                    <div>
                        <div className="flex gap-2">
                            <h4>Variant Props</h4>
                            <Button variant={"icon"}
                                onClick={handleAddVariantProp}
                            ><Plus size={36} /></Button>
                        </div>


                        {
                            currentComponentModel?.variants?.map((variant, variantIndex) => {
                                return (
                                    <div key={variantIndex} className="flex flex-col gap-2">
                                        <div className="flex gap-1">
                                            <span>Key: </span>
                                            <Input
                                                variant={'primary'}
                                                value={variant.name}
                                                onChange={(event) => handleVariantKeyChange(variantIndex, event.target.value)}
                                            ></Input>

                                            <Button variant={"icon"} ><Eye /></Button>
                                            {/* <Button variant={"icon"}><Pencil></Pencil></Button> */}
                                            <Button variant={"icon"} ><Save></Save></Button>
                                            <Button variant={"icon"}
                                                onClick={() => handleDeleteVariant(variantIndex)} // Call the delete function
                                            ><X /></Button>
                                        </div>
                                        <div
                                            className="w-[100%">
                                            {Object.entries(variant.value).map(([key, value], index) => (
                                                <div
                                                    className="w-[100%]"
                                                    key={index}
                                                    style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                                                    <Input
                                                        variant={'primary'}
                                                        type="text"
                                                        value={key}
                                                        disabled={key === "default"}
                                                        placeholder="Key"
                                                        className="w-[30%]"
                                                        onChange={(event) => handleVariantValueKeyChange(variantIndex, index, event.target.value)} // Handle key change

                                                    />
                                                    <Input
                                                        className="w-[70%]"
                                                        variant={'primary'}
                                                        type="text"
                                                        value={value}
                                                        placeholder="Value"
                                                        onChange={(event) => handleVariantValueChange(variantIndex, key, event.target.value)}
                                                    />
                                                    {/* <Button variant={"icon"} ><Eye /></Button> */}
                                                    <Button variant={"icon"}><Pencil></Pencil></Button>
                                                    <Button variant={"icon"} ><Save></Save></Button>
                                                    <Button variant={"icon"}
                                                        onClick={() => handleDeleteValueObject(variantIndex, key)} // Call delete value object
                                                    ><X /></Button>
                                                    <Button variant={"icon"}
                                                        onClick={() => handleAddEmptyValueObject(variantIndex)}
                                                    ><Plus size={36} /></Button>
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                )
                            })

                        }
                    </div>
                </div>

            </div>
        </div>
    )
}