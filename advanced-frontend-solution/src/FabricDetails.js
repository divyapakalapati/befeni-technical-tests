import { useParams } from "react-router-dom";

export const FabricDetails = () => {
	const {code} = useParams();
	return <div> Details of Fabric {code}</div>
}

