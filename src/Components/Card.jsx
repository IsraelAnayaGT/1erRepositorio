import "../App.css";
const Card = (props) => {
  const { id, handleClickRemove, name, image, status, species, gender } = props;
  return (
    <div className="card bg-warning">
      <div className="d-flex justify-content-center">
        <img className="w-25 rounded-circle" src={image} alt={name} />
      </div>
      <h5>name: {name}</h5>
      <h5>Status {status}</h5>
      <h5>Species: {species}</h5>
      <h5>Gender: {gender}</h5>
      <button
        className="btn btn-secondary"
        type="button"
        onClick={() => handleClickRemove(id)}
      >
        Eliminar
      </button>
    </div>
  );
};
export default Card;
