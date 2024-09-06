import Form from "@/components/auth/Form";
import { login } from "@/store/auth/authSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));
    };
    const handleSubmit = async e => {
        e.preventDefault();
        console.log(formData);
        const response = await dispatch(login(formData))
        if (response?.payload?.status === "success") {
            toast.success(response?.payload?.message)
            navigate("/")
        } else {
            toast.error(response?.payload?.message)
        }
    }
    console.log(formData);

    return (
        <div className="mx-auto w-full max-w-md space-y-6">
            <h1 className="text-3xl font-bold tracking-tight text-foreground text-center">ورود به حساب کاربری</h1>
            <Form
                formData={formData}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                buttonText="ورود"
                isBtnDisabled={false}
            />
            <p className="mt-2 text-sm text-center">حساب کاربری ندارید؟
                <Link to="/auth/register" className="font-medium mr-1 to-primary hover:underline">ثبت نام</Link>
            </p>
        </div>
    );
};

export default Login;