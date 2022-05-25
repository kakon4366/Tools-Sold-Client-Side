import { useQuery } from "react-query";

const useProducts = () => {
	const {
		data: products,
		isLoading,
		refetch,
		error,
	} = useQuery("products", () =>
		fetch("http://localhost:5000/products", {
			method: "GET",
			headers: {
				authorization: `Bearer ${localStorage.getItem("access_token")}`,
			},
		}).then((res) => res.json())
	);

	return [products, isLoading, refetch, error];
};

export default useProducts;
