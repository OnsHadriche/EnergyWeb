export const Carousel = () => {
  return (
    <div  id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner shadow p-2 mb-5 bg-body-tertiary rounded">
    <div className="carousel-item active">
      <img src="/src/assets/images/energie.jpg" className="d-block w-100 " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/src/assets/images/energi2.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/src/assets/images/energie1.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
  );
};
