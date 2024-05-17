import './Card.css'
import starIcon from '../assets/star.png';


function Card({ result }) {

  return (


    <div className="card-container">
      <figure className='figure-card'>
        <img className='image-class'
          src={result.photo}
          alt={result.title} />
      </figure>
      <div className="ratings">
        <div className="rating">
          <img className="star-icon" src={starIcon} alt="Star icon" />
          <span>{result.rating}</span>
        </div>
        <p className="type">{result.type} · {result.beds ? `beds ${result.beds}` : ''} </p>
        {result.superHost && <div className="superhost">SUPER HOST</div>}
      </div>
      <h2 className="title">{result.title}</h2>
    </div>




  )
}

export default Card
