import { useLocation } from "react-router-dom";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Form = ({ formData, handleInputChange, handleSubmit, buttonText, isBtnDisabled }) => {

    const { pathname } = useLocation();

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3">
                {pathname.includes("/register") &&
                    <div className="grid w-full gap-1.5" >
                        <label className="mb-1" htmlFor="username">نام کاربری</label>
                        <Input
                            name="username"
                            id="username"
                            placeholder="نام کاربری خود را وارد کنید"
                            type="text"
                            value={formData.username}
                            onChange={handleInputChange}
                        />
                    </div>
                }
                <div className="grid w-full gap-1.5" >
                    <label className="mb-1" htmlFor="email">ایمیل</label>
                    <Input
                        name="email"
                        id="email"
                        placeholder="ایمیل خود را وارد کنید"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="grid w-full gap-1.5" >
                    <label className="mb-1" htmlFor="password">رمز عبور</label>
                    <Input
                        name="password"
                        id="password"
                        placeholder="رمز عبور خود را وارد کنید"
                        type="password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <Button disabled={isBtnDisabled} type="submit" className="mt-4 w-full">
                {buttonText}
            </Button>
        </form>
    );
};

export default Form;