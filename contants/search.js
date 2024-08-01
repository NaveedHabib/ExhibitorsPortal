import { useRouter } from "next/router"
import { useContext } from "react";

const PAGE_SIZE = 2;

export default function Search(props) {
    const router = useRouter();

    const {
        query = 'all',
        category = 'all',
        product = 'all',
        page = 1
    } = router.query;

    const { products, categories, pages } = props;

    const filterSearch = ({
        page,
        category,
        product,
        searchQuery,
    }) => {

        const { query } = router;
        if (page) query.page = page;
        if (category) query.category = category;
        if (searchQuery) query.searchQuery = searchQuery;
        if (product) query.product = product;


        router.push({
            pathname: router.pathname,
            query: query
        })

        const categoryHandler = (e) => {
            filterSearch({ category: e.target.value });
        }

        const productHandler = (e) => {
            filterSearch({ product: e.target.value });
        }

        const pageHandler = (e) => {
            filterSearch({ page: e.target.value });
        }


        const { state, dispatch } = useContext(store)


    }
}