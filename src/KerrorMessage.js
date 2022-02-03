import React from "react"
import{ErrorMessage} from "formik"
export function KerrorMessage({name})
{
    return(
    <div style={{color:"red"}}>
        <ErrorMessage name={name} />
    </div>
    )
}
