import Form from "@/components/auth/Form";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const [formData, setFormData] = useState({
        username: "sdf",
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
    const handleSubmit = e => {
        e.preventDefault();
        console.log(formData);
    }
    console.log(formData);

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