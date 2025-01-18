import Layout from "@components/Layout/Layout"

function CriarFormularioPage() {
  return (
    <>
    <Layout>
    <Wrapper>  
         
      <p className='Sub2'>Informações Pessoais <hr /></p>
   
        <WrapperDados>
          <form action="post">
              
                  <label htmlFor="" style={{ paddingBottom: '5px' }}>Nome Completo *</label>
                  <InputCadastro placeholder="Insira seu nome" type="text" />
                  <label htmlFor="" style={{ paddingBottom: '5px' }}>CPF *</label>
                  <InputCadastro placeholder="Insira seu CPF" type="number" />
                  <label htmlFor="" style={{ paddingBottom: '5px' }}>Email *</label>
                  <InputCadastro placeholder="Insira seu email" type="email" />
                  <label htmlFor="" style={{ paddingBottom: '5px' }}>Celular *</label>
                  <InputCadastro placeholder="Insira seu celular" type="number" />
              


          </form> 
        </WrapperDados>
          <p className='Sub2'>Informações de entrega <hr /></p>
      <WrapperDados>
      <form action="post">
    
          <label htmlFor="" style={{ paddingBottom: '5px' }}>Endereço *</label>
          <InputCadastro placeholder="Insira seu endereço" type="text" />
          <label htmlFor="" style={{ paddingBottom: '5px' }}>Bairro *</label>
          <InputCadastro placeholder="Insira seu bairo" type="text" />
          <label htmlFor="" style={{ paddingBottom: '5px' }}>Cidade *</label>
          <InputCadastro placeholder="Insira sua cidade" type="text" />
          <label htmlFor="" style={{ paddingBottom: '5px' }}>CEP *</label>
          <InputCadastro placeholder="Insira seu CEP" type="number" />
      </form>  
      </WrapperDados>
    </Wrapper>
    </Layout>
    </>
  );
}

export default CriarFormularioPage;
