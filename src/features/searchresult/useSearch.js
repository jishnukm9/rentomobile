

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCars } from "../../services/apiCarSearch";
import toast from "react-hot-toast";


export function useSearch(pickUpDate, dropOffDate,pickUpTime,dropOffTime ,pickUpLocation,dropOffLocation,brand,countryCode) {
  const queryClient = useQueryClient();


  const {
    isLoading,
    data: cars,
    error,
  } = useQuery({
    queryKey: ["cars", pickUpDate, dropOffDate, pickUpTime, dropOffTime, pickUpLocation, dropOffLocation, brand, countryCode],
    queryFn: ({ queryKey }) => {
      const [_key, pickUpDate, dropOffDate, pickUpTime, dropOffTime, pickUpLocation, dropOffLocation, brand, countryCode] = queryKey;
      return getCars(pickUpDate, dropOffDate, pickUpTime, dropOffTime, pickUpLocation, dropOffLocation, brand, countryCode);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, error, cars };
}