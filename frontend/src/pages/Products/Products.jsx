import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css'
import ProductButton from '../../components/ProductButton/ProductButton';

export default function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const res = await axios.get("http://localhost:8800/products");
                setProducts(res.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchAllProducts();
    }, [])

    console.log(products);
    
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8800/products/${id}`);
            setProducts(products.filter((product) => product._id !== id));
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="container-product">
                <h1>Loja de Espelho</h1>

                <div className="container-add-button">

                    <button className='add-new-button'>
                        <Link to="/add" style={{ textDecoration: 'none', color: 'inherit' }}>
                            Adicionar Produto
                        </Link>
                    </button>
                </div>
                <div className="products">
                {
                    
                    products.map((product) => {
                        return <ProductButton key={product._id} info={product} handleDelete={handleDelete} />
                    })
                }
                </div>
            </div>
        </>
    );
}