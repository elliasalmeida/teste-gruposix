import { ArrowLeft, CheckCircle, Package2 } from "lucide-react";
import Link from "next/link";

export default function Success(){
    return <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
      <div className="text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Obrigado pela sua compra!
        </h1>
        <p className="text-gray-600 mb-6">
          Seu pedido foi confirmado e está sendo processado.
        </p>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <div className="flex items-center gap-3 mb-2">
          <Package2 className="w-5 h-5 text-emerald-500" />
          <span className="font-medium text-gray-900">Detalhes do pedido</span>
        </div>
        <p className="text-sm text-gray-600">
          Você receberá um e-mail com o número de rastreamento assim que seu pedido for enviado.
        </p>
      </div>

      <div className="space-y-3">
      <button 
          className="w-full px-4 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-emerald-500 hover:bg-emerald-600 text-white focus:ring-emerald-500"
        >
          Acompanhar pedido
        </button>
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900">
          <ArrowLeft className="w-4 h-4" />
          Voltar para a loja
        </Link>
      </div>
    </div>
    </div>
}