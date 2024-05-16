


function Card({result}) {

  return (
    <>
      {

          <div className="listing">
            <img src={result.photo} alt={result.title} />
            <p>{result.superHost ? 'SuperHost' : true} {result.type}  {result.beds ? `beds ${result.beds}` : ''} </p>
            <h3>{result.title}</h3>

          </div>

      }

    </>
  )
}

export default Card
