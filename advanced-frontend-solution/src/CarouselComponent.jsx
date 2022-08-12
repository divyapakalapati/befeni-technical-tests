import Carousel from 'react-bootstrap/Carousel';


function CarouselComponent(props) {
	const imgData = props.details;
	//console.log("imgData",imgData);

	if(imgData){
		console.log("imgData",imgData[0].image_url)
		
		return (
			
    <Carousel>
      
      {imgData.map((item1,index) => {
      	return(
      		<Carousel.Item key={index}>
	<img
          className="d-block"
          src={item1.image_url}
          alt={item1.id} 
          height="500"
          width="500"
        />
         </Carousel.Item>);
      	
	})}
        
     
    </Carousel>
  );

	}
  
}

export default CarouselComponent;