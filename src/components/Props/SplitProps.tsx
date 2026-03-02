import { splitProps } from "solid-js";

export default function SplitProps(props: any) {

    {/* splitProps */}
    {/* splitProps is used to split props into multiple objects, which can be useful for separating concerns or optimizing performance. */}
    {/* It allows you to split props into multiple objects, which can be useful for separating concerns or optimizing performance. */}


  const [greetingProps, personalInfoProps, restProps] = splitProps(props, ["firstName", "lastName"], ["age"], ["city"]);
  return(
   <div>
     <h2>Greeting:</h2>
     <p>First Name: {greetingProps.firstName}</p>
     <p>LastName: {greetingProps.lastName}</p>
     <h2>Personal Info:</h2>
     <p>Age: {personalInfoProps.age}</p>
     <h2>Other Props:</h2>
     <p>City: {restProps.city}</p>
   </div>
   
  );

}