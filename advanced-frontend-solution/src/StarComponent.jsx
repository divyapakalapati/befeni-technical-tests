import ReactStars from "react-rating-stars-component";

function StarComponent(props) {
	console.log("props", props.details);
	let rating = props.details;
	if(props.details){
		return(<ReactStars count={5}
    size={30}
    edit= {false}
    isHalf= {true}
    value= {rating}
    activeColor="#000000" />);

	}
	
}
	
	export default StarComponent;