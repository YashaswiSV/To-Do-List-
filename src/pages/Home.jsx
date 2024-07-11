import Carousel from 'react-bootstrap/Carousel';



const Home=()=>{
    return(
        <>
           <Carousel>
      <Carousel.Item>

         <img src="public/newbg/bg6.avif"  width="100%"  height="600px"/>    
  
        <Carousel.Caption>
          <h3 >Feel like new home</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>

      <img src="public/newbg/bg5.avif" alt=""  width="100%"  height="600px" />
        <Carousel.Caption>
          <h3>Design your way</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="public/newbg/bg7c.jpg" alt=""  width="100%"  height="600px" />
        <Carousel.Caption>
          <h3>Customize your home</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src="public/newbg/bg6c.jpg" alt=""  width="100%"  height="600px" />
        <Carousel.Caption>
          <h3  >Sweet home</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        
        </>
    )
}
export default Home;