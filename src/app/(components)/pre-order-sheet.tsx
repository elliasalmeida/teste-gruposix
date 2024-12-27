'use client'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { createOrder } from "../actions"

type PreOrderSheetProps = {product_id: number}
export function PreOrderSheet(props: PreOrderSheetProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
      <button className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors bg-emerald-500 hover:bg-emerald-600 text-white`}>
          Comprar agora
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <form action={createOrder} className="space-y-4 w-full max-w-md">
        <input name="product_id" value={props.product_id} hidden readOnly/>
      <div className="space-y-2">
        <Label htmlFor="name">Nome</Label>
        <Input
          id="name"
          name="name"
          placeholder="Digite seu nome"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="seu@email.com"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone_number">Telefone</Label>
        <Input
          id="phone_number"
          name="phone_number"
          placeholder="11999999999"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="street">Rua</Label>
          <Input
            id="street"
            name="street"
            placeholder="Nome da rua"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="street_number">Número</Label>
          <Input
            id="street_number"
            name="street_number"
            placeholder="123"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="district">Bairro</Label>
        <Input
          id="district"
          name="district"
          placeholder="Seu bairro"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="city">Cidade</Label>
          <Input
            id="city"
            name="city"
            placeholder="Sua cidade"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="state">Estado</Label>
          <Input
            id="state"
            name="state"
            placeholder="SP"
            maxLength={2}
          />
        </div>
      </div>

      <button type="submit" className="w-full bg-primary text-white rounded-lg py-2 hover:bg-primary/90">
        Enviar
      </button>
    </form>
        <SheetFooter>
          <SheetClose asChild>
            {/* <Button type="submit">Save changes</Button> */}
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}