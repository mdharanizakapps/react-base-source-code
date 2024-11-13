export interface GetOverviewRequest {
    clientName: string
    from: string
    to: string
    metric: string[]
}

export interface GetOverviewResponse {
    status: string
    data: Data
}

export interface Data {
    header: Header[]
    chartData: ChartDatum[]
}

export interface Header {
    label: string
    value: number
    key: string
}

export interface ChartDatum {
    date: string
    revenue: number
    order: number | null
    cost: number | null
    yoy: number | null
}


export interface GetTopProductsRequest {
    clientName: string
    from: string
    to: string
    metric: string
}

export interface GetTopProductsResponse {
    status: string
    data: Data
}

export interface Data {
    data: TopProductsData[]
}

export interface TopProductsData {
    title: string
    name: string
    margin: number
    last4WMargin?: string
    last4WSales?: number
    total: number
    trending: boolean
}
export interface GetBySuppliersRequest {
    clientName: string
    from: string
    to: string
}
export interface GetBySuppliersResponse {
    status: string
    data: GetBySupplierData[]
}

export interface GetBySupplierData {
    supplierName: string
    orders: number
    revenue: number
    cost: number
}