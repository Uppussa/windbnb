


function Card({result, index}) {

  return (
    <>
      {


        
          <div className="listing">
            <img src={result.photo} alt={result.title} />
            <p>{result.superHost} {result.type}  {result.beds ? `beds ${result.beds}` : ''} </p>
            <h3>{result.title}</h3>

          </div>
        


      }

    </>
  )
}

export default Card
