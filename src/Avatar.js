import data from "./data_base";
export default function Alien() {
  let index = Math.floor(Math.random() * data.length);
  return (
    <div id="container">
      <div>
        <center>
          <h1 className="title">{data[index].nombre}</h1>
          <small className="subtitle">planeta: {data[index].planeta}</small>
          <p className="text">"{data[index].frase}"</p>
        </center>
      </div>
      <div>
        <img
          className="avatar_img"
          src="https://api.minimalavatars.com/avatar/random/png"
        />
      </div>
    </div>
  );
}
