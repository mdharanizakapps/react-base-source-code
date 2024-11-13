import { useEffect, useState } from "react"
import TanStackTable, { CustomColumnDef, TableConfigData } from "../tanStackTable"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select"


export interface ProductData {
    categoryId: number
    categoryName: string
    subCategory: SubCategory[]
}

export interface SubCategory {
    subCategoryId: number
    subCategoryName: string
    productList: ProductList[]
}

export interface ProductList {
    productId: number
    sku: string
    brand: string
    description: string
    cheapestSupplier: CheapestSupplier[]
    marginIndicator: string
    margin: number
    marginValue: number
    sellRate: number
    fees: number
    sellRateWithVat: number
}

export interface CheapestSupplier {
    id: number
    name: string
    cost: number
}

const productList: ProductData[] = [
    {
        "categoryId": 0,
        "categoryName": "Electronics",
        "subCategory": [
            {
                "subCategoryId": 0,
                "subCategoryName": "Mobile Phones",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-75959",
                        "brand": "Brand A",
                        "description": "Mobile Phones Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 302.15
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 496.9
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 15,
                        "marginValue": 43.17,
                        "sellRate": 6.68,
                        "fees": 42.76,
                        "sellRateWithVat": 3.78
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-55300",
                        "brand": "Brand B",
                        "description": "Mobile Phones Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 81.47
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 484.93
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 25,
                        "marginValue": 13.74,
                        "sellRate": 17.99,
                        "fees": 44.24,
                        "sellRateWithVat": 23.35
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-97023",
                        "brand": "Brand C",
                        "description": "Mobile Phones Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 131.15
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 29,
                        "marginValue": 28.23,
                        "sellRate": 14.03,
                        "fees": 45.45,
                        "sellRateWithVat": 41.69
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-54946",
                        "brand": "Brand D",
                        "description": "Mobile Phones Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 318.61
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 223.26
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 10,
                        "marginValue": 13.82,
                        "sellRate": 7.05,
                        "fees": 46.51,
                        "sellRateWithVat": 38.13
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-97462",
                        "brand": "Brand E",
                        "description": "Mobile Phones Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 37.73
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 94.63
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 73.88
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 16,
                        "marginValue": 24.17,
                        "sellRate": 1.95,
                        "fees": 30.2,
                        "sellRateWithVat": 49.54
                    }
                ]
            },
            {
                "subCategoryId": 1,
                "subCategoryName": "Laptops",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-38656",
                        "brand": "Brand A",
                        "description": "Laptops Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 91.9
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 206.65
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 22,
                        "marginValue": 5.37,
                        "sellRate": 40.18,
                        "fees": 20.57,
                        "sellRateWithVat": 43.45
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-6270",
                        "brand": "Brand B",
                        "description": "Laptops Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 142.84
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 288.84
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 27,
                        "marginValue": 32.22,
                        "sellRate": 1.23,
                        "fees": 14.59,
                        "sellRateWithVat": 22.7
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-667",
                        "brand": "Brand C",
                        "description": "Laptops Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 145.11
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 3.27
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 26,
                        "marginValue": 37.84,
                        "sellRate": 36.95,
                        "fees": 39.61,
                        "sellRateWithVat": 19.93
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-8815",
                        "brand": "Brand D",
                        "description": "Laptops Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 445.89
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 111.39
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 27,
                        "marginValue": 7.54,
                        "sellRate": 46.8,
                        "fees": 49.21,
                        "sellRateWithVat": 5.54
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-73737",
                        "brand": "Brand E",
                        "description": "Laptops Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 15.78
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 407.33
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 228.42
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 19,
                        "marginValue": 5.02,
                        "sellRate": 35.49,
                        "fees": 46.65,
                        "sellRateWithVat": 49.97
                    }
                ]
            },
            {
                "subCategoryId": 2,
                "subCategoryName": "Tablets",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-99801",
                        "brand": "Brand A",
                        "description": "Tablets Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 177.17
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 13.95
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 8,
                        "marginValue": 18.16,
                        "sellRate": 40.83,
                        "fees": 8.46,
                        "sellRateWithVat": 8.91
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-34760",
                        "brand": "Brand B",
                        "description": "Tablets Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 404.33
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 79.74
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 13,
                        "marginValue": 30.71,
                        "sellRate": 45.75,
                        "fees": 41.13,
                        "sellRateWithVat": 39.43
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-3318",
                        "brand": "Brand C",
                        "description": "Tablets Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 171.33
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 37.03
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 23,
                        "marginValue": 39.05,
                        "sellRate": 36.26,
                        "fees": 8.68,
                        "sellRateWithVat": 7.03
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-5529",
                        "brand": "Brand D",
                        "description": "Tablets Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 210.98
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 495.5
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 0,
                        "marginValue": 3.52,
                        "sellRate": 27.28,
                        "fees": 6.56,
                        "sellRateWithVat": 9.31
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-47320",
                        "brand": "Brand E",
                        "description": "Tablets Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 152.53
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 167.91
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 326.39
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 15,
                        "marginValue": 11.95,
                        "sellRate": 49.4,
                        "fees": 41.18,
                        "sellRateWithVat": 1.84
                    }
                ]
            },
            {
                "subCategoryId": 3,
                "subCategoryName": "Cameras",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-69515",
                        "brand": "Brand A",
                        "description": "Cameras Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 0.05
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 358.93
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 19,
                        "marginValue": 28.84,
                        "sellRate": 5.58,
                        "fees": 18.45,
                        "sellRateWithVat": 42.99
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-32243",
                        "brand": "Brand B",
                        "description": "Cameras Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 473.78
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 471.03
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 8,
                        "marginValue": 6.02,
                        "sellRate": 23.27,
                        "fees": 9.47,
                        "sellRateWithVat": 34.66
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-13930",
                        "brand": "Brand C",
                        "description": "Cameras Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 139.84
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 356.4
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 2,
                        "marginValue": 19.76,
                        "sellRate": 20.73,
                        "fees": 45.34,
                        "sellRateWithVat": 41.43
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-4079",
                        "brand": "Brand D",
                        "description": "Cameras Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 385.54
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 144.75
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 14,
                        "marginValue": 38.79,
                        "sellRate": 11.74,
                        "fees": 26.67,
                        "sellRateWithVat": 36.79
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-19459",
                        "brand": "Brand E",
                        "description": "Cameras Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 98.38
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 178.69
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 52.62
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 28,
                        "marginValue": 18.71,
                        "sellRate": 33.69,
                        "fees": 21.67,
                        "sellRateWithVat": 29.85
                    }
                ]
            },
            {
                "subCategoryId": 4,
                "subCategoryName": "Audio Devices",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-193",
                        "brand": "Brand A",
                        "description": "Audio Devices Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 387.49
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 206.26
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 28,
                        "marginValue": 43.11,
                        "sellRate": 18.39,
                        "fees": 30.4,
                        "sellRateWithVat": 37.69
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-58496",
                        "brand": "Brand B",
                        "description": "Audio Devices Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 446.94
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 163.81
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 4,
                        "marginValue": 22.41,
                        "sellRate": 45.7,
                        "fees": 43.89,
                        "sellRateWithVat": 6.32
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-14053",
                        "brand": "Brand C",
                        "description": "Audio Devices Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 199.47
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 287.38
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 16,
                        "marginValue": 37.08,
                        "sellRate": 36.26,
                        "fees": 0.49,
                        "sellRateWithVat": 41.05
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-11157",
                        "brand": "Brand D",
                        "description": "Audio Devices Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 395.84
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 238.96
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 13,
                        "marginValue": 29.36,
                        "sellRate": 39.8,
                        "fees": 9.19,
                        "sellRateWithVat": 13.94
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-21257",
                        "brand": "Brand E",
                        "description": "Audio Devices Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 35.97
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 483.39
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 58.8
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 19,
                        "marginValue": 45.46,
                        "sellRate": 43.72,
                        "fees": 49.02,
                        "sellRateWithVat": 15.21
                    }
                ]
            }
        ]
    },
    {
        "categoryId": 1,
        "categoryName": "Furniture",
        "subCategory": [
            {
                "subCategoryId": 0,
                "subCategoryName": "Living Room Furniture",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-16477",
                        "brand": "Brand A",
                        "description": "Living Room Furniture Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 43.69
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 365.01
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 15,
                        "marginValue": 6.73,
                        "sellRate": 18.67,
                        "fees": 6.8,
                        "sellRateWithVat": 33.19
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-29153",
                        "brand": "Brand B",
                        "description": "Living Room Furniture Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 92.52
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 280.51
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 13,
                        "marginValue": 5.17,
                        "sellRate": 1.97,
                        "fees": 37.15,
                        "sellRateWithVat": 5.57
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-29819",
                        "brand": "Brand C",
                        "description": "Living Room Furniture Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 69.14
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 174.72
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 27,
                        "marginValue": 41.63,
                        "sellRate": 49.32,
                        "fees": 29.16,
                        "sellRateWithVat": 22.85
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-85214",
                        "brand": "Brand D",
                        "description": "Living Room Furniture Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 132.85
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 351.79
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 16,
                        "marginValue": 28.82,
                        "sellRate": 22.01,
                        "fees": 39.24,
                        "sellRateWithVat": 41.28
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-41685",
                        "brand": "Brand E",
                        "description": "Living Room Furniture Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 289.76
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 127.23
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 320.36
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 24,
                        "marginValue": 9.32,
                        "sellRate": 24.22,
                        "fees": 27.41,
                        "sellRateWithVat": 31.54
                    }
                ]
            },
            {
                "subCategoryId": 1,
                "subCategoryName": "Bedroom Furniture",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-96867",
                        "brand": "Brand A",
                        "description": "Bedroom Furniture Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 305.16
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 438.07
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 14,
                        "marginValue": 17.99,
                        "sellRate": 34.3,
                        "fees": 39.65,
                        "sellRateWithVat": 42.43
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-6845",
                        "brand": "Brand B",
                        "description": "Bedroom Furniture Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 382.89
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 417.76
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 24,
                        "marginValue": 1.76,
                        "sellRate": 3.12,
                        "fees": 17.84,
                        "sellRateWithVat": 23.2
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-27431",
                        "brand": "Brand C",
                        "description": "Bedroom Furniture Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 180.32
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 139.53
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 16,
                        "marginValue": 47.03,
                        "sellRate": 1.98,
                        "fees": 17.17,
                        "sellRateWithVat": 15.45
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-23734",
                        "brand": "Brand D",
                        "description": "Bedroom Furniture Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 395.56
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 163.35
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 14,
                        "marginValue": 7.12,
                        "sellRate": 16.83,
                        "fees": 44.72,
                        "sellRateWithVat": 10.02
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-72095",
                        "brand": "Brand E",
                        "description": "Bedroom Furniture Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 95.41
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 269.15
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 329.86
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 0,
                        "marginValue": 46.81,
                        "sellRate": 7.58,
                        "fees": 5.72,
                        "sellRateWithVat": 21.23
                    }
                ]
            },
            {
                "subCategoryId": 2,
                "subCategoryName": "Office Furniture",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-45508",
                        "brand": "Brand A",
                        "description": "Office Furniture Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 312.95
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 30.14
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 20,
                        "marginValue": 40.5,
                        "sellRate": 7.92,
                        "fees": 47.75,
                        "sellRateWithVat": 31.36
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-5491",
                        "brand": "Brand B",
                        "description": "Office Furniture Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 471.42
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 295.82
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 18,
                        "marginValue": 2.28,
                        "sellRate": 23.23,
                        "fees": 29.36,
                        "sellRateWithVat": 21.87
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-14044",
                        "brand": "Brand C",
                        "description": "Office Furniture Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 208.83
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 221.36
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 3,
                        "marginValue": 37.02,
                        "sellRate": 43.69,
                        "fees": 36.14,
                        "sellRateWithVat": 41.69
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-20524",
                        "brand": "Brand D",
                        "description": "Office Furniture Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 448.57
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 200.75
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 6,
                        "marginValue": 44.47,
                        "sellRate": 20.28,
                        "fees": 13.17,
                        "sellRateWithVat": 49.38
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-23433",
                        "brand": "Brand E",
                        "description": "Office Furniture Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 105.03
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 110.65
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 304.11
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 5,
                        "marginValue": 7.36,
                        "sellRate": 17.17,
                        "fees": 10.52,
                        "sellRateWithVat": 39.79
                    }
                ]
            },
            {
                "subCategoryId": 3,
                "subCategoryName": "Outdoor Furniture",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-34831",
                        "brand": "Brand A",
                        "description": "Outdoor Furniture Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 389.56
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 308.4
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 16,
                        "marginValue": 26.44,
                        "sellRate": 4.83,
                        "fees": 33.51,
                        "sellRateWithVat": 32.38
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-54752",
                        "brand": "Brand B",
                        "description": "Outdoor Furniture Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 134.08
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 347.53
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 6,
                        "marginValue": 27.09,
                        "sellRate": 13.91,
                        "fees": 49.19,
                        "sellRateWithVat": 24.72
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-3736",
                        "brand": "Brand C",
                        "description": "Outdoor Furniture Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 40.16
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 418.17
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 8,
                        "marginValue": 19.3,
                        "sellRate": 3.45,
                        "fees": 0.7,
                        "sellRateWithVat": 28.32
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-34842",
                        "brand": "Brand D",
                        "description": "Outdoor Furniture Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 250.42
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 292.38
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 7,
                        "marginValue": 23.4,
                        "sellRate": 8.13,
                        "fees": 48.44,
                        "sellRateWithVat": 28.58
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-53431",
                        "brand": "Brand E",
                        "description": "Outdoor Furniture Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 329.98
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 173.58
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 84.14
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 11,
                        "marginValue": 31.95,
                        "sellRate": 24.78,
                        "fees": 18.84,
                        "sellRateWithVat": 23.1
                    }
                ]
            },
            {
                "subCategoryId": 4,
                "subCategoryName": "Storage Solutions",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-60435",
                        "brand": "Brand A",
                        "description": "Storage Solutions Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 91.44
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 112.28
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 7,
                        "marginValue": 0.14,
                        "sellRate": 48.33,
                        "fees": 26.38,
                        "sellRateWithVat": 24.94
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-34633",
                        "brand": "Brand B",
                        "description": "Storage Solutions Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 288.37
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 377.23
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 13,
                        "marginValue": 45.58,
                        "sellRate": 27.36,
                        "fees": 47.94,
                        "sellRateWithVat": 3.39
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-70114",
                        "brand": "Brand C",
                        "description": "Storage Solutions Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 123.31
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 121.83
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 20,
                        "marginValue": 38.26,
                        "sellRate": 3.33,
                        "fees": 44.53,
                        "sellRateWithVat": 44.47
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-2498",
                        "brand": "Brand D",
                        "description": "Storage Solutions Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 216.38
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 4.14
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 2,
                        "marginValue": 28.71,
                        "sellRate": 37.05,
                        "fees": 45.5,
                        "sellRateWithVat": 19.11
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-39600",
                        "brand": "Brand E",
                        "description": "Storage Solutions Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 126.18
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 78.45
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 350.57
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 24,
                        "marginValue": 24.42,
                        "sellRate": 10.58,
                        "fees": 18.52,
                        "sellRateWithVat": 30.43
                    }
                ]
            }
        ]
    },
    {
        "categoryId": 2,
        "categoryName": "Clothing",
        "subCategory": [
            {
                "subCategoryId": 0,
                "subCategoryName": "Men's Clothing",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-22383",
                        "brand": "Brand A",
                        "description": "Men's Clothing Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 132.91
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 251.87
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 12,
                        "marginValue": 24.91,
                        "sellRate": 9.67,
                        "fees": 45.07,
                        "sellRateWithVat": 12.93
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-89083",
                        "brand": "Brand B",
                        "description": "Men's Clothing Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 459.34
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 279.06
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 20,
                        "marginValue": 33.85,
                        "sellRate": 3.44,
                        "fees": 6.51,
                        "sellRateWithVat": 10.75
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-48563",
                        "brand": "Brand C",
                        "description": "Men's Clothing Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 173.59
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 164.71
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 25,
                        "marginValue": 7.96,
                        "sellRate": 34.51,
                        "fees": 42.23,
                        "sellRateWithVat": 21.87
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-73736",
                        "brand": "Brand D",
                        "description": "Men's Clothing Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 284.58
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 123.33
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 20,
                        "marginValue": 6.51,
                        "sellRate": 27.43,
                        "fees": 26.04,
                        "sellRateWithVat": 47.56
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-94670",
                        "brand": "Brand E",
                        "description": "Men's Clothing Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 46.75
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 345.08
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 179.7
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 15,
                        "marginValue": 48.01,
                        "sellRate": 39.83,
                        "fees": 16.12,
                        "sellRateWithVat": 49.02
                    }
                ]
            },
            {
                "subCategoryId": 1,
                "subCategoryName": "Women's Clothing",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-35465",
                        "brand": "Brand A",
                        "description": "Women's Clothing Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 225.67
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 465.07
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 25,
                        "marginValue": 25.82,
                        "sellRate": 17.01,
                        "fees": 20.04,
                        "sellRateWithVat": 23.82
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-73066",
                        "brand": "Brand B",
                        "description": "Women's Clothing Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 218.57
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 37
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 21,
                        "marginValue": 47.61,
                        "sellRate": 22.15,
                        "fees": 15.61,
                        "sellRateWithVat": 43.84
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-23299",
                        "brand": "Brand C",
                        "description": "Women's Clothing Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 364.21
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 200.53
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 1,
                        "marginValue": 28.44,
                        "sellRate": 49.86,
                        "fees": 23.01,
                        "sellRateWithVat": 25.96
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-31140",
                        "brand": "Brand D",
                        "description": "Women's Clothing Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 430.36
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 273.67
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 13,
                        "marginValue": 28.67,
                        "sellRate": 0.17,
                        "fees": 32.34,
                        "sellRateWithVat": 2.64
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-95670",
                        "brand": "Brand E",
                        "description": "Women's Clothing Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 203.18
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 29.1
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 78.35
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 14,
                        "marginValue": 30.94,
                        "sellRate": 34.09,
                        "fees": 20.1,
                        "sellRateWithVat": 2.3
                    }
                ]
            },
            {
                "subCategoryId": 2,
                "subCategoryName": "Children's Clothing",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-95181",
                        "brand": "Brand A",
                        "description": "Children's Clothing Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 203
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 430.77
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 2,
                        "marginValue": 42.65,
                        "sellRate": 10.6,
                        "fees": 35.32,
                        "sellRateWithVat": 38.95
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-93577",
                        "brand": "Brand B",
                        "description": "Children's Clothing Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 233.56
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 220.89
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 0,
                        "marginValue": 42.08,
                        "sellRate": 2.51,
                        "fees": 44.94,
                        "sellRateWithVat": 6.46
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-10370",
                        "brand": "Brand C",
                        "description": "Children's Clothing Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 380.41
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 189.34
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 0,
                        "marginValue": 19.69,
                        "sellRate": 4.57,
                        "fees": 6.63,
                        "sellRateWithVat": 21.45
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-16320",
                        "brand": "Brand D",
                        "description": "Children's Clothing Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 277.14
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 237.35
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 16,
                        "marginValue": 2.23,
                        "sellRate": 28.36,
                        "fees": 38.41,
                        "sellRateWithVat": 17.96
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-23517",
                        "brand": "Brand E",
                        "description": "Children's Clothing Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 112.96
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 319.7
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 479.8
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 15,
                        "marginValue": 7.6,
                        "sellRate": 46.26,
                        "fees": 32.12,
                        "sellRateWithVat": 36.17
                    }
                ]
            },
            {
                "subCategoryId": 3,
                "subCategoryName": "Activewear",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-83434",
                        "brand": "Brand A",
                        "description": "Activewear Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 378.9
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 460.71
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 4,
                        "marginValue": 42.13,
                        "sellRate": 39.04,
                        "fees": 26.97,
                        "sellRateWithVat": 42.04
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-15230",
                        "brand": "Brand B",
                        "description": "Activewear Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 347.98
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 409.9
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 16,
                        "marginValue": 48.03,
                        "sellRate": 4.19,
                        "fees": 5.59,
                        "sellRateWithVat": 12.54
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-32743",
                        "brand": "Brand C",
                        "description": "Activewear Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 345.04
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 192.11
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 10,
                        "marginValue": 38.26,
                        "sellRate": 35.33,
                        "fees": 42.62,
                        "sellRateWithVat": 26.59
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-44845",
                        "brand": "Brand D",
                        "description": "Activewear Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 169.45
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 238.98
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 7,
                        "marginValue": 0.76,
                        "sellRate": 16.03,
                        "fees": 16.44,
                        "sellRateWithVat": 17.23
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-46603",
                        "brand": "Brand E",
                        "description": "Activewear Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 168.68
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 192.28
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 337.45
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 15,
                        "marginValue": 29.05,
                        "sellRate": 37.3,
                        "fees": 27.26,
                        "sellRateWithVat": 4.79
                    }
                ]
            },
            {
                "subCategoryId": 4,
                "subCategoryName": "Accessories",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-44320",
                        "brand": "Brand A",
                        "description": "Accessories Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 261.32
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 483.7
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 15,
                        "marginValue": 39.07,
                        "sellRate": 31.12,
                        "fees": 1.68,
                        "sellRateWithVat": 6.06
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-55969",
                        "brand": "Brand B",
                        "description": "Accessories Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 185.77
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 307.59
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 11,
                        "marginValue": 30.71,
                        "sellRate": 33.4,
                        "fees": 2.55,
                        "sellRateWithVat": 17.9
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-45300",
                        "brand": "Brand C",
                        "description": "Accessories Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 451.37
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 278.66
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 12,
                        "marginValue": 41.01,
                        "sellRate": 49.51,
                        "fees": 36.58,
                        "sellRateWithVat": 33.53
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-93793",
                        "brand": "Brand D",
                        "description": "Accessories Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 325.13
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 213.08
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 5,
                        "marginValue": 0.55,
                        "sellRate": 22.98,
                        "fees": 35.75,
                        "sellRateWithVat": 31.16
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-19427",
                        "brand": "Brand E",
                        "description": "Accessories Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 379.02
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 167.22
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 200.62
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 21,
                        "marginValue": 35.14,
                        "sellRate": 39.82,
                        "fees": 27.55,
                        "sellRateWithVat": 45.88
                    }
                ]
            }
        ]
    },
    {
        "categoryId": 3,
        "categoryName": "Books",
        "subCategory": [
            {
                "subCategoryId": 0,
                "subCategoryName": "Fiction",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-24451",
                        "brand": "Brand A",
                        "description": "Fiction Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 101.81
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 6.69
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 21,
                        "marginValue": 29.66,
                        "sellRate": 18.42,
                        "fees": 43.37,
                        "sellRateWithVat": 46.15
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-41665",
                        "brand": "Brand B",
                        "description": "Fiction Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 335.87
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 260.72
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 26,
                        "marginValue": 28.33,
                        "sellRate": 49.71,
                        "fees": 22.79,
                        "sellRateWithVat": 42.97
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-86180",
                        "brand": "Brand C",
                        "description": "Fiction Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 224.69
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 395.9
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 17,
                        "marginValue": 44.66,
                        "sellRate": 2.15,
                        "fees": 29.55,
                        "sellRateWithVat": 26.62
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-25751",
                        "brand": "Brand D",
                        "description": "Fiction Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 10.49
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 377.39
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 9,
                        "marginValue": 17.09,
                        "sellRate": 21.56,
                        "fees": 32.24,
                        "sellRateWithVat": 11.14
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-79005",
                        "brand": "Brand E",
                        "description": "Fiction Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 381.53
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 387.35
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 163.83
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 19,
                        "marginValue": 27.17,
                        "sellRate": 7.8,
                        "fees": 45.16,
                        "sellRateWithVat": 5.39
                    }
                ]
            },
            {
                "subCategoryId": 1,
                "subCategoryName": "Non-Fiction",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-66629",
                        "brand": "Brand A",
                        "description": "Non-Fiction Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 292.73
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 28.95
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 29,
                        "marginValue": 14.82,
                        "sellRate": 43.33,
                        "fees": 29.44,
                        "sellRateWithVat": 11.99
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-76504",
                        "brand": "Brand B",
                        "description": "Non-Fiction Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 447.95
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 425.68
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 20,
                        "marginValue": 18.17,
                        "sellRate": 27.52,
                        "fees": 18.23,
                        "sellRateWithVat": 32.77
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-21727",
                        "brand": "Brand C",
                        "description": "Non-Fiction Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 465.73
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 203.73
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 29,
                        "marginValue": 10.41,
                        "sellRate": 24.27,
                        "fees": 0.93,
                        "sellRateWithVat": 39.49
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-90634",
                        "brand": "Brand D",
                        "description": "Non-Fiction Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 264.5
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 370.41
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 20,
                        "marginValue": 10.97,
                        "sellRate": 15.16,
                        "fees": 7.01,
                        "sellRateWithVat": 32.09
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-87780",
                        "brand": "Brand E",
                        "description": "Non-Fiction Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 111.22
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 39.46
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 187.88
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 24,
                        "marginValue": 8.43,
                        "sellRate": 40.21,
                        "fees": 17.09,
                        "sellRateWithVat": 41.51
                    }
                ]
            },
            {
                "subCategoryId": 2,
                "subCategoryName": "Children's Books",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-39772",
                        "brand": "Brand A",
                        "description": "Children's Books Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 215.93
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 178.94
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 11,
                        "marginValue": 12.6,
                        "sellRate": 29.42,
                        "fees": 7.96,
                        "sellRateWithVat": 23.3
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-30235",
                        "brand": "Brand B",
                        "description": "Children's Books Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 354.01
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 196.68
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 14,
                        "marginValue": 15.23,
                        "sellRate": 48.26,
                        "fees": 18.84,
                        "sellRateWithVat": 31.18
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-73110",
                        "brand": "Brand C",
                        "description": "Children's Books Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 387.13
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 435.91
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 5,
                        "marginValue": 25.08,
                        "sellRate": 3.51,
                        "fees": 46.2,
                        "sellRateWithVat": 18.67
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-80627",
                        "brand": "Brand D",
                        "description": "Children's Books Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 340.03
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 237.28
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 17,
                        "marginValue": 25.04,
                        "sellRate": 2.85,
                        "fees": 48.54,
                        "sellRateWithVat": 8.27
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-79740",
                        "brand": "Brand E",
                        "description": "Children's Books Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 283.37
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 340.2
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 144.29
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 6,
                        "marginValue": 44.01,
                        "sellRate": 14.49,
                        "fees": 7.39,
                        "sellRateWithVat": 31.63
                    }
                ]
            },
            {
                "subCategoryId": 3,
                "subCategoryName": "Textbooks",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-71949",
                        "brand": "Brand A",
                        "description": "Textbooks Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 456.5
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 74.68
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 22,
                        "marginValue": 29.84,
                        "sellRate": 29.21,
                        "fees": 8.23,
                        "sellRateWithVat": 18.39
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-46318",
                        "brand": "Brand B",
                        "description": "Textbooks Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 314.24
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 450.63
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 8,
                        "marginValue": 9.35,
                        "sellRate": 25.52,
                        "fees": 22.43,
                        "sellRateWithVat": 22.31
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-82996",
                        "brand": "Brand C",
                        "description": "Textbooks Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 110.9
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 104.34
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 0,
                        "marginValue": 36.41,
                        "sellRate": 8.49,
                        "fees": 6.41,
                        "sellRateWithVat": 11
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-90130",
                        "brand": "Brand D",
                        "description": "Textbooks Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 338.3
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 409.05
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 6,
                        "marginValue": 0.13,
                        "sellRate": 2.69,
                        "fees": 47.68,
                        "sellRateWithVat": 12.38
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-12186",
                        "brand": "Brand E",
                        "description": "Textbooks Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 448.56
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 477.56
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 260.26
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 1,
                        "marginValue": 14.99,
                        "sellRate": 47.98,
                        "fees": 5.18,
                        "sellRateWithVat": 48.77
                    }
                ]
            },
            {
                "subCategoryId": 4,
                "subCategoryName": "E-books",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-20466",
                        "brand": "Brand A",
                        "description": "E-books Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 380.31
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 378.88
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 6,
                        "marginValue": 3.63,
                        "sellRate": 25.81,
                        "fees": 13.32,
                        "sellRateWithVat": 26.53
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-24592",
                        "brand": "Brand B",
                        "description": "E-books Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 150.65
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 49.65
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 13,
                        "marginValue": 11.2,
                        "sellRate": 37.52,
                        "fees": 33.23,
                        "sellRateWithVat": 36.26
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-46162",
                        "brand": "Brand C",
                        "description": "E-books Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 173.46
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 268.94
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 28,
                        "marginValue": 31,
                        "sellRate": 48.5,
                        "fees": 31.7,
                        "sellRateWithVat": 44.3
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-16472",
                        "brand": "Brand D",
                        "description": "E-books Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 38.57
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 350.33
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 2,
                        "marginValue": 16.6,
                        "sellRate": 14.88,
                        "fees": 6.06,
                        "sellRateWithVat": 23.6
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-18433",
                        "brand": "Brand E",
                        "description": "E-books Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 58.15
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 498.17
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 283.39
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 19,
                        "marginValue": 45.54,
                        "sellRate": 29.23,
                        "fees": 35.53,
                        "sellRateWithVat": 46.43
                    }
                ]
            }
        ]
    },
    {
        "categoryId": 4,
        "categoryName": "Toys",
        "subCategory": [
            {
                "subCategoryId": 0,
                "subCategoryName": "Action Figures",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-99894",
                        "brand": "Brand A",
                        "description": "Action Figures Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 11.22
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 117.74
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 20,
                        "marginValue": 33.43,
                        "sellRate": 20.5,
                        "fees": 19.27,
                        "sellRateWithVat": 41.03
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-93727",
                        "brand": "Brand B",
                        "description": "Action Figures Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 280.32
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 362.16
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 16,
                        "marginValue": 14.49,
                        "sellRate": 46.13,
                        "fees": 41.58,
                        "sellRateWithVat": 24.42
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-16048",
                        "brand": "Brand C",
                        "description": "Action Figures Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 190.43
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 400.53
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 4,
                        "marginValue": 9.99,
                        "sellRate": 10.01,
                        "fees": 34.43,
                        "sellRateWithVat": 45.79
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-449",
                        "brand": "Brand D",
                        "description": "Action Figures Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 461.98
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 195.52
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 13,
                        "marginValue": 13.01,
                        "sellRate": 19.41,
                        "fees": 6.2,
                        "sellRateWithVat": 25.64
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-33887",
                        "brand": "Brand E",
                        "description": "Action Figures Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 27.75
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 171.44
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 272.78
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 13,
                        "marginValue": 33.2,
                        "sellRate": 44.49,
                        "fees": 39.42,
                        "sellRateWithVat": 45.74
                    }
                ]
            },
            {
                "subCategoryId": 1,
                "subCategoryName": "Educational Toys",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-42502",
                        "brand": "Brand A",
                        "description": "Educational Toys Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 1.33
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 200.08
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 21,
                        "marginValue": 15.77,
                        "sellRate": 9.23,
                        "fees": 33.19,
                        "sellRateWithVat": 21.77
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-54429",
                        "brand": "Brand B",
                        "description": "Educational Toys Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 106.7
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 80.9
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 2,
                        "marginValue": 5.04,
                        "sellRate": 34.67,
                        "fees": 20.42,
                        "sellRateWithVat": 13.24
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-10405",
                        "brand": "Brand C",
                        "description": "Educational Toys Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 247.65
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 309.23
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 22,
                        "marginValue": 32.62,
                        "sellRate": 48.59,
                        "fees": 4.07,
                        "sellRateWithVat": 41.35
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-38968",
                        "brand": "Brand D",
                        "description": "Educational Toys Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 189.43
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 120.08
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 12,
                        "marginValue": 25.44,
                        "sellRate": 20.11,
                        "fees": 25.48,
                        "sellRateWithVat": 42.41
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-7489",
                        "brand": "Brand E",
                        "description": "Educational Toys Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 412.55
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 369.7
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 301.73
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 20,
                        "marginValue": 35.65,
                        "sellRate": 34.61,
                        "fees": 48.6,
                        "sellRateWithVat": 30.57
                    }
                ]
            },
            {
                "subCategoryId": 2,
                "subCategoryName": "Board Games",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-63970",
                        "brand": "Brand A",
                        "description": "Board Games Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 307.95
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 498.44
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 13,
                        "marginValue": 45.72,
                        "sellRate": 17.69,
                        "fees": 14.73,
                        "sellRateWithVat": 21.41
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-90576",
                        "brand": "Brand B",
                        "description": "Board Games Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 457.15
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 194.25
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 29,
                        "marginValue": 28.66,
                        "sellRate": 46.31,
                        "fees": 7.58,
                        "sellRateWithVat": 37.76
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-16235",
                        "brand": "Brand C",
                        "description": "Board Games Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 323.85
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 331.04
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 6,
                        "marginValue": 5.95,
                        "sellRate": 21.13,
                        "fees": 25.13,
                        "sellRateWithVat": 34.93
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-35713",
                        "brand": "Brand D",
                        "description": "Board Games Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 249.59
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 228.84
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 4,
                        "marginValue": 3.49,
                        "sellRate": 9.58,
                        "fees": 21.54,
                        "sellRateWithVat": 21.19
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-87731",
                        "brand": "Brand E",
                        "description": "Board Games Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 133.69
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 197.86
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 128.02
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 13,
                        "marginValue": 42.01,
                        "sellRate": 5.58,
                        "fees": 8.66,
                        "sellRateWithVat": 47.95
                    }
                ]
            },
            {
                "subCategoryId": 3,
                "subCategoryName": "Outdoor Toys",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-58804",
                        "brand": "Brand A",
                        "description": "Outdoor Toys Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 261.95
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 130.95
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 13,
                        "marginValue": 18.54,
                        "sellRate": 37.75,
                        "fees": 24.95,
                        "sellRateWithVat": 43.38
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-45191",
                        "brand": "Brand B",
                        "description": "Outdoor Toys Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 418.83
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 453.12
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 28,
                        "marginValue": 5.64,
                        "sellRate": 36.15,
                        "fees": 40.45,
                        "sellRateWithVat": 6.96
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-71973",
                        "brand": "Brand C",
                        "description": "Outdoor Toys Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 137.83
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 194.04
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 9,
                        "marginValue": 19.89,
                        "sellRate": 34.3,
                        "fees": 4.53,
                        "sellRateWithVat": 11.87
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-38716",
                        "brand": "Brand D",
                        "description": "Outdoor Toys Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 63.39
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 230.45
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 7,
                        "marginValue": 1.9,
                        "sellRate": 45.47,
                        "fees": 27.47,
                        "sellRateWithVat": 42.54
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-64467",
                        "brand": "Brand E",
                        "description": "Outdoor Toys Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 212.75
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 52.14
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 28.12
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 27,
                        "marginValue": 1.44,
                        "sellRate": 42.05,
                        "fees": 8.61,
                        "sellRateWithVat": 43.55
                    }
                ]
            },
            {
                "subCategoryId": 4,
                "subCategoryName": "Dolls",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-52093",
                        "brand": "Brand A",
                        "description": "Dolls Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 365.39
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 29.61
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 4,
                        "marginValue": 34.28,
                        "sellRate": 31.64,
                        "fees": 18.65,
                        "sellRateWithVat": 23.42
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-96295",
                        "brand": "Brand B",
                        "description": "Dolls Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 60.64
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 430.86
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 6,
                        "marginValue": 6.75,
                        "sellRate": 5.75,
                        "fees": 18.72,
                        "sellRateWithVat": 21.98
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-50112",
                        "brand": "Brand C",
                        "description": "Dolls Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 15.21
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 409.12
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 11,
                        "marginValue": 28.85,
                        "sellRate": 27.08,
                        "fees": 45.61,
                        "sellRateWithVat": 6.66
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-53238",
                        "brand": "Brand D",
                        "description": "Dolls Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 232.27
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 31.93
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 29,
                        "marginValue": 29.79,
                        "sellRate": 47.04,
                        "fees": 37.35,
                        "sellRateWithVat": 34.98
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-5841",
                        "brand": "Brand E",
                        "description": "Dolls Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 98.89
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 448.41
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 451.92
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 9,
                        "marginValue": 4.04,
                        "sellRate": 46.18,
                        "fees": 12.53,
                        "sellRateWithVat": 13.82
                    }
                ]
            }
        ]
    },
    {
        "categoryId": 5,
        "categoryName": "Sports Equipment",
        "subCategory": [
            {
                "subCategoryId": 0,
                "subCategoryName": "Fitness Equipment",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-45662",
                        "brand": "Brand A",
                        "description": "Fitness Equipment Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 105.33
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 8.21
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 29,
                        "marginValue": 6.24,
                        "sellRate": 15.54,
                        "fees": 18.68,
                        "sellRateWithVat": 16.3
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-4147",
                        "brand": "Brand B",
                        "description": "Fitness Equipment Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 329.47
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 70.39
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 10,
                        "marginValue": 13.55,
                        "sellRate": 25.05,
                        "fees": 1.05,
                        "sellRateWithVat": 28.05
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-18563",
                        "brand": "Brand C",
                        "description": "Fitness Equipment Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 289.35
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 421.48
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 13,
                        "marginValue": 40.12,
                        "sellRate": 23.15,
                        "fees": 47.36,
                        "sellRateWithVat": 40.08
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-79981",
                        "brand": "Brand D",
                        "description": "Fitness Equipment Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 478.8
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 107.82
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 17,
                        "marginValue": 6.82,
                        "sellRate": 17.77,
                        "fees": 36.08,
                        "sellRateWithVat": 45.95
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-92871",
                        "brand": "Brand E",
                        "description": "Fitness Equipment Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 145.22
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 461.68
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 242.79
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 20,
                        "marginValue": 33.05,
                        "sellRate": 6.44,
                        "fees": 22.07,
                        "sellRateWithVat": 41.17
                    }
                ]
            },
            {
                "subCategoryId": 1,
                "subCategoryName": "Team Sports Gear",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-44919",
                        "brand": "Brand A",
                        "description": "Team Sports Gear Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 154.39
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 344.21
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 23,
                        "marginValue": 37.78,
                        "sellRate": 15.28,
                        "fees": 23.32,
                        "sellRateWithVat": 37.51
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-90614",
                        "brand": "Brand B",
                        "description": "Team Sports Gear Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 190.49
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 441.57
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 20,
                        "marginValue": 26,
                        "sellRate": 28.11,
                        "fees": 19.75,
                        "sellRateWithVat": 16.79
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-18122",
                        "brand": "Brand C",
                        "description": "Team Sports Gear Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 154.6
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 414.42
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 19,
                        "marginValue": 17.78,
                        "sellRate": 23.85,
                        "fees": 25.58,
                        "sellRateWithVat": 15.33
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-31607",
                        "brand": "Brand D",
                        "description": "Team Sports Gear Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 414.62
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 329.28
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 4,
                        "marginValue": 6.17,
                        "sellRate": 23.08,
                        "fees": 22.31,
                        "sellRateWithVat": 26.51
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-71138",
                        "brand": "Brand E",
                        "description": "Team Sports Gear Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 450.5
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 36.07
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 44.64
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 17,
                        "marginValue": 20.57,
                        "sellRate": 42.08,
                        "fees": 11.34,
                        "sellRateWithVat": 14.59
                    }
                ]
            },
            {
                "subCategoryId": 2,
                "subCategoryName": "Outdoor Sports Gear",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-97376",
                        "brand": "Brand A",
                        "description": "Outdoor Sports Gear Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 130.33
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 31.44
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 7,
                        "marginValue": 1,
                        "sellRate": 49.28,
                        "fees": 15.95,
                        "sellRateWithVat": 20.52
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-21292",
                        "brand": "Brand B",
                        "description": "Outdoor Sports Gear Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 6.38
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 440.66
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 23,
                        "marginValue": 26.69,
                        "sellRate": 21.15,
                        "fees": 5.35,
                        "sellRateWithVat": 39.53
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-58499",
                        "brand": "Brand C",
                        "description": "Outdoor Sports Gear Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 283.37
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 32.01
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 4,
                        "marginValue": 11.27,
                        "sellRate": 17.35,
                        "fees": 2.89,
                        "sellRateWithVat": 15.74
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-62859",
                        "brand": "Brand D",
                        "description": "Outdoor Sports Gear Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 459.15
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 76.02
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 11,
                        "marginValue": 37.41,
                        "sellRate": 18.59,
                        "fees": 49.93,
                        "sellRateWithVat": 43.42
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-35463",
                        "brand": "Brand E",
                        "description": "Outdoor Sports Gear Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 387.81
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 204.3
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 315.65
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 23,
                        "marginValue": 8.76,
                        "sellRate": 44.59,
                        "fees": 3.77,
                        "sellRateWithVat": 35.02
                    }
                ]
            },
            {
                "subCategoryId": 3,
                "subCategoryName": "Water Sports Equipment",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-8420",
                        "brand": "Brand A",
                        "description": "Water Sports Equipment Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 407.87
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 42.3
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 25,
                        "marginValue": 41.24,
                        "sellRate": 14.95,
                        "fees": 15.88,
                        "sellRateWithVat": 31.8
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-75079",
                        "brand": "Brand B",
                        "description": "Water Sports Equipment Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 461.64
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 488.83
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 18,
                        "marginValue": 39.03,
                        "sellRate": 14.44,
                        "fees": 32.93,
                        "sellRateWithVat": 34.78
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-92630",
                        "brand": "Brand C",
                        "description": "Water Sports Equipment Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 420.16
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 217.38
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 8,
                        "marginValue": 36.07,
                        "sellRate": 16.44,
                        "fees": 3.97,
                        "sellRateWithVat": 37.12
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-94065",
                        "brand": "Brand D",
                        "description": "Water Sports Equipment Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 260
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 247.39
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 23,
                        "marginValue": 2.95,
                        "sellRate": 25.71,
                        "fees": 36.56,
                        "sellRateWithVat": 4.73
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-41063",
                        "brand": "Brand E",
                        "description": "Water Sports Equipment Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 453.33
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 270.92
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 98.09
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 8,
                        "marginValue": 49.09,
                        "sellRate": 43.57,
                        "fees": 29.55,
                        "sellRateWithVat": 39.21
                    }
                ]
            },
            {
                "subCategoryId": 4,
                "subCategoryName": "Biking Gear",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-67828",
                        "brand": "Brand A",
                        "description": "Biking Gear Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 402.44
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 126.57
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 2,
                        "marginValue": 28.89,
                        "sellRate": 13.02,
                        "fees": 28.83,
                        "sellRateWithVat": 0.29
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-53864",
                        "brand": "Brand B",
                        "description": "Biking Gear Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 496.19
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 327.29
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 9,
                        "marginValue": 27.95,
                        "sellRate": 25.27,
                        "fees": 8.8,
                        "sellRateWithVat": 30.95
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-67622",
                        "brand": "Brand C",
                        "description": "Biking Gear Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 0.12
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 278.51
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 18,
                        "marginValue": 47.7,
                        "sellRate": 28.74,
                        "fees": 22.8,
                        "sellRateWithVat": 19.7
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-60248",
                        "brand": "Brand D",
                        "description": "Biking Gear Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 156.27
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 214.74
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 26,
                        "marginValue": 4.42,
                        "sellRate": 10.74,
                        "fees": 23.77,
                        "sellRateWithVat": 20.84
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-44457",
                        "brand": "Brand E",
                        "description": "Biking Gear Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 55.6
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 259.04
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 219.34
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 13,
                        "marginValue": 6.28,
                        "sellRate": 31,
                        "fees": 10.18,
                        "sellRateWithVat": 42.2
                    }
                ]
            }
        ]
    },
    {
        "categoryId": 6,
        "categoryName": "Home Appliances",
        "subCategory": [
            {
                "subCategoryId": 0,
                "subCategoryName": "Kitchen Appliances",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-37943",
                        "brand": "Brand A",
                        "description": "Kitchen Appliances Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 27.82
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 302.56
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 24,
                        "marginValue": 37.28,
                        "sellRate": 21.48,
                        "fees": 45.92,
                        "sellRateWithVat": 11.54
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-96185",
                        "brand": "Brand B",
                        "description": "Kitchen Appliances Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 343.69
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 386.66
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 23,
                        "marginValue": 30.85,
                        "sellRate": 21.47,
                        "fees": 42.4,
                        "sellRateWithVat": 45.85
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-75691",
                        "brand": "Brand C",
                        "description": "Kitchen Appliances Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 230.51
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 310.89
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 2,
                        "marginValue": 37.78,
                        "sellRate": 22.03,
                        "fees": 47.69,
                        "sellRateWithVat": 41.09
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-72663",
                        "brand": "Brand D",
                        "description": "Kitchen Appliances Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 68.74
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 361.61
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 20,
                        "marginValue": 28.21,
                        "sellRate": 1.54,
                        "fees": 19.44,
                        "sellRateWithVat": 15.25
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-28908",
                        "brand": "Brand E",
                        "description": "Kitchen Appliances Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 391.83
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 384.99
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 242.2
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 2,
                        "marginValue": 24.56,
                        "sellRate": 21.51,
                        "fees": 48.06,
                        "sellRateWithVat": 16.57
                    }
                ]
            },
            {
                "subCategoryId": 1,
                "subCategoryName": "Cleaning Appliances",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-32741",
                        "brand": "Brand A",
                        "description": "Cleaning Appliances Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 21.03
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 491.85
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 27,
                        "marginValue": 11.9,
                        "sellRate": 46.26,
                        "fees": 42.85,
                        "sellRateWithVat": 4.15
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-39399",
                        "brand": "Brand B",
                        "description": "Cleaning Appliances Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 414.86
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 95.06
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 22,
                        "marginValue": 27.32,
                        "sellRate": 23.62,
                        "fees": 4.67,
                        "sellRateWithVat": 37.71
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-53541",
                        "brand": "Brand C",
                        "description": "Cleaning Appliances Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 404.87
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 366.57
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 25,
                        "marginValue": 12.85,
                        "sellRate": 13.15,
                        "fees": 10.28,
                        "sellRateWithVat": 25.4
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-43566",
                        "brand": "Brand D",
                        "description": "Cleaning Appliances Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 10.33
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 351.03
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 23,
                        "marginValue": 30.14,
                        "sellRate": 8.07,
                        "fees": 6.54,
                        "sellRateWithVat": 32.04
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-82157",
                        "brand": "Brand E",
                        "description": "Cleaning Appliances Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 164.87
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 116.44
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 152.5
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 11,
                        "marginValue": 9.15,
                        "sellRate": 25.89,
                        "fees": 33.26,
                        "sellRateWithVat": 0.83
                    }
                ]
            },
            {
                "subCategoryId": 2,
                "subCategoryName": "Laundry Appliances",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-48336",
                        "brand": "Brand A",
                        "description": "Laundry Appliances Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 80.3
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 59.57
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 21,
                        "marginValue": 26.76,
                        "sellRate": 28.04,
                        "fees": 26.85,
                        "sellRateWithVat": 43.31
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-87929",
                        "brand": "Brand B",
                        "description": "Laundry Appliances Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 91.49
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 26.26
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 29,
                        "marginValue": 24.65,
                        "sellRate": 22.58,
                        "fees": 31,
                        "sellRateWithVat": 46.6
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-75431",
                        "brand": "Brand C",
                        "description": "Laundry Appliances Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 95.29
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 424.74
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 20,
                        "marginValue": 44.72,
                        "sellRate": 48.02,
                        "fees": 31.78,
                        "sellRateWithVat": 18.93
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-22960",
                        "brand": "Brand D",
                        "description": "Laundry Appliances Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 398.33
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 453.18
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 23,
                        "marginValue": 47.92,
                        "sellRate": 29.51,
                        "fees": 20.94,
                        "sellRateWithVat": 23.51
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-98743",
                        "brand": "Brand E",
                        "description": "Laundry Appliances Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 125.06
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 115.66
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 176.92
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 27,
                        "marginValue": 46.16,
                        "sellRate": 39.4,
                        "fees": 40.3,
                        "sellRateWithVat": 33.25
                    }
                ]
            },
            {
                "subCategoryId": 3,
                "subCategoryName": "Heating & Cooling Appliances",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-63554",
                        "brand": "Brand A",
                        "description": "Heating & Cooling Appliances Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 2.39
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 114.42
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 24,
                        "marginValue": 26.84,
                        "sellRate": 18.08,
                        "fees": 32.67,
                        "sellRateWithVat": 19.98
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-14968",
                        "brand": "Brand B",
                        "description": "Heating & Cooling Appliances Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 195.53
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 230.96
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 5,
                        "marginValue": 34.41,
                        "sellRate": 36.29,
                        "fees": 44.77,
                        "sellRateWithVat": 33.73
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-20452",
                        "brand": "Brand C",
                        "description": "Heating & Cooling Appliances Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 466.6
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 447.16
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 27,
                        "marginValue": 48.74,
                        "sellRate": 34.74,
                        "fees": 42.68,
                        "sellRateWithVat": 7.97
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-1854",
                        "brand": "Brand D",
                        "description": "Heating & Cooling Appliances Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 230.81
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 91.43
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 14,
                        "marginValue": 39.4,
                        "sellRate": 46.97,
                        "fees": 38.46,
                        "sellRateWithVat": 27.38
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-81225",
                        "brand": "Brand E",
                        "description": "Heating & Cooling Appliances Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 100.66
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 25.04
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 318.76
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 1,
                        "marginValue": 20.78,
                        "sellRate": 37.82,
                        "fees": 31.84,
                        "sellRateWithVat": 13.77
                    }
                ]
            },
            {
                "subCategoryId": 4,
                "subCategoryName": "Smart Appliances",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-76977",
                        "brand": "Brand A",
                        "description": "Smart Appliances Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 484.67
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 453.79
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 27,
                        "marginValue": 4.12,
                        "sellRate": 30.87,
                        "fees": 5.73,
                        "sellRateWithVat": 32.46
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-88593",
                        "brand": "Brand B",
                        "description": "Smart Appliances Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 484.27
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 280.97
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 22,
                        "marginValue": 11.47,
                        "sellRate": 42.06,
                        "fees": 14.36,
                        "sellRateWithVat": 8.45
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-56726",
                        "brand": "Brand C",
                        "description": "Smart Appliances Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 132.54
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 186.59
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 29,
                        "marginValue": 15.11,
                        "sellRate": 4.56,
                        "fees": 27.54,
                        "sellRateWithVat": 5.05
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-51168",
                        "brand": "Brand D",
                        "description": "Smart Appliances Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 325.68
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 476.59
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 27,
                        "marginValue": 41.3,
                        "sellRate": 37.09,
                        "fees": 24.32,
                        "sellRateWithVat": 35.7
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-48813",
                        "brand": "Brand E",
                        "description": "Smart Appliances Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 328.14
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 146.21
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 115.14
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 3,
                        "marginValue": 40.78,
                        "sellRate": 12.77,
                        "fees": 21.85,
                        "sellRateWithVat": 0.16
                    }
                ]
            }
        ]
    },
    {
        "categoryId": 7,
        "categoryName": "Beauty Products",
        "subCategory": [
            {
                "subCategoryId": 0,
                "subCategoryName": "Skincare",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-15625",
                        "brand": "Brand A",
                        "description": "Skincare Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 277.83
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 227.04
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 5,
                        "marginValue": 46.85,
                        "sellRate": 31.39,
                        "fees": 27.47,
                        "sellRateWithVat": 24.69
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-16708",
                        "brand": "Brand B",
                        "description": "Skincare Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 230.04
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 370.96
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 5,
                        "marginValue": 5.16,
                        "sellRate": 22.36,
                        "fees": 21.45,
                        "sellRateWithVat": 21.82
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-80493",
                        "brand": "Brand C",
                        "description": "Skincare Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 144.68
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 382.84
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 14,
                        "marginValue": 23.55,
                        "sellRate": 36.01,
                        "fees": 9.36,
                        "sellRateWithVat": 0.26
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-80730",
                        "brand": "Brand D",
                        "description": "Skincare Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 63.08
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 90.78
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 16,
                        "marginValue": 36.93,
                        "sellRate": 4.88,
                        "fees": 30.12,
                        "sellRateWithVat": 8.4
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-79427",
                        "brand": "Brand E",
                        "description": "Skincare Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 64.43
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 52.71
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 188.71
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 22,
                        "marginValue": 4.88,
                        "sellRate": 40.84,
                        "fees": 28.47,
                        "sellRateWithVat": 48.29
                    }
                ]
            },
            {
                "subCategoryId": 1,
                "subCategoryName": "Makeup",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-2518",
                        "brand": "Brand A",
                        "description": "Makeup Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 385.39
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 258.43
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 19,
                        "marginValue": 4.15,
                        "sellRate": 17.32,
                        "fees": 38.29,
                        "sellRateWithVat": 41.1
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-73666",
                        "brand": "Brand B",
                        "description": "Makeup Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 22.95
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 214.22
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 15,
                        "marginValue": 43.35,
                        "sellRate": 45.17,
                        "fees": 5.71,
                        "sellRateWithVat": 4.29
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-56137",
                        "brand": "Brand C",
                        "description": "Makeup Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 249.3
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 15.34
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 11,
                        "marginValue": 31.15,
                        "sellRate": 30.56,
                        "fees": 21.63,
                        "sellRateWithVat": 38.53
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-25621",
                        "brand": "Brand D",
                        "description": "Makeup Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 217.2
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 40.78
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 3,
                        "marginValue": 12.38,
                        "sellRate": 24.67,
                        "fees": 33.19,
                        "sellRateWithVat": 3.67
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-46208",
                        "brand": "Brand E",
                        "description": "Makeup Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 90.42
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 111.74
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 271.17
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 20,
                        "marginValue": 45.71,
                        "sellRate": 13.76,
                        "fees": 45.88,
                        "sellRateWithVat": 43.26
                    }
                ]
            },
            {
                "subCategoryId": 2,
                "subCategoryName": "Haircare",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-43369",
                        "brand": "Brand A",
                        "description": "Haircare Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 323.41
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 172.65
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 15,
                        "marginValue": 19.88,
                        "sellRate": 38.77,
                        "fees": 31.64,
                        "sellRateWithVat": 22.68
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-62967",
                        "brand": "Brand B",
                        "description": "Haircare Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 140.69
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 298.56
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 14,
                        "marginValue": 28.98,
                        "sellRate": 4.07,
                        "fees": 12.58,
                        "sellRateWithVat": 34.77
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-21215",
                        "brand": "Brand C",
                        "description": "Haircare Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 84.39
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 205
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 17,
                        "marginValue": 38.1,
                        "sellRate": 8.91,
                        "fees": 26.46,
                        "sellRateWithVat": 0.83
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-34219",
                        "brand": "Brand D",
                        "description": "Haircare Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 270.63
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 346.31
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 10,
                        "marginValue": 17.14,
                        "sellRate": 23.22,
                        "fees": 3.11,
                        "sellRateWithVat": 15.67
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-78337",
                        "brand": "Brand E",
                        "description": "Haircare Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 308.76
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 62.08
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 290.96
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 28,
                        "marginValue": 27.47,
                        "sellRate": 47.65,
                        "fees": 35.17,
                        "sellRateWithVat": 44.28
                    }
                ]
            },
            {
                "subCategoryId": 3,
                "subCategoryName": "Fragrance",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-2016",
                        "brand": "Brand A",
                        "description": "Fragrance Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 83.57
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 277.92
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 4,
                        "marginValue": 25.95,
                        "sellRate": 11.6,
                        "fees": 32.65,
                        "sellRateWithVat": 44.97
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-939",
                        "brand": "Brand B",
                        "description": "Fragrance Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 198.03
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 100.08
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 21,
                        "marginValue": 23.04,
                        "sellRate": 34.92,
                        "fees": 34.24,
                        "sellRateWithVat": 16.19
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-8065",
                        "brand": "Brand C",
                        "description": "Fragrance Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 327.54
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 14.86
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 15,
                        "marginValue": 36.27,
                        "sellRate": 10.12,
                        "fees": 4.53,
                        "sellRateWithVat": 27.33
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-22915",
                        "brand": "Brand D",
                        "description": "Fragrance Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 369.14
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 424.28
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 15,
                        "marginValue": 40.32,
                        "sellRate": 7.96,
                        "fees": 6.3,
                        "sellRateWithVat": 6.25
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-81111",
                        "brand": "Brand E",
                        "description": "Fragrance Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 456.93
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 444.01
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 52.9
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 10,
                        "marginValue": 12.35,
                        "sellRate": 13.35,
                        "fees": 22.38,
                        "sellRateWithVat": 23.36
                    }
                ]
            },
            {
                "subCategoryId": 4,
                "subCategoryName": "Nail Care",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-27316",
                        "brand": "Brand A",
                        "description": "Nail Care Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 254.49
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 412.48
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 10,
                        "marginValue": 23.09,
                        "sellRate": 27.44,
                        "fees": 38.1,
                        "sellRateWithVat": 39.81
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-87589",
                        "brand": "Brand B",
                        "description": "Nail Care Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 101.65
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 345.79
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 28,
                        "marginValue": 39.26,
                        "sellRate": 47.03,
                        "fees": 23,
                        "sellRateWithVat": 39.44
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-36228",
                        "brand": "Brand C",
                        "description": "Nail Care Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 457.07
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 214.48
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 25,
                        "marginValue": 48.64,
                        "sellRate": 34.01,
                        "fees": 42.07,
                        "sellRateWithVat": 18.16
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-53727",
                        "brand": "Brand D",
                        "description": "Nail Care Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 378.77
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 39.97
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 12,
                        "marginValue": 3.51,
                        "sellRate": 1.09,
                        "fees": 1.5,
                        "sellRateWithVat": 45.58
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-22748",
                        "brand": "Brand E",
                        "description": "Nail Care Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 357.39
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 19.84
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 246.49
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 21,
                        "marginValue": 43.8,
                        "sellRate": 37.63,
                        "fees": 22.22,
                        "sellRateWithVat": 21.08
                    }
                ]
            }
        ]
    },
    {
        "categoryId": 8,
        "categoryName": "Automotive",
        "subCategory": [
            {
                "subCategoryId": 0,
                "subCategoryName": "Car Accessories",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-26179",
                        "brand": "Brand A",
                        "description": "Car Accessories Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 228.8
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 457.7
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 22,
                        "marginValue": 16.71,
                        "sellRate": 14.43,
                        "fees": 21.09,
                        "sellRateWithVat": 46.79
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-17424",
                        "brand": "Brand B",
                        "description": "Car Accessories Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 238.64
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 402.08
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 14,
                        "marginValue": 24.71,
                        "sellRate": 15.93,
                        "fees": 31.3,
                        "sellRateWithVat": 46.13
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-55313",
                        "brand": "Brand C",
                        "description": "Car Accessories Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 28.82
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 127.6
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 19,
                        "marginValue": 46.13,
                        "sellRate": 19.05,
                        "fees": 3.75,
                        "sellRateWithVat": 45.03
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-2239",
                        "brand": "Brand D",
                        "description": "Car Accessories Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 160.08
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 121.35
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 21,
                        "marginValue": 17.79,
                        "sellRate": 23.57,
                        "fees": 47.44,
                        "sellRateWithVat": 38.81
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-4513",
                        "brand": "Brand E",
                        "description": "Car Accessories Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 50.03
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 182.26
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 459.49
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 19,
                        "marginValue": 19.01,
                        "sellRate": 20.94,
                        "fees": 44.14,
                        "sellRateWithVat": 30.01
                    }
                ]
            },
            {
                "subCategoryId": 1,
                "subCategoryName": "Motorcycle Accessories",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-88825",
                        "brand": "Brand A",
                        "description": "Motorcycle Accessories Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 280.08
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 339.19
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 19,
                        "marginValue": 23.61,
                        "sellRate": 9.36,
                        "fees": 5.78,
                        "sellRateWithVat": 36.38
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-42833",
                        "brand": "Brand B",
                        "description": "Motorcycle Accessories Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 3
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 193.39
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 6,
                        "marginValue": 47.22,
                        "sellRate": 29.71,
                        "fees": 45.21,
                        "sellRateWithVat": 12.34
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-82944",
                        "brand": "Brand C",
                        "description": "Motorcycle Accessories Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 303.58
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 351.59
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 22,
                        "marginValue": 18.73,
                        "sellRate": 26.31,
                        "fees": 20.23,
                        "sellRateWithVat": 6.73
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-77468",
                        "brand": "Brand D",
                        "description": "Motorcycle Accessories Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 319.32
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 258.81
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 2,
                        "marginValue": 15.2,
                        "sellRate": 8.09,
                        "fees": 36.2,
                        "sellRateWithVat": 27.55
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-33506",
                        "brand": "Brand E",
                        "description": "Motorcycle Accessories Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 485
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 4.98
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 244.14
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 8,
                        "marginValue": 1.58,
                        "sellRate": 15.04,
                        "fees": 43.73,
                        "sellRateWithVat": 33.03
                    }
                ]
            },
            {
                "subCategoryId": 2,
                "subCategoryName": "Tools & Equipment",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-27972",
                        "brand": "Brand A",
                        "description": "Tools & Equipment Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 122.19
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 6.5
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 2,
                        "marginValue": 47.89,
                        "sellRate": 4.26,
                        "fees": 25.65,
                        "sellRateWithVat": 39.29
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-97280",
                        "brand": "Brand B",
                        "description": "Tools & Equipment Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 5.15
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 14.02
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 21,
                        "marginValue": 22.54,
                        "sellRate": 46.41,
                        "fees": 21.83,
                        "sellRateWithVat": 18.6
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-39921",
                        "brand": "Brand C",
                        "description": "Tools & Equipment Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 381.74
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 88.5
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 10,
                        "marginValue": 37.46,
                        "sellRate": 46.48,
                        "fees": 47.13,
                        "sellRateWithVat": 14.42
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-56497",
                        "brand": "Brand D",
                        "description": "Tools & Equipment Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 459.92
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 250.04
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 21,
                        "marginValue": 45.54,
                        "sellRate": 40.75,
                        "fees": 29.47,
                        "sellRateWithVat": 8.98
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-2838",
                        "brand": "Brand E",
                        "description": "Tools & Equipment Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 42.88
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 400.1
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 3.11
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 26,
                        "marginValue": 8.42,
                        "sellRate": 32.47,
                        "fees": 43.8,
                        "sellRateWithVat": 43.44
                    }
                ]
            },
            {
                "subCategoryId": 3,
                "subCategoryName": "Car Care Products",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-36279",
                        "brand": "Brand A",
                        "description": "Car Care Products Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 136.53
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 202.88
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 14,
                        "marginValue": 19.91,
                        "sellRate": 28.73,
                        "fees": 46.52,
                        "sellRateWithVat": 26.17
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-99028",
                        "brand": "Brand B",
                        "description": "Car Care Products Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 189.19
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 10.31
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 19,
                        "marginValue": 2.45,
                        "sellRate": 9.53,
                        "fees": 8.27,
                        "sellRateWithVat": 7.63
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-1577",
                        "brand": "Brand C",
                        "description": "Car Care Products Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 183.35
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 294.1
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 3,
                        "marginValue": 0.67,
                        "sellRate": 1.77,
                        "fees": 45.49,
                        "sellRateWithVat": 6.22
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-88230",
                        "brand": "Brand D",
                        "description": "Car Care Products Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 53.79
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 179.03
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 14,
                        "marginValue": 45.5,
                        "sellRate": 33.82,
                        "fees": 24.9,
                        "sellRateWithVat": 4.94
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-73183",
                        "brand": "Brand E",
                        "description": "Car Care Products Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 339.72
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 38.68
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 401.57
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 7,
                        "marginValue": 29.83,
                        "sellRate": 35.8,
                        "fees": 26.14,
                        "sellRateWithVat": 3.58
                    }
                ]
            },
            {
                "subCategoryId": 4,
                "subCategoryName": "Tires & Wheels",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-47415",
                        "brand": "Brand A",
                        "description": "Tires & Wheels Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 222.26
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 498.22
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 5,
                        "marginValue": 30.46,
                        "sellRate": 43.28,
                        "fees": 3.19,
                        "sellRateWithVat": 3.42
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-25313",
                        "brand": "Brand B",
                        "description": "Tires & Wheels Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 6.3
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 43.26
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 12,
                        "marginValue": 42.25,
                        "sellRate": 31.37,
                        "fees": 2.34,
                        "sellRateWithVat": 33.67
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-46618",
                        "brand": "Brand C",
                        "description": "Tires & Wheels Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 313.79
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 2.43
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 12,
                        "marginValue": 19.3,
                        "sellRate": 23.7,
                        "fees": 31.06,
                        "sellRateWithVat": 8.85
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-59759",
                        "brand": "Brand D",
                        "description": "Tires & Wheels Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 486.77
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 470.69
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 25,
                        "marginValue": 45.16,
                        "sellRate": 4.5,
                        "fees": 46.18,
                        "sellRateWithVat": 34.06
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-55006",
                        "brand": "Brand E",
                        "description": "Tires & Wheels Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 20.17
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 313.07
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 294.29
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 28,
                        "marginValue": 5.89,
                        "sellRate": 45.9,
                        "fees": 25.11,
                        "sellRateWithVat": 30.98
                    }
                ]
            }
        ]
    },
    {
        "categoryId": 9,
        "categoryName": "Jewelry",
        "subCategory": [
            {
                "subCategoryId": 0,
                "subCategoryName": "Necklaces",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-31691",
                        "brand": "Brand A",
                        "description": "Necklaces Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 160.78
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 449.2
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 6,
                        "marginValue": 16.95,
                        "sellRate": 17.22,
                        "fees": 27.81,
                        "sellRateWithVat": 38.93
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-28778",
                        "brand": "Brand B",
                        "description": "Necklaces Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 395.62
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 85.79
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 26,
                        "marginValue": 24.92,
                        "sellRate": 9.72,
                        "fees": 37.71,
                        "sellRateWithVat": 26.51
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-98738",
                        "brand": "Brand C",
                        "description": "Necklaces Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 136.58
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 365.17
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 20,
                        "marginValue": 9.14,
                        "sellRate": 47.83,
                        "fees": 20.44,
                        "sellRateWithVat": 45.78
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-36046",
                        "brand": "Brand D",
                        "description": "Necklaces Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 268.54
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 125.73
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 25,
                        "marginValue": 5.5,
                        "sellRate": 46.31,
                        "fees": 49.24,
                        "sellRateWithVat": 12.73
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-27109",
                        "brand": "Brand E",
                        "description": "Necklaces Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 320.78
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 80.36
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 380.51
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 14,
                        "marginValue": 6.3,
                        "sellRate": 10.07,
                        "fees": 26.96,
                        "sellRateWithVat": 43.87
                    }
                ]
            },
            {
                "subCategoryId": 1,
                "subCategoryName": "Bracelets",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-35882",
                        "brand": "Brand A",
                        "description": "Bracelets Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 78.19
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 96
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 18,
                        "marginValue": 24.4,
                        "sellRate": 36.85,
                        "fees": 19.27,
                        "sellRateWithVat": 23.71
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-93473",
                        "brand": "Brand B",
                        "description": "Bracelets Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 117.49
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 223.19
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 6,
                        "marginValue": 17.25,
                        "sellRate": 32.18,
                        "fees": 14.61,
                        "sellRateWithVat": 44.25
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-50747",
                        "brand": "Brand C",
                        "description": "Bracelets Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 157.23
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 307.25
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 20,
                        "marginValue": 42.68,
                        "sellRate": 39.8,
                        "fees": 28.81,
                        "sellRateWithVat": 22.23
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-60761",
                        "brand": "Brand D",
                        "description": "Bracelets Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 231.09
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 84.96
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 2,
                        "marginValue": 12.21,
                        "sellRate": 33.94,
                        "fees": 0.35,
                        "sellRateWithVat": 1.07
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-77522",
                        "brand": "Brand E",
                        "description": "Bracelets Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 129.72
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 35.83
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 385.41
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 7,
                        "marginValue": 2.73,
                        "sellRate": 2.5,
                        "fees": 29.45,
                        "sellRateWithVat": 27.32
                    }
                ]
            },
            {
                "subCategoryId": 2,
                "subCategoryName": "Rings",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-19707",
                        "brand": "Brand A",
                        "description": "Rings Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 61.77
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 430.01
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 13,
                        "marginValue": 39.47,
                        "sellRate": 11.03,
                        "fees": 23.54,
                        "sellRateWithVat": 41.35
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-79672",
                        "brand": "Brand B",
                        "description": "Rings Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 415.28
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 356.86
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 6,
                        "marginValue": 19.54,
                        "sellRate": 17.49,
                        "fees": 13.94,
                        "sellRateWithVat": 2.12
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-85609",
                        "brand": "Brand C",
                        "description": "Rings Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 330.6
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 62.11
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 24,
                        "marginValue": 6.1,
                        "sellRate": 5.74,
                        "fees": 5.19,
                        "sellRateWithVat": 20.6
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-67476",
                        "brand": "Brand D",
                        "description": "Rings Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 216.06
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 282.28
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 4,
                        "marginValue": 22.07,
                        "sellRate": 43.26,
                        "fees": 36.58,
                        "sellRateWithVat": 45.04
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-31316",
                        "brand": "Brand E",
                        "description": "Rings Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 19.05
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 259.77
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 404.53
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 3,
                        "marginValue": 24.24,
                        "sellRate": 4.62,
                        "fees": 13.16,
                        "sellRateWithVat": 30.29
                    }
                ]
            },
            {
                "subCategoryId": 3,
                "subCategoryName": "Earrings",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-48657",
                        "brand": "Brand A",
                        "description": "Earrings Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 363.36
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 289.72
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 28,
                        "marginValue": 24.16,
                        "sellRate": 48.4,
                        "fees": 32.19,
                        "sellRateWithVat": 47.61
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-23750",
                        "brand": "Brand B",
                        "description": "Earrings Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 449.72
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 305.6
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 29,
                        "marginValue": 46.8,
                        "sellRate": 5.38,
                        "fees": 8.55,
                        "sellRateWithVat": 42.83
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-26219",
                        "brand": "Brand C",
                        "description": "Earrings Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 41.38
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 104.8
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 14,
                        "marginValue": 39.44,
                        "sellRate": 41.49,
                        "fees": 11.68,
                        "sellRateWithVat": 30.47
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-95143",
                        "brand": "Brand D",
                        "description": "Earrings Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 419.64
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 14.1
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 0,
                        "marginValue": 29.11,
                        "sellRate": 11.21,
                        "fees": 30.5,
                        "sellRateWithVat": 26.86
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-80693",
                        "brand": "Brand E",
                        "description": "Earrings Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 243.83
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 237.99
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 349.58
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 9,
                        "marginValue": 0.02,
                        "sellRate": 43.23,
                        "fees": 6.37,
                        "sellRateWithVat": 7.34
                    }
                ]
            },
            {
                "subCategoryId": 4,
                "subCategoryName": "Watches",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-69303",
                        "brand": "Brand A",
                        "description": "Watches Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 48.43
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 332.8
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 10,
                        "marginValue": 25.01,
                        "sellRate": 40.97,
                        "fees": 25.89,
                        "sellRateWithVat": 49.32
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-29226",
                        "brand": "Brand B",
                        "description": "Watches Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 263.37
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 416.04
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 2,
                        "marginValue": 14.48,
                        "sellRate": 6.05,
                        "fees": 29.71,
                        "sellRateWithVat": 10.46
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-14652",
                        "brand": "Brand C",
                        "description": "Watches Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 250.3
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 435.4
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 28,
                        "marginValue": 26.22,
                        "sellRate": 19.77,
                        "fees": 7.86,
                        "sellRateWithVat": 35.94
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-82941",
                        "brand": "Brand D",
                        "description": "Watches Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 144.55
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 398.58
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 3,
                        "marginValue": 31.42,
                        "sellRate": 42.01,
                        "fees": 9.73,
                        "sellRateWithVat": 39.08
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-98232",
                        "brand": "Brand E",
                        "description": "Watches Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 52.18
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 244.12
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 454.51
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 22,
                        "marginValue": 35.09,
                        "sellRate": 41.61,
                        "fees": 25.01,
                        "sellRateWithVat": 35.22
                    }
                ]
            }
        ]
    },
    {
        "categoryId": 10,
        "categoryName": "Garden Supplies",
        "subCategory": [
            {
                "subCategoryId": 0,
                "subCategoryName": "Plants",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-38897",
                        "brand": "Brand A",
                        "description": "Plants Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 126.75
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 178.06
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 22,
                        "marginValue": 19.43,
                        "sellRate": 47.7,
                        "fees": 12.11,
                        "sellRateWithVat": 21.84
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-20718",
                        "brand": "Brand B",
                        "description": "Plants Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 331.96
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 379.08
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 3,
                        "marginValue": 28.41,
                        "sellRate": 28.6,
                        "fees": 7.82,
                        "sellRateWithVat": 5.28
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-41070",
                        "brand": "Brand C",
                        "description": "Plants Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 340.12
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 459.96
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 2,
                        "marginValue": 9.29,
                        "sellRate": 23.97,
                        "fees": 47.29,
                        "sellRateWithVat": 27.25
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-27119",
                        "brand": "Brand D",
                        "description": "Plants Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 461.11
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 79.52
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 22,
                        "marginValue": 29.83,
                        "sellRate": 46.06,
                        "fees": 23.29,
                        "sellRateWithVat": 11.4
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-72020",
                        "brand": "Brand E",
                        "description": "Plants Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 208.04
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 290.31
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 274.27
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 18,
                        "marginValue": 46.54,
                        "sellRate": 14.05,
                        "fees": 15.48,
                        "sellRateWithVat": 14.33
                    }
                ]
            },
            {
                "subCategoryId": 1,
                "subCategoryName": "Gardening Tools",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-54817",
                        "brand": "Brand A",
                        "description": "Gardening Tools Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 35.74
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 211.02
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 7,
                        "marginValue": 12.36,
                        "sellRate": 27.06,
                        "fees": 32.28,
                        "sellRateWithVat": 48.99
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-29224",
                        "brand": "Brand B",
                        "description": "Gardening Tools Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 144.5
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 111.7
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 8,
                        "marginValue": 36.36,
                        "sellRate": 28.86,
                        "fees": 38.47,
                        "sellRateWithVat": 21.12
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-64103",
                        "brand": "Brand C",
                        "description": "Gardening Tools Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 250.39
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 389.48
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 22,
                        "marginValue": 8.89,
                        "sellRate": 23.62,
                        "fees": 38.04,
                        "sellRateWithVat": 44.52
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-70096",
                        "brand": "Brand D",
                        "description": "Gardening Tools Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 406.68
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 56.98
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 13,
                        "marginValue": 30.07,
                        "sellRate": 43.9,
                        "fees": 20.19,
                        "sellRateWithVat": 39.77
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-89258",
                        "brand": "Brand E",
                        "description": "Gardening Tools Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 35.42
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 311.08
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 461.48
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 7,
                        "marginValue": 49.44,
                        "sellRate": 37.43,
                        "fees": 48.7,
                        "sellRateWithVat": 36.04
                    }
                ]
            },
            {
                "subCategoryId": 2,
                "subCategoryName": "Outdoor Furniture",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-54338",
                        "brand": "Brand A",
                        "description": "Outdoor Furniture Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 366.98
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 141.71
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 2,
                        "marginValue": 26.3,
                        "sellRate": 39.33,
                        "fees": 38.12,
                        "sellRateWithVat": 4.47
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-47531",
                        "brand": "Brand B",
                        "description": "Outdoor Furniture Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 323.53
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 286.27
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 8,
                        "marginValue": 12.26,
                        "sellRate": 40.72,
                        "fees": 42.77,
                        "sellRateWithVat": 10.1
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-85960",
                        "brand": "Brand C",
                        "description": "Outdoor Furniture Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 41.43
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 396.89
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 25,
                        "marginValue": 27.2,
                        "sellRate": 24.22,
                        "fees": 36.7,
                        "sellRateWithVat": 31.95
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-15182",
                        "brand": "Brand D",
                        "description": "Outdoor Furniture Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 367.84
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 294.09
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 22,
                        "marginValue": 36.12,
                        "sellRate": 18.73,
                        "fees": 42.97,
                        "sellRateWithVat": 7.64
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-20232",
                        "brand": "Brand E",
                        "description": "Outdoor Furniture Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 388.99
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 371.97
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 319.08
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 13,
                        "marginValue": 17,
                        "sellRate": 16.89,
                        "fees": 42.15,
                        "sellRateWithVat": 33.84
                    }
                ]
            },
            {
                "subCategoryId": 3,
                "subCategoryName": "Decor",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-38404",
                        "brand": "Brand A",
                        "description": "Decor Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 222.42
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 360
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 21,
                        "marginValue": 27.72,
                        "sellRate": 0.81,
                        "fees": 30.14,
                        "sellRateWithVat": 13.96
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-77293",
                        "brand": "Brand B",
                        "description": "Decor Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 440.96
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 272.58
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 13,
                        "marginValue": 2.07,
                        "sellRate": 27.18,
                        "fees": 28.21,
                        "sellRateWithVat": 48.8
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-14078",
                        "brand": "Brand C",
                        "description": "Decor Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 87.12
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 222.55
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 20,
                        "marginValue": 39.12,
                        "sellRate": 46.99,
                        "fees": 8.08,
                        "sellRateWithVat": 48.67
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-87660",
                        "brand": "Brand D",
                        "description": "Decor Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 146.89
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 349.97
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 1,
                        "marginValue": 35.27,
                        "sellRate": 20.09,
                        "fees": 9.91,
                        "sellRateWithVat": 19.8
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-5015",
                        "brand": "Brand E",
                        "description": "Decor Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 47.5
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 188.58
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 487.31
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 16,
                        "marginValue": 34.54,
                        "sellRate": 15.83,
                        "fees": 19.73,
                        "sellRateWithVat": 11.7
                    }
                ]
            },
            {
                "subCategoryId": 4,
                "subCategoryName": "Pest Control",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-9759",
                        "brand": "Brand A",
                        "description": "Pest Control Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 374.49
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 337.75
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 20,
                        "marginValue": 46.49,
                        "sellRate": 29.97,
                        "fees": 44.26,
                        "sellRateWithVat": 35.4
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-99648",
                        "brand": "Brand B",
                        "description": "Pest Control Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 331.15
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 328.91
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 20,
                        "marginValue": 42.8,
                        "sellRate": 25.26,
                        "fees": 41.75,
                        "sellRateWithVat": 41.72
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-9161",
                        "brand": "Brand C",
                        "description": "Pest Control Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 9.86
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 73.14
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 11,
                        "marginValue": 18.65,
                        "sellRate": 3.64,
                        "fees": 1.09,
                        "sellRateWithVat": 19.48
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-47164",
                        "brand": "Brand D",
                        "description": "Pest Control Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 80.82
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 143.49
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 0,
                        "marginValue": 39.58,
                        "sellRate": 25.03,
                        "fees": 21.35,
                        "sellRateWithVat": 35.3
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-88146",
                        "brand": "Brand E",
                        "description": "Pest Control Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 418.71
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 246.51
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 39.38
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 16,
                        "marginValue": 5.61,
                        "sellRate": 17.79,
                        "fees": 25.98,
                        "sellRateWithVat": 3.79
                    }
                ]
            }
        ]
    },
    {
        "categoryId": 11,
        "categoryName": "Tools",
        "subCategory": [
            {
                "subCategoryId": 0,
                "subCategoryName": "Power Tools",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-24316",
                        "brand": "Brand A",
                        "description": "Power Tools Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 68.13
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 167.7
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 25,
                        "marginValue": 30.63,
                        "sellRate": 5.34,
                        "fees": 29.63,
                        "sellRateWithVat": 46.47
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-35592",
                        "brand": "Brand B",
                        "description": "Power Tools Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 203.9
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 33.11
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 1,
                        "marginValue": 4.5,
                        "sellRate": 35.08,
                        "fees": 37.52,
                        "sellRateWithVat": 48.09
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-25554",
                        "brand": "Brand C",
                        "description": "Power Tools Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 327.32
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 124.86
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 16,
                        "marginValue": 34.35,
                        "sellRate": 5.95,
                        "fees": 48.23,
                        "sellRateWithVat": 5.43
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-64847",
                        "brand": "Brand D",
                        "description": "Power Tools Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 255.24
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 391.65
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 14,
                        "marginValue": 3.17,
                        "sellRate": 34.99,
                        "fees": 3.42,
                        "sellRateWithVat": 34.36
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-69704",
                        "brand": "Brand E",
                        "description": "Power Tools Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 471.12
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 278.72
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 68.99
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 12,
                        "marginValue": 15.99,
                        "sellRate": 2.62,
                        "fees": 35.98,
                        "sellRateWithVat": 13.55
                    }
                ]
            },
            {
                "subCategoryId": 1,
                "subCategoryName": "Hand Tools",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-9324",
                        "brand": "Brand A",
                        "description": "Hand Tools Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 275.82
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 237.65
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 20,
                        "marginValue": 14.24,
                        "sellRate": 28.17,
                        "fees": 32.91,
                        "sellRateWithVat": 36.66
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-57123",
                        "brand": "Brand B",
                        "description": "Hand Tools Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 391.99
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 329.05
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 14,
                        "marginValue": 40.45,
                        "sellRate": 25.86,
                        "fees": 12.93,
                        "sellRateWithVat": 39.5
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-79892",
                        "brand": "Brand C",
                        "description": "Hand Tools Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 382.46
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 331.51
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 11,
                        "marginValue": 30.26,
                        "sellRate": 32.97,
                        "fees": 18.56,
                        "sellRateWithVat": 13.59
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-85419",
                        "brand": "Brand D",
                        "description": "Hand Tools Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 240.69
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 70.65
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 22,
                        "marginValue": 0.04,
                        "sellRate": 41.73,
                        "fees": 12.21,
                        "sellRateWithVat": 19.36
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-74306",
                        "brand": "Brand E",
                        "description": "Hand Tools Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 258.42
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 497.7
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 490.76
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 9,
                        "marginValue": 13.84,
                        "sellRate": 27.69,
                        "fees": 41.39,
                        "sellRateWithVat": 1.06
                    }
                ]
            },
            {
                "subCategoryId": 2,
                "subCategoryName": "Tool Storage",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-96992",
                        "brand": "Brand A",
                        "description": "Tool Storage Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 155.5
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 264.38
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 25,
                        "marginValue": 29.25,
                        "sellRate": 44.72,
                        "fees": 11.47,
                        "sellRateWithVat": 1.07
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-52608",
                        "brand": "Brand B",
                        "description": "Tool Storage Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 84.01
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 187.61
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 0,
                        "marginValue": 4,
                        "sellRate": 6.02,
                        "fees": 42.32,
                        "sellRateWithVat": 43.66
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-50040",
                        "brand": "Brand C",
                        "description": "Tool Storage Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 286.09
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 278.81
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 2,
                        "marginValue": 6.84,
                        "sellRate": 22.46,
                        "fees": 16.17,
                        "sellRateWithVat": 35.01
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-10989",
                        "brand": "Brand D",
                        "description": "Tool Storage Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 397.62
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 49.5
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 8,
                        "marginValue": 6.78,
                        "sellRate": 0.23,
                        "fees": 42.68,
                        "sellRateWithVat": 13.44
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-93829",
                        "brand": "Brand E",
                        "description": "Tool Storage Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 472.11
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 420.64
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 206.07
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 29,
                        "marginValue": 43.86,
                        "sellRate": 35.92,
                        "fees": 13.16,
                        "sellRateWithVat": 41.91
                    }
                ]
            },
            {
                "subCategoryId": 3,
                "subCategoryName": "Workbenches",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-98838",
                        "brand": "Brand A",
                        "description": "Workbenches Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 374.11
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 420.14
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 1,
                        "marginValue": 41.67,
                        "sellRate": 40.07,
                        "fees": 30.21,
                        "sellRateWithVat": 1.43
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-87577",
                        "brand": "Brand B",
                        "description": "Workbenches Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 31.82
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 439.79
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 4,
                        "marginValue": 8.17,
                        "sellRate": 22.58,
                        "fees": 46.44,
                        "sellRateWithVat": 39.58
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-63874",
                        "brand": "Brand C",
                        "description": "Workbenches Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 417.74
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 405.29
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 8,
                        "marginValue": 1.2,
                        "sellRate": 25.41,
                        "fees": 34.29,
                        "sellRateWithVat": 48.26
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-43206",
                        "brand": "Brand D",
                        "description": "Workbenches Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 416.7
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 410.23
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 2,
                        "marginValue": 42.99,
                        "sellRate": 8.18,
                        "fees": 36.05,
                        "sellRateWithVat": 41.32
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-72191",
                        "brand": "Brand E",
                        "description": "Workbenches Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 209.19
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 201.93
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 117.93
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 6,
                        "marginValue": 19.67,
                        "sellRate": 9.42,
                        "fees": 13.51,
                        "sellRateWithVat": 11.76
                    }
                ]
            },
            {
                "subCategoryId": 4,
                "subCategoryName": "Measuring Tools",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-40554",
                        "brand": "Brand A",
                        "description": "Measuring Tools Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 373.73
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 277.43
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 27,
                        "marginValue": 22.74,
                        "sellRate": 42.16,
                        "fees": 3.57,
                        "sellRateWithVat": 21.05
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-12347",
                        "brand": "Brand B",
                        "description": "Measuring Tools Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 215.56
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 168.99
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 7,
                        "marginValue": 28.73,
                        "sellRate": 22.07,
                        "fees": 41.93,
                        "sellRateWithVat": 24.39
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-8389",
                        "brand": "Brand C",
                        "description": "Measuring Tools Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 228.48
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 17.31
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 29,
                        "marginValue": 48.15,
                        "sellRate": 45.16,
                        "fees": 4.92,
                        "sellRateWithVat": 27.61
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-94812",
                        "brand": "Brand D",
                        "description": "Measuring Tools Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 78.99
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 424.32
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 16,
                        "marginValue": 24.05,
                        "sellRate": 17.75,
                        "fees": 31.35,
                        "sellRateWithVat": 27.76
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-62819",
                        "brand": "Brand E",
                        "description": "Measuring Tools Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 265.63
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 46.14
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 401.83
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 21,
                        "marginValue": 10.41,
                        "sellRate": 11.71,
                        "fees": 14.52,
                        "sellRateWithVat": 16.84
                    }
                ]
            }
        ]
    },
    {
        "categoryId": 12,
        "categoryName": "Stationery",
        "subCategory": [
            {
                "subCategoryId": 0,
                "subCategoryName": "Writing Supplies",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-75861",
                        "brand": "Brand A",
                        "description": "Writing Supplies Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 376.67
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 147.46
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 0,
                        "marginValue": 12.68,
                        "sellRate": 6.83,
                        "fees": 17.06,
                        "sellRateWithVat": 3.29
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-71529",
                        "brand": "Brand B",
                        "description": "Writing Supplies Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 374.18
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 414.18
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 27,
                        "marginValue": 12.48,
                        "sellRate": 40.36,
                        "fees": 25.65,
                        "sellRateWithVat": 16.65
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-83361",
                        "brand": "Brand C",
                        "description": "Writing Supplies Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 431.68
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 128.06
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 17,
                        "marginValue": 1.01,
                        "sellRate": 19.01,
                        "fees": 7.02,
                        "sellRateWithVat": 12.43
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-20418",
                        "brand": "Brand D",
                        "description": "Writing Supplies Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 290.94
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 415.54
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 7,
                        "marginValue": 8.25,
                        "sellRate": 38.95,
                        "fees": 41.62,
                        "sellRateWithVat": 24.78
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-57250",
                        "brand": "Brand E",
                        "description": "Writing Supplies Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 50.83
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 132.07
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 253.87
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 17,
                        "marginValue": 49.3,
                        "sellRate": 40.37,
                        "fees": 47.48,
                        "sellRateWithVat": 36.58
                    }
                ]
            },
            {
                "subCategoryId": 1,
                "subCategoryName": "Office Supplies",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-58529",
                        "brand": "Brand A",
                        "description": "Office Supplies Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 279.8
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 292.02
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 23,
                        "marginValue": 24.12,
                        "sellRate": 49.22,
                        "fees": 17.08,
                        "sellRateWithVat": 42.79
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-74207",
                        "brand": "Brand B",
                        "description": "Office Supplies Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 27.39
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 98.75
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 29,
                        "marginValue": 1.16,
                        "sellRate": 14.99,
                        "fees": 2.03,
                        "sellRateWithVat": 25.89
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-29992",
                        "brand": "Brand C",
                        "description": "Office Supplies Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 76.05
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 20.2
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 19,
                        "marginValue": 11.16,
                        "sellRate": 36.58,
                        "fees": 24.16,
                        "sellRateWithVat": 41.67
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-5301",
                        "brand": "Brand D",
                        "description": "Office Supplies Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 245.8
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 160.46
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 8,
                        "marginValue": 20.01,
                        "sellRate": 35.74,
                        "fees": 26.19,
                        "sellRateWithVat": 21.13
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-53895",
                        "brand": "Brand E",
                        "description": "Office Supplies Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 77.66
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 323.52
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 421.16
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 2,
                        "marginValue": 41.4,
                        "sellRate": 11.46,
                        "fees": 11.22,
                        "sellRateWithVat": 16.99
                    }
                ]
            },
            {
                "subCategoryId": 2,
                "subCategoryName": "Notebooks",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-9389",
                        "brand": "Brand A",
                        "description": "Notebooks Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 306.41
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 433.66
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 17,
                        "marginValue": 19.77,
                        "sellRate": 20.74,
                        "fees": 8.62,
                        "sellRateWithVat": 28.08
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-59911",
                        "brand": "Brand B",
                        "description": "Notebooks Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 210.02
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 96.48
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 9,
                        "marginValue": 24.44,
                        "sellRate": 28.5,
                        "fees": 46,
                        "sellRateWithVat": 13.36
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-370",
                        "brand": "Brand C",
                        "description": "Notebooks Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 197.39
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 142.89
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 28,
                        "marginValue": 5.07,
                        "sellRate": 37.84,
                        "fees": 38.95,
                        "sellRateWithVat": 14.82
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-98307",
                        "brand": "Brand D",
                        "description": "Notebooks Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 116.94
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 233.01
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 25,
                        "marginValue": 39.69,
                        "sellRate": 37.43,
                        "fees": 7.09,
                        "sellRateWithVat": 23.76
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-29730",
                        "brand": "Brand E",
                        "description": "Notebooks Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 225.97
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 323.04
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 65.74
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 8,
                        "marginValue": 10.08,
                        "sellRate": 37.12,
                        "fees": 46.03,
                        "sellRateWithVat": 2.62
                    }
                ]
            },
            {
                "subCategoryId": 3,
                "subCategoryName": "Art Supplies",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-8315",
                        "brand": "Brand A",
                        "description": "Art Supplies Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 238.84
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 485.03
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 28,
                        "marginValue": 46.82,
                        "sellRate": 15.97,
                        "fees": 49.22,
                        "sellRateWithVat": 33.7
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-31179",
                        "brand": "Brand B",
                        "description": "Art Supplies Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 296.37
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 186.83
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 21,
                        "marginValue": 14.5,
                        "sellRate": 44.36,
                        "fees": 20.34,
                        "sellRateWithVat": 27.1
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-75166",
                        "brand": "Brand C",
                        "description": "Art Supplies Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 8.04
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 101.79
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 16,
                        "marginValue": 17.46,
                        "sellRate": 14.27,
                        "fees": 28.58,
                        "sellRateWithVat": 28.27
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-10633",
                        "brand": "Brand D",
                        "description": "Art Supplies Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 173.72
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 406.96
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 22,
                        "marginValue": 41.35,
                        "sellRate": 10.87,
                        "fees": 37.36,
                        "sellRateWithVat": 31.86
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-200",
                        "brand": "Brand E",
                        "description": "Art Supplies Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 156.27
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 23.47
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 108.98
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 7,
                        "marginValue": 13.17,
                        "sellRate": 14.56,
                        "fees": 5.83,
                        "sellRateWithVat": 34.6
                    }
                ]
            },
            {
                "subCategoryId": 4,
                "subCategoryName": "Calendars",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-80487",
                        "brand": "Brand A",
                        "description": "Calendars Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 301.35
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 179.52
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 23,
                        "marginValue": 40.89,
                        "sellRate": 17.54,
                        "fees": 46.03,
                        "sellRateWithVat": 32.63
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-22550",
                        "brand": "Brand B",
                        "description": "Calendars Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 94.82
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 395.03
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 10,
                        "marginValue": 0.46,
                        "sellRate": 38.72,
                        "fees": 22.57,
                        "sellRateWithVat": 14.27
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-89535",
                        "brand": "Brand C",
                        "description": "Calendars Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 233.39
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 365.94
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 17,
                        "marginValue": 2.36,
                        "sellRate": 32.44,
                        "fees": 48.66,
                        "sellRateWithVat": 30.63
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-42197",
                        "brand": "Brand D",
                        "description": "Calendars Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 310.57
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 365.1
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 17,
                        "marginValue": 29.81,
                        "sellRate": 43.1,
                        "fees": 46.83,
                        "sellRateWithVat": 19.98
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-859",
                        "brand": "Brand E",
                        "description": "Calendars Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 176.43
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 362.99
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 281.86
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 8,
                        "marginValue": 27.04,
                        "sellRate": 35.89,
                        "fees": 30.89,
                        "sellRateWithVat": 35.6
                    }
                ]
            }
        ]
    },
    {
        "categoryId": 13,
        "categoryName": "Pet Supplies",
        "subCategory": [
            {
                "subCategoryId": 0,
                "subCategoryName": "Dog Supplies",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-4182",
                        "brand": "Brand A",
                        "description": "Dog Supplies Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 447.42
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 40.46
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 13,
                        "marginValue": 38.89,
                        "sellRate": 14.72,
                        "fees": 36.73,
                        "sellRateWithVat": 12.3
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-4822",
                        "brand": "Brand B",
                        "description": "Dog Supplies Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 440.78
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 480.73
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 17,
                        "marginValue": 49.34,
                        "sellRate": 1.38,
                        "fees": 22.25,
                        "sellRateWithVat": 8.69
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-6657",
                        "brand": "Brand C",
                        "description": "Dog Supplies Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 281.96
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 126.85
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 15,
                        "marginValue": 34.84,
                        "sellRate": 36.49,
                        "fees": 5.67,
                        "sellRateWithVat": 37.42
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-33400",
                        "brand": "Brand D",
                        "description": "Dog Supplies Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 309.38
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 409.29
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 7,
                        "marginValue": 25.68,
                        "sellRate": 7.22,
                        "fees": 15.47,
                        "sellRateWithVat": 41.2
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-86462",
                        "brand": "Brand E",
                        "description": "Dog Supplies Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 245.23
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 346.52
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 25.77
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 17,
                        "marginValue": 43.3,
                        "sellRate": 41.21,
                        "fees": 22.47,
                        "sellRateWithVat": 14.43
                    }
                ]
            },
            {
                "subCategoryId": 1,
                "subCategoryName": "Cat Supplies",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-31523",
                        "brand": "Brand A",
                        "description": "Cat Supplies Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 77
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 49.71
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 9,
                        "marginValue": 18.45,
                        "sellRate": 37.32,
                        "fees": 49.98,
                        "sellRateWithVat": 6.82
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-66169",
                        "brand": "Brand B",
                        "description": "Cat Supplies Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 478.25
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 160.87
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 7,
                        "marginValue": 1.99,
                        "sellRate": 39.37,
                        "fees": 16.58,
                        "sellRateWithVat": 36.17
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-31667",
                        "brand": "Brand C",
                        "description": "Cat Supplies Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 359.68
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 165.69
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 22,
                        "marginValue": 6.88,
                        "sellRate": 28.89,
                        "fees": 21.55,
                        "sellRateWithVat": 49.67
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-81109",
                        "brand": "Brand D",
                        "description": "Cat Supplies Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 310.89
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 248.98
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 3,
                        "marginValue": 6.6,
                        "sellRate": 36.32,
                        "fees": 39.41,
                        "sellRateWithVat": 24.88
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-40459",
                        "brand": "Brand E",
                        "description": "Cat Supplies Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 313.97
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 481.35
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 78.45
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 15,
                        "marginValue": 2.43,
                        "sellRate": 27.59,
                        "fees": 22.08,
                        "sellRateWithVat": 38.19
                    }
                ]
            },
            {
                "subCategoryId": 2,
                "subCategoryName": "Bird Supplies",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-11555",
                        "brand": "Brand A",
                        "description": "Bird Supplies Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 9.8
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 253.62
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 29,
                        "marginValue": 30.42,
                        "sellRate": 29.54,
                        "fees": 29.94,
                        "sellRateWithVat": 22.9
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-15007",
                        "brand": "Brand B",
                        "description": "Bird Supplies Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 231.88
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 145
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 21,
                        "marginValue": 49.22,
                        "sellRate": 46.94,
                        "fees": 26.81,
                        "sellRateWithVat": 16.09
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-11166",
                        "brand": "Brand C",
                        "description": "Bird Supplies Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 494.99
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 498.61
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 13,
                        "marginValue": 46.28,
                        "sellRate": 6.37,
                        "fees": 48.05,
                        "sellRateWithVat": 9.52
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-30850",
                        "brand": "Brand D",
                        "description": "Bird Supplies Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 325.95
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 199.64
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 5,
                        "marginValue": 45.2,
                        "sellRate": 0.93,
                        "fees": 39.21,
                        "sellRateWithVat": 5.67
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-26018",
                        "brand": "Brand E",
                        "description": "Bird Supplies Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 155.52
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 362.19
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 317.14
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 19,
                        "marginValue": 7.85,
                        "sellRate": 9.09,
                        "fees": 17.85,
                        "sellRateWithVat": 27.55
                    }
                ]
            },
            {
                "subCategoryId": 3,
                "subCategoryName": "Small Animal Supplies",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-85502",
                        "brand": "Brand A",
                        "description": "Small Animal Supplies Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 95.63
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 241.05
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 28,
                        "marginValue": 15.19,
                        "sellRate": 8.51,
                        "fees": 19.94,
                        "sellRateWithVat": 26.9
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-59946",
                        "brand": "Brand B",
                        "description": "Small Animal Supplies Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 202.62
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 78.71
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 11,
                        "marginValue": 38.17,
                        "sellRate": 39.99,
                        "fees": 27.78,
                        "sellRateWithVat": 44.88
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-87889",
                        "brand": "Brand C",
                        "description": "Small Animal Supplies Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 49.5
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 30.53
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 1,
                        "marginValue": 41.89,
                        "sellRate": 13.02,
                        "fees": 9.71,
                        "sellRateWithVat": 48.61
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-73871",
                        "brand": "Brand D",
                        "description": "Small Animal Supplies Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 112.89
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 141.4
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 16,
                        "marginValue": 46.33,
                        "sellRate": 3.53,
                        "fees": 14.61,
                        "sellRateWithVat": 0.47
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-58271",
                        "brand": "Brand E",
                        "description": "Small Animal Supplies Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 360.23
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 269.46
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 413.3
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 6,
                        "marginValue": 49.98,
                        "sellRate": 5.78,
                        "fees": 42.06,
                        "sellRateWithVat": 30.97
                    }
                ]
            },
            {
                "subCategoryId": 4,
                "subCategoryName": "Fish Supplies",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-47796",
                        "brand": "Brand A",
                        "description": "Fish Supplies Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 256.78
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 286.56
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 14,
                        "marginValue": 10.56,
                        "sellRate": 8.22,
                        "fees": 3.75,
                        "sellRateWithVat": 47.87
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-72454",
                        "brand": "Brand B",
                        "description": "Fish Supplies Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 139.5
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 274.12
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 17,
                        "marginValue": 44.32,
                        "sellRate": 42.6,
                        "fees": 33.58,
                        "sellRateWithVat": 3.34
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-51010",
                        "brand": "Brand C",
                        "description": "Fish Supplies Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 245.93
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 419.9
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 28,
                        "marginValue": 14.68,
                        "sellRate": 39.39,
                        "fees": 3.48,
                        "sellRateWithVat": 11.24
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-2752",
                        "brand": "Brand D",
                        "description": "Fish Supplies Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 491.8
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 162.78
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 4,
                        "marginValue": 26.26,
                        "sellRate": 43.67,
                        "fees": 12.53,
                        "sellRateWithVat": 23.56
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-31316",
                        "brand": "Brand E",
                        "description": "Fish Supplies Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 77.43
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 154.91
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 362.4
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 27,
                        "marginValue": 45.68,
                        "sellRate": 47.04,
                        "fees": 14.86,
                        "sellRateWithVat": 48.35
                    }
                ]
            }
        ]
    },
    {
        "categoryId": 14,
        "categoryName": "Video Games",
        "subCategory": [
            {
                "subCategoryId": 0,
                "subCategoryName": "Consoles",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-47404",
                        "brand": "Brand A",
                        "description": "Consoles Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 174.26
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 424.63
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 7,
                        "marginValue": 30.75,
                        "sellRate": 45.65,
                        "fees": 41.98,
                        "sellRateWithVat": 28.6
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-51683",
                        "brand": "Brand B",
                        "description": "Consoles Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 148.38
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 209.11
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 15,
                        "marginValue": 0.03,
                        "sellRate": 37.21,
                        "fees": 46.69,
                        "sellRateWithVat": 40.53
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-11518",
                        "brand": "Brand C",
                        "description": "Consoles Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 52.85
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 240.81
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 27,
                        "marginValue": 6.97,
                        "sellRate": 34.66,
                        "fees": 11.02,
                        "sellRateWithVat": 37.12
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-50068",
                        "brand": "Brand D",
                        "description": "Consoles Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 476.5
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 287.13
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 13,
                        "marginValue": 35.15,
                        "sellRate": 47.85,
                        "fees": 46.08,
                        "sellRateWithVat": 14.61
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-62499",
                        "brand": "Brand E",
                        "description": "Consoles Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 127.3
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 340.96
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 293.55
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 14,
                        "marginValue": 15.47,
                        "sellRate": 25.8,
                        "fees": 18.1,
                        "sellRateWithVat": 12.88
                    }
                ]
            },
            {
                "subCategoryId": 1,
                "subCategoryName": "Games",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-72595",
                        "brand": "Brand A",
                        "description": "Games Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 47.08
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 183.14
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 29,
                        "marginValue": 28.3,
                        "sellRate": 33.73,
                        "fees": 36.06,
                        "sellRateWithVat": 2.26
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-45838",
                        "brand": "Brand B",
                        "description": "Games Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 229.34
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 91.21
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 2,
                        "marginValue": 32.82,
                        "sellRate": 10.84,
                        "fees": 23.84,
                        "sellRateWithVat": 17.17
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-10042",
                        "brand": "Brand C",
                        "description": "Games Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 186.29
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 381.82
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 8,
                        "marginValue": 8.37,
                        "sellRate": 5.19,
                        "fees": 7.16,
                        "sellRateWithVat": 11.58
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-85354",
                        "brand": "Brand D",
                        "description": "Games Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 368.33
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 56.78
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 29,
                        "marginValue": 29.99,
                        "sellRate": 41.72,
                        "fees": 21.86,
                        "sellRateWithVat": 49.52
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-53479",
                        "brand": "Brand E",
                        "description": "Games Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 422.48
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 343.1
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 262.91
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 23,
                        "marginValue": 25.03,
                        "sellRate": 37.04,
                        "fees": 26.8,
                        "sellRateWithVat": 18.98
                    }
                ]
            },
            {
                "subCategoryId": 2,
                "subCategoryName": "Accessories",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-12600",
                        "brand": "Brand A",
                        "description": "Accessories Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 132.79
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 45.17
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 19,
                        "marginValue": 11.98,
                        "sellRate": 0.58,
                        "fees": 19.18,
                        "sellRateWithVat": 7.58
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-49867",
                        "brand": "Brand B",
                        "description": "Accessories Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 269.1
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 182.54
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 19,
                        "marginValue": 36.9,
                        "sellRate": 8.62,
                        "fees": 45.04,
                        "sellRateWithVat": 25.89
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-66330",
                        "brand": "Brand C",
                        "description": "Accessories Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 407.42
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 160.81
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 28,
                        "marginValue": 12.35,
                        "sellRate": 43.12,
                        "fees": 42.46,
                        "sellRateWithVat": 39.18
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-72572",
                        "brand": "Brand D",
                        "description": "Accessories Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 265.88
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 276.5
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 3,
                        "marginValue": 19.41,
                        "sellRate": 1.74,
                        "fees": 6.76,
                        "sellRateWithVat": 27.74
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-34665",
                        "brand": "Brand E",
                        "description": "Accessories Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 120.08
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 279.22
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 279.48
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 25,
                        "marginValue": 20.55,
                        "sellRate": 39.65,
                        "fees": 21.5,
                        "sellRateWithVat": 3.11
                    }
                ]
            },
            {
                "subCategoryId": 3,
                "subCategoryName": "VR Equipment",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-53621",
                        "brand": "Brand A",
                        "description": "VR Equipment Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 364.66
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 449.04
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 8,
                        "marginValue": 29.26,
                        "sellRate": 39.62,
                        "fees": 42.99,
                        "sellRateWithVat": 39.76
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-93102",
                        "brand": "Brand B",
                        "description": "VR Equipment Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 138.82
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 491.66
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 3,
                        "marginValue": 21.31,
                        "sellRate": 15.71,
                        "fees": 4.77,
                        "sellRateWithVat": 13.39
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-98084",
                        "brand": "Brand C",
                        "description": "VR Equipment Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 162.34
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 373.69
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 13,
                        "marginValue": 25.47,
                        "sellRate": 11.25,
                        "fees": 14.08,
                        "sellRateWithVat": 18.84
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-35694",
                        "brand": "Brand D",
                        "description": "VR Equipment Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 51.67
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 47.49
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 20,
                        "marginValue": 43.64,
                        "sellRate": 34.34,
                        "fees": 48.28,
                        "sellRateWithVat": 31.58
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-72997",
                        "brand": "Brand E",
                        "description": "VR Equipment Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 38.98
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 118.31
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 309.13
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 21,
                        "marginValue": 10.8,
                        "sellRate": 34.59,
                        "fees": 25.99,
                        "sellRateWithVat": 15.57
                    }
                ]
            },
            {
                "subCategoryId": 4,
                "subCategoryName": "Gaming Chairs",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-16458",
                        "brand": "Brand A",
                        "description": "Gaming Chairs Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 452.51
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 466.33
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 28,
                        "marginValue": 2.22,
                        "sellRate": 1.62,
                        "fees": 49.68,
                        "sellRateWithVat": 2.93
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-40587",
                        "brand": "Brand B",
                        "description": "Gaming Chairs Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 350.69
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 251.13
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 17,
                        "marginValue": 15.34,
                        "sellRate": 47.08,
                        "fees": 2.66,
                        "sellRateWithVat": 6.93
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-35514",
                        "brand": "Brand C",
                        "description": "Gaming Chairs Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 366.38
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 35.07
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 23,
                        "marginValue": 48.36,
                        "sellRate": 18.59,
                        "fees": 19.04,
                        "sellRateWithVat": 25.62
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-74695",
                        "brand": "Brand D",
                        "description": "Gaming Chairs Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 468.79
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 202.87
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 15,
                        "marginValue": 3.87,
                        "sellRate": 38.16,
                        "fees": 1.65,
                        "sellRateWithVat": 4.73
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-22028",
                        "brand": "Brand E",
                        "description": "Gaming Chairs Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 163.64
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 250.64
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 428.12
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 12,
                        "marginValue": 32.11,
                        "sellRate": 11.49,
                        "fees": 31.95,
                        "sellRateWithVat": 4.11
                    }
                ]
            }
        ]
    },
    {
        "categoryId": 15,
        "categoryName": "Musical Instruments",
        "subCategory": [
            {
                "subCategoryId": 0,
                "subCategoryName": "Guitars",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-50929",
                        "brand": "Brand A",
                        "description": "Guitars Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 157.47
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 86.92
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 7,
                        "marginValue": 0.9,
                        "sellRate": 15.86,
                        "fees": 26.52,
                        "sellRateWithVat": 39.48
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-34746",
                        "brand": "Brand B",
                        "description": "Guitars Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 257.34
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 443.71
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 3,
                        "marginValue": 11.57,
                        "sellRate": 42.19,
                        "fees": 21.35,
                        "sellRateWithVat": 49.24
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-24732",
                        "brand": "Brand C",
                        "description": "Guitars Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 180.26
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 456.65
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 14,
                        "marginValue": 44.95,
                        "sellRate": 21.73,
                        "fees": 34.57,
                        "sellRateWithVat": 41.38
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-76745",
                        "brand": "Brand D",
                        "description": "Guitars Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 494.44
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 312.52
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 17,
                        "marginValue": 15.44,
                        "sellRate": 48.67,
                        "fees": 41.92,
                        "sellRateWithVat": 23.88
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-94479",
                        "brand": "Brand E",
                        "description": "Guitars Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 97.99
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 32.29
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 358.15
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 6,
                        "marginValue": 39.87,
                        "sellRate": 2.19,
                        "fees": 47.3,
                        "sellRateWithVat": 9.46
                    }
                ]
            },
            {
                "subCategoryId": 1,
                "subCategoryName": "Keyboards",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-41024",
                        "brand": "Brand A",
                        "description": "Keyboards Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 361.31
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 418.43
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 19,
                        "marginValue": 29.18,
                        "sellRate": 25.81,
                        "fees": 43.07,
                        "sellRateWithVat": 26.94
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-18596",
                        "brand": "Brand B",
                        "description": "Keyboards Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 181.1
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 189.98
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 4,
                        "marginValue": 9.89,
                        "sellRate": 0.37,
                        "fees": 12.6,
                        "sellRateWithVat": 36.86
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-23157",
                        "brand": "Brand C",
                        "description": "Keyboards Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 168.71
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 420.13
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 21,
                        "marginValue": 3.65,
                        "sellRate": 36.06,
                        "fees": 26.75,
                        "sellRateWithVat": 40.25
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-97068",
                        "brand": "Brand D",
                        "description": "Keyboards Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 234.66
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 312.65
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 14,
                        "marginValue": 39.45,
                        "sellRate": 46.86,
                        "fees": 39.52,
                        "sellRateWithVat": 30.42
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-47676",
                        "brand": "Brand E",
                        "description": "Keyboards Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 177.19
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 256.12
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 50.77
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 5,
                        "marginValue": 45.89,
                        "sellRate": 20.07,
                        "fees": 32.32,
                        "sellRateWithVat": 35.32
                    }
                ]
            },
            {
                "subCategoryId": 2,
                "subCategoryName": "Drums",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-89383",
                        "brand": "Brand A",
                        "description": "Drums Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 478.39
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 475.89
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 16,
                        "marginValue": 38.78,
                        "sellRate": 17.78,
                        "fees": 42.68,
                        "sellRateWithVat": 49.03
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-27263",
                        "brand": "Brand B",
                        "description": "Drums Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 157.95
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 456.72
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 9,
                        "marginValue": 9.61,
                        "sellRate": 28.53,
                        "fees": 48.84,
                        "sellRateWithVat": 47.5
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-22076",
                        "brand": "Brand C",
                        "description": "Drums Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 135.69
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 379.01
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 3,
                        "marginValue": 12.47,
                        "sellRate": 21.64,
                        "fees": 5.29,
                        "sellRateWithVat": 40.92
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-33888",
                        "brand": "Brand D",
                        "description": "Drums Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 446.79
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 322.81
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 16,
                        "marginValue": 0.95,
                        "sellRate": 38.08,
                        "fees": 3.4,
                        "sellRateWithVat": 11.55
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-21254",
                        "brand": "Brand E",
                        "description": "Drums Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 300.43
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 436.09
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 60.37
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 24,
                        "marginValue": 42.82,
                        "sellRate": 14.54,
                        "fees": 37.24,
                        "sellRateWithVat": 16.89
                    }
                ]
            },
            {
                "subCategoryId": 3,
                "subCategoryName": "Wind Instruments",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-72970",
                        "brand": "Brand A",
                        "description": "Wind Instruments Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 375.36
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 38.39
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 9,
                        "marginValue": 29.63,
                        "sellRate": 24.16,
                        "fees": 36.29,
                        "sellRateWithVat": 49.34
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-53727",
                        "brand": "Brand B",
                        "description": "Wind Instruments Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 208.87
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 95.29
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 23,
                        "marginValue": 45.02,
                        "sellRate": 1.75,
                        "fees": 5.46,
                        "sellRateWithVat": 30.58
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-5133",
                        "brand": "Brand C",
                        "description": "Wind Instruments Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 267.44
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 4.04
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 28,
                        "marginValue": 18.57,
                        "sellRate": 43.14,
                        "fees": 38.71,
                        "sellRateWithVat": 26.74
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-41453",
                        "brand": "Brand D",
                        "description": "Wind Instruments Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 16.05
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 340.96
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 24,
                        "marginValue": 36.95,
                        "sellRate": 21.19,
                        "fees": 33.77,
                        "sellRateWithVat": 1.64
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-70874",
                        "brand": "Brand E",
                        "description": "Wind Instruments Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 439.73
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 57.4
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 307.42
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 4,
                        "marginValue": 40.7,
                        "sellRate": 8.01,
                        "fees": 23.47,
                        "sellRateWithVat": 15.56
                    }
                ]
            },
            {
                "subCategoryId": 4,
                "subCategoryName": "Accessories",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-54283",
                        "brand": "Brand A",
                        "description": "Accessories Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 264
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 306.17
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 11,
                        "marginValue": 44.24,
                        "sellRate": 15.59,
                        "fees": 19.24,
                        "sellRateWithVat": 26.73
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-58155",
                        "brand": "Brand B",
                        "description": "Accessories Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 250.22
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 255.69
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 11,
                        "marginValue": 29.66,
                        "sellRate": 38.26,
                        "fees": 18.17,
                        "sellRateWithVat": 25.99
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-10394",
                        "brand": "Brand C",
                        "description": "Accessories Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 15.04
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 280.27
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 10,
                        "marginValue": 12.76,
                        "sellRate": 10.64,
                        "fees": 29.5,
                        "sellRateWithVat": 0.51
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-8941",
                        "brand": "Brand D",
                        "description": "Accessories Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 84.73
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 491.76
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 1,
                        "marginValue": 34.31,
                        "sellRate": 2.5,
                        "fees": 24.53,
                        "sellRateWithVat": 6.69
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-73415",
                        "brand": "Brand E",
                        "description": "Accessories Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 329.78
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 34.53
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 368.64
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 8,
                        "marginValue": 9.34,
                        "sellRate": 29.88,
                        "fees": 46.93,
                        "sellRateWithVat": 36.85
                    }
                ]
            }
        ]
    },
    {
        "categoryId": 16,
        "categoryName": "Office Supplies",
        "subCategory": [
            {
                "subCategoryId": 0,
                "subCategoryName": "Paper",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-63346",
                        "brand": "Brand A",
                        "description": "Paper Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 437.34
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 454.83
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 29,
                        "marginValue": 13.18,
                        "sellRate": 16.29,
                        "fees": 38.49,
                        "sellRateWithVat": 6.4
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-89252",
                        "brand": "Brand B",
                        "description": "Paper Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 188.45
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 477.81
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 28,
                        "marginValue": 6.22,
                        "sellRate": 19.75,
                        "fees": 5.3,
                        "sellRateWithVat": 24.69
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-1019",
                        "brand": "Brand C",
                        "description": "Paper Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 359.56
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 112.42
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 18,
                        "marginValue": 1.37,
                        "sellRate": 11.66,
                        "fees": 9.14,
                        "sellRateWithVat": 27.7
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-52243",
                        "brand": "Brand D",
                        "description": "Paper Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 101.39
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 184.92
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 28,
                        "marginValue": 14.05,
                        "sellRate": 24.66,
                        "fees": 3.95,
                        "sellRateWithVat": 8.56
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-17157",
                        "brand": "Brand E",
                        "description": "Paper Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 30.07
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 187.15
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 53.69
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 5,
                        "marginValue": 12.9,
                        "sellRate": 30.6,
                        "fees": 9.92,
                        "sellRateWithVat": 29.69
                    }
                ]
            },
            {
                "subCategoryId": 1,
                "subCategoryName": "Writing Instruments",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-8837",
                        "brand": "Brand A",
                        "description": "Writing Instruments Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 355.53
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 192.72
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 25,
                        "marginValue": 24.16,
                        "sellRate": 48.08,
                        "fees": 44.17,
                        "sellRateWithVat": 45.03
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-62109",
                        "brand": "Brand B",
                        "description": "Writing Instruments Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 26.05
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 14.65
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 22,
                        "marginValue": 46.41,
                        "sellRate": 42.03,
                        "fees": 3.05,
                        "sellRateWithVat": 32.27
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-87700",
                        "brand": "Brand C",
                        "description": "Writing Instruments Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 179.18
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 31.91
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 2,
                        "marginValue": 21.87,
                        "sellRate": 1.59,
                        "fees": 1.22,
                        "sellRateWithVat": 10.12
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-63137",
                        "brand": "Brand D",
                        "description": "Writing Instruments Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 82.54
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 491.46
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 24,
                        "marginValue": 18.5,
                        "sellRate": 32.99,
                        "fees": 31.29,
                        "sellRateWithVat": 48.13
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-92339",
                        "brand": "Brand E",
                        "description": "Writing Instruments Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 17.8
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 141.14
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 127.54
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 9,
                        "marginValue": 19.31,
                        "sellRate": 41.43,
                        "fees": 7.86,
                        "sellRateWithVat": 24.14
                    }
                ]
            },
            {
                "subCategoryId": 2,
                "subCategoryName": "Desk Accessories",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-88122",
                        "brand": "Brand A",
                        "description": "Desk Accessories Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 371.55
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 263.93
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 7,
                        "marginValue": 14.92,
                        "sellRate": 9.85,
                        "fees": 36.45,
                        "sellRateWithVat": 4.16
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-45994",
                        "brand": "Brand B",
                        "description": "Desk Accessories Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 470.02
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 409.67
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 0,
                        "marginValue": 28.84,
                        "sellRate": 47.52,
                        "fees": 33.34,
                        "sellRateWithVat": 10.13
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-48851",
                        "brand": "Brand C",
                        "description": "Desk Accessories Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 180.69
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 328.53
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 24,
                        "marginValue": 6.47,
                        "sellRate": 24.08,
                        "fees": 23.98,
                        "sellRateWithVat": 5.03
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-84287",
                        "brand": "Brand D",
                        "description": "Desk Accessories Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 118.71
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 196.93
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 3,
                        "marginValue": 25.49,
                        "sellRate": 14.61,
                        "fees": 34.43,
                        "sellRateWithVat": 17.85
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-10873",
                        "brand": "Brand E",
                        "description": "Desk Accessories Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 398.72
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 88.57
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 1.85
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 9,
                        "marginValue": 39.44,
                        "sellRate": 7.13,
                        "fees": 23.12,
                        "sellRateWithVat": 33.28
                    }
                ]
            },
            {
                "subCategoryId": 3,
                "subCategoryName": "Storage Solutions",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-57346",
                        "brand": "Brand A",
                        "description": "Storage Solutions Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 401.65
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 259.66
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 0,
                        "marginValue": 40.77,
                        "sellRate": 3.36,
                        "fees": 37.46,
                        "sellRateWithVat": 48.44
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-52591",
                        "brand": "Brand B",
                        "description": "Storage Solutions Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 60.07
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 399.95
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 29,
                        "marginValue": 24.46,
                        "sellRate": 30.19,
                        "fees": 33.06,
                        "sellRateWithVat": 4.28
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-17528",
                        "brand": "Brand C",
                        "description": "Storage Solutions Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 253.33
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 441.03
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 1,
                        "marginValue": 5.65,
                        "sellRate": 31.44,
                        "fees": 0.72,
                        "sellRateWithVat": 39.85
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-8260",
                        "brand": "Brand D",
                        "description": "Storage Solutions Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 241.31
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 449.01
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 21,
                        "marginValue": 4.13,
                        "sellRate": 38.55,
                        "fees": 35.21,
                        "sellRateWithVat": 31.99
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-20711",
                        "brand": "Brand E",
                        "description": "Storage Solutions Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 405.88
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 181.59
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 452.74
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 15,
                        "marginValue": 49.97,
                        "sellRate": 22.82,
                        "fees": 5.88,
                        "sellRateWithVat": 47.19
                    }
                ]
            },
            {
                "subCategoryId": 4,
                "subCategoryName": "Technology",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-37557",
                        "brand": "Brand A",
                        "description": "Technology Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 305.2
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 466.41
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 1,
                        "marginValue": 43.04,
                        "sellRate": 9.55,
                        "fees": 38.87,
                        "sellRateWithVat": 39.21
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-98778",
                        "brand": "Brand B",
                        "description": "Technology Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 21.37
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 441.63
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 25,
                        "marginValue": 17.57,
                        "sellRate": 38.9,
                        "fees": 17.69,
                        "sellRateWithVat": 45.83
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-391",
                        "brand": "Brand C",
                        "description": "Technology Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 389.21
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 184.05
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 10,
                        "marginValue": 31.44,
                        "sellRate": 40.96,
                        "fees": 48.81,
                        "sellRateWithVat": 40.39
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-54179",
                        "brand": "Brand D",
                        "description": "Technology Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 124.39
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 356.92
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 29,
                        "marginValue": 11.41,
                        "sellRate": 1.95,
                        "fees": 26.45,
                        "sellRateWithVat": 8.89
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-76612",
                        "brand": "Brand E",
                        "description": "Technology Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 330.75
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 412.25
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 13.61
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 10,
                        "marginValue": 31.79,
                        "sellRate": 37.44,
                        "fees": 48.63,
                        "sellRateWithVat": 10.53
                    }
                ]
            }
        ]
    },
    {
        "categoryId": 17,
        "categoryName": "Health Supplements",
        "subCategory": [
            {
                "subCategoryId": 0,
                "subCategoryName": "Vitamins",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-74347",
                        "brand": "Brand A",
                        "description": "Vitamins Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 465.37
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 367.69
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 29,
                        "marginValue": 46.35,
                        "sellRate": 7.53,
                        "fees": 27.42,
                        "sellRateWithVat": 1.85
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-93519",
                        "brand": "Brand B",
                        "description": "Vitamins Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 468
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 485.79
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 22,
                        "marginValue": 24.51,
                        "sellRate": 40.1,
                        "fees": 47.21,
                        "sellRateWithVat": 0.62
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-92741",
                        "brand": "Brand C",
                        "description": "Vitamins Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 33.63
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 319.5
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 11,
                        "marginValue": 38.39,
                        "sellRate": 27.3,
                        "fees": 37.86,
                        "sellRateWithVat": 41.72
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-44358",
                        "brand": "Brand D",
                        "description": "Vitamins Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 204.05
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 356.65
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 0,
                        "marginValue": 8.39,
                        "sellRate": 20.73,
                        "fees": 26.25,
                        "sellRateWithVat": 32.46
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-77037",
                        "brand": "Brand E",
                        "description": "Vitamins Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 163.2
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 56.12
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 90.75
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 3,
                        "marginValue": 30.65,
                        "sellRate": 45.08,
                        "fees": 5.4,
                        "sellRateWithVat": 21.68
                    }
                ]
            },
            {
                "subCategoryId": 1,
                "subCategoryName": "Minerals",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-97779",
                        "brand": "Brand A",
                        "description": "Minerals Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 325.79
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 58.34
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 2,
                        "marginValue": 32.78,
                        "sellRate": 33.59,
                        "fees": 37.63,
                        "sellRateWithVat": 49.45
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-41745",
                        "brand": "Brand B",
                        "description": "Minerals Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 247.69
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 255.65
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 16,
                        "marginValue": 47.06,
                        "sellRate": 23.54,
                        "fees": 14.19,
                        "sellRateWithVat": 6.7
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-5628",
                        "brand": "Brand C",
                        "description": "Minerals Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 94.38
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 17.12
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 16,
                        "marginValue": 44.13,
                        "sellRate": 2.55,
                        "fees": 6.71,
                        "sellRateWithVat": 28.04
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-91357",
                        "brand": "Brand D",
                        "description": "Minerals Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 167.05
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 61.91
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 22,
                        "marginValue": 45.09,
                        "sellRate": 32.95,
                        "fees": 36.65,
                        "sellRateWithVat": 49.11
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-30577",
                        "brand": "Brand E",
                        "description": "Minerals Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 391.65
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 116.6
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 468.55
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 20,
                        "marginValue": 30.43,
                        "sellRate": 42.71,
                        "fees": 25.51,
                        "sellRateWithVat": 8.95
                    }
                ]
            },
            {
                "subCategoryId": 2,
                "subCategoryName": "Herbal Supplements",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-6690",
                        "brand": "Brand A",
                        "description": "Herbal Supplements Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 135.88
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 37.34
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 4,
                        "marginValue": 24.97,
                        "sellRate": 32.7,
                        "fees": 15.18,
                        "sellRateWithVat": 49.48
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-26123",
                        "brand": "Brand B",
                        "description": "Herbal Supplements Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 1.76
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 89.17
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 7,
                        "marginValue": 3.01,
                        "sellRate": 1.97,
                        "fees": 1.04,
                        "sellRateWithVat": 19.58
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-63549",
                        "brand": "Brand C",
                        "description": "Herbal Supplements Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 437.93
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 435.84
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 24,
                        "marginValue": 43.5,
                        "sellRate": 43.93,
                        "fees": 28.56,
                        "sellRateWithVat": 25.92
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-95343",
                        "brand": "Brand D",
                        "description": "Herbal Supplements Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 358.75
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 170.56
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 1,
                        "marginValue": 19.5,
                        "sellRate": 15.83,
                        "fees": 21.59,
                        "sellRateWithVat": 23.19
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-12545",
                        "brand": "Brand E",
                        "description": "Herbal Supplements Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 21.02
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 308.31
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 473.34
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 15,
                        "marginValue": 1.33,
                        "sellRate": 18.87,
                        "fees": 19.22,
                        "sellRateWithVat": 14.26
                    }
                ]
            },
            {
                "subCategoryId": 3,
                "subCategoryName": "Protein Supplements",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-43875",
                        "brand": "Brand A",
                        "description": "Protein Supplements Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 14.16
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 243.78
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 26,
                        "marginValue": 28.06,
                        "sellRate": 49.45,
                        "fees": 1.2,
                        "sellRateWithVat": 37.1
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-52222",
                        "brand": "Brand B",
                        "description": "Protein Supplements Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 464.93
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 402.07
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 15,
                        "marginValue": 6.86,
                        "sellRate": 31.41,
                        "fees": 29.35,
                        "sellRateWithVat": 7.99
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-96960",
                        "brand": "Brand C",
                        "description": "Protein Supplements Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 274.21
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 294.97
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 23,
                        "marginValue": 38.73,
                        "sellRate": 0.16,
                        "fees": 22.13,
                        "sellRateWithVat": 8.08
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-10595",
                        "brand": "Brand D",
                        "description": "Protein Supplements Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 257.39
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 338.65
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 18,
                        "marginValue": 9.92,
                        "sellRate": 29.12,
                        "fees": 18.93,
                        "sellRateWithVat": 45.96
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-20879",
                        "brand": "Brand E",
                        "description": "Protein Supplements Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 416.95
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 74.24
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 344.53
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 25,
                        "marginValue": 15.16,
                        "sellRate": 10.48,
                        "fees": 45.32,
                        "sellRateWithVat": 4.09
                    }
                ]
            },
            {
                "subCategoryId": 4,
                "subCategoryName": "Dietary Supplements",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-32647",
                        "brand": "Brand A",
                        "description": "Dietary Supplements Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 364.43
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 314.57
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 7,
                        "marginValue": 19.73,
                        "sellRate": 39.04,
                        "fees": 39.08,
                        "sellRateWithVat": 6.3
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-5846",
                        "brand": "Brand B",
                        "description": "Dietary Supplements Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 394.39
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 354.22
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 11,
                        "marginValue": 31.18,
                        "sellRate": 4.15,
                        "fees": 23.09,
                        "sellRateWithVat": 28.38
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-42784",
                        "brand": "Brand C",
                        "description": "Dietary Supplements Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 361.47
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 409.51
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 25,
                        "marginValue": 1.07,
                        "sellRate": 34.04,
                        "fees": 17.08,
                        "sellRateWithVat": 2.43
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-7732",
                        "brand": "Brand D",
                        "description": "Dietary Supplements Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 388.19
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 316.94
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 1,
                        "marginValue": 31.53,
                        "sellRate": 29.25,
                        "fees": 6.18,
                        "sellRateWithVat": 48.51
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-81541",
                        "brand": "Brand E",
                        "description": "Dietary Supplements Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 405.62
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 472.58
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 495.81
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 20,
                        "marginValue": 21.19,
                        "sellRate": 45.24,
                        "fees": 9.38,
                        "sellRateWithVat": 35.13
                    }
                ]
            }
        ]
    },
    {
        "categoryId": 18,
        "categoryName": "Grocery",
        "subCategory": [
            {
                "subCategoryId": 0,
                "subCategoryName": "Fruits & Vegetables",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-6169",
                        "brand": "Brand A",
                        "description": "Fruits & Vegetables Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 151.73
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 231.95
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 4,
                        "marginValue": 44.67,
                        "sellRate": 10.16,
                        "fees": 20.79,
                        "sellRateWithVat": 32.16
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-47288",
                        "brand": "Brand B",
                        "description": "Fruits & Vegetables Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 228.45
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 380.8
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 15,
                        "marginValue": 42.09,
                        "sellRate": 8.11,
                        "fees": 8.08,
                        "sellRateWithVat": 18.37
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-79806",
                        "brand": "Brand C",
                        "description": "Fruits & Vegetables Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 498.81
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 452.64
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 12,
                        "marginValue": 46.59,
                        "sellRate": 41.28,
                        "fees": 10.62,
                        "sellRateWithVat": 33.04
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-38535",
                        "brand": "Brand D",
                        "description": "Fruits & Vegetables Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 117.69
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 72.15
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 0,
                        "marginValue": 38.47,
                        "sellRate": 3.54,
                        "fees": 29.67,
                        "sellRateWithVat": 40.36
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-37201",
                        "brand": "Brand E",
                        "description": "Fruits & Vegetables Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 277.52
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 392.84
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 246.22
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 17,
                        "marginValue": 28.15,
                        "sellRate": 22.46,
                        "fees": 39.21,
                        "sellRateWithVat": 25.84
                    }
                ]
            },
            {
                "subCategoryId": 1,
                "subCategoryName": "Meat & Seafood",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-87088",
                        "brand": "Brand A",
                        "description": "Meat & Seafood Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 250.88
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 37.93
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 19,
                        "marginValue": 43.06,
                        "sellRate": 14.99,
                        "fees": 28.12,
                        "sellRateWithVat": 37.23
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-7095",
                        "brand": "Brand B",
                        "description": "Meat & Seafood Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 187.39
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 58.2
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 3,
                        "marginValue": 26.01,
                        "sellRate": 0.97,
                        "fees": 24.64,
                        "sellRateWithVat": 37.73
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-72607",
                        "brand": "Brand C",
                        "description": "Meat & Seafood Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 331.44
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 64.81
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 5,
                        "marginValue": 19.54,
                        "sellRate": 48.4,
                        "fees": 8.07,
                        "sellRateWithVat": 17.4
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-93856",
                        "brand": "Brand D",
                        "description": "Meat & Seafood Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 434.64
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 208.85
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 19,
                        "marginValue": 34.35,
                        "sellRate": 14.7,
                        "fees": 34.86,
                        "sellRateWithVat": 16.4
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-67199",
                        "brand": "Brand E",
                        "description": "Meat & Seafood Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 496.82
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 79.34
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 427.63
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 1,
                        "marginValue": 2.6,
                        "sellRate": 45.08,
                        "fees": 48.11,
                        "sellRateWithVat": 26.3
                    }
                ]
            },
            {
                "subCategoryId": 2,
                "subCategoryName": "Dairy",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-85850",
                        "brand": "Brand A",
                        "description": "Dairy Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 388.33
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 180.17
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 2,
                        "marginValue": 13.88,
                        "sellRate": 22.04,
                        "fees": 10.94,
                        "sellRateWithVat": 32.9
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-94515",
                        "brand": "Brand B",
                        "description": "Dairy Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 23.15
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 229.21
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 0,
                        "marginValue": 32.01,
                        "sellRate": 10.33,
                        "fees": 9.7,
                        "sellRateWithVat": 19.48
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-35672",
                        "brand": "Brand C",
                        "description": "Dairy Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 413.55
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 26.46
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 20,
                        "marginValue": 25.26,
                        "sellRate": 32.91,
                        "fees": 17.79,
                        "sellRateWithVat": 4.36
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-6042",
                        "brand": "Brand D",
                        "description": "Dairy Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 161.01
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 189.25
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 25,
                        "marginValue": 18.73,
                        "sellRate": 11.54,
                        "fees": 19.69,
                        "sellRateWithVat": 17.98
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-28877",
                        "brand": "Brand E",
                        "description": "Dairy Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 264.42
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 231.36
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 21.16
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 23,
                        "marginValue": 5.63,
                        "sellRate": 37.3,
                        "fees": 17.05,
                        "sellRateWithVat": 44.48
                    }
                ]
            },
            {
                "subCategoryId": 3,
                "subCategoryName": "Snacks",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-33797",
                        "brand": "Brand A",
                        "description": "Snacks Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 258.46
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 101.19
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 15,
                        "marginValue": 29.05,
                        "sellRate": 27.59,
                        "fees": 20.84,
                        "sellRateWithVat": 14.35
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-38206",
                        "brand": "Brand B",
                        "description": "Snacks Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 200.2
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 339.88
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 27,
                        "marginValue": 40.37,
                        "sellRate": 38.9,
                        "fees": 18.54,
                        "sellRateWithVat": 25.75
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-37660",
                        "brand": "Brand C",
                        "description": "Snacks Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 469.89
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 474.64
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 27,
                        "marginValue": 21.78,
                        "sellRate": 4.84,
                        "fees": 24.47,
                        "sellRateWithVat": 45.22
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-44313",
                        "brand": "Brand D",
                        "description": "Snacks Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 217.14
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 114.97
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 3,
                        "marginValue": 17.39,
                        "sellRate": 4.53,
                        "fees": 34.13,
                        "sellRateWithVat": 43.81
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-84449",
                        "brand": "Brand E",
                        "description": "Snacks Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 467.13
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 276.07
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 433.23
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 3,
                        "marginValue": 29.52,
                        "sellRate": 17.41,
                        "fees": 16.44,
                        "sellRateWithVat": 18.01
                    }
                ]
            },
            {
                "subCategoryId": 4,
                "subCategoryName": "Beverages",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-77414",
                        "brand": "Brand A",
                        "description": "Beverages Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 235.41
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 490
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 4,
                        "marginValue": 21.8,
                        "sellRate": 14.15,
                        "fees": 16.48,
                        "sellRateWithVat": 22.31
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-359",
                        "brand": "Brand B",
                        "description": "Beverages Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 311.03
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 176.03
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 4,
                        "marginValue": 14.49,
                        "sellRate": 8.75,
                        "fees": 30.73,
                        "sellRateWithVat": 44.31
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-80773",
                        "brand": "Brand C",
                        "description": "Beverages Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 268.02
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 243.43
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 16,
                        "marginValue": 22.66,
                        "sellRate": 9.45,
                        "fees": 21.21,
                        "sellRateWithVat": 11.87
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-36981",
                        "brand": "Brand D",
                        "description": "Beverages Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 160.18
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 126.9
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 28,
                        "marginValue": 29.09,
                        "sellRate": 15.73,
                        "fees": 46.27,
                        "sellRateWithVat": 28.42
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-2069",
                        "brand": "Brand E",
                        "description": "Beverages Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 373.14
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 43.98
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 407.33
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 24,
                        "marginValue": 48.7,
                        "sellRate": 35.59,
                        "fees": 4.39,
                        "sellRateWithVat": 47.09
                    }
                ]
            }
        ]
    },
    {
        "categoryId": 19,
        "categoryName": "Baby Products",
        "subCategory": [
            {
                "subCategoryId": 0,
                "subCategoryName": "Clothing",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-28649",
                        "brand": "Brand A",
                        "description": "Clothing Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 207.46
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 204.37
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 11,
                        "marginValue": 27.37,
                        "sellRate": 36.62,
                        "fees": 14.75,
                        "sellRateWithVat": 21.23
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-59077",
                        "brand": "Brand B",
                        "description": "Clothing Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 348.97
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 169.11
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 23,
                        "marginValue": 2.68,
                        "sellRate": 31.12,
                        "fees": 12.65,
                        "sellRateWithVat": 41.02
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-68694",
                        "brand": "Brand C",
                        "description": "Clothing Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 139.57
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 289.91
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 9,
                        "marginValue": 18.7,
                        "sellRate": 30.14,
                        "fees": 44.96,
                        "sellRateWithVat": 11.53
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-68028",
                        "brand": "Brand D",
                        "description": "Clothing Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 395.86
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 257.04
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 1,
                        "marginValue": 16.89,
                        "sellRate": 40.51,
                        "fees": 26.83,
                        "sellRateWithVat": 20.49
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-5936",
                        "brand": "Brand E",
                        "description": "Clothing Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 451.15
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 314.64
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 154.8
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 0,
                        "marginValue": 2.71,
                        "sellRate": 16.22,
                        "fees": 44.84,
                        "sellRateWithVat": 13.83
                    }
                ]
            },
            {
                "subCategoryId": 1,
                "subCategoryName": "Toys",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-55244",
                        "brand": "Brand A",
                        "description": "Toys Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 273.02
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 232.55
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 29,
                        "marginValue": 14.42,
                        "sellRate": 49.93,
                        "fees": 11.11,
                        "sellRateWithVat": 13.4
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-17543",
                        "brand": "Brand B",
                        "description": "Toys Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 397.59
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 447.09
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 11,
                        "marginValue": 8.48,
                        "sellRate": 25.77,
                        "fees": 6.5,
                        "sellRateWithVat": 17.44
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-91132",
                        "brand": "Brand C",
                        "description": "Toys Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 372.75
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 195.61
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 1,
                        "marginValue": 40.19,
                        "sellRate": 3.6,
                        "fees": 17.68,
                        "sellRateWithVat": 35.54
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-44992",
                        "brand": "Brand D",
                        "description": "Toys Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 445.54
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 338.82
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 14,
                        "marginValue": 29.8,
                        "sellRate": 9.18,
                        "fees": 4.1,
                        "sellRateWithVat": 17.85
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-2693",
                        "brand": "Brand E",
                        "description": "Toys Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 487
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 408
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 138.03
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 11,
                        "marginValue": 13.97,
                        "sellRate": 32.58,
                        "fees": 5.98,
                        "sellRateWithVat": 40.85
                    }
                ]
            },
            {
                "subCategoryId": 2,
                "subCategoryName": "Feeding",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-17825",
                        "brand": "Brand A",
                        "description": "Feeding Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 476.79
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 111.14
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 7,
                        "marginValue": 17.23,
                        "sellRate": 7.17,
                        "fees": 9.72,
                        "sellRateWithVat": 44.02
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-91730",
                        "brand": "Brand B",
                        "description": "Feeding Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 468.53
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 130.09
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 9,
                        "marginValue": 33.35,
                        "sellRate": 35.74,
                        "fees": 28.22,
                        "sellRateWithVat": 21.43
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-37160",
                        "brand": "Brand C",
                        "description": "Feeding Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 341.6
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 18.15
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 5,
                        "marginValue": 46.14,
                        "sellRate": 33.11,
                        "fees": 21.78,
                        "sellRateWithVat": 33.34
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-3778",
                        "brand": "Brand D",
                        "description": "Feeding Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 146.32
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 274.6
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 3,
                        "marginValue": 32.56,
                        "sellRate": 41.49,
                        "fees": 43.46,
                        "sellRateWithVat": 16.91
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-880",
                        "brand": "Brand E",
                        "description": "Feeding Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 298.37
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 76.82
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 271.93
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 18,
                        "marginValue": 34.07,
                        "sellRate": 17.38,
                        "fees": 46.02,
                        "sellRateWithVat": 36.59
                    }
                ]
            },
            {
                "subCategoryId": 3,
                "subCategoryName": "Diapering",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-17858",
                        "brand": "Brand A",
                        "description": "Diapering Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 261.17
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 303.34
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 9,
                        "marginValue": 24.42,
                        "sellRate": 49.4,
                        "fees": 27.21,
                        "sellRateWithVat": 28.61
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-90059",
                        "brand": "Brand B",
                        "description": "Diapering Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 381.09
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 139.48
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 10,
                        "marginValue": 8.32,
                        "sellRate": 40.15,
                        "fees": 42.44,
                        "sellRateWithVat": 35.2
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-9474",
                        "brand": "Brand C",
                        "description": "Diapering Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 375.38
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 431.48
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 13,
                        "marginValue": 34.27,
                        "sellRate": 27.53,
                        "fees": 4.51,
                        "sellRateWithVat": 37.37
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-95586",
                        "brand": "Brand D",
                        "description": "Diapering Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 197.98
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 4.63
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 27,
                        "marginValue": 49.46,
                        "sellRate": 7.09,
                        "fees": 4.76,
                        "sellRateWithVat": 39.91
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-27835",
                        "brand": "Brand E",
                        "description": "Diapering Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 298.56
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 263.49
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 486.26
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 21,
                        "marginValue": 11.34,
                        "sellRate": 24.41,
                        "fees": 23.82,
                        "sellRateWithVat": 17.79
                    }
                ]
            },
            {
                "subCategoryId": 4,
                "subCategoryName": "Safety",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-83536",
                        "brand": "Brand A",
                        "description": "Safety Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 329.73
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 107.85
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 24,
                        "marginValue": 14.47,
                        "sellRate": 45.75,
                        "fees": 17.16,
                        "sellRateWithVat": 41.37
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-21583",
                        "brand": "Brand B",
                        "description": "Safety Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 206.02
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 197.17
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 11,
                        "marginValue": 44.85,
                        "sellRate": 1.74,
                        "fees": 41.25,
                        "sellRateWithVat": 38.04
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-83203",
                        "brand": "Brand C",
                        "description": "Safety Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 215.37
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 346.01
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 27,
                        "marginValue": 17.42,
                        "sellRate": 29.22,
                        "fees": 3,
                        "sellRateWithVat": 45.06
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-88144",
                        "brand": "Brand D",
                        "description": "Safety Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 204.94
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 197.68
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 14,
                        "marginValue": 1.93,
                        "sellRate": 33.13,
                        "fees": 1.65,
                        "sellRateWithVat": 4.54
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-93268",
                        "brand": "Brand E",
                        "description": "Safety Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 5.95
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 61.24
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 87
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 23,
                        "marginValue": 25.07,
                        "sellRate": 23.42,
                        "fees": 31.16,
                        "sellRateWithVat": 12.11
                    }
                ]
            }
        ]
    },
    {
        "categoryId": 20,
        "categoryName": "Travel Accessories",
        "subCategory": [
            {
                "subCategoryId": 0,
                "subCategoryName": "Luggage",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-82465",
                        "brand": "Brand A",
                        "description": "Luggage Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 2.07
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 330.29
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 22,
                        "marginValue": 17.04,
                        "sellRate": 44.62,
                        "fees": 25.36,
                        "sellRateWithVat": 16.93
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-64800",
                        "brand": "Brand B",
                        "description": "Luggage Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 156.53
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 401.02
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 4,
                        "marginValue": 23.93,
                        "sellRate": 24.69,
                        "fees": 7.87,
                        "sellRateWithVat": 38.82
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-64438",
                        "brand": "Brand C",
                        "description": "Luggage Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 294.97
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 266.8
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 8,
                        "marginValue": 31.56,
                        "sellRate": 21.38,
                        "fees": 2.11,
                        "sellRateWithVat": 3.37
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-65761",
                        "brand": "Brand D",
                        "description": "Luggage Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 263.64
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 475.28
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 0,
                        "marginValue": 46.26,
                        "sellRate": 14.81,
                        "fees": 38.87,
                        "sellRateWithVat": 11.78
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-73216",
                        "brand": "Brand E",
                        "description": "Luggage Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 163.04
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 70.88
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 286.38
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 10,
                        "marginValue": 2.59,
                        "sellRate": 33.12,
                        "fees": 27.71,
                        "sellRateWithVat": 16.74
                    }
                ]
            },
            {
                "subCategoryId": 1,
                "subCategoryName": "Travel Organizers",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-51620",
                        "brand": "Brand A",
                        "description": "Travel Organizers Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 126.62
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 411.83
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 29,
                        "marginValue": 9.04,
                        "sellRate": 37.12,
                        "fees": 5.62,
                        "sellRateWithVat": 40.86
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-88674",
                        "brand": "Brand B",
                        "description": "Travel Organizers Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 4.74
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 112.9
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 6,
                        "marginValue": 5.66,
                        "sellRate": 41.56,
                        "fees": 7.6,
                        "sellRateWithVat": 5.87
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-31041",
                        "brand": "Brand C",
                        "description": "Travel Organizers Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 128.52
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 497.12
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 17,
                        "marginValue": 48.31,
                        "sellRate": 31.4,
                        "fees": 7.05,
                        "sellRateWithVat": 20.31
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-47146",
                        "brand": "Brand D",
                        "description": "Travel Organizers Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 84.44
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 20.91
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 10,
                        "marginValue": 33.13,
                        "sellRate": 44.65,
                        "fees": 35.9,
                        "sellRateWithVat": 25.38
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-36858",
                        "brand": "Brand E",
                        "description": "Travel Organizers Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 92.36
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 11.7
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 102.57
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 18,
                        "marginValue": 39.63,
                        "sellRate": 22.84,
                        "fees": 45.51,
                        "sellRateWithVat": 4.52
                    }
                ]
            },
            {
                "subCategoryId": 2,
                "subCategoryName": "Travel Gadgets",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-86519",
                        "brand": "Brand A",
                        "description": "Travel Gadgets Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 274.76
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 174.51
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 25,
                        "marginValue": 15.77,
                        "sellRate": 41.92,
                        "fees": 39.12,
                        "sellRateWithVat": 14.15
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-78238",
                        "brand": "Brand B",
                        "description": "Travel Gadgets Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 403.32
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 285.43
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 22,
                        "marginValue": 8.09,
                        "sellRate": 12.98,
                        "fees": 5.29,
                        "sellRateWithVat": 33.2
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-59690",
                        "brand": "Brand C",
                        "description": "Travel Gadgets Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 268.76
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 360.23
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 9,
                        "marginValue": 43.33,
                        "sellRate": 1.41,
                        "fees": 21.96,
                        "sellRateWithVat": 32.69
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-39444",
                        "brand": "Brand D",
                        "description": "Travel Gadgets Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 86.2
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 171.7
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 20,
                        "marginValue": 33.09,
                        "sellRate": 25.06,
                        "fees": 40.3,
                        "sellRateWithVat": 17.02
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-76600",
                        "brand": "Brand E",
                        "description": "Travel Gadgets Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 170.49
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 428.49
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 129.29
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 13,
                        "marginValue": 44.93,
                        "sellRate": 33.79,
                        "fees": 44.53,
                        "sellRateWithVat": 16.9
                    }
                ]
            },
            {
                "subCategoryId": 3,
                "subCategoryName": "Comfort Accessories",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-50195",
                        "brand": "Brand A",
                        "description": "Comfort Accessories Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 340.76
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 286.92
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 7,
                        "marginValue": 47.23,
                        "sellRate": 28.33,
                        "fees": 36.88,
                        "sellRateWithVat": 33.84
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-96649",
                        "brand": "Brand B",
                        "description": "Comfort Accessories Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 38.64
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 186.84
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 23,
                        "marginValue": 47.65,
                        "sellRate": 14.2,
                        "fees": 7.82,
                        "sellRateWithVat": 44.46
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-34208",
                        "brand": "Brand C",
                        "description": "Comfort Accessories Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 376.98
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 322.56
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 5,
                        "marginValue": 45.82,
                        "sellRate": 29.39,
                        "fees": 36.73,
                        "sellRateWithVat": 37.78
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-68020",
                        "brand": "Brand D",
                        "description": "Comfort Accessories Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 164.45
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 193.35
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 4,
                        "marginValue": 16.98,
                        "sellRate": 38.58,
                        "fees": 5.93,
                        "sellRateWithVat": 12.92
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-55734",
                        "brand": "Brand E",
                        "description": "Comfort Accessories Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 499.43
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 259.77
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 64.16
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 10,
                        "marginValue": 17.77,
                        "sellRate": 36.8,
                        "fees": 12.59,
                        "sellRateWithVat": 20.91
                    }
                ]
            },
            {
                "subCategoryId": 4,
                "subCategoryName": "Travel Guides",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-40423",
                        "brand": "Brand A",
                        "description": "Travel Guides Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 397.41
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 30.75
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 29,
                        "marginValue": 28.4,
                        "sellRate": 20.44,
                        "fees": 34.37,
                        "sellRateWithVat": 41.19
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-21813",
                        "brand": "Brand B",
                        "description": "Travel Guides Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 366.56
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 398.89
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 18,
                        "marginValue": 35.32,
                        "sellRate": 22.32,
                        "fees": 2.63,
                        "sellRateWithVat": 4.4
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-7541",
                        "brand": "Brand C",
                        "description": "Travel Guides Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 164.06
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 463.88
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 29,
                        "marginValue": 13.29,
                        "sellRate": 18.53,
                        "fees": 44.32,
                        "sellRateWithVat": 5.51
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-54529",
                        "brand": "Brand D",
                        "description": "Travel Guides Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 114.02
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 2.18
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 0,
                        "marginValue": 46.08,
                        "sellRate": 22.58,
                        "fees": 38.47,
                        "sellRateWithVat": 5.21
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-50529",
                        "brand": "Brand E",
                        "description": "Travel Guides Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 2.32
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 2.01
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 281.02
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 16,
                        "marginValue": 31.03,
                        "sellRate": 43.13,
                        "fees": 38.03,
                        "sellRateWithVat": 37.92
                    }
                ]
            }
        ]
    },
    {
        "categoryId": 21,
        "categoryName": "Watches",
        "subCategory": [
            {
                "subCategoryId": 0,
                "subCategoryName": "Luxury Watches",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-88803",
                        "brand": "Brand A",
                        "description": "Luxury Watches Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 386.17
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 318.33
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 0,
                        "marginValue": 15.32,
                        "sellRate": 32.87,
                        "fees": 12.54,
                        "sellRateWithVat": 2.35
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-59257",
                        "brand": "Brand B",
                        "description": "Luxury Watches Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 98.51
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 319.3
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 14,
                        "marginValue": 39.48,
                        "sellRate": 1.04,
                        "fees": 46.25,
                        "sellRateWithVat": 43.58
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-68117",
                        "brand": "Brand C",
                        "description": "Luxury Watches Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 392.46
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 69.63
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 21,
                        "marginValue": 37.45,
                        "sellRate": 16.49,
                        "fees": 36.81,
                        "sellRateWithVat": 25
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-39293",
                        "brand": "Brand D",
                        "description": "Luxury Watches Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 255.95
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 298.54
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 3,
                        "marginValue": 35.19,
                        "sellRate": 14.6,
                        "fees": 40.77,
                        "sellRateWithVat": 29.04
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-96348",
                        "brand": "Brand E",
                        "description": "Luxury Watches Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 123.83
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 85.8
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 155.38
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 4,
                        "marginValue": 11.09,
                        "sellRate": 37.72,
                        "fees": 49.95,
                        "sellRateWithVat": 20.56
                    }
                ]
            },
            {
                "subCategoryId": 1,
                "subCategoryName": "Smart Watches",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-72550",
                        "brand": "Brand A",
                        "description": "Smart Watches Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 410.37
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 54.81
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 25,
                        "marginValue": 42.6,
                        "sellRate": 47.78,
                        "fees": 26.58,
                        "sellRateWithVat": 7.64
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-2728",
                        "brand": "Brand B",
                        "description": "Smart Watches Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 124.05
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 141.37
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 15,
                        "marginValue": 15.81,
                        "sellRate": 21.14,
                        "fees": 48.21,
                        "sellRateWithVat": 45.83
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-37584",
                        "brand": "Brand C",
                        "description": "Smart Watches Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 347.64
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 234.67
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 4,
                        "marginValue": 43.43,
                        "sellRate": 38.85,
                        "fees": 46.88,
                        "sellRateWithVat": 49.78
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-68195",
                        "brand": "Brand D",
                        "description": "Smart Watches Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 58.35
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 447.27
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 4,
                        "marginValue": 12.25,
                        "sellRate": 42.76,
                        "fees": 46.02,
                        "sellRateWithVat": 30.91
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-26459",
                        "brand": "Brand E",
                        "description": "Smart Watches Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 163.86
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 8.21
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 124.54
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 12,
                        "marginValue": 46.59,
                        "sellRate": 34.46,
                        "fees": 49.04,
                        "sellRateWithVat": 18.93
                    }
                ]
            },
            {
                "subCategoryId": 2,
                "subCategoryName": "Sports Watches",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-15064",
                        "brand": "Brand A",
                        "description": "Sports Watches Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 490.78
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 395.2
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 20,
                        "marginValue": 7.65,
                        "sellRate": 41.3,
                        "fees": 43.79,
                        "sellRateWithVat": 20.54
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-67817",
                        "brand": "Brand B",
                        "description": "Sports Watches Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 145.35
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 237.2
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 9,
                        "marginValue": 25.32,
                        "sellRate": 34.54,
                        "fees": 33.34,
                        "sellRateWithVat": 14.19
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-85849",
                        "brand": "Brand C",
                        "description": "Sports Watches Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 198.29
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 426.54
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 21,
                        "marginValue": 35.17,
                        "sellRate": 4.42,
                        "fees": 20.43,
                        "sellRateWithVat": 9.65
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-14218",
                        "brand": "Brand D",
                        "description": "Sports Watches Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 194.5
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 358.26
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 2,
                        "marginValue": 48.61,
                        "sellRate": 42.04,
                        "fees": 18.59,
                        "sellRateWithVat": 20.82
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-70985",
                        "brand": "Brand E",
                        "description": "Sports Watches Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 362.02
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 227.27
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 254.89
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 0,
                        "marginValue": 10.2,
                        "sellRate": 3.96,
                        "fees": 25.41,
                        "sellRateWithVat": 22.57
                    }
                ]
            },
            {
                "subCategoryId": 3,
                "subCategoryName": "Fashion Watches",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-93908",
                        "brand": "Brand A",
                        "description": "Fashion Watches Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 194.25
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 167.92
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 9,
                        "marginValue": 11.51,
                        "sellRate": 17.89,
                        "fees": 40.65,
                        "sellRateWithVat": 18.29
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-50279",
                        "brand": "Brand B",
                        "description": "Fashion Watches Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 311.31
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 101.27
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 27,
                        "marginValue": 44.25,
                        "sellRate": 21.7,
                        "fees": 42.52,
                        "sellRateWithVat": 40.72
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-67771",
                        "brand": "Brand C",
                        "description": "Fashion Watches Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 372.15
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 17.71
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 7,
                        "marginValue": 13.9,
                        "sellRate": 6.32,
                        "fees": 38.24,
                        "sellRateWithVat": 14.45
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-94388",
                        "brand": "Brand D",
                        "description": "Fashion Watches Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 353.31
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 67.45
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 18,
                        "marginValue": 33.78,
                        "sellRate": 7.8,
                        "fees": 14.06,
                        "sellRateWithVat": 27.5
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-8942",
                        "brand": "Brand E",
                        "description": "Fashion Watches Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 41.14
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 57.92
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 227.09
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 17,
                        "marginValue": 34.15,
                        "sellRate": 29.38,
                        "fees": 2.32,
                        "sellRateWithVat": 10.03
                    }
                ]
            },
            {
                "subCategoryId": 4,
                "subCategoryName": "Kids Watches",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-56266",
                        "brand": "Brand A",
                        "description": "Kids Watches Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 50.94
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 454.94
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 22,
                        "marginValue": 27.31,
                        "sellRate": 8.16,
                        "fees": 4.26,
                        "sellRateWithVat": 10.4
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-67670",
                        "brand": "Brand B",
                        "description": "Kids Watches Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 280.67
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 398.21
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 2,
                        "marginValue": 3.82,
                        "sellRate": 7.48,
                        "fees": 18.2,
                        "sellRateWithVat": 27.38
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-2751",
                        "brand": "Brand C",
                        "description": "Kids Watches Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 152.84
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 226.38
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 9,
                        "marginValue": 40.99,
                        "sellRate": 42.16,
                        "fees": 24.16,
                        "sellRateWithVat": 40.65
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-41316",
                        "brand": "Brand D",
                        "description": "Kids Watches Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 185.64
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 128.39
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 6,
                        "marginValue": 7.02,
                        "sellRate": 36.97,
                        "fees": 15.9,
                        "sellRateWithVat": 43.45
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-24027",
                        "brand": "Brand E",
                        "description": "Kids Watches Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 372.75
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 48.39
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 284.47
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 27,
                        "marginValue": 36.35,
                        "sellRate": 4.45,
                        "fees": 12.8,
                        "sellRateWithVat": 33.69
                    }
                ]
            }
        ]
    },
    {
        "categoryId": 22,
        "categoryName": "Outdoor Gear",
        "subCategory": [
            {
                "subCategoryId": 0,
                "subCategoryName": "Camping Gear",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-10570",
                        "brand": "Brand A",
                        "description": "Camping Gear Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 342.41
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 258.45
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 25,
                        "marginValue": 44.24,
                        "sellRate": 16.89,
                        "fees": 20.74,
                        "sellRateWithVat": 5.81
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-11313",
                        "brand": "Brand B",
                        "description": "Camping Gear Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 432.79
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 222.13
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 18,
                        "marginValue": 43.78,
                        "sellRate": 36.39,
                        "fees": 1.92,
                        "sellRateWithVat": 24.75
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-49322",
                        "brand": "Brand C",
                        "description": "Camping Gear Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 393.01
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 21.86
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 25,
                        "marginValue": 11.01,
                        "sellRate": 26.99,
                        "fees": 18,
                        "sellRateWithVat": 36.5
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-30196",
                        "brand": "Brand D",
                        "description": "Camping Gear Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 109.25
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 398.11
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 5,
                        "marginValue": 43.96,
                        "sellRate": 37.65,
                        "fees": 24.33,
                        "sellRateWithVat": 11.26
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-30544",
                        "brand": "Brand E",
                        "description": "Camping Gear Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 244.99
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 73.16
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 312.3
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 8,
                        "marginValue": 26.12,
                        "sellRate": 1.6,
                        "fees": 33.39,
                        "sellRateWithVat": 45.36
                    }
                ]
            },
            {
                "subCategoryId": 1,
                "subCategoryName": "Hiking Gear",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-57973",
                        "brand": "Brand A",
                        "description": "Hiking Gear Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 126.06
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 192.43
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 0,
                        "marginValue": 48.28,
                        "sellRate": 46.87,
                        "fees": 1.28,
                        "sellRateWithVat": 32.71
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-16041",
                        "brand": "Brand B",
                        "description": "Hiking Gear Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 430.42
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 484.03
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 11,
                        "marginValue": 5.69,
                        "sellRate": 6.4,
                        "fees": 31.89,
                        "sellRateWithVat": 39.03
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-67156",
                        "brand": "Brand C",
                        "description": "Hiking Gear Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 349.8
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 381.19
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 2,
                        "marginValue": 1.67,
                        "sellRate": 36.33,
                        "fees": 20.42,
                        "sellRateWithVat": 12.29
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-47817",
                        "brand": "Brand D",
                        "description": "Hiking Gear Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 349.85
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 108.03
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 18,
                        "marginValue": 39.71,
                        "sellRate": 32.3,
                        "fees": 25.25,
                        "sellRateWithVat": 8.61
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-40144",
                        "brand": "Brand E",
                        "description": "Hiking Gear Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 331.54
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 88.15
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 256.95
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 17,
                        "marginValue": 43.54,
                        "sellRate": 41.23,
                        "fees": 5.52,
                        "sellRateWithVat": 35.65
                    }
                ]
            },
            {
                "subCategoryId": 2,
                "subCategoryName": "Fishing Gear",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-59766",
                        "brand": "Brand A",
                        "description": "Fishing Gear Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 476.82
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 143.24
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 9,
                        "marginValue": 14.41,
                        "sellRate": 20.91,
                        "fees": 16.44,
                        "sellRateWithVat": 31
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-99953",
                        "brand": "Brand B",
                        "description": "Fishing Gear Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 432.68
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 371.78
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 24,
                        "marginValue": 19.91,
                        "sellRate": 16.99,
                        "fees": 15.58,
                        "sellRateWithVat": 40.55
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-87470",
                        "brand": "Brand C",
                        "description": "Fishing Gear Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 261.75
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 60.24
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 12,
                        "marginValue": 10.65,
                        "sellRate": 5.37,
                        "fees": 43.58,
                        "sellRateWithVat": 4.45
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-30264",
                        "brand": "Brand D",
                        "description": "Fishing Gear Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 170.12
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 418.34
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 18,
                        "marginValue": 30.95,
                        "sellRate": 8.82,
                        "fees": 19.24,
                        "sellRateWithVat": 45.35
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-44298",
                        "brand": "Brand E",
                        "description": "Fishing Gear Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 63.7
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 203.12
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 168.51
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 18,
                        "marginValue": 35.72,
                        "sellRate": 23.28,
                        "fees": 13.32,
                        "sellRateWithVat": 46.2
                    }
                ]
            },
            {
                "subCategoryId": 3,
                "subCategoryName": "Biking Gear",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-99154",
                        "brand": "Brand A",
                        "description": "Biking Gear Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 440.96
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 289.09
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 2,
                        "marginValue": 26.23,
                        "sellRate": 0.33,
                        "fees": 24.82,
                        "sellRateWithVat": 35.38
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-23138",
                        "brand": "Brand B",
                        "description": "Biking Gear Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 395.4
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 467.37
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 21,
                        "marginValue": 38.48,
                        "sellRate": 48.24,
                        "fees": 30.99,
                        "sellRateWithVat": 21.35
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-76913",
                        "brand": "Brand C",
                        "description": "Biking Gear Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 362.45
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 305.02
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 5,
                        "marginValue": 26.37,
                        "sellRate": 3.84,
                        "fees": 5.89,
                        "sellRateWithVat": 33.29
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-5438",
                        "brand": "Brand D",
                        "description": "Biking Gear Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 447.85
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 90
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 17,
                        "marginValue": 15.49,
                        "sellRate": 49.37,
                        "fees": 16.65,
                        "sellRateWithVat": 42.68
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-33666",
                        "brand": "Brand E",
                        "description": "Biking Gear Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 390.47
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 46.43
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 356.36
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 3,
                        "marginValue": 12.22,
                        "sellRate": 30.39,
                        "fees": 36.92,
                        "sellRateWithVat": 17.62
                    }
                ]
            },
            {
                "subCategoryId": 4,
                "subCategoryName": "Climbing Gear",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-24721",
                        "brand": "Brand A",
                        "description": "Climbing Gear Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 98.94
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 317.3
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 27,
                        "marginValue": 47.91,
                        "sellRate": 19.36,
                        "fees": 11.43,
                        "sellRateWithVat": 28.75
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-93493",
                        "brand": "Brand B",
                        "description": "Climbing Gear Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 209.26
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 423.18
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 29,
                        "marginValue": 40.5,
                        "sellRate": 35.19,
                        "fees": 27.99,
                        "sellRateWithVat": 4.87
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-1592",
                        "brand": "Brand C",
                        "description": "Climbing Gear Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 180.42
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 394.92
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 19,
                        "marginValue": 4.49,
                        "sellRate": 6.73,
                        "fees": 29.28,
                        "sellRateWithVat": 2.55
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-14718",
                        "brand": "Brand D",
                        "description": "Climbing Gear Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 108.12
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 342.28
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 20,
                        "marginValue": 31.43,
                        "sellRate": 48.12,
                        "fees": 41.94,
                        "sellRateWithVat": 25.39
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-18666",
                        "brand": "Brand E",
                        "description": "Climbing Gear Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 351.29
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 415.89
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 254.23
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 21,
                        "marginValue": 0.58,
                        "sellRate": 18.1,
                        "fees": 5.64,
                        "sellRateWithVat": 8.59
                    }
                ]
            }
        ]
    },
    {
        "categoryId": 23,
        "categoryName": "Camping Equipment",
        "subCategory": [
            {
                "subCategoryId": 0,
                "subCategoryName": "Tents",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-38951",
                        "brand": "Brand A",
                        "description": "Tents Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 18.37
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 297.43
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 9,
                        "marginValue": 13.66,
                        "sellRate": 10.2,
                        "fees": 36.5,
                        "sellRateWithVat": 15.53
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-6851",
                        "brand": "Brand B",
                        "description": "Tents Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 260.67
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 203.34
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 17,
                        "marginValue": 37.95,
                        "sellRate": 46.66,
                        "fees": 38.95,
                        "sellRateWithVat": 18.62
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-23018",
                        "brand": "Brand C",
                        "description": "Tents Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 10.64
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 75.36
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 10,
                        "marginValue": 32.91,
                        "sellRate": 14.04,
                        "fees": 8.52,
                        "sellRateWithVat": 17.61
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-9077",
                        "brand": "Brand D",
                        "description": "Tents Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 76.48
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 33.7
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 28,
                        "marginValue": 38.56,
                        "sellRate": 2.35,
                        "fees": 28.38,
                        "sellRateWithVat": 31.48
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-34030",
                        "brand": "Brand E",
                        "description": "Tents Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 105.63
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 117.39
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 78.97
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 13,
                        "marginValue": 44.72,
                        "sellRate": 36.87,
                        "fees": 26.1,
                        "sellRateWithVat": 11.78
                    }
                ]
            },
            {
                "subCategoryId": 1,
                "subCategoryName": "Sleeping Gear",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-4593",
                        "brand": "Brand A",
                        "description": "Sleeping Gear Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 266.51
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 13.16
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 12,
                        "marginValue": 48.79,
                        "sellRate": 21.18,
                        "fees": 46.38,
                        "sellRateWithVat": 33.63
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-37241",
                        "brand": "Brand B",
                        "description": "Sleeping Gear Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 377.18
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 439.32
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 0,
                        "marginValue": 17.24,
                        "sellRate": 45.99,
                        "fees": 7.51,
                        "sellRateWithVat": 15.08
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-47361",
                        "brand": "Brand C",
                        "description": "Sleeping Gear Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 154.21
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 375.76
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 27,
                        "marginValue": 29.44,
                        "sellRate": 2.7,
                        "fees": 47.15,
                        "sellRateWithVat": 37.25
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-2553",
                        "brand": "Brand D",
                        "description": "Sleeping Gear Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 185.34
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 421.01
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 1,
                        "marginValue": 10.78,
                        "sellRate": 31.11,
                        "fees": 23.95,
                        "sellRateWithVat": 39.26
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-82398",
                        "brand": "Brand E",
                        "description": "Sleeping Gear Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 317.29
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 343.35
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 192.59
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 23,
                        "marginValue": 19.92,
                        "sellRate": 46.2,
                        "fees": 5.27,
                        "sellRateWithVat": 9.71
                    }
                ]
            },
            {
                "subCategoryId": 2,
                "subCategoryName": "Cooking Gear",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-60744",
                        "brand": "Brand A",
                        "description": "Cooking Gear Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 119.92
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 84.58
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 15,
                        "marginValue": 49.45,
                        "sellRate": 13.55,
                        "fees": 13.19,
                        "sellRateWithVat": 8.17
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-12285",
                        "brand": "Brand B",
                        "description": "Cooking Gear Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 498.62
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 188.54
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 14,
                        "marginValue": 6.57,
                        "sellRate": 21.45,
                        "fees": 48.5,
                        "sellRateWithVat": 1.11
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-11040",
                        "brand": "Brand C",
                        "description": "Cooking Gear Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 145.21
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 184.57
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 1,
                        "marginValue": 26.82,
                        "sellRate": 43.08,
                        "fees": 40.76,
                        "sellRateWithVat": 13.85
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-91502",
                        "brand": "Brand D",
                        "description": "Cooking Gear Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 430.68
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 336.06
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 14,
                        "marginValue": 46.18,
                        "sellRate": 43.54,
                        "fees": 17.86,
                        "sellRateWithVat": 14.77
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-95272",
                        "brand": "Brand E",
                        "description": "Cooking Gear Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 266.6
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 248.37
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 444.56
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 26,
                        "marginValue": 12.53,
                        "sellRate": 31.37,
                        "fees": 14.69,
                        "sellRateWithVat": 18.21
                    }
                ]
            },
            {
                "subCategoryId": 3,
                "subCategoryName": "Outdoor Furniture",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-27260",
                        "brand": "Brand A",
                        "description": "Outdoor Furniture Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 424.27
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 72.94
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 18,
                        "marginValue": 15.07,
                        "sellRate": 40.31,
                        "fees": 41.72,
                        "sellRateWithVat": 14.79
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-69861",
                        "brand": "Brand B",
                        "description": "Outdoor Furniture Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 492.62
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 173.97
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 14,
                        "marginValue": 39.38,
                        "sellRate": 48.43,
                        "fees": 0.65,
                        "sellRateWithVat": 25.91
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-89980",
                        "brand": "Brand C",
                        "description": "Outdoor Furniture Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 187.38
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 22.97
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 11,
                        "marginValue": 43.94,
                        "sellRate": 37.28,
                        "fees": 11.2,
                        "sellRateWithVat": 39.86
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-61997",
                        "brand": "Brand D",
                        "description": "Outdoor Furniture Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 375.83
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 159.52
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 16,
                        "marginValue": 10.49,
                        "sellRate": 48.01,
                        "fees": 48.57,
                        "sellRateWithVat": 4.63
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-60678",
                        "brand": "Brand E",
                        "description": "Outdoor Furniture Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 394.96
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 54.93
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 433.39
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 10,
                        "marginValue": 46.94,
                        "sellRate": 27.31,
                        "fees": 33.9,
                        "sellRateWithVat": 14.44
                    }
                ]
            },
            {
                "subCategoryId": 4,
                "subCategoryName": "Lighting",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-13462",
                        "brand": "Brand A",
                        "description": "Lighting Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 396.15
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 58.58
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 2,
                        "marginValue": 26.19,
                        "sellRate": 32.32,
                        "fees": 41.25,
                        "sellRateWithVat": 21.13
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-94594",
                        "brand": "Brand B",
                        "description": "Lighting Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 435.31
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 1.71
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 2,
                        "marginValue": 22.55,
                        "sellRate": 16.15,
                        "fees": 16.5,
                        "sellRateWithVat": 30.44
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-97897",
                        "brand": "Brand C",
                        "description": "Lighting Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 72.11
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 126.38
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 1,
                        "marginValue": 31.08,
                        "sellRate": 9.01,
                        "fees": 14.83,
                        "sellRateWithVat": 5.59
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-47711",
                        "brand": "Brand D",
                        "description": "Lighting Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 226.95
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 29.35
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 23,
                        "marginValue": 29.96,
                        "sellRate": 18.56,
                        "fees": 43.63,
                        "sellRateWithVat": 35.27
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-46829",
                        "brand": "Brand E",
                        "description": "Lighting Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 220.77
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 10.14
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 392.78
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 28,
                        "marginValue": 33.58,
                        "sellRate": 26.07,
                        "fees": 40.86,
                        "sellRateWithVat": 16.86
                    }
                ]
            }
        ]
    },
    {
        "categoryId": 24,
        "categoryName": "Fitness Equipment",
        "subCategory": [
            {
                "subCategoryId": 0,
                "subCategoryName": "Cardio Equipment",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-96294",
                        "brand": "Brand A",
                        "description": "Cardio Equipment Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 422.73
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 37.86
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 23,
                        "marginValue": 6.82,
                        "sellRate": 13.54,
                        "fees": 6.39,
                        "sellRateWithVat": 9.2
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-8753",
                        "brand": "Brand B",
                        "description": "Cardio Equipment Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 86.53
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 351.5
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 22,
                        "marginValue": 48.51,
                        "sellRate": 31.16,
                        "fees": 36.2,
                        "sellRateWithVat": 45.07
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-80198",
                        "brand": "Brand C",
                        "description": "Cardio Equipment Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 322.04
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 199.08
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 9,
                        "marginValue": 23.81,
                        "sellRate": 3.69,
                        "fees": 26.73,
                        "sellRateWithVat": 23.53
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-81732",
                        "brand": "Brand D",
                        "description": "Cardio Equipment Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 17.73
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 407.53
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 16,
                        "marginValue": 1.33,
                        "sellRate": 2.29,
                        "fees": 6.27,
                        "sellRateWithVat": 18.95
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-6089",
                        "brand": "Brand E",
                        "description": "Cardio Equipment Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 408.76
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 458.45
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 101.62
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 16,
                        "marginValue": 30.66,
                        "sellRate": 24.95,
                        "fees": 14.73,
                        "sellRateWithVat": 43.66
                    }
                ]
            },
            {
                "subCategoryId": 1,
                "subCategoryName": "Strength Training Equipment",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-81559",
                        "brand": "Brand A",
                        "description": "Strength Training Equipment Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 455.34
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 233.03
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 18,
                        "marginValue": 47.41,
                        "sellRate": 33.35,
                        "fees": 22.23,
                        "sellRateWithVat": 43.81
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-6683",
                        "brand": "Brand B",
                        "description": "Strength Training Equipment Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 95.37
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 193.74
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 11,
                        "marginValue": 27.01,
                        "sellRate": 14.37,
                        "fees": 48.06,
                        "sellRateWithVat": 31.36
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-21145",
                        "brand": "Brand C",
                        "description": "Strength Training Equipment Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 382.18
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 23.44
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 25,
                        "marginValue": 5.42,
                        "sellRate": 46.73,
                        "fees": 37.47,
                        "sellRateWithVat": 36.43
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-26107",
                        "brand": "Brand D",
                        "description": "Strength Training Equipment Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 138.22
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 155.14
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 1,
                        "marginValue": 45.66,
                        "sellRate": 40.03,
                        "fees": 18.31,
                        "sellRateWithVat": 27.65
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-38218",
                        "brand": "Brand E",
                        "description": "Strength Training Equipment Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 383.08
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 118.81
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 6.9
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 6,
                        "marginValue": 3.74,
                        "sellRate": 36.15,
                        "fees": 4.17,
                        "sellRateWithVat": 7.13
                    }
                ]
            },
            {
                "subCategoryId": 2,
                "subCategoryName": "Yoga Equipment",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-42713",
                        "brand": "Brand A",
                        "description": "Yoga Equipment Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 129.65
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 411.38
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 14,
                        "marginValue": 2.95,
                        "sellRate": 29.77,
                        "fees": 23.3,
                        "sellRateWithVat": 1.53
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-4986",
                        "brand": "Brand B",
                        "description": "Yoga Equipment Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 46.49
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 255.35
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 14,
                        "marginValue": 8.49,
                        "sellRate": 27.82,
                        "fees": 2.21,
                        "sellRateWithVat": 45.69
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-64063",
                        "brand": "Brand C",
                        "description": "Yoga Equipment Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 186.97
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 106.8
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 26,
                        "marginValue": 17.34,
                        "sellRate": 21.71,
                        "fees": 17.06,
                        "sellRateWithVat": 36.59
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-1640",
                        "brand": "Brand D",
                        "description": "Yoga Equipment Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 97.41
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 175.71
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 19,
                        "marginValue": 28.76,
                        "sellRate": 38.26,
                        "fees": 6.93,
                        "sellRateWithVat": 27.53
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-53563",
                        "brand": "Brand E",
                        "description": "Yoga Equipment Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 9.91
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 187.32
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 166.64
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 19,
                        "marginValue": 18.82,
                        "sellRate": 39.3,
                        "fees": 1.02,
                        "sellRateWithVat": 29.06
                    }
                ]
            },
            {
                "subCategoryId": 3,
                "subCategoryName": "Sports Equipment",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-69923",
                        "brand": "Brand A",
                        "description": "Sports Equipment Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 250.08
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 160.67
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 1,
                        "marginValue": 35.86,
                        "sellRate": 40.71,
                        "fees": 7.51,
                        "sellRateWithVat": 48.87
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-78195",
                        "brand": "Brand B",
                        "description": "Sports Equipment Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 60.84
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 239.06
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 2,
                        "marginValue": 4.54,
                        "sellRate": 2.27,
                        "fees": 8.98,
                        "sellRateWithVat": 1.74
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-24132",
                        "brand": "Brand C",
                        "description": "Sports Equipment Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 62.57
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 60.16
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 9,
                        "marginValue": 46.03,
                        "sellRate": 28.06,
                        "fees": 24.59,
                        "sellRateWithVat": 31.31
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-5762",
                        "brand": "Brand D",
                        "description": "Sports Equipment Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 131.83
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 38.16
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 4,
                        "marginValue": 49.88,
                        "sellRate": 5.83,
                        "fees": 43.26,
                        "sellRateWithVat": 0.01
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-52277",
                        "brand": "Brand E",
                        "description": "Sports Equipment Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 485.54
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 484.36
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 463.79
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 10,
                        "marginValue": 23.41,
                        "sellRate": 10.37,
                        "fees": 31.59,
                        "sellRateWithVat": 24.69
                    }
                ]
            },
            {
                "subCategoryId": 4,
                "subCategoryName": "Exercise Accessories",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-27516",
                        "brand": "Brand A",
                        "description": "Exercise Accessories Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 17.63
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 403.51
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 8,
                        "marginValue": 14.26,
                        "sellRate": 4.69,
                        "fees": 10.22,
                        "sellRateWithVat": 47.93
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-15124",
                        "brand": "Brand B",
                        "description": "Exercise Accessories Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 156.48
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 226.73
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 18,
                        "marginValue": 42.08,
                        "sellRate": 30.92,
                        "fees": 26.63,
                        "sellRateWithVat": 12.22
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-91318",
                        "brand": "Brand C",
                        "description": "Exercise Accessories Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 415.85
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 17.5
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 8,
                        "marginValue": 32.76,
                        "sellRate": 27.99,
                        "fees": 30.02,
                        "sellRateWithVat": 23.9
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-16565",
                        "brand": "Brand D",
                        "description": "Exercise Accessories Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 130.25
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 272.11
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 12,
                        "marginValue": 9.11,
                        "sellRate": 17.5,
                        "fees": 40.39,
                        "sellRateWithVat": 36.72
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-36850",
                        "brand": "Brand E",
                        "description": "Exercise Accessories Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 206.52
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 120.91
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 413.07
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 10,
                        "marginValue": 29.55,
                        "sellRate": 16.7,
                        "fees": 9.5,
                        "sellRateWithVat": 41.97
                    }
                ]
            }
        ]
    },
    {
        "categoryId": 25,
        "categoryName": "Craft Supplies",
        "subCategory": [
            {
                "subCategoryId": 0,
                "subCategoryName": "Sewing Supplies",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-25943",
                        "brand": "Brand A",
                        "description": "Sewing Supplies Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 283.9
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 342.44
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 1,
                        "marginValue": 26.44,
                        "sellRate": 48.57,
                        "fees": 34.38,
                        "sellRateWithVat": 49.29
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-60157",
                        "brand": "Brand B",
                        "description": "Sewing Supplies Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 305.3
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 79.65
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 4,
                        "marginValue": 29.44,
                        "sellRate": 24.89,
                        "fees": 34.1,
                        "sellRateWithVat": 35.47
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-77953",
                        "brand": "Brand C",
                        "description": "Sewing Supplies Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 419.26
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 281.41
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 4,
                        "marginValue": 28.96,
                        "sellRate": 27.89,
                        "fees": 17.78,
                        "sellRateWithVat": 3.64
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-41347",
                        "brand": "Brand D",
                        "description": "Sewing Supplies Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 147.97
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 80.38
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 29,
                        "marginValue": 7.8,
                        "sellRate": 6.88,
                        "fees": 4.25,
                        "sellRateWithVat": 47.45
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-11795",
                        "brand": "Brand E",
                        "description": "Sewing Supplies Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 420.59
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 388.88
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 239.42
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 10,
                        "marginValue": 19.76,
                        "sellRate": 38.05,
                        "fees": 17.82,
                        "sellRateWithVat": 34.21
                    }
                ]
            },
            {
                "subCategoryId": 1,
                "subCategoryName": "Drawing Supplies",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-48569",
                        "brand": "Brand A",
                        "description": "Drawing Supplies Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 280.24
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 56.51
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 24,
                        "marginValue": 13.52,
                        "sellRate": 12.01,
                        "fees": 47.89,
                        "sellRateWithVat": 20.71
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-36084",
                        "brand": "Brand B",
                        "description": "Drawing Supplies Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 51.89
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 9.42
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 13,
                        "marginValue": 45.69,
                        "sellRate": 45.69,
                        "fees": 1.77,
                        "sellRateWithVat": 33.12
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-54210",
                        "brand": "Brand C",
                        "description": "Drawing Supplies Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 399.78
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 45.62
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 1,
                        "marginValue": 10.75,
                        "sellRate": 34.33,
                        "fees": 8.33,
                        "sellRateWithVat": 36.81
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-99612",
                        "brand": "Brand D",
                        "description": "Drawing Supplies Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 46.81
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 469.62
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 24,
                        "marginValue": 26.83,
                        "sellRate": 3.84,
                        "fees": 18.83,
                        "sellRateWithVat": 11.23
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-65563",
                        "brand": "Brand E",
                        "description": "Drawing Supplies Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 218.83
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 44.86
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 338.85
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 12,
                        "marginValue": 32.12,
                        "sellRate": 47.58,
                        "fees": 31.68,
                        "sellRateWithVat": 5.83
                    }
                ]
            },
            {
                "subCategoryId": 2,
                "subCategoryName": "Painting Supplies",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-40691",
                        "brand": "Brand A",
                        "description": "Painting Supplies Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 31.75
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 422.89
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 19,
                        "marginValue": 23.8,
                        "sellRate": 40.96,
                        "fees": 2.45,
                        "sellRateWithVat": 20.46
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-44346",
                        "brand": "Brand B",
                        "description": "Painting Supplies Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 396.84
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 49.15
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 26,
                        "marginValue": 38.85,
                        "sellRate": 30.68,
                        "fees": 32.81,
                        "sellRateWithVat": 5.38
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-46458",
                        "brand": "Brand C",
                        "description": "Painting Supplies Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 441.16
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 223.48
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 3,
                        "marginValue": 6.45,
                        "sellRate": 26.89,
                        "fees": 26.43,
                        "sellRateWithVat": 14.89
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-90873",
                        "brand": "Brand D",
                        "description": "Painting Supplies Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 233.37
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 394.21
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 17,
                        "marginValue": 21.3,
                        "sellRate": 18.13,
                        "fees": 24.3,
                        "sellRateWithVat": 18.54
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-62883",
                        "brand": "Brand E",
                        "description": "Painting Supplies Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 225.56
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 171.56
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 178.05
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 20,
                        "marginValue": 29.62,
                        "sellRate": 16.59,
                        "fees": 38.2,
                        "sellRateWithVat": 2.92
                    }
                ]
            },
            {
                "subCategoryId": 3,
                "subCategoryName": "Knitting & Crocheting Supplies",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-41736",
                        "brand": "Brand A",
                        "description": "Knitting & Crocheting Supplies Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 491.71
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 487.78
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 24,
                        "marginValue": 5.24,
                        "sellRate": 31.23,
                        "fees": 21.66,
                        "sellRateWithVat": 15.64
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-84121",
                        "brand": "Brand B",
                        "description": "Knitting & Crocheting Supplies Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 285.89
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 392.01
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 2,
                        "marginValue": 24.63,
                        "sellRate": 24.22,
                        "fees": 48.07,
                        "sellRateWithVat": 11.13
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-62694",
                        "brand": "Brand C",
                        "description": "Knitting & Crocheting Supplies Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 82.68
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 410.82
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 10,
                        "marginValue": 3.91,
                        "sellRate": 1.67,
                        "fees": 10.11,
                        "sellRateWithVat": 45.63
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-18362",
                        "brand": "Brand D",
                        "description": "Knitting & Crocheting Supplies Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 44.41
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 11.89
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 16,
                        "marginValue": 9.27,
                        "sellRate": 9.01,
                        "fees": 48.33,
                        "sellRateWithVat": 46.4
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-67992",
                        "brand": "Brand E",
                        "description": "Knitting & Crocheting Supplies Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 450.16
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 49.04
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 196.98
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 27,
                        "marginValue": 28.78,
                        "sellRate": 0.5,
                        "fees": 9.67,
                        "sellRateWithVat": 16.29
                    }
                ]
            },
            {
                "subCategoryId": 4,
                "subCategoryName": "DIY Kits",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-92340",
                        "brand": "Brand A",
                        "description": "DIY Kits Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 479.46
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 117.75
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 5,
                        "marginValue": 36.74,
                        "sellRate": 10.12,
                        "fees": 18.37,
                        "sellRateWithVat": 28.04
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-8163",
                        "brand": "Brand B",
                        "description": "DIY Kits Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 201.68
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 70.57
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 1,
                        "marginValue": 31.92,
                        "sellRate": 10.65,
                        "fees": 47.23,
                        "sellRateWithVat": 37.37
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-43006",
                        "brand": "Brand C",
                        "description": "DIY Kits Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 261.36
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 162
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 0,
                        "marginValue": 42.18,
                        "sellRate": 21.31,
                        "fees": 18.39,
                        "sellRateWithVat": 13.61
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-15574",
                        "brand": "Brand D",
                        "description": "DIY Kits Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 108.02
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 250.95
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 4,
                        "marginValue": 28.94,
                        "sellRate": 16.07,
                        "fees": 26.41,
                        "sellRateWithVat": 15.65
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-54193",
                        "brand": "Brand E",
                        "description": "DIY Kits Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 121.03
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 324.7
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 243.61
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 18,
                        "marginValue": 41.29,
                        "sellRate": 36.94,
                        "fees": 46.96,
                        "sellRateWithVat": 6.11
                    }
                ]
            }
        ]
    },
    {
        "categoryId": 26,
        "categoryName": "Photography Equipment",
        "subCategory": [
            {
                "subCategoryId": 0,
                "subCategoryName": "Cameras",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-3541",
                        "brand": "Brand A",
                        "description": "Cameras Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 22.95
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 80.81
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 10,
                        "marginValue": 7.62,
                        "sellRate": 49.12,
                        "fees": 5.29,
                        "sellRateWithVat": 0.6
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-92667",
                        "brand": "Brand B",
                        "description": "Cameras Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 429.13
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 439.08
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 17,
                        "marginValue": 40.51,
                        "sellRate": 2.63,
                        "fees": 44.83,
                        "sellRateWithVat": 32.47
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-76732",
                        "brand": "Brand C",
                        "description": "Cameras Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 452.28
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 42.08
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 25,
                        "marginValue": 32.96,
                        "sellRate": 10.71,
                        "fees": 23.21,
                        "sellRateWithVat": 22.09
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-55189",
                        "brand": "Brand D",
                        "description": "Cameras Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 419.19
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 148.79
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 16,
                        "marginValue": 46.77,
                        "sellRate": 18.37,
                        "fees": 6.22,
                        "sellRateWithVat": 30.35
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-78707",
                        "brand": "Brand E",
                        "description": "Cameras Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 40.31
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 237.06
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 7.1
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 15,
                        "marginValue": 9.76,
                        "sellRate": 26.55,
                        "fees": 43.39,
                        "sellRateWithVat": 34.48
                    }
                ]
            },
            {
                "subCategoryId": 1,
                "subCategoryName": "Lenses",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-94499",
                        "brand": "Brand A",
                        "description": "Lenses Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 314.03
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 15.35
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 28,
                        "marginValue": 36.27,
                        "sellRate": 27.93,
                        "fees": 33.02,
                        "sellRateWithVat": 37.22
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-44054",
                        "brand": "Brand B",
                        "description": "Lenses Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 371.57
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 237.51
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 4,
                        "marginValue": 41.58,
                        "sellRate": 26.59,
                        "fees": 42.11,
                        "sellRateWithVat": 48.97
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-61244",
                        "brand": "Brand C",
                        "description": "Lenses Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 54.18
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 176.42
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 27,
                        "marginValue": 15.94,
                        "sellRate": 2.95,
                        "fees": 7.42,
                        "sellRateWithVat": 47.81
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-29552",
                        "brand": "Brand D",
                        "description": "Lenses Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 133.12
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 232.02
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 25,
                        "marginValue": 39.65,
                        "sellRate": 39,
                        "fees": 19.32,
                        "sellRateWithVat": 1.64
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-60166",
                        "brand": "Brand E",
                        "description": "Lenses Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 8.17
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 444.05
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 270.93
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 16,
                        "marginValue": 10.12,
                        "sellRate": 29.83,
                        "fees": 12.82,
                        "sellRateWithVat": 18.42
                    }
                ]
            },
            {
                "subCategoryId": 2,
                "subCategoryName": "Tripods",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-51345",
                        "brand": "Brand A",
                        "description": "Tripods Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 212.24
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 438.01
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 6,
                        "marginValue": 13.98,
                        "sellRate": 35.72,
                        "fees": 37.97,
                        "sellRateWithVat": 1.23
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-73238",
                        "brand": "Brand B",
                        "description": "Tripods Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 173.93
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 387.21
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 5,
                        "marginValue": 43.87,
                        "sellRate": 34.3,
                        "fees": 3.43,
                        "sellRateWithVat": 17.88
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-3053",
                        "brand": "Brand C",
                        "description": "Tripods Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 100.76
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 188.6
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 1,
                        "marginValue": 30.83,
                        "sellRate": 12.47,
                        "fees": 42.61,
                        "sellRateWithVat": 27.2
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-92121",
                        "brand": "Brand D",
                        "description": "Tripods Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 209.18
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 270.24
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 7,
                        "marginValue": 1.06,
                        "sellRate": 33.91,
                        "fees": 31.01,
                        "sellRateWithVat": 17.75
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-26443",
                        "brand": "Brand E",
                        "description": "Tripods Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 3.63
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 479.16
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 13.83
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 14,
                        "marginValue": 21.89,
                        "sellRate": 26.06,
                        "fees": 36.74,
                        "sellRateWithVat": 4.26
                    }
                ]
            },
            {
                "subCategoryId": 3,
                "subCategoryName": "Lighting Equipment",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-37041",
                        "brand": "Brand A",
                        "description": "Lighting Equipment Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 99.18
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 282.69
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 17,
                        "marginValue": 30.96,
                        "sellRate": 9.23,
                        "fees": 42.03,
                        "sellRateWithVat": 3.65
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-86125",
                        "brand": "Brand B",
                        "description": "Lighting Equipment Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 432.78
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 284.19
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 11,
                        "marginValue": 49.75,
                        "sellRate": 15.8,
                        "fees": 23.5,
                        "sellRateWithVat": 1.64
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-23190",
                        "brand": "Brand C",
                        "description": "Lighting Equipment Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 5.35
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 14.77
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 19,
                        "marginValue": 40.11,
                        "sellRate": 31.33,
                        "fees": 31.13,
                        "sellRateWithVat": 3.3
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-19987",
                        "brand": "Brand D",
                        "description": "Lighting Equipment Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 336.6
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 393.14
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 2,
                        "marginValue": 15.43,
                        "sellRate": 19.32,
                        "fees": 49.12,
                        "sellRateWithVat": 46.55
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-28782",
                        "brand": "Brand E",
                        "description": "Lighting Equipment Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 396.75
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 62.05
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 307.03
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 21,
                        "marginValue": 33.86,
                        "sellRate": 22.59,
                        "fees": 34.32,
                        "sellRateWithVat": 30.08
                    }
                ]
            },
            {
                "subCategoryId": 4,
                "subCategoryName": "Accessories",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-18572",
                        "brand": "Brand A",
                        "description": "Accessories Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 198.59
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 148.95
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 14,
                        "marginValue": 24.21,
                        "sellRate": 39.97,
                        "fees": 25.26,
                        "sellRateWithVat": 16.92
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-87343",
                        "brand": "Brand B",
                        "description": "Accessories Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 203.47
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 150.94
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 8,
                        "marginValue": 48.08,
                        "sellRate": 39.34,
                        "fees": 25.62,
                        "sellRateWithVat": 31.29
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-6744",
                        "brand": "Brand C",
                        "description": "Accessories Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 220.94
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 315.35
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 27,
                        "marginValue": 17.86,
                        "sellRate": 18.04,
                        "fees": 0.55,
                        "sellRateWithVat": 6.09
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-44662",
                        "brand": "Brand D",
                        "description": "Accessories Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 41.36
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 421.79
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 11,
                        "marginValue": 17.87,
                        "sellRate": 30.25,
                        "fees": 10.36,
                        "sellRateWithVat": 15.12
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-83775",
                        "brand": "Brand E",
                        "description": "Accessories Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 364.59
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 86.64
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 277.84
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 1,
                        "marginValue": 46.99,
                        "sellRate": 38.52,
                        "fees": 47.63,
                        "sellRateWithVat": 38.59
                    }
                ]
            }
        ]
    },
    {
        "categoryId": 27,
        "categoryName": "Art Supplies",
        "subCategory": [
            {
                "subCategoryId": 0,
                "subCategoryName": "Drawing Supplies",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-90994",
                        "brand": "Brand A",
                        "description": "Drawing Supplies Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 79.68
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 389.16
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 14,
                        "marginValue": 25.79,
                        "sellRate": 8.55,
                        "fees": 26.29,
                        "sellRateWithVat": 31.61
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-38475",
                        "brand": "Brand B",
                        "description": "Drawing Supplies Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 29.12
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 132.16
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 28,
                        "marginValue": 29.7,
                        "sellRate": 3.14,
                        "fees": 29.71,
                        "sellRateWithVat": 34.62
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-86836",
                        "brand": "Brand C",
                        "description": "Drawing Supplies Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 183.23
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 75.26
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 4,
                        "marginValue": 1.98,
                        "sellRate": 27.43,
                        "fees": 11.7,
                        "sellRateWithVat": 45.33
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-37575",
                        "brand": "Brand D",
                        "description": "Drawing Supplies Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 213.78
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 443.38
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 2,
                        "marginValue": 13.84,
                        "sellRate": 46.13,
                        "fees": 42.74,
                        "sellRateWithVat": 4.86
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-85300",
                        "brand": "Brand E",
                        "description": "Drawing Supplies Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 346.5
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 15.25
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 468.79
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 25,
                        "marginValue": 7.26,
                        "sellRate": 4.19,
                        "fees": 41.39,
                        "sellRateWithVat": 46.83
                    }
                ]
            },
            {
                "subCategoryId": 1,
                "subCategoryName": "Painting Supplies",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-31680",
                        "brand": "Brand A",
                        "description": "Painting Supplies Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 183.24
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 493.64
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 25,
                        "marginValue": 47.6,
                        "sellRate": 28.94,
                        "fees": 8.27,
                        "sellRateWithVat": 24.36
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-2808",
                        "brand": "Brand B",
                        "description": "Painting Supplies Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 355.83
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 403.46
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 3,
                        "marginValue": 15.67,
                        "sellRate": 22.26,
                        "fees": 45.17,
                        "sellRateWithVat": 17.48
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-22479",
                        "brand": "Brand C",
                        "description": "Painting Supplies Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 321.38
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 247.66
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 23,
                        "marginValue": 0.26,
                        "sellRate": 36.77,
                        "fees": 19.74,
                        "sellRateWithVat": 43.16
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-11300",
                        "brand": "Brand D",
                        "description": "Painting Supplies Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 303.71
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 320.58
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 13,
                        "marginValue": 47.65,
                        "sellRate": 37.21,
                        "fees": 26.9,
                        "sellRateWithVat": 48.22
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-85483",
                        "brand": "Brand E",
                        "description": "Painting Supplies Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 275.5
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 351.32
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 171.6
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 15,
                        "marginValue": 3.42,
                        "sellRate": 33.75,
                        "fees": 13.03,
                        "sellRateWithVat": 27.21
                    }
                ]
            },
            {
                "subCategoryId": 2,
                "subCategoryName": "Craft Supplies",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-21516",
                        "brand": "Brand A",
                        "description": "Craft Supplies Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 160.25
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 11.35
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 2,
                        "marginValue": 29.04,
                        "sellRate": 21.02,
                        "fees": 47.67,
                        "sellRateWithVat": 17.93
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-18476",
                        "brand": "Brand B",
                        "description": "Craft Supplies Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 21.15
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 98.37
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 14,
                        "marginValue": 11,
                        "sellRate": 18.23,
                        "fees": 44.8,
                        "sellRateWithVat": 20.11
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-44403",
                        "brand": "Brand C",
                        "description": "Craft Supplies Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 55.17
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 84.28
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 0,
                        "marginValue": 4.62,
                        "sellRate": 23.13,
                        "fees": 13.17,
                        "sellRateWithVat": 43.65
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-8918",
                        "brand": "Brand D",
                        "description": "Craft Supplies Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 223.46
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 123.11
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 8,
                        "marginValue": 48.56,
                        "sellRate": 22.34,
                        "fees": 46.16,
                        "sellRateWithVat": 40.76
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-32048",
                        "brand": "Brand E",
                        "description": "Craft Supplies Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 1.29
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 118.46
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 27.26
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 25,
                        "marginValue": 45.36,
                        "sellRate": 27.69,
                        "fees": 14.76,
                        "sellRateWithVat": 22.02
                    }
                ]
            },
            {
                "subCategoryId": 3,
                "subCategoryName": "Calligraphy Supplies",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-78625",
                        "brand": "Brand A",
                        "description": "Calligraphy Supplies Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 27.13
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 359.3
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 18,
                        "marginValue": 26.88,
                        "sellRate": 16.81,
                        "fees": 24.83,
                        "sellRateWithVat": 28.78
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-42446",
                        "brand": "Brand B",
                        "description": "Calligraphy Supplies Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 487.77
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 454.09
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 11,
                        "marginValue": 20.86,
                        "sellRate": 1.22,
                        "fees": 44.09,
                        "sellRateWithVat": 13.62
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-91984",
                        "brand": "Brand C",
                        "description": "Calligraphy Supplies Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 427.84
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 74.83
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 6,
                        "marginValue": 33.98,
                        "sellRate": 30.45,
                        "fees": 23.23,
                        "sellRateWithVat": 8.69
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-46024",
                        "brand": "Brand D",
                        "description": "Calligraphy Supplies Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 33.62
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 273.72
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 2,
                        "marginValue": 37.14,
                        "sellRate": 9.59,
                        "fees": 4.21,
                        "sellRateWithVat": 9.45
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-58962",
                        "brand": "Brand E",
                        "description": "Calligraphy Supplies Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 403.02
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 40.92
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 24.67
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 29,
                        "marginValue": 16.35,
                        "sellRate": 47.28,
                        "fees": 39.59,
                        "sellRateWithVat": 16.33
                    }
                ]
            },
            {
                "subCategoryId": 4,
                "subCategoryName": "Model Making Supplies",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-76509",
                        "brand": "Brand A",
                        "description": "Model Making Supplies Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 403.03
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 38.92
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 13,
                        "marginValue": 17.21,
                        "sellRate": 37.69,
                        "fees": 11.31,
                        "sellRateWithVat": 34.23
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-547",
                        "brand": "Brand B",
                        "description": "Model Making Supplies Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 121.95
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 470.37
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 7,
                        "marginValue": 5.33,
                        "sellRate": 20.88,
                        "fees": 41.71,
                        "sellRateWithVat": 18.94
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-27539",
                        "brand": "Brand C",
                        "description": "Model Making Supplies Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 157.17
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 467.15
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 15,
                        "marginValue": 4.39,
                        "sellRate": 29.98,
                        "fees": 18.23,
                        "sellRateWithVat": 6.48
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-60768",
                        "brand": "Brand D",
                        "description": "Model Making Supplies Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 348.3
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 432.94
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 8,
                        "marginValue": 47.21,
                        "sellRate": 1.05,
                        "fees": 44.32,
                        "sellRateWithVat": 6.28
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-66092",
                        "brand": "Brand E",
                        "description": "Model Making Supplies Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 285.11
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 415.43
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 334.16
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 1,
                        "marginValue": 49.73,
                        "sellRate": 19.66,
                        "fees": 16.69,
                        "sellRateWithVat": 46.96
                    }
                ]
            }
        ]
    },
    {
        "categoryId": 28,
        "categoryName": "Gaming Consoles",
        "subCategory": [
            {
                "subCategoryId": 0,
                "subCategoryName": "Current Generation Consoles",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-57405",
                        "brand": "Brand A",
                        "description": "Current Generation Consoles Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 380.23
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 489.77
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 6,
                        "marginValue": 41.95,
                        "sellRate": 6.73,
                        "fees": 26.21,
                        "sellRateWithVat": 43.44
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-80214",
                        "brand": "Brand B",
                        "description": "Current Generation Consoles Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 354.63
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 7.54
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 13,
                        "marginValue": 42.56,
                        "sellRate": 15.88,
                        "fees": 46.64,
                        "sellRateWithVat": 27.04
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-66088",
                        "brand": "Brand C",
                        "description": "Current Generation Consoles Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 456.9
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 227.33
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 11,
                        "marginValue": 40.12,
                        "sellRate": 10.55,
                        "fees": 3.13,
                        "sellRateWithVat": 7.87
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-35796",
                        "brand": "Brand D",
                        "description": "Current Generation Consoles Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 215.16
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 47.02
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 22,
                        "marginValue": 14.65,
                        "sellRate": 48.58,
                        "fees": 39.98,
                        "sellRateWithVat": 37.47
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-27775",
                        "brand": "Brand E",
                        "description": "Current Generation Consoles Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 297.67
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 383.55
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 74.33
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 17,
                        "marginValue": 29.06,
                        "sellRate": 40.82,
                        "fees": 31.95,
                        "sellRateWithVat": 0.81
                    }
                ]
            },
            {
                "subCategoryId": 1,
                "subCategoryName": "Retro Consoles",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-25258",
                        "brand": "Brand A",
                        "description": "Retro Consoles Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 436.58
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 387.94
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 13,
                        "marginValue": 13.25,
                        "sellRate": 2.74,
                        "fees": 39.4,
                        "sellRateWithVat": 11.85
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-46232",
                        "brand": "Brand B",
                        "description": "Retro Consoles Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 341.37
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 259.58
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 19,
                        "marginValue": 35.89,
                        "sellRate": 0.34,
                        "fees": 22.83,
                        "sellRateWithVat": 46.28
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-72111",
                        "brand": "Brand C",
                        "description": "Retro Consoles Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 93.62
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 170.08
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 1,
                        "marginValue": 27.91,
                        "sellRate": 43.33,
                        "fees": 4.4,
                        "sellRateWithVat": 38.84
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-54075",
                        "brand": "Brand D",
                        "description": "Retro Consoles Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 84.16
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 251.88
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 14,
                        "marginValue": 33.64,
                        "sellRate": 42.73,
                        "fees": 18.92,
                        "sellRateWithVat": 35.34
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-98137",
                        "brand": "Brand E",
                        "description": "Retro Consoles Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 261.69
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 103.22
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 86.32
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 4,
                        "marginValue": 30.08,
                        "sellRate": 35.4,
                        "fees": 45.77,
                        "sellRateWithVat": 44.75
                    }
                ]
            },
            {
                "subCategoryId": 2,
                "subCategoryName": "Accessories",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-62949",
                        "brand": "Brand A",
                        "description": "Accessories Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 120.33
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 374.41
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 13,
                        "marginValue": 18,
                        "sellRate": 18.3,
                        "fees": 20.2,
                        "sellRateWithVat": 29.03
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-82353",
                        "brand": "Brand B",
                        "description": "Accessories Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 39.23
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 200.73
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 17,
                        "marginValue": 36.65,
                        "sellRate": 19.03,
                        "fees": 46.35,
                        "sellRateWithVat": 0.83
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-13361",
                        "brand": "Brand C",
                        "description": "Accessories Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 436.43
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 472.03
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 1,
                        "marginValue": 38.1,
                        "sellRate": 2.6,
                        "fees": 7.21,
                        "sellRateWithVat": 21.14
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-1254",
                        "brand": "Brand D",
                        "description": "Accessories Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 479.57
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 68.57
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 13,
                        "marginValue": 18.02,
                        "sellRate": 41.4,
                        "fees": 16.33,
                        "sellRateWithVat": 20.47
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-28850",
                        "brand": "Brand E",
                        "description": "Accessories Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 194.45
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 269
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 204.86
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 7,
                        "marginValue": 43.43,
                        "sellRate": 20.31,
                        "fees": 41.11,
                        "sellRateWithVat": 45.98
                    }
                ]
            },
            {
                "subCategoryId": 3,
                "subCategoryName": "Gaming Chairs",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-84199",
                        "brand": "Brand A",
                        "description": "Gaming Chairs Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 158.73
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 63
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 2,
                        "marginValue": 48.13,
                        "sellRate": 8.95,
                        "fees": 36.07,
                        "sellRateWithVat": 25.72
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-62817",
                        "brand": "Brand B",
                        "description": "Gaming Chairs Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 318.82
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 306.13
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 2,
                        "marginValue": 43.21,
                        "sellRate": 11.52,
                        "fees": 27.37,
                        "sellRateWithVat": 46.64
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-15953",
                        "brand": "Brand C",
                        "description": "Gaming Chairs Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 364.65
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 477.67
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 22,
                        "marginValue": 32.4,
                        "sellRate": 31.14,
                        "fees": 11.43,
                        "sellRateWithVat": 13.5
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-30933",
                        "brand": "Brand D",
                        "description": "Gaming Chairs Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 473.29
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 458.89
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 1,
                        "marginValue": 4.21,
                        "sellRate": 27.3,
                        "fees": 33.01,
                        "sellRateWithVat": 33.94
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-58716",
                        "brand": "Brand E",
                        "description": "Gaming Chairs Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 480.52
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 223.5
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 178.27
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 17,
                        "marginValue": 29.33,
                        "sellRate": 12.92,
                        "fees": 17.99,
                        "sellRateWithVat": 11.61
                    }
                ]
            },
            {
                "subCategoryId": 4,
                "subCategoryName": "Streaming Equipment",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-48746",
                        "brand": "Brand A",
                        "description": "Streaming Equipment Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 226.28
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 293.41
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 20,
                        "marginValue": 0.14,
                        "sellRate": 25.51,
                        "fees": 40.93,
                        "sellRateWithVat": 4.62
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-93487",
                        "brand": "Brand B",
                        "description": "Streaming Equipment Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 398.25
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 472.84
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 9,
                        "marginValue": 8.11,
                        "sellRate": 15.7,
                        "fees": 46.72,
                        "sellRateWithVat": 38.89
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-7838",
                        "brand": "Brand C",
                        "description": "Streaming Equipment Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 167.08
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 292.42
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 16,
                        "marginValue": 8.93,
                        "sellRate": 38.38,
                        "fees": 11.17,
                        "sellRateWithVat": 12.38
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-79906",
                        "brand": "Brand D",
                        "description": "Streaming Equipment Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 345.54
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 226.56
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 3,
                        "marginValue": 5.28,
                        "sellRate": 7.46,
                        "fees": 45.92,
                        "sellRateWithVat": 41.94
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-85940",
                        "brand": "Brand E",
                        "description": "Streaming Equipment Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 194.86
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 489.79
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 270.78
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 7,
                        "marginValue": 34.53,
                        "sellRate": 49.23,
                        "fees": 26.84,
                        "sellRateWithVat": 41.27
                    }
                ]
            }
        ]
    },
    {
        "categoryId": 29,
        "categoryName": "Smart Home Devices",
        "subCategory": [
            {
                "subCategoryId": 0,
                "subCategoryName": "Smart Speakers",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-16860",
                        "brand": "Brand A",
                        "description": "Smart Speakers Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 486.43
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 455.67
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 24,
                        "marginValue": 18.03,
                        "sellRate": 1.65,
                        "fees": 7.21,
                        "sellRateWithVat": 13.99
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-68300",
                        "brand": "Brand B",
                        "description": "Smart Speakers Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 304.69
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 294.91
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 29,
                        "marginValue": 23.41,
                        "sellRate": 20.64,
                        "fees": 31.35,
                        "sellRateWithVat": 4.96
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-93170",
                        "brand": "Brand C",
                        "description": "Smart Speakers Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 54.52
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 451.18
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 6,
                        "marginValue": 48.89,
                        "sellRate": 28.73,
                        "fees": 44.64,
                        "sellRateWithVat": 13.5
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-91049",
                        "brand": "Brand D",
                        "description": "Smart Speakers Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 171.79
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 456.81
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 6,
                        "marginValue": 49.67,
                        "sellRate": 4.67,
                        "fees": 30.76,
                        "sellRateWithVat": 16.42
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-9247",
                        "brand": "Brand E",
                        "description": "Smart Speakers Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 50.49
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 297.57
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 56.72
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 8,
                        "marginValue": 15.08,
                        "sellRate": 45.28,
                        "fees": 30.64,
                        "sellRateWithVat": 39.68
                    }
                ]
            },
            {
                "subCategoryId": 1,
                "subCategoryName": "Smart Lights",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-33637",
                        "brand": "Brand A",
                        "description": "Smart Lights Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 36.41
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 407.97
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 29,
                        "marginValue": 39.66,
                        "sellRate": 43.45,
                        "fees": 46.29,
                        "sellRateWithVat": 36.99
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-72858",
                        "brand": "Brand B",
                        "description": "Smart Lights Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 56.33
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 22.89
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 11,
                        "marginValue": 12.15,
                        "sellRate": 41.52,
                        "fees": 16.28,
                        "sellRateWithVat": 45.06
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-75340",
                        "brand": "Brand C",
                        "description": "Smart Lights Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 375.22
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 13.01
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 23,
                        "marginValue": 12.16,
                        "sellRate": 28.57,
                        "fees": 8.23,
                        "sellRateWithVat": 5.44
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-41958",
                        "brand": "Brand D",
                        "description": "Smart Lights Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 158.73
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 424.01
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 16,
                        "marginValue": 37.09,
                        "sellRate": 28.17,
                        "fees": 41.31,
                        "sellRateWithVat": 9.99
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-24339",
                        "brand": "Brand E",
                        "description": "Smart Lights Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 40.83
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 441.61
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 45.41
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 9,
                        "marginValue": 30.06,
                        "sellRate": 33.68,
                        "fees": 4.94,
                        "sellRateWithVat": 31.36
                    }
                ]
            },
            {
                "subCategoryId": 2,
                "subCategoryName": "Smart Thermostats",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-16726",
                        "brand": "Brand A",
                        "description": "Smart Thermostats Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 58.07
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 30.37
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 25,
                        "marginValue": 9.76,
                        "sellRate": 6.23,
                        "fees": 36.45,
                        "sellRateWithVat": 22.43
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-10992",
                        "brand": "Brand B",
                        "description": "Smart Thermostats Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 493.29
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 12.25
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 23,
                        "marginValue": 15.35,
                        "sellRate": 8.02,
                        "fees": 43.63,
                        "sellRateWithVat": 19.83
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-6484",
                        "brand": "Brand C",
                        "description": "Smart Thermostats Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 330.78
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 386.14
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 21,
                        "marginValue": 18.07,
                        "sellRate": 37.16,
                        "fees": 2.19,
                        "sellRateWithVat": 22
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-54866",
                        "brand": "Brand D",
                        "description": "Smart Thermostats Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 412.9
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 356.01
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 20,
                        "marginValue": 39.33,
                        "sellRate": 38.96,
                        "fees": 0.07,
                        "sellRateWithVat": 45.94
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-81838",
                        "brand": "Brand E",
                        "description": "Smart Thermostats Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 341.35
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 423.98
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 119.4
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 4,
                        "marginValue": 2.7,
                        "sellRate": 18.39,
                        "fees": 48.53,
                        "sellRateWithVat": 18.66
                    }
                ]
            },
            {
                "subCategoryId": 3,
                "subCategoryName": "Smart Security Cameras",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-45659",
                        "brand": "Brand A",
                        "description": "Smart Security Cameras Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 439.28
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 2.8
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 4,
                        "marginValue": 28.37,
                        "sellRate": 0.36,
                        "fees": 10.81,
                        "sellRateWithVat": 40.88
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-44548",
                        "brand": "Brand B",
                        "description": "Smart Security Cameras Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 269.93
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 15.87
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 9,
                        "marginValue": 14.14,
                        "sellRate": 36.99,
                        "fees": 14.76,
                        "sellRateWithVat": 18.07
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-76004",
                        "brand": "Brand C",
                        "description": "Smart Security Cameras Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 45.06
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 34.37
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 4,
                        "marginValue": 4.2,
                        "sellRate": 29.73,
                        "fees": 34.67,
                        "sellRateWithVat": 7.17
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-71974",
                        "brand": "Brand D",
                        "description": "Smart Security Cameras Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 100.5
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 184.17
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 12,
                        "marginValue": 29.53,
                        "sellRate": 42.85,
                        "fees": 19.4,
                        "sellRateWithVat": 13.42
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-65918",
                        "brand": "Brand E",
                        "description": "Smart Security Cameras Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 169.72
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 59.02
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 188.83
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 7,
                        "marginValue": 17.64,
                        "sellRate": 29,
                        "fees": 36.42,
                        "sellRateWithVat": 4.61
                    }
                ]
            },
            {
                "subCategoryId": 4,
                "subCategoryName": "Smart Plugs",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-79660",
                        "brand": "Brand A",
                        "description": "Smart Plugs Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 62.66
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 418.17
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 15,
                        "marginValue": 8.19,
                        "sellRate": 9.16,
                        "fees": 39.98,
                        "sellRateWithVat": 1.96
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-60866",
                        "brand": "Brand B",
                        "description": "Smart Plugs Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 21.64
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 78.22
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 2,
                        "marginValue": 48.72,
                        "sellRate": 45.96,
                        "fees": 16.11,
                        "sellRateWithVat": 28.34
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-56141",
                        "brand": "Brand C",
                        "description": "Smart Plugs Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 213.5
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 267.39
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 19,
                        "marginValue": 43.3,
                        "sellRate": 37.75,
                        "fees": 35.16,
                        "sellRateWithVat": 18.37
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-27024",
                        "brand": "Brand D",
                        "description": "Smart Plugs Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 302.74
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 44.21
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 29,
                        "marginValue": 44.71,
                        "sellRate": 20.16,
                        "fees": 27.83,
                        "sellRateWithVat": 39.52
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-61268",
                        "brand": "Brand E",
                        "description": "Smart Plugs Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 70.91
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 195
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 449.17
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 25,
                        "marginValue": 39.54,
                        "sellRate": 31.26,
                        "fees": 9.65,
                        "sellRateWithVat": 21.8
                    }
                ]
            }
        ]
    },
    {
        "categoryId": 30,
        "categoryName": "Cooking Utensils",
        "subCategory": [
            {
                "subCategoryId": 0,
                "subCategoryName": "Cutlery",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-96896",
                        "brand": "Brand A",
                        "description": "Cutlery Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 219.03
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 153.6
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 20,
                        "marginValue": 4.98,
                        "sellRate": 28.12,
                        "fees": 34.53,
                        "sellRateWithVat": 48.9
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-39374",
                        "brand": "Brand B",
                        "description": "Cutlery Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 108.4
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 300.84
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 10,
                        "marginValue": 27.83,
                        "sellRate": 11,
                        "fees": 0.29,
                        "sellRateWithVat": 45.62
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-50313",
                        "brand": "Brand C",
                        "description": "Cutlery Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 200.98
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 416.62
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 21,
                        "marginValue": 1,
                        "sellRate": 32.97,
                        "fees": 17.04,
                        "sellRateWithVat": 26.36
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-80131",
                        "brand": "Brand D",
                        "description": "Cutlery Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 108.93
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 339.97
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 2,
                        "marginValue": 37.84,
                        "sellRate": 41.34,
                        "fees": 27.52,
                        "sellRateWithVat": 3.1
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-1493",
                        "brand": "Brand E",
                        "description": "Cutlery Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 257.34
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 353.81
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 303.76
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 13,
                        "marginValue": 25.33,
                        "sellRate": 9.47,
                        "fees": 34.48,
                        "sellRateWithVat": 5.92
                    }
                ]
            },
            {
                "subCategoryId": 1,
                "subCategoryName": "Cookware",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-75409",
                        "brand": "Brand A",
                        "description": "Cookware Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 447.35
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 417.25
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 28,
                        "marginValue": 41.07,
                        "sellRate": 31.77,
                        "fees": 20.97,
                        "sellRateWithVat": 35.79
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-49947",
                        "brand": "Brand B",
                        "description": "Cookware Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 424.36
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 294.37
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 13,
                        "marginValue": 43.89,
                        "sellRate": 0.86,
                        "fees": 23.11,
                        "sellRateWithVat": 16.66
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-34800",
                        "brand": "Brand C",
                        "description": "Cookware Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 281.63
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 377.03
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 25,
                        "marginValue": 43.86,
                        "sellRate": 4.42,
                        "fees": 43.75,
                        "sellRateWithVat": 38.36
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-36895",
                        "brand": "Brand D",
                        "description": "Cookware Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 357.26
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 263.57
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 18,
                        "marginValue": 4.08,
                        "sellRate": 41.36,
                        "fees": 0.4,
                        "sellRateWithVat": 9.26
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-20677",
                        "brand": "Brand E",
                        "description": "Cookware Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 194.49
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 439.91
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 28.99
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 28,
                        "marginValue": 46.79,
                        "sellRate": 15.01,
                        "fees": 1.25,
                        "sellRateWithVat": 3.97
                    }
                ]
            },
            {
                "subCategoryId": 2,
                "subCategoryName": "Baking Tools",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-56870",
                        "brand": "Brand A",
                        "description": "Baking Tools Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 333.77
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 79.56
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 1,
                        "marginValue": 8.36,
                        "sellRate": 49.07,
                        "fees": 45.34,
                        "sellRateWithVat": 21.67
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-47527",
                        "brand": "Brand B",
                        "description": "Baking Tools Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 398.16
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 200.98
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 22,
                        "marginValue": 1.4,
                        "sellRate": 10.48,
                        "fees": 12.13,
                        "sellRateWithVat": 30.86
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-54270",
                        "brand": "Brand C",
                        "description": "Baking Tools Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 263.55
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 172.3
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 2,
                        "marginValue": 45.25,
                        "sellRate": 20.66,
                        "fees": 19.14,
                        "sellRateWithVat": 19.11
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-12293",
                        "brand": "Brand D",
                        "description": "Baking Tools Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 431.55
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 479.86
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 1,
                        "marginValue": 46.33,
                        "sellRate": 5.64,
                        "fees": 12.42,
                        "sellRateWithVat": 30.07
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-38597",
                        "brand": "Brand E",
                        "description": "Baking Tools Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 25.1
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 202.58
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 59.63
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 9,
                        "marginValue": 48.66,
                        "sellRate": 27.76,
                        "fees": 47.14,
                        "sellRateWithVat": 4.7
                    }
                ]
            },
            {
                "subCategoryId": 3,
                "subCategoryName": "Gadgets",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-8599",
                        "brand": "Brand A",
                        "description": "Gadgets Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 144.04
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 404.16
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 11,
                        "marginValue": 8.53,
                        "sellRate": 33.14,
                        "fees": 22.15,
                        "sellRateWithVat": 1.97
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-51702",
                        "brand": "Brand B",
                        "description": "Gadgets Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 379.72
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 267.65
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 11,
                        "marginValue": 10.46,
                        "sellRate": 3.14,
                        "fees": 48.88,
                        "sellRateWithVat": 19.7
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-6067",
                        "brand": "Brand C",
                        "description": "Gadgets Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 248.27
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 52.01
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 29,
                        "marginValue": 46.56,
                        "sellRate": 16.92,
                        "fees": 38.59,
                        "sellRateWithVat": 8.25
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-49391",
                        "brand": "Brand D",
                        "description": "Gadgets Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 154.92
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 65.19
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 25,
                        "marginValue": 49.71,
                        "sellRate": 48.59,
                        "fees": 15.19,
                        "sellRateWithVat": 39.9
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-78689",
                        "brand": "Brand E",
                        "description": "Gadgets Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 456.25
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 130.31
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 486.77
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 14,
                        "marginValue": 21.26,
                        "sellRate": 26.27,
                        "fees": 5.51,
                        "sellRateWithVat": 9.81
                    }
                ]
            },
            {
                "subCategoryId": 4,
                "subCategoryName": "Storage Containers",
                "productList": [
                    {
                        "productId": 0,
                        "sku": "SKU-71924",
                        "brand": "Brand A",
                        "description": "Storage Containers Product 1",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 318.53
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 302.13
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 26,
                        "marginValue": 23.96,
                        "sellRate": 34.01,
                        "fees": 14.22,
                        "sellRateWithVat": 11.47
                    },
                    {
                        "productId": 1,
                        "sku": "SKU-90563",
                        "brand": "Brand B",
                        "description": "Storage Containers Product 2",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 153.58
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 26.65
                            }
                        ],
                        "marginIndicator": "low",
                        "margin": 22,
                        "marginValue": 19.09,
                        "sellRate": 47.96,
                        "fees": 33.2,
                        "sellRateWithVat": 33.65
                    },
                    {
                        "productId": 2,
                        "sku": "SKU-77447",
                        "brand": "Brand C",
                        "description": "Storage Containers Product 3",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 52.1
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 453.1
                            }
                        ],
                        "marginIndicator": "high",
                        "margin": 12,
                        "marginValue": 4.38,
                        "sellRate": 28.88,
                        "fees": 46.5,
                        "sellRateWithVat": 19.24
                    },
                    {
                        "productId": 3,
                        "sku": "SKU-67702",
                        "brand": "Brand D",
                        "description": "Storage Containers Product 4",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier Z",
                                "cost": 433.63
                            },
                            {
                                "id": 1,
                                "name": "Supplier W",
                                "cost": 114.15
                            }
                        ],
                        "marginIndicator": "medium",
                        "margin": 19,
                        "marginValue": 48.45,
                        "sellRate": 33.67,
                        "fees": 3.93,
                        "sellRateWithVat": 15.8
                    },
                    {
                        "productId": 4,
                        "sku": "SKU-83044",
                        "brand": "Brand E",
                        "description": "Storage Containers Product 5",
                        "cheapestSupplier": [
                            {
                                "id": 0,
                                "name": "Supplier X",
                                "cost": 299
                            },
                            {
                                "id": 1,
                                "name": "Supplier Y",
                                "cost": 231.76
                            },
                            {
                                "id": 2,
                                "name": "Supplier z",
                                "cost": 406.58
                            }
                        ],
                        "marginIndicator": "equal",
                        "margin": 24,
                        "marginValue": 49.88,
                        "sellRate": 1.11,
                        "fees": 48.17,
                        "sellRateWithVat": 39.84
                    }
                ]
            }
        ]
    }
]


const tableConfigurationData: TableConfigData = {
    isBorder: true,
    paginationData: {
        enablePagination: true,
        data: {
            pageIndex: 1,
            pageSize: 10,
            autoResetPageIndex: true
        }

    }
};

interface SubcategoryData {
    [category: string]: string[]; // Each category maps to an array of subcategory strings
}

// Generate data for 10 sampleCategories
const sampleCategories = [
    "All Categories",
    "Electronics",
    "Furniture",
    "Clothing",
    "Books",
    "Toys",
    "Sports Equipment",
    "Home Appliances",
    "Beauty Products",
    "Automotive",
    "Jewelry",
    "Garden Supplies",
    "Tools",
    "Stationery",
    "Pet Supplies",
    "Video Games",
    "Musical Instruments",
    "Office Supplies",
    "Health Supplements",
    "Grocery",
    "Baby Products",
    "Travel Accessories",
    "Watches",
    "Outdoor Gear",
    "Camping Equipment",
    "Fitness Equipment",
    "Craft Supplies",
    "Photography Equipment",
    "Art Supplies",
    "Gaming Consoles",
    "Smart Home Devices",
    "Cooking Utensils",
];

const sampleSubCategories: SubcategoryData = {
    "All Categories": ["All Sub-Categories"],
    "Electronics": [
        "All Sub-Categories",
        "Mobile Phones",
        "Laptops",
        "Tablets",
        "Cameras",
        "Audio Devices"
    ],
    "Furniture": [
        "All Sub-Categories",
        "Living Room Furniture",
        "Bedroom Furniture",
        "Office Furniture",
        "Outdoor Furniture",
        "Storage Solutions"
    ],
    "Clothing": [
        "All Sub-Categories",
        "Men's Clothing",
        "Women's Clothing",
        "Children's Clothing",
        "Activewear",
        "Accessories"
    ],
    "Books": [
        "All Sub-Categories",
        "Fiction",
        "Non-Fiction",
        "Children's Books",
        "Textbooks",
        "E-books"
    ],
    "Toys": [
        "All Sub-Categories",
        "Action Figures",
        "Educational Toys",
        "Board Games",
        "Outdoor Toys",
        "Dolls"
    ],
    "Sports Equipment": [
        "All Sub-Categories",
        "Fitness Equipment",
        "Team Sports Gear",
        "Outdoor Sports Gear",
        "Water Sports Equipment",
        "Biking Gear"
    ],
    "Home Appliances": [
        "All Sub-Categories",
        "Kitchen Appliances",
        "Cleaning Appliances",
        "Laundry Appliances",
        "Heating & Cooling Appliances",
        "Smart Appliances"
    ],
    "Beauty Products": [
        "All Sub-Categories",
        "Skincare",
        "Makeup",
        "Haircare",
        "Fragrance",
        "Nail Care"
    ],
    "Automotive": [
        "All Sub-Categories",
        "Car Accessories",
        "Motorcycle Accessories",
        "Tools & Equipment",
        "Car Care Products",
        "Tires & Wheels"
    ],
    "Jewelry": [
        "All Sub-Categories",
        "Necklaces",
        "Bracelets",
        "Rings",
        "Earrings",
        "Watches"
    ],
    "Garden Supplies": [
        "All Sub-Categories",
        "Plants",
        "Gardening Tools",
        "Outdoor Furniture",
        "Decor",
        "Pest Control"
    ],
    "Tools": [
        "All Sub-Categories",
        "Power Tools",
        "Hand Tools",
        "Tool Storage",
        "Workbenches",
        "Measuring Tools"
    ],
    "Stationery": [
        "All Sub-Categories",
        "Writing Supplies",
        "Office Supplies",
        "Notebooks",
        "Art Supplies",
        "Calendars"
    ],
    "Pet Supplies": [
        "All Sub-Categories",
        "Dog Supplies",
        "Cat Supplies",
        "Bird Supplies",
        "Small Animal Supplies",
        "Fish Supplies"
    ],
    "Video Games": [
        "All Sub-Categories",
        "Consoles",
        "Games",
        "Accessories",
        "VR Equipment",
        "Gaming Chairs"
    ],
    "Musical Instruments": [
        "All Sub-Categories",
        "Guitars",
        "Keyboards",
        "Drums",
        "Wind Instruments",
        "Accessories"
    ],
    "Office Supplies": [
        "All Sub-Categories",
        "Paper",
        "Writing Instruments",
        "Desk Accessories",
        "Storage Solutions",
        "Technology"
    ],
    "Health Supplements": [
        "All Sub-Categories",
        "Vitamins",
        "Minerals",
        "Herbal Supplements",
        "Protein Supplements",
        "Dietary Supplements"
    ],
    "Grocery": [
        "All Sub-Categories",
        "Fruits & Vegetables",
        "Meat & Seafood",
        "Dairy",
        "Snacks",
        "Beverages"
    ],
    "Baby Products": [
        "All Sub-Categories",
        "Clothing",
        "Toys",
        "Feeding",
        "Diapering",
        "Safety"
    ],
    "Travel Accessories": [
        "All Sub-Categories",
        "Luggage",
        "Travel Organizers",
        "Travel Gadgets",
        "Comfort Accessories",
        "Travel Guides"
    ],
    "Watches": [
        "All Sub-Categories",
        "Luxury Watches",
        "Smart Watches",
        "Sports Watches",
        "Fashion Watches",
        "Kids Watches"
    ],
    "Outdoor Gear": [
        "All Sub-Categories",
        "Camping Gear",
        "Hiking Gear",
        "Fishing Gear",
        "Biking Gear",
        "Climbing Gear"
    ],
    "Camping Equipment": [
        "All Sub-Categories",
        "Tents",
        "Sleeping Gear",
        "Cooking Gear",
        "Outdoor Furniture",
        "Lighting"
    ],
    "Fitness Equipment": [
        "All Sub-Categories",
        "Cardio Equipment",
        "Strength Training Equipment",
        "Yoga Equipment",
        "Sports Equipment",
        "Exercise Accessories"
    ],
    "Craft Supplies": [
        "All Sub-Categories",
        "Sewing Supplies",
        "Drawing Supplies",
        "Painting Supplies",
        "Knitting & Crocheting Supplies",
        "DIY Kits"
    ],
    "Photography Equipment": [
        "All Sub-Categories",
        "Cameras",
        "Lenses",
        "Tripods",
        "Lighting Equipment",
        "Accessories"
    ],
    "Art Supplies": [
        "All Sub-Categories",
        "Drawing Supplies",
        "Painting Supplies",
        "Craft Supplies",
        "Calligraphy Supplies",
        "Model Making Supplies"
    ],
    "Gaming Consoles": [
        "All Sub-Categories",
        "Current Generation Consoles",
        "Retro Consoles",
        "Accessories",
        "Gaming Chairs",
        "Streaming Equipment"
    ],
    "Smart Home Devices": [
        "All Sub-Categories",
        "Smart Speakers",
        "Smart Lights",
        "Smart Thermostats",
        "Smart Security Cameras",
        "Smart Plugs"
    ],
    "Cooking Utensils": [
        "All Sub-Categories",
        "Cutlery",
        "Cookware",
        "Baking Tools",
        "Gadgets",
        "Storage Containers"
    ]
}

export const ProductTable = () => {



    const [originalProductsData, setOriginalProductsData] = useState<ProductData[]>([])
    const [modifiedProductsData, setModifiedProductsData] = useState<ProductList[]>([])
    const [tableColumnsData, setTableColumnsData] = useState<CustomColumnDef<Record<string, unknown>, unknown>[]>([]);
    const [tableData, setTableData] = useState<Record<string, unknown>[]>([]);
    const [tableConfigData, setTableConfigData] = useState<TableConfigData>({});

    const [categoryList, setCategoryList] = useState<string[]>([])
    const [selectedCategory, setSelectedCategory] = useState<string>("All Categories")

    const [subCategoryList, setSubCategoryList] = useState<string[]>([])
    const [selectedSubCategory, setSelectedSubCategory] = useState<string>("All Sub-Categories")

    const [searchValue, setSearchValue] = useState<string>("")

    useEffect(() => {

        setOriginalProductsData(productList)

        const modifiedProductList = flattenProductList(productList)

        setModifiedProductsData(modifiedProductList)
        setTableData(modifiedProductList)
        setTableConfigData(tableConfigurationData)
        setTableColumnsData(productTableColumns)

        setCategoryList(sampleCategories)

        setSubCategoryList(sampleSubCategories[sampleCategories[0]])

    }, [])

    // Flatten ProductList from ProductData
    const flattenProductList = (data: ProductData[]): ProductList[] => {
        const flattenedProducts: ProductList[] = [];

        data.forEach(category => {
            category.subCategory.forEach(subCat => {
                subCat.productList.forEach(product => {
                    flattenedProducts.push(product);
                });
            });
        });

        return flattenedProducts;
    };

    const productTableColumns: CustomColumnDef<Record<string, unknown>, unknown>[] = [
        { header: 'SKU', accessorKey: 'sku', type: 'string', },
        { header: 'Brand', accessorKey: 'brand', type: 'string', },
        { header: 'Product Description', accessorKey: 'description', type: 'string', },
        {
            header: 'Cheapest Supplier', accessorKey: 'cheapestSupplier', cssClass: ' bg-[#F4F8FF]',
            cell: info => {
                const suppliers = info.getValue() as CheapestSupplier[];
                return (
                    // suppliers.map(supplier => (
                    //     <div key={supplier.id}>
                    //         {supplier.name} - £{supplier.cost.toFixed(2)}
                    //     </div>
                    // ))
                    <div>
                        {
                            suppliers.length > 0
                                ?
                                <div className="flex flex-row gap-3 w-56 text-left">
                                    <div className="w-32">
                                        {suppliers[0].name} - £{suppliers[0].cost.toFixed(2)}
                                    </div>
                                    {
                                        suppliers.length > 1 ?
                                            <div className="w-24 text-ellipsis text-right">view {suppliers.length - 1} others</div>
                                            :
                                            <div className="w-24 text-center">N/A</div>
                                    }
                                </div>
                                :
                                <div className="flex flex-row gap-3 w-56 text-right">
                                    N/A
                                </div>
                        }
                        {/* {
                            suppliers.length > 0
                                ?
                                <div>
                                    <div key={suppliers[0].id}>
                                        {suppliers[0].name} - £{suppliers[0].cost.toFixed(2)}
                                    </div>
                                    

                                </div>
                                : <div key={suppliers[0].id}>
                                    {suppliers[0].name} - £{suppliers[0].cost.toFixed(2)}
                                </div>
                        } */}
                    </div>
                )
                // if (suppliers.length > 0) {
                //     return suppliers.map(supplier => (
                //         <div key={supplier.id}>
                //             {supplier.name} - £{supplier.cost.toFixed(2)}
                //         </div>
                //     ));
                // } else {
                //     return <div>
                //         N/A
                //     </div>;
                // }
            },


        },
        { header: 'Margin', accessorKey: 'margin', type: 'number', },
        { header: 'Margin Value', accessorKey: 'marginValue', type: 'number', },
        { header: 'Sell Rate', accessorKey: 'sellRate', type: 'number', },
        { header: 'Fees', accessorKey: 'fees', type: 'number', },
        { header: 'Sale Rate inc VAT', accessorKey: 'sellRateWithVat', type: 'number', },
    ]

    const handleCategoryChange = (value: string) => {
        setSelectedCategory(value)
        console.log("cat before sampleSubCategories[value]: ", sampleSubCategories[value])

        // const updatedSubCategoryList = [...sampleSubCategories[value]]

        const updatedSubCategoryList = sampleSubCategories[value] || [];

        console.log("cat updatedSubCategoryList: ", updatedSubCategoryList)
        console.log("cat updatedSubCategoryList[1]: ", updatedSubCategoryList[0])
        console.log("cat after sampleSubCategories[value][1]: ", sampleSubCategories[value][0])

        setSubCategoryList(updatedSubCategoryList)

        if (updatedSubCategoryList.length > 0) {
            setSelectedSubCategory(updatedSubCategoryList[0]);
        } else {
            // Optionally reset selected subcategory if no subcategories exist
            setSelectedSubCategory("");
        }

        // // setSubCategoryList(sampleSubCategories[value])

        // setSelectedSubCategory(updatedSubCategoryList[0])
        // // setSelectedSubCategory(sampleSubCategories[value][1])
        updateTableData(searchValue, value, selectedSubCategory);

    }

    const handleSubCategoryChange = (value: string) => {
        setSelectedSubCategory(value)
        updateTableData(searchValue, selectedCategory, value);

    }

    const handleSearchChange = (value: string) => {
        // setsear

        setSearchValue(value)
        updateTableData(value, selectedCategory, selectedSubCategory)

    }


    const updateTableData = (searchData: string, categoryData: string, subCategoryData: string) => {

        console.log("inside updateTableData: ", searchData)

        console.log("inside searchData: ", searchData)
        console.log("inside categoryData: ", categoryData)
        console.log("inside subCategoryData: ", subCategoryData)


        let filteredProducts: ProductList[] = [];
        const initialProductData = [...originalProductsData]

        // if (searchData=="", )


        if (categoryData) {
            let categoryList: ProductData[] = [...initialProductData]
            if (categoryData == "All Categories") {
                const modifiedProductList = flattenProductList(categoryList)
                filteredProducts = modifiedProductList
            } else {

                categoryList = initialProductData.filter(product =>
                    product.categoryName.toLowerCase().includes(categoryData.toLowerCase())
                );

            }
            if (subCategoryData) {
                if (subCategoryData == "All Sub-Categories") {
                    const modifiedProductList = flattenProductList(categoryList)
                    filteredProducts = modifiedProductList
                } else {
                    const subCategoryList = categoryList[0].subCategory.filter((subCategoryItem) => subCategoryItem.subCategoryName.toLowerCase().includes(subCategoryData.toLowerCase()))

                    filteredProducts = subCategoryList[0].productList
                }

            } else {
                const modifiedProductList = flattenProductList(categoryList)
                filteredProducts = modifiedProductList
            }


        } else {
            filteredProducts = [...modifiedProductsData]
        }

        // Perform the search on the filtered products
        if (searchData) {
            filteredProducts = filteredProducts.filter(product =>
                product.sku.toLowerCase().includes(searchData.toLowerCase()) ||
                product.description.toLowerCase().includes(searchData.toLowerCase())
            );
        }

        console.log("inside filteredProducts: ", filteredProducts)

        setTableData(filteredProducts)
    }


    {
        console.log("sel selectedCategory: ", selectedCategory)
        console.log("sel categoryList: ", categoryList)
        console.log("sel subCategoryList: ", subCategoryList)
        console.log("sel selectedSubCategory: ", selectedSubCategory)
    }

    return (
        <div className="p-2">
            < div className="m-2 flex flex-row gap-3 " >
                <input
                    value={searchValue}
                    className="h-7 w-[229px] p-[9px_8px] rounded-[2px] border border-[#A6A6A6] bg-white"
                    type="search"
                    placeholder="Search"
                    onChange={(event) => handleSearchChange(event.target.value)}
                ></input>

                <div className="h-7 flex w-[188px] p-4 justify-between items-center flex-shrink-0 font-inter text-[14px] font-normal leading-[150%] tracking-[-0.154px] bg-white rounded-[4px]">

                    <Select
                        defaultValue={selectedCategory}
                        value={selectedCategory}
                        onValueChange={(value) => {
                            handleCategoryChange(value)
                        }}
                    >
                        <SelectTrigger className="flex items-center gap-[14px] p-1 rounded-l-[4px] rounded-r-none border border-[#B3B3B3] bg-[#FFF]" >
                            <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                            {
                                categoryList.map((categoryItem, index) => {
                                    return (
                                        <SelectItem key={index} value={categoryItem} className={`${categoryItem == selectedCategory ? "font-semibold " : ""}`}>{categoryItem}</SelectItem>
                                    )
                                })
                            }
                        </SelectContent>
                    </Select>
                </div>

                <div className="h-7 flex w-[188px] p-4 justify-between items-center flex-shrink-0 font-inter text-[14px] font-normal leading-[150%] tracking-[-0.154px] bg-white rounded-[4px]">

                    <Select defaultValue={selectedSubCategory}
                        value={selectedSubCategory}
                        onValueChange={(value) => {
                            handleSubCategoryChange(value)
                        }}
                        disabled={selectedCategory == "All Categories"}
                    >
                        <SelectTrigger className="flex items-center gap-[14px] p-1 rounded-l-[4px] rounded-r-none border border-[#B3B3B3] bg-[#FFF]" >
                            <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                            {
                                subCategoryList.map((subCategoryItem, index) => {
                                    return (
                                        <SelectItem key={index} value={subCategoryItem} className={`${subCategoryItem == selectedSubCategory ? "font-semibold " : ""}`}>{subCategoryItem}</SelectItem>
                                    )
                                })
                            }
                            {/* <SelectItem key={`1`} value={`All Sub-Categories`} >{'All Sub-Categories'}</SelectItem> */}
                        </SelectContent>
                    </Select>
                </div>
            </div >

            <div className="flex flex-col gap-12 min-h-auto max-h-[800px]  overflow-auto">
                <TanStackTable data={tableData} columns={tableColumnsData} tableConfigData={tableConfigData} />
            </div>

        </div >
    )
}