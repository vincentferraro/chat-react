import { FormControl, FormLabel, Input,  Button,Image} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";
import {  useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { setUsername } from "../app/features/username/usernameSlice";
import Logo from "../assets/img/colloc-chat.png"



const SignIn =()=>{

    let navigate = useNavigate()
    const dispatch = useDispatch()
    
    const formik = useFormik({
        initialValues: {
          username: ''
        },
        onSubmit: (values) => {
            if(formik.values.username.length > 0 ){
                dispatch(setUsername(values.username))
                formik.resetForm();
                navigate("/home")
                
            }
        },
      });
    

      return (
        <div className="h-screen w-[100%] flex flex-col items-center justify-center bg-[#60A5FA]">
          <Image boxSize="md" src={Logo} alt="Coloc-chat" />
          <div className="h-[20%] w-[20%] flex justify-center items-center rounded-xl bg-white">
            <form className="flex flex-col justify-around items-center bg-white" onSubmit={formik.handleSubmit}>
              <FormControl className="flex flex-col justify-center items-center bg-white">
                <FormLabel className="bg-white">Username</FormLabel>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur} 
                  isInvalid={formik.touched.username && !formik.values.username} 
                />
                
                {!formik.touched.username && formik.values.username.length === 0 ? (
                  <></>
                ) : (<p className="text-red-500 bg-white">Username is required</p>)}
              </FormControl>
      
              <Button margin={2} className="ml-auto mr-auto" colorScheme="blue" type="submit">
                Enter
              </Button>
            </form>
          </div>
        </div>
      );
}

export default SignIn