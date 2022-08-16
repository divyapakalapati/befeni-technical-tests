
import Col from 'react-bootstrap/Col';
//Displaying same images for every fabric
function ImageComponent() {
	return(
    <div className="image-div">
    <Col xs={12} md={4}>
    <figure className="figure">
    <img src="https://fra1.digitaloceanspaces.com/befeni-static/production-fabric-images/shirt-orders/369995_1_mobile_600x900.jpg" className="figure-img img-fluid rounded" alt="shirt1" height="350" width="300" />
    <figcaption className="figure-caption"><button type="button" className="btn btn-dark">Bestelle</button><br/>trifft Ben <br/>100% Baumwolle</figcaption>
    </figure>
    </Col><Col xs={12} md={4}>
    <figure className="figure">
    <img src="https://fra1.digitaloceanspaces.com/befeni-static/production-fabric-images/shirt-orders/330795_1_mobile_600x900.jpg" className="figure-img img-fluid rounded" alt="shirt2" height="350" width="300"/>
    <figcaption className="figure-caption"><button type="button" className="btn btn-dark">Bestelle</button><br/>trifft Ben <br/>100% Baumwolle</figcaption>
    </figure>
    </Col><Col xs={12} md={4}>
    <figure className="figure">
    <img src="https://fra1.digitaloceanspaces.com/befeni-static/production-fabric-images/shirt-orders/322776_1_mobile_600x900.jpg" className="figure-img img-fluid rounded" alt="shirt3" height="350" width="300" />
    <figcaption className="figure-caption"><button type="button" className="btn btn-dark">Bestelle</button><br/>trifft Ben <br/>100% Baumwolle</figcaption>
    </figure>
    </Col>
    </div>
);
}

export default ImageComponent;
