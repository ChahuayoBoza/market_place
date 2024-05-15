import React, { useEffect, useState } from "react";
import { Container, ContainerCards, PageButton, Paginator } from "./styles";
import ProductCard from "./product-card";
import { Product } from "../../../api/product/product.interface";
import useApiRequest from "../../../api";
import { ProductResponse } from "../../../api/product/product-response.interface copy";
import Footer from "../footer";
import Slides from "./slides";

interface PaginationReq {
    limit: number;
    offset: number;
}

const Products = () => {    

    const [data, setData] = useState<ProductResponse>();
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 10;
    const [totalProducts, setTotalProducts] = useState(0);
    const {apiRequest} = useApiRequest();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const getData = (page: number = 1) => {

        setIsLoading(true);

        const offset = (page - 1) * productsPerPage;
        console.log("offset", offset)
        const pag: PaginationReq = {
            limit: productsPerPage,
            offset,
        };
    
        apiRequest<PaginationReq, ProductResponse>(`products?limit=${productsPerPage}&offset=${offset}`, 'GET')
            .then((response) => {
                console.log("pag", pag)
                console.log("REPONSE.DATA", response.data?.products);
            if (response.data && response.data.products ) {
                setData(undefined);
                setData(response.data);
                setTotalProducts(response.data.total)
            } else {
                setError('No products found');
            }
            })
            .catch((err) => {
                const error = err as Error;
                setError(error.message || 'An unexpected error occurred');
            })
            .finally(() => {
                setIsLoading(false);
            });
        };

    useEffect(() => {
        getData(currentPage);  
        console.log("data",data)      
    }, [currentPage]);

    const totalPages = Math.ceil(totalProducts / productsPerPage);

    console.log("TOTAL-PAGES", totalPages);

    return (
        <>
            {/* <Container> */}
                <Slides></Slides>
                
                <ContainerCards>
                {
                    data && data.products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
                </ContainerCards>
                {totalPages > 1 && (
                    <Paginator>
                        <PageButton onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                            Anterior
                        </PageButton>
                        {[...Array(totalPages).keys()].map(n => (
                            <PageButton key={n + 1} disabled={n + 1 === currentPage} onClick={() => setCurrentPage(n + 1)}>
                                {n + 1}
                            </PageButton>
                        ))}
                        <PageButton onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
                            Siguiente
                        </PageButton>
                    </Paginator>
                )}
            {/* </Container>             */}
        </>
    );

}

export default Products;