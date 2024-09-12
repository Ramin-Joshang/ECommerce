// import ProductImageUpload from "@/components/admin-view/image-upload";
import ProductImageUpload from "@/components/admin/ProductImageUpload";
import ProductTile from "@/components/admin/ProductTitle";
// import CommonForm from "@/components/common/form";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
// import { useToast } from "@/components/ui/use-toast";
// import { addProductFormElements } from "@/config";
import { getAllProducts } from "@/store/actions/productActions";
// import {
//     addNewProduct,
//     deleteProduct,
//     editProduct,
//     fetchAllProducts,
// } from "@/store/admin/products-slice";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const initialFormData = {
    image: null,
    title: "",
    description: "",
    category: "",
    brand: "",
    price: "",
    salePrice: "",
    totalStock: "",
    averageReview: 0,
};

function Products() {
    const [openCreateProductsDialog, setOpenCreateProductsDialog] = useState(false);
    const [formData, setFormData] = useState(initialFormData);
    const [imageFile, setImageFile] = useState(null);
    const [uploadedImageUrl, setUploadedImageUrl] = useState("");
    const [imageLoadingState, setImageLoadingState] = useState(false);
    const [currentEditedId, setCurrentEditedId] = useState(null);

    const productList = useSelector((state) => state.product.products);
    const dispatch = useDispatch();

    function onSubmit(event) {
        event.preventDefault();

        currentEditedId !== null
            ? dispatch(
                editProduct({
                    id: currentEditedId,
                    formData,
                })
            ).then((data) => {
                console.log(data, "edit");

                if (data?.payload?.success) {
                    dispatch(getAllProducts());
                    setFormData(initialFormData);
                    setOpenCreateProductsDialog(false);
                    setCurrentEditedId(null);
                }
            })
            : dispatch(
                addNewProduct({
                    ...formData,
                    image: uploadedImageUrl,
                })
            ).then((data) => {
                if (data?.payload?.success) {
                    dispatch(getAllProducts());
                    setOpenCreateProductsDialog(false);
                    setImageFile(null);
                    setFormData(initialFormData);
                    toast.success("محصول با موفقیت اضافه شد.")
                }
            });
    }

    function handleDelete(getCurrentProductId) {
        dispatch(deleteProduct(getCurrentProductId)).then((data) => {
            if (data?.payload?.success) {
                dispatch(getAllProducts());
            }
        });
    }

    function isFormValid() {
        return Object.keys(formData)
            .filter((currentKey) => currentKey !== "averageReview")
            .map((key) => formData[key] !== "")
            .every((item) => item);
    }

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    console.log(formData, "productList");
    console.log(productList.data.data)
    return (
        <Fragment>
            <div className="mb-5 w-full flex justify-end">
                <Button onClick={() => setOpenCreateProductsDialog(true)}>
                    Add New Product
                </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
                {productList && productList.data.data.length > 0
                    ? productList.data.data.map((productItem) => (
                        <ProductTile
                            key={productItem._id}
                            setFormData={setFormData}
                            setOpenCreateProductsDialog={setOpenCreateProductsDialog}
                            setCurrentEditedId={setCurrentEditedId}
                            product={productItem}
                            handleDelete={handleDelete}
                        />
                    ))
                    : <h1>محصولی وجود ندارد</h1>}
            </div>
            <Sheet
                open={openCreateProductsDialog}
                onOpenChange={() => {
                    setOpenCreateProductsDialog(false);
                    setCurrentEditedId(null);
                    setFormData(initialFormData);
                }}
            >
                <SheetContent side="right" className="overflow-auto">
                    <SheetHeader>
                        <SheetTitle>
                            {currentEditedId !== null ? "Edit Product" : "Add New Product"}
                        </SheetTitle>
                    </SheetHeader>
                    <ProductImageUpload
                        imageFile={imageFile}
                        setImageFile={setImageFile}
                        uploadedImageUrl={uploadedImageUrl}
                        setUploadedImageUrl={setUploadedImageUrl}
                        setImageLoadingState={setImageLoadingState}
                        imageLoadingState={imageLoadingState}
                        isEditMode={currentEditedId !== null}
                    />
                    {/* <div className="py-6">
                        <CommonForm
                            onSubmit={onSubmit}
                            formData={formData}
                            setFormData={setFormData}
                            buttonText={currentEditedId !== null ? "Edit" : "Add"}
                            formControls={addProductFormElements}
                            isBtnDisabled={!isFormValid()}
                        />
                    </div> */}
                </SheetContent>
            </Sheet>
        </Fragment>
    );
}

export default Products;