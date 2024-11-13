import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardFooter,
} from '../components/ui/card';
import { Checkbox } from '../components/ui/checkbox';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../@/components/ui/tabs';
import { StepsToGenerate } from '../components/ui_library/ProjectGenerator/StepsToGenerate';



export interface ComponentModel {
  name: string
  value: string
  installCmd: string
  dependencies: Dependencies
  configFiles: ConfigFile[]
  isVariant: boolean,
  variantProps?: any,
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
    variantProps: {},
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
    variantProps: {},
  },
  {
    name: 'Accordion',
    value: 'accordion',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'Alert',
    value: 'alert',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'AlertDialog',
    value: 'alertdialog',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'AspectRatio',
    value: 'aspectratio',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'Avatar',
    value: 'avatar',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'Badge',
    value: 'badge',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'Breadcrumb',
    value: 'breadcrumb',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'Calendar',
    value: 'calendar',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'Card',
    value: 'card',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'Carousel',
    value: 'carousel',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'Chart',
    value: 'chart',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'Checkbox',
    value: 'checkbox',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'Collapsible',
    value: 'collapsible',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'Combobox',
    value: 'combobox',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'Command',
    value: 'command',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'ContextMenu',
    value: 'contextmenu',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'DataTable',
    value: 'datatable',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'DatePicker',
    value: 'datepicker',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'Dialog',
    value: 'dialog',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'Drawer',
    value: 'drawer',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'DropdownMenu',
    value: 'dropdownmenu',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'Form',
    value: 'form',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'HoverCard',
    value: 'hovercard',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'Input',
    value: 'input',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'InputOTP',
    value: 'inputotp',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'Label',
    value: 'label',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'Menubar',
    value: 'menubar',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'NavigationMenu',
    value: 'navigationmenu',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'Pagination',
    value: 'pagination',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'Popover',
    value: 'popover',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'Progress',
    value: 'progress',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'RadioGroup',
    value: 'radiogroup',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'ResizablePanelGroup',
    value: 'resizablepanelgroup',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'ScrollArea',
    value: 'scrollarea',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'Select',
    value: 'select',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'Separator',
    value: 'separator',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'Sheet',
    value: 'sheet',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'SidebarNew',
    value: 'sidebarnew',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'Skeleton',
    value: 'skeleton',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'Slider',
    value: 'slider',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'Sonner',
    value: 'sonner',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'Switch',
    value: 'switch',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'Table',
    value: 'table',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'Tabs',
    value: 'tabs',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'Textarea',
    value: 'textarea',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'Toast',
    value: 'toast',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'Toggle',
    value: 'toggle',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
  },
  {
    name: 'ToggleGroup',
    value: 'togglegroup',
    installCmd: '',
    dependencies: { components: [], hooks: [], external: [] },
    configFiles: [],
    isVariant: false,
    variantProps: {},
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
    name: "Dependencies",
    value: "dependencies"
  },
  {
    name: "Add Variants",
    value: "addVariants"
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
  const [componentsSelected, setComponentsSelected] = useState<string[]>([])
  const [currentTab, setCurrentTab] = useState<string>()
  const [tabData, setTabData] = useState<TabData[]>([])
  const [isSubmitEnable, setIsSubmitEnable] = useState<boolean>(false)
  const [selectedComponentModel, setSelectedComponentModel] = useState<ComponentModel[]>([])

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



  return (
    <Card >
      <CardContent>
        <Tabs defaultValue="selectComponent" onValueChange={setCurrentTab} value={currentTab} className="w-full">
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
            <StepsToGenerate
              // componentsSelected={componentsSelected}
              selectedComponentModel={selectedComponentModel}

            ></StepsToGenerate>

          </TabsContent>
          <TabsContent value="addVariants">

            Add Variants
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
