import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { TipoAluno } from "../../types/tipoAluno";
import { useForm } from "react-hook-form";

export default function EditarAluno() {
  const { id } = useParams<string>();

  const [aluno, setAluno] = useState<TipoAluno>({
    id: 0,
    rm: 0,
    aluno: "",
    nota: 0,
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TipoAluno>({ mode: "onChange" });

  useEffect(() => {
    const callAluno = async () => {
      try {
        const response = await fetch(`http://localhost:3000/alunos/${id}`);

        if (response.ok) {
          const data: TipoAluno = await response.json();

          setValue("id", data.id);
          setValue("rm", data.rm, { shouldValidate: true });
          setValue("aluno", data.aluno, { shouldValidate: true });
          setValue("nota", data.nota, { shouldValidate: true });
        } else {
          throw new Error("Aluno inexistente");
        }
      } catch (error) {
        console.error(error);
      }
    };

    callAluno();
  }, [id,setValue]);

  return (
    <main>
      <h1>Editar Aluno</h1>
      <div>
        <form className="formAluno">
          <fieldset>
            <legend>Aluno : {aluno?.id}</legend>
            <div>
              <label htmlFor="rm">RM</label>
              <input
                type="number"
                {...register("rm", {
                  valueAsNumber: true,
                  required: "O RM é obrigatório",
                  minLength: { value: 6, message: "Mínimo de 6 dígitos" },
                  maxLength: { value: 7, message: "Máximo de 7 dígitos" },
                })}
              />
              {errors.rm && (
                <span className="text-red-400">{errors.rm.message}</span>
              )}
            </div>
            <div>
              <label htmlFor="aluno">ALUNO</label>
              <input
                type="text"
                {...register("aluno", {
                  required: true,
                  minLength: { value: 3, message: "Mínimo de 3 caractéres" },
                  maxLength: { value: 7, message: "Máximo de 150 caractéres" },
                })}
              />
            </div>
            <div>
              <label htmlFor="nota">NOTA</label>
              <input
                type="number"
                step={0.01}
                {...register("nota", {
                  valueAsNumber: true,
                  required: true,
                  min: { value: 0, message: "Valor mínimo é zero." },
                  max: { value: 10, message: "Valor máximo é 10" },
                })}
              />
            </div>
          </fieldset>
        </form>
      </div>
    </main>
  );
}
