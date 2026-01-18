const ArtGallery = () => {

  return (

    <section className="gallery-section py-5">
  <div className="container" style={{ maxWidth: '1200px' }}>
    {/* Section Header */}
    <div className="text-center mb-5">
      <h2 className="gallery-title">Arts By Merit Shillers</h2>
      <p className="gallery-subtitle text-secondary">We Create captivating illustration art that enhances brand identity <br/>and audience engagement</p>
    </div>

    {/* The 3-Card Grid */}
    <div className="row g-4 justify-content-center">
      <div className="col-md-4">
        <div className="art-card">
          <img src="/char1.png" alt="Character 1" className="img-fluid" />
        </div>
      </div>
      <div className="col-md-4">
        <div className="art-card">
          <img src="/char2.png" alt="Character 2" className="img-fluid" />
        </div>
      </div>
      <div className="col-md-4">
        <div className="art-card">
          <img src="/char3.png" alt="Character 3" className="img-fluid" />
        </div>
      </div>
    </div>
  </div>
</section>

   
   )
}

export default ArtGallery;