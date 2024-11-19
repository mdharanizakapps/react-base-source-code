import { ComponentModel } from "../../pages/ProjectGenerator"

export interface GetProjectDetailsRes {
  projectDetails: ProjectDetail[]
}

export interface ProjectDetail {
  projectId: number
  userId: number
  projectName: string
  description: string
  statusId: number
  createdAt: string
  lastModifiedAt: string
  createdBy: number
  lastModifiedBy: number
  metaData: ComponentModel[]
  zipFile: any
}
