import { useParams } from "react-router-dom";

export default function EditarAluno() {

    const {id} = useParams<string>();

  return (
    <main>
        <h1>Editar Aluno</h1>
        <p>ID: {id}</p>
    </main>
  )
}
