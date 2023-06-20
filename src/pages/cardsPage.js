import { useEffect } from "react";
import Cards from "../components/cards/Cards";
import useHttps from "../hook/useHttps";

const CardsPage = () => {
    // Fetch data and handle errors using custom hook.....
    const { data, error,isLoading, fetchData, deleteData } = useHttps()

    useEffect(() => {
        // Fetch data when the component mounts...
        fetchData("https://dummyapi-68e6f-default-rtdb.firebaseio.com/cards.json")
    }, [fetchData])

    // Delete card handler...........
    const handleCardDelete = (id) => {
        // Call deleteData function from the custom hook..
        deleteData(id)
    }

    // Display loading state while data is being fetched
    if (isLoading) {
        return <div className='loading'>Loading...</div>;
    }
    // Handle error state.......
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <Cards data={data} deleteHandler={handleCardDelete} />
    )
}

export default CardsPage;