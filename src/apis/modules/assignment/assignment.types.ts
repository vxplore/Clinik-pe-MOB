export interface AssignmentsResponse {
  
    assignments: {
      id: string;
      booking_id: string;
      for_patient: {
        id: string;
        name: string;
        age: number | null;
        gender: string
      };
      location: {
        address: string;
        pincode: string;
        lat: number;
        lng: number;
      };
      status: string
      count_test: number;
      samples: {
        id: string;
        name: string;
        status: string
        booking_item_ids: string[];
      }[];
      sample_statistics: {
        total: number;
        collected: number;
        pending: number;
      };
      schedule: {
        start_date: string;
        end_date: string;
      };
    }[];
  };

