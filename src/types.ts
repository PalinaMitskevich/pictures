import { ReactNode } from "react"

export type SocialLink = {
    href: string
    component: ReactNode
}

export type Picture = {
    albumId: number
    id: number
    thumbnailUrl: string
    title: string
    url: string
}