
let section = document.getElementById("resultados-pesquisa");
console.log(section);
let resultado;

function Pesquisa(){
    
    

    
    for(let dado of dados)
    {
        resultado += `
          <div class="item-resultado">
                <div class="imgitem">
                    <img  src="https://conteudo.imguol.com.br/c/entretenimento/04/2022/02/25/batman-1645790799911_v2_3x4.jpg" alt="">
                </div>
                
                <div class="texto">
                    <h3>
                        <a href="" target="_blank" rel="">${dado.ator}</a>
                    </h3>
        
                    <p class="descricao-meta">${dado.nome}</p>
                    <a href=""> ${dado.data}</a>
                </div>
            </div>
        
        `;
    }
    section.innerHTML = resultado;
}



            
