import { SaludarNo } from "./SaludarNo";
import { SaludarSi } from "./SaludarSi";

const Saludo = (props) => {
 const isLoggedIn= props.isLoggedIn;
if(isLoggedIn){
  return <SaludarSi/>
}
return <SaludarNo/>
  
};
export { Saludo };
