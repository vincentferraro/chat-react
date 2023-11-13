import { FormControl, FormLabel, FormErrorMessage, Input, FormHelperText, Button,Image} from "@chakra-ui/react"
import { useFormik } from "formik";
import { useState } from "react"
import Logo from "../assets/img/colloc-chat.png"
const SignIn =()=>{

     const [username, setUsername]= useState('')

    const formik = useFormik({
        initialValues:{
            username:''
        },
        onSubmit:(values)=>{
            console.log(values)
            alert(values.username)
            formik.resetForm()
        },
        handleChange:(e)=>{
            console.log(e)
            setUsername(e.values.username)

        }
       
    })
    // function handleSubmit(e){
    //     e.preventDefault()
    //     console.log(username)
    //     setUsername('')
    // }

    const isError= false
    return(<div className="h-screen w-[100%] flex flex-col items-center justify-center border-2 border-solid border-green-400">
        
            <Image boxSize="md" src={Logo} alt='Coloc-chat' />
        
        <div className="h-[20%] w-[20%] flex justify-center items-center rounded-xl bg-white">
       
            <form className="flex flex-col justify-around items-center bg-white" onSubmit={formik.handleSubmit}>
            <FormControl className="flex flex-col justify-center items-center bg-white">
                <FormLabel className="bg-white"> Username </FormLabel>
                <Input id="username" type="text" placeholder="Enter your username" value={formik.values.username} onChange={formik.handleChange} />
                {formik.touched.username?
                        <></>
                   : (<FormErrorMessage>Email is required</FormErrorMessage>)}
            </FormControl>
            
            <Button margin={2} className="ml-auto mr-auto" colorScheme="blue" type="submit">Enter</Button>
            
            
            </form>
        </div>

    </div>)
}

export default SignIn