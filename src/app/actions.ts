import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const FormSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone_number: z.string().regex(/^\d{10,11}$/, "Número de telefone inválido"),
  street_number: z.string().min(1, "Número é obrigatório"),
  street: z.string().min(3, "Rua deve ter pelo menos 3 caracteres"),
  district: z.string().min(2, "Bairro deve ter pelo menos 2 caracteres"),
  city: z.string().min(2, "Cidade deve ter pelo menos 2 caracteres"),
  state: z.string().length(2, "Estado deve ter 2 caracteres"),
  product_id: z.coerce.number(),
});

type CreateOrderFormData = z.infer<typeof FormSchema>;

export async function createOrder(formData: FormData) {
  console.log(formData);

  const result = FormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone_number: formData.get("phone_number"),
    street_number: formData.get("street_number"),
    street: formData.get("street"),
    district: formData.get("district"),
    city: formData.get("city"),
    state: formData.get("state"),
    product_id: formData.get("product_id"),
  });
  console.log(result);
  if (!result.success) {
    throw new Error("Erro ao validar os campos");
  }

  let successOnCreateOrder = false;

  try {
    await fetch(
      ` https://api-candidate.ogruposix.com/buy/${result.data.product_id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "user-token": process.env.NEXT_PUBLIC_TEMP_USER_TOKEN!,
        },
      }
    );

    successOnCreateOrder = true;
  } catch (error) {}

  if (successOnCreateOrder) {
    redirect("/success");
  }
}