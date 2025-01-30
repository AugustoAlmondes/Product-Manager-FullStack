import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function UpdateProducts() {

    const [product, setProduct] = useState({
        title: "",
        desc: "",
        price: null,
        cover: "",
    });

    const [error, setError] = useState(false);
    const {id} = useParams();
    
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/products/${id}`);
                setProduct(res.data);
            } catch (err) {
                console.log(err);
                setError(true);
            }
        };
        fetchProduct();
    }, [id]);

    const handleChange = (e) =>{
        setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8800/products/${id}`, product);
            navigate("/");
        } catch (err) {
            console.log(err); 
            setError(true);
        }
    };

    return (
        <>
            <div className="form">
                <form 
                onSubmit={handleSubmit}
                >
                    <h1>Atualizar Produto</h1>

                    <input
                        type="text"
                        placeholder="Título"
                        className="input-add"
                        name="title"
                        value={product.title}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="number"
                        placeholder="Preço"
                        className="input-add"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        name="desc"
                        id="desc"
                        rows="5"
                        value={product.desc}
                        placeholder="Descrição"
                        // className="input-add"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        placeholder="URL da Imagem"
                        className="input-add"
                        name="cover"
                        value={product.cover}
                        onChange={handleChange}
                        required
                    />

                    <input type="submit" value={"Atualizar"} />
                    {
                        error && <p>Não foi possível atualizar o produto.</p>
                    }
                    <button>
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Ver Todos os Produtos</Link>
                    </button>
                </form>
            </div>
        </>
    );
}