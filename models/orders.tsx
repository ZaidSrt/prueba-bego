
interface Destinations {
  address: string
  start_date: number
  end_date: number
}

interface Pickup {
  active: boolean
  status: string
}

interface StatusList {
  pickup: Pickup[]
}

interface Orders {
  order_number: string
  status_string: string
  type: string
  status: number
  destinations: Destinations[]
  _id: string
  reference_number: string
  status_list: StatusList
  end_date: number
}



interface OrderDestination {
  location: string
  city: string
  item: DestinationDetalle
}

interface OrderDestinationData {
  start: OrderDestination
  end: OrderDestination
}

interface OrdersData {
  [Upcoming: string]: Orders[]
}


interface StatusOrderDetalleProps {
  item: Pickup,
  index: number
}