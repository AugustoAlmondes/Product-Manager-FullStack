// import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './style.css'
import { useState } from "react";
export default function AddProducts() {

    const [product, setProduct] = useState({
        title: "",
        desc: "",
        price: null,
        cover: "",
    });

    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8800/products", product);
            navigate("/");
        } catch (err) {
            console.log(err);
            setError(true);
        }
    };

    const handleChange = (e) => {
        setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <h1>Adicionar Produto</h1>

                    <input
                        type="text"
                        placeholder="Título"
                        className="input-add"
                        name="title"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="number"
                        placeholder="Preço"
                        className="input-add"
                        name="price"
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        name="desc"
                        id="desc"
                        rows="5"
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
                        onChange={handleChange}
                        required
                    />

                    <input type="submit" value={"Adicionar"}/>
                    {
                        error && <p>Não foi possível adicionar o produto.</p>
                    }
                <button>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Ver Todos os Produtos</Link>
                </button>
                </form>

            </div>
        </>
    );
}