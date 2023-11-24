import './App.css';

import img6 from './img/boat.jpg';
import img1 from './img/centras.jpg';
import img4 from './img/fishing.jpg';
import img2 from './img/lighthouse.jpg';
import img5 from './img/M_Gandisculpture.jpg';
import img3 from './img/Rusne.jpg';
import Rusne2 from './img/Rusne2.jpg';

const App = () => {
  const masyvas = ['something', 'something else', 'plus something', 'something more'];

  return (
    <>
      <div id="home">
        <h1>Wellcome!</h1>
        <h4>About us </h4>
        <p id="about">
          <span className="red">Some nice text...</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos,
          voluptates quod maxime neque nostrum odio cupiditate soluta. Beatae iste facere maiores itaque, amet alias
          quidem delectus quisquam obcaecati nemo excepturi. Ratione repellendus, voluptatem autem est, ad sed at qui
          obcaecati excepturi accusantium omnis ipsam adipisci. Facere harum quo iusto, at voluptatibus animi recusandae
          sit. Dolores impedit quibusdam laborum iure odit! Porro quos perspiciatis minima laboriosam dicta, vitae
          provident quisquam adipisci repudiandae incidunt, exercitationem, libero itaque repellendus eos? Officia quasi
          sunt corrupti impedit assumenda maxime amet quibusdam fuga nesciunt nemo.
        </p>
        <img id="nicePhoto" src={Rusne2} alt="Rusne" />
        <h2 id="goodThings">Good things:</h2>
        {masyvas.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
        <h2 id="gallery" className="gallery-title">
          Gallery
        </h2>
        <div className="gallery">
          <img src={img1} alt="Rusne" />
          <img src={img2} alt="Rusne" />
          <img src={img3} alt="Rusne" />
          <img src={img4} alt="Rusne" />
          <img src={img5} alt="Rusne" />
          <img src={img6} alt="Rusne" />
        </div>
      </div>
    </>
  );
};

export default App;
