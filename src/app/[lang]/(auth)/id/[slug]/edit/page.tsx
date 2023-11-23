import { EditForm } from '@/components/shared/EditPage/EditForm'

interface EditProps {
  params: { slug: string }
}

export default function Edit({ params }: EditProps) {
  return (
    <main className="bg-dark-10 flex flex-col items-center justify-center text-white py-24">
      <div className="w-[1216px] max-w-[1216px] flex flex-col items-start justify-start gap-10">
        <h1 className="text-white text-3xl font-bold">Editar Informações</h1>
        <EditForm params={params} />
      </div>
    </main>
  )
}
