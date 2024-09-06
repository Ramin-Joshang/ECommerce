import { useLocation } from "react-router-dom";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Form = ({ formData, handleInputChange, handleSubmit, buttonText, isBtnDisabled }) => {

    const { pathname } = useLocation();

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3">
                {
                    pathname.includes("/register") &&
                    <div className="grid grid-cols-2 gap-5">
                        <div className="grid w-full gap-1.5" >
                            <label className="mb-1" htmlFor="name">نام</label>
                            <Input
                                name="name"
                                id="name"
                                placeholder="نام خود را وارد کنید"
                                type="text"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="grid w-full gap-1.5" >
                            <label className="mb-1" htmlFor="family">نام خانوادگی</label>
                            <Input
                                name="family"
                                id="family"
                                placeholder="نام خانوادگی خود را وارد کنید"
                                type="text"
                                value={formData.family}
                                onChange={handleInputChange}
                            />
                        </div>
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
                {
                    pathname.includes("/register") &&
                    <div className="grid w-full gap-1.5" >
                        <label className="mb-1" htmlFor="passwordConfirm">تکرار رمز عبور</label>
                        <Input
                            name="passwordConfirm"
                            id="passwordConfirm"
                            placeholder="تکرار رمز عبور خود را وارد کنید"
                            type="passwordConfirm"
                            value={formData.passwordConfirm}
                            onChange={handleInputChange}
                        />
                    </div>
                }
            </div>
            <Button disabled={isBtnDisabled} type="submit" className="mt-4 w-full">
                {buttonText}
            </Button>
        </form>
    );
};

export default Form;