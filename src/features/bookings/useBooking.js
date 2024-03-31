import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBooking } from "../../services/apiBookings";

export function useBooking() {
  const { bookingId } = useParams();

  //! Get data with useQuery
  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking"],
    queryFn: () => getBooking(bookingId),
    // By defaut query will try to fetch data 3 times, given the value false to prevent this
    retry: false,
  });
  return { isLoading, booking, error };
}
