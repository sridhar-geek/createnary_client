import PropTypes from 'prop-types'

const Card = ({ele,index}) => {
  return (
    <div className="w-2/3 mb-16 flex justify-center gap-4">
      <div>
        <h3 className="bg-primary p-3 rounded-xl text-white font-bold">
          {index + 1}
        </h3>
      </div>
      <div>
        <h1 className="headings">{ele?.title} </h1>
        <p className="para">{ele?.subTitle}</p>
        <img
          src={`${import.meta.env.VITE_IMAGE_URL}`+ ele?.image}
          alt="card"
          className="w-full"
        />
      </div>
    </div>
  );
}

Card.propTypes = {
  ele: PropTypes.object.isRequired,
  index : PropTypes.number
};
export default Card