import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { TipoAluno } from "../../types/tipoAluno";

export default function EditarAluno() {

    const {id} = useParams<string>();

    
  const [aluno, setAluno] = useState<TipoAluno>();

  useEffect(() => {

    const callAluno = async ()=>{
      try {
        const response = await fetch(`http://localhost:3000/alunos/${id}`);
        
        if(response.ok){
          const data:TipoAluno = await response.json();
          setAluno(data);
        }else{
          throw new Error("Aluno inexistente");
        }

      } catch (error) {
        console.error(error);
      }
    }

    callAluno();
    
  }, []);

  return (
    <main>
        <h1>Editar Aluno</h1>
        <p>ID: {aluno?.id}</p>
        <p>RM: {aluno?.rm}</p>
        <p>ALUNO: {aluno?.aluno}</p>
    </main>
  )
}
