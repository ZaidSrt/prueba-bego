
interface CardBtnHomeProps {
  status: number,
  start_date: number
}

interface CardNavHomeProps {
  navMenu: string[]
  navActive: string
  setNavActive: (nav: string) => void
}

interface CardSarchHomeProps {
  searchValue: string
  setSearchValue: (val: string) => void
}

interface ContactInfo {
  telephone: string
  email: string
}

interface DestinationDetalle {
  status: number
  status_string: string
  name: string
  address: string
  startDate: number
  contact_info: ContactInfo
}

interface CardStatusHomeProps {
  city: string
  location: string
  date?: string
  time?: string
  image?: import("next/image").StaticImageData
  width?: number
  height?: number
  action: string
  item?: DestinationDetalle
  onClick?: (action: DestinationDetalle) => void
  imageClassName: string
  contentClassName?: string
}

interface CardBreadcrumbHomeProps {
  className: string
  width: number
}