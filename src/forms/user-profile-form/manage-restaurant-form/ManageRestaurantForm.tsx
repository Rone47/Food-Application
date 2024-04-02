import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DetailsSection from "./DetailsSection";

const formSchema = z.object({
    restaurantName: z.string({
        required_error: 'Restaurant name not provided'
    }),
    city: z.string({
        required_error: 'City name not provided'
    }),
    country: z.string({
        required_error: 'Country name not provided'
    }),
    deliveryPrice: z.coerce.number({
        required_error: 'Delivery price not provided',
        invalid_type_error: 'Must be a valid number',
    }),
    estimatedDeliveryTime: z.coerce.number({
        required_error: 'Estimated delivery time not provided',
        invalid_type_error: 'Must be a valid number',
    }),
    cuisines: z.array(z.string()).nonempty({
        message: 'Please select at least one item',
    }),
    menuItems: z.array(
        z.object({
          name: z.string().min(1, "name is required"),
          price: z.coerce.number().min(1, "price is required"),
        })
      ),
      imageUrl: z.string().optional(),
      imageFile: z.instanceof(File, { message: 'image is required'}).optional(),
});

type RestaurantFormData = z.infer<typeof formSchema>;

type Props = {
    onSave: (restaurantFormData: FormData) => void;
    isLoading: boolean;
}

const ManageRestaurantForm = ({ onSave, isLoading, restaurant }: Props) => {
    const form = useForm<RestaurantFormData>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        cuisines: [],
        menuItems: [{ name: "", price: 0 }],
      },
    });

    const onSubmit = (formDataJson: RestaurantFormData) => {
        // LATER
    }

    return(
        <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 bg-gray-50 p-10 rounded-lg"
            >
                <DetailsSection/>
            </form>
        </Form>
    )
}

export  default ManageRestaurantForm;