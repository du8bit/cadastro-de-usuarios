import { useEffect, useState, useRef } from 'react'              // Importa hooks do React
import reactLogo from '../../assets/react.svg'                   // Importa imagem do logo do React
import viteLogo from '/vite.svg'                                   // Importa imagem do logo do Vite
import './style.css'                                             // Importa os estilos do componente
import Trash from '../../assets/trash.svg'                       // Importa imagem da lixeira
import api from '../../services/api'                             // Importa a instância da API configurada (Axios)

function Home() {
  // Estado para armazenar a lista de usuários
  const [users, setUsers] = useState([])

  // Referências para os campos do formulário
  const nameInput = useRef()
  const ageInput = useRef()
  const emailInput = useRef()

  // useEffect para buscar os usuários quando o componente é montado
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Faz a requisição GET para buscar os usuários
        const response = await api.get('/users')
        // Atualiza o estado com os dados recebidos
        setUsers(response.data)
      } catch (error) {
        console.error('Erro ao buscar usuários:', error)
      }
    }

    // Chama a função de buscar os usuários
    fetchUsers()
  }, []) // O array vazio indica que o efeito será executado apenas uma vez na montagem

  // Função para criar um novo usuário
  async function createUser() {
    try {
      // Cria o objeto com os dados dos inputs
      const newUser = {
        name: nameInput.current.value,
        age: ageInput.current.value,
        email: emailInput.current.value
      }

      // Envia uma requisição POST para criar o usuário
      const response = await api.post('/users', newUser)
      
      // Atualiza a lista de usuários adicionando o novo usuário sem refazer a requisição completa
      setUsers(prevUsers => [...prevUsers, response.data])

      // Limpa os campos do formulário após o cadastro
      nameInput.current.value = ''
      ageInput.current.value = ''
      emailInput.current.value = ''

    } catch (error) {
      console.error('Erro ao criar usuário:', error)
    }
  }

  // Função para deletar um usuário
  async function deleteUser(id) {
    try {
      // Envia uma requisição DELETE para remover o usuário com o ID informado
      await api.delete(`/users/${id}`)

      // Atualiza o estado removendo o usuário deletado, sem precisar refazer a busca completa
      setUsers(prevUsers => prevUsers.filter(user => user.id !== id))
      
    } catch (error) {
      console.error('Erro ao deletar usuário:', error)
    }
  }

  return (
    <div className='container'>
      {/* Formulário de cadastro */}
      <form onSubmit={(e) => e.preventDefault()}>
        <h1>Cadastro de Usuários</h1>
        {/* Campos de entrada, cada um usando uma ref para acessar o valor */}
        <input name='name' type='text' placeholder='Nome' ref={nameInput} />
        <input name='age' type='number' placeholder='Idade' ref={ageInput} />
        <input name='email' type='email' placeholder='Email' ref={emailInput} />
        {/* Botão que chama a função createUser para cadastrar um novo usuário */}
        <button type='button' onClick={createUser}>Cadastrar</button>
      </form>

      {/* Mapeia a lista de usuários e exibe um card para cada um */}
      {users.map(user => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          {/* Botão para deletar o usuário, chamando a função deleteUser passando o id */}
          <button onClick={() => deleteUser(user.id)}>
            <img src={Trash} alt="Ícone de Lixeira" width="24" height="24" />
          </button>
        </div>
      ))}
    </div>
  )
}

export default Home
