import './Cards.css'
import { Link } from 'react-router-dom'

const Cards = ({ data, deleteHandler }) => {

    return (
        <section className='cards'>
            <ul className='cards_container'>
                {
                    data?.map((item) => (
                        <li className='card' key={item?.id}>
                            <h2>{`${item?.firstName} ${item?.lastName}`}</h2>
                            <h4>Address: <span>{item?.address}</span></h4>
                            <p>Email: <span>{item?.email}</span></p>
                            <p>Phone: <span>{item?.phone}</span></p>
                            <div className='btn_div'>
                                <Link className='btn_edit btn' to={`/editCard/${item?.id}`} state={item}>Edit</Link>
                                <button className='btn_delete btn' onClick={() => deleteHandler(item?.id)}>Delete</button>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <Link to="addCard" className='add_card_btn btn'>Add Card</Link>
        </section>
    )
}

export default Cards