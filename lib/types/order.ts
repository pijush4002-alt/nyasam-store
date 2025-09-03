export type ShippingProvider = 'Shiprocket' | 'Delhivery' | 'DTDC' | 'BlueDart' | 'FedEx';

export interface TrackingEvent {
  status: string;
  time: string;
  location?: string;
  description?: string;
}

export interface Order {
  id: string;
  user: { name: string; email: string; address: string; phone?: string; };
  cart: Array<{ productId: string; name: string; price: number; qty: number; }>;
  status: 'pending' | 'paid' | 'processing' | 'shipped' | 'delivered' | 'canceled';
  shipping?: {
    provider: ShippingProvider;
    shipment_id: string;
    awb: string;
    tracking_url?: string;
    tracking_events?: TrackingEvent[];
    estimated_delivery?: string;
    last_status?: string;
  };
  created_at: string;
  updated_at: string;
}