import Form from "@/components/auth/Form";
import { register } from "@/store/actions/authActions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        family: "",
        email: "",
        password: "",
        passwordConfirm: ""
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
        const response = await dispatch(register(formData))
        if (response?.payload?.status === "success") {
            toast.success(response?.payload?.message)
            navigate("/auth/login")
        } else {
            toast.error(response?.payload?.message)
        }
    }

    return (
        <div className="mx-auto w-full max-w-md space-y-6">
            <h1 className="text-3xl font-bold tracking-tight text-foreground text-center">ساخت حساب کاربری</h1>
            <Form
                formData={formData}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                buttonText="ثبت نام"
                isBtnDisabled={false}
            />
            <p className="mt-2 text-sm text-center">از قبل حساب دارید؟
                <Link to="/auth/login" className="font-medium mr-1 to-primary hover:underline">ورود</Link>
            </p>
        </div>
    );
};

export default Register;