import './style.css'
import { maskPrice } from '../../utils/functions';
import { Link } from 'react-router-dom';

export default function ProductButton({ info, handleDelete }) {

    return (
        <>
                <div className="product">
                    <img src={info.cover} alt={info.title} />
                    <h2>{info.title}</h2>
                    <p>{info.desc}</p>
                    <span>{maskPrice(info.price)}</span>
                    <div className="container-buttons">
                        <button className='delete' onClick={() => handleDelete(info._id)}>Excluir</button>
                        <button className='update'>
                            <Link to={`/update/${info._id}`} style={{ textDecoration: 'none', color: 'inherit' }} >Atualizar</Link>
                        </button>
                    </div>
                </div>
        </>
    );
}
