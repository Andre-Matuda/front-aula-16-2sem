import { useEffect, useState } from "react"
import type { TipoProduto } from "../../types/tipoproduto";
import { Link } from "react-router-dom";

export default function Produtos() {

    const [produtos, setProdutos] = useState<TipoProduto[]>([]);

    useEffect(()=>{

        const chamaApi = async ()=>{
            const response = await fetch("http://localhost:3001/produtos");

            try {

                if(response.ok === false){
                    throw new Error("Erro na requisição dos produtos!");
                }

                const data = await response.json();
                setProdutos(data);
                console.log(data);

            } catch (error) {
                console.log(error);
            }
        }
        chamaApi();

    },[]);

  return (
    <main>
        <h1>Produtos Eletrônicos</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Editar / Excluir</th>
                </tr>
            </thead>
            <tbody>
                {
                    produtos.map((p)=>(
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.nome}</td>
                            <td>{p.preco}</td>
                            <td><Link to={`/produtos/${p.id}`}>Editar</Link>  | <Link to={`/produtos/${p.id}`}>Excluir</Link></td>
                        </tr>
                    ))
                }
            </tbody>
            <tfoot>
                <tr>
                    <td>
                        Total de produtos: {produtos.length}
                    </td>
                </tr>
            </tfoot>
        </table>
    </main>
  )
}
