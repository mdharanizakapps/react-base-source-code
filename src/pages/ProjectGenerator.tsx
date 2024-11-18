import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardFooter,
} from '../components/ui/card';
import { Checkbox } from '../components/ui/checkbox';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../@/components/ui/tabs';
import { Dependencies } from '../components/ui_library/ProjectGenerator/ComponentDependencies';
import { AddVariants } from '../components/ui_library/ProjectGenerator/AddVariants';



export interface ComponentModel {
  name: string
  value: string
  installCmd: string
  dependencies: Dependencies
  configFiles: ConfigFile[]
  isVariant: boolean
  variants?: Variant[];
}

export interface Variant {
  name: string;
  value: Record<string, string>;
  isSaved: boolean

}

export interface Dependencies {
  components: string[]
  hooks: string[]
  external: string[]
}

export interface ConfigFile {
  fileName: string
  changes: string
}

export const SampleComponentModelData = [
  {
    name: "Sidebar",
    value: "sidebar",
    installCmd: "npx shadcn@latest add sidebar",
    dependencies: {
      components: [
        "sidebar",
        "button",
        "separator",
        "sheet",
        "tooltip",
        "input",
        "skeleton",
      ],
      hooks: [
        "use-mobile"
      ],
      external: [
        "@radix-ui/react-dialog",
        "@radix-ui/react-separator",
        "@radix-ui/react-slot",
        "@radix-ui/react-tooltip"
      ]
    },
    configFiles: [
      {
        fileName: "index.css",  // Path to the CSS file to modify
        changes: `
          :root
            --sidebar-background: 0 0% 98%;
              --sidebar-foreground: 240 5.3% 26.1%;
              --sidebar-primary: 240 5.9% 10%;
              --sidebar-primary-foreground: 0 0% 98%;
              --sidebar-accent: 240 4.8% 95.9%;
              --sidebar-accent-foreground: 240 5.9% 10%;
              --sidebar-border: 220 13% 91%;
              --sidebar-ring: 217.2 91.2% 59.8%;

          .dark
              --sidebar-background: 240 5.9% 10%;
              --sidebar-foreground: 240 4.8% 95.9%;
              --sidebar-primary: 224.3 76.3% 48%;
              --sidebar-primary-foreground: 0 0% 100%;
              --sidebar-accent: 240 3.7% 15.9%;
              --sidebar-accent-foreground: 240 4.8% 95.9%;
              --sidebar-border: 240 3.7% 15.9%;
              --sidebar-ring: 217.2 91.2% 59.8%;
        `
      },
      {
        fileName: "tailwind.config.js",  // Path to the Tailwind config file
        changes: `
        sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
        `
      }
    ],
    isVariant: false,
    variants: [],
  },
  {
    name: "Button",
    value: "button",
    installCmd: "npx shadcn@latest add button",
    dependencies: {
      components: [
        "button"
      ],
      hooks: [],
      external: [
        "@radix - ui / react - slot"
      ]
    },
    configFiles: [],
    isVariant: true,
    variants: [
      {
        name: "variant",
        value: {
          default:
            'font-bold bg-[#092C4C] text-white hover:bg-[#061F35]  active:bg-[#092C4C]/60 disabled:bg-[#E0E0E0]',
          outline:
            'font-bold text-black border-2 border-[#092C4C] hover:bg-[#092C4C]/20 active:bg-[#092C4C]/60 active:border-[#092C4C]/30 disabled:border-[#BDBDBD] disabled:border-1 disabled:text-[#E0E0E0]',
          iconText:
            'font-bold text-white bg-[#092C4C] hover:bg-[#061F35] active:bg-[#092C4C]/70 disabled:bg-[#E0E0E0] disabled:text-white',
          icon: 'text-white font-bold bg-[#092C4C] hover:bg-[#061F35] active:bg-[#092C4C]/60 disabled:bg-[#E0E0E0] disabled:text-white',
        },
        isSaved: true
      },
      {
        name: "size",
        value: {
          default: 'w-[241px] h-12 rounded-lg px-4 py-2',
          sm: 'w-[275px] h-[55px] rounded-lg px-3',
          md: 'w-[310px] h-[62px] rounded-lg',
          lg: 'w-[344px] h-[68px] rounded-lg px-8',
          iconText: 'w-[283px] h-[55px] rounded-lg',
          icon: 'h-14 w-14 rounded-full',
        },
        isSaved: true
      },
    ],
  },
  {
    name: 'Accordion',
    value: 'accordion',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'Alert',
    value: 'alert',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'AlertDialog',
    value: 'alertdialog',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'AspectRatio',
    value: 'aspectratio',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'Avatar',
    value: 'avatar',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'Badge',
    value: 'badge',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'Breadcrumb',
    value: 'breadcrumb',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'Calendar',
    value: 'calendar',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: true,
    variants: [],
  },
  {
    name: 'Card',
    value: 'card',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'Carousel',
    value: 'carousel',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'Chart',
    value: 'chart',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'Checkbox',
    value: 'checkbox',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'Collapsible',
    value: 'collapsible',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'Combobox',
    value: 'combobox',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'Command',
    value: 'command',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'ContextMenu',
    value: 'contextmenu',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'DataTable',
    value: 'datatable',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'DatePicker',
    value: 'datepicker',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'Dialog',
    value: 'dialog',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'Drawer',
    value: 'drawer',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'DropdownMenu',
    value: 'dropdownmenu',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'Form',
    value: 'form',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'HoverCard',
    value: 'hovercard',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'Input',
    value: 'input',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'InputOTP',
    value: 'inputotp',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'Label',
    value: 'label',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'Menubar',
    value: 'menubar',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'NavigationMenu',
    value: 'navigationmenu',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'Pagination',
    value: 'pagination',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'Popover',
    value: 'popover',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'Progress',
    value: 'progress',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'RadioGroup',
    value: 'radiogroup',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'ResizablePanelGroup',
    value: 'resizablepanelgroup',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'ScrollArea',
    value: 'scrollarea',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'Select',
    value: 'select',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'Separator',
    value: 'separator',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'Sheet',
    value: 'sheet',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'SidebarNew',
    value: 'sidebarnew',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'Skeleton',
    value: 'skeleton',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'Slider',
    value: 'slider',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'Sonner',
    value: 'sonner',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'Switch',
    value: 'switch',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'Table',
    value: 'table',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'Tabs',
    value: 'tabs',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'Textarea',
    value: 'textarea',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'Toast',
    value: 'toast',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'Toggle',
    value: 'toggle',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'ToggleGroup',
    value: 'togglegroup',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variants: [],
  },
  {
    name: 'Tooltip',
    value: 'tooltip',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
  }
];

export const SampleTabData = [
  {
    name: "Component Selection",
    value: "componentSelection"
  },
  {
    name: "Add Variants",
    value: "addVariants"
  },
  {
    name: "Dependencies",
    value: "dependencies"
  },
  {
    name: "Submit",
    value: "submit"
  }
]

export interface TabData {
  name: string
  value: string
}


const ProjectGenerator: React.FC = () => {

  const [componentModel, setComponentModel] = useState<ComponentModel[]>([])

  const [selectedComponentModel, setSelectedComponentModel] = useState<ComponentModel[]>([])

  const [componentsSelected, setComponentsSelected] = useState<string[]>([])


  const [currentTab, setCurrentTab] = useState<string>()
  const [tabData, setTabData] = useState<TabData[]>([])
  const [isSubmitEnable, setIsSubmitEnable] = useState<boolean>(false)


  // console
  useEffect(() => {
    setComponentModel(SampleComponentModelData)
    setCurrentTab(SampleTabData[0].value)
    setTabData(SampleTabData)

    //Need to comment
    setComponentsSelected(['accordion', 'alertdialog', 'card', 'calendar', 'breadcrumb', 'badge', 'button'])

  }, [])

  // Handle checkbox change
  const HandleCheckboxChange = (value: string) => {
    console.log("HandleCheckboxChange: ", value);

    let outputArray: string[];

    if (componentsSelected.includes(value)) {
      outputArray = componentsSelected.filter(item => item !== value);
    } else {
      outputArray = [...componentsSelected, value];
    }

    // Update the state with the new array
    setComponentsSelected(outputArray);
  };

  const HandleNextClick = () => {
    console.log("inside HandleNextClick", componentsSelected)
    console.log("componentsSelected", componentsSelected)
    console.log("currentTab", currentTab)

    const index = tabData?.findIndex(item => item.value === currentTab);
    // if (index + 1> tabData?.length){

    // }
    if (tabData.length > 0) {
      if (index + 2 == tabData.length) {
        setCurrentTab(tabData[index + 1].value)
        setIsSubmitEnable(true)
      } else {
        setCurrentTab(tabData[index + 1].value)

      }
    }


    const filteredComponents = componentModel.filter((component: ComponentModel) =>
      componentsSelected.includes(component.value)
    );

    setSelectedComponentModel(filteredComponents)

  }

  const HandleSaveAsDraftClick = () => {
    console.log("inside HandleSaveAsDraftClick", componentsSelected)
  }


  const handleTabChange = (value: string) => {
    console.log("Tab clicked:", value);
    const filteredComponents = componentModel.filter((component: ComponentModel) =>
      componentsSelected.includes(component.value)
    );

    setSelectedComponentModel(filteredComponents)
    setCurrentTab(value)

  }

  const handleAddVariantSave = (componentName: string, newVariant: any) => {
    console.log("inside handleAddVariantSave componentName : ", componentName)
    console.log("inside handleAddVariantSave  newVariant: ", newVariant)
    console.log("inside handleAddVariantSave  SelectedComponentModel: ", selectedComponentModel)

    // Create a new state variable to store the updated data
    const updatedComponentModels = selectedComponentModel.map(component => {
      if (component.name === componentName) {
        // Replace the variants with the new ones
        return { ...component, variants: newVariant };
      }
      // Return unchanged component
      return component;
    });
    console.log("updatedComponentModels: ", updatedComponentModels)
    // Update state
    setSelectedComponentModel(updatedComponentModels);

  }



  return (
    <Card >
      <CardContent>
        <Tabs defaultValue="selectComponent" onValueChange={handleTabChange} value={currentTab} className="w-full">
          <TabsList >
            {
              tabData?.map((item, index) => {
                return (
                  <TabsTrigger key={index} value={item.value} >{item.name}</TabsTrigger>

                )
              })
            }
            {/* <TabsTrigger value="password">Password</TabsTrigger> */}
          </TabsList>
          <TabsContent value="componentSelection">
            <div className='grid gap-1.5 grid-cols-6 p-2.5'>
              {
                componentModel.map((item, index) => {
                  return (
                    <div key={index} className="flex items-center space-x-2 p-3">
                      <Checkbox
                        name={item.name}
                        id={`${item.name}-${index}`}
                        value={item.value}
                        onCheckedChange={() => HandleCheckboxChange(item.value)}
                        checked={componentsSelected.includes(item.value)}
                      />
                      <label
                        htmlFor={`${item.name}-${index}`}
                        className={`text-sm 
                          ${componentsSelected.includes(item.value) ? "font-medium" : ""}
                          leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`}
                      >
                        {item.name}
                      </label>
                    </div>
                  )
                })
              }
            </div>
          </TabsContent>
          <TabsContent value="dependencies">
            <Dependencies
              // componentsSelected={componentsSelected}
              selectedComponentModel={selectedComponentModel}

            ></Dependencies>

          </TabsContent>
          <TabsContent value="addVariants">

            <AddVariants
              handleAddVariantSave={handleAddVariantSave}
              selectedComponentModel={selectedComponentModel}

            ></AddVariants>
          </TabsContent>
          {/*  */}
          <TabsContent value="submit">Redy to Submit</TabsContent>
        </Tabs>




      </CardContent>
      <CardFooter>
        <div className='flex w-full justify-end gap-x-3'>
          <Button variant={'secondary'} size={"md"}
            disabled={componentsSelected.length > 0 ? false : true}
            onClick={HandleSaveAsDraftClick}
          >
            Save as Draft
          </Button>
          {
            isSubmitEnable ?
              <Button variant={'secondary'} size={"md"}
                onClick={HandleNextClick}
                disabled={componentsSelected.length > 0 ? false : true}
              >
                Submit
              </Button>
              :
              <Button variant={'secondary'} size={"md"}
                onClick={HandleNextClick}
                disabled={componentsSelected.length > 0 ? false : true}
              >
                Next
              </Button>
          }

        </div>
      </CardFooter>
    </Card>

  )
};

export default ProjectGenerator;
