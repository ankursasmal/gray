 
 
import Edit from "../_component/Edit";

function page({params}) {
     const { edit } = params; // Extracting the 'edit' parameter
    

  return (
   <Edit edit={edit}/>
  )
}

export default page
