
const Card = ({ele}) => {
  return (
    <div className="w-2/3 mb-16 flex justify-center gap-4">
      <div>
      <h3 className="bg-primary p-3 rounded-xl text-white font-bold">{ele}</h3>
      </div>
      <div>
        <h1 className="headings">Share the holidays and experiences with your friends and family</h1>
        <p className="para">You receive trending & curated Itinearaies and Insider deals on Hotels & Flights to share</p>
        <img src="/aboutCard.png" alt="card" />
      </div>
    </div>
  )
}

export default Card