import {useState} from 'react'
import './App.css';
import emailjs from '@emailjs/browser';
function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [messege, setMessege] = useState('')

  function sendEmail(e) {
    e.preventDefault();

    if(name === '' || email === '' || messege === '') {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      messege: messege,
      email: email
    }

    emailjs.send('service_jcc4gei', 'template_wpmnpdn', templateParams, 'mmRto9EDWK03A5uk-')
    .then((response) => {
      console.log("EMAIL ENVIADO", response.status, response.text)
      setName('')
      setEmail('')
      setMessege('')
    }, (err) => {
      console.log("ERRO: ", err)
    })
  }

  return (
    <div className="container">
      <h1 className='title'>Contato</h1>

      <form className='form' onSubmit={sendEmail}>
        {/* Nome */}
        <input
         className='input'
         type='text'
         placeholder='Digite seu Nome'
         onChange={(e) => setName(e.target.value)}
         value={name} 
        />

      {/* Email */}
        <input
         className='input'
         type='text'
         placeholder='Digite seu Email'
         onChange={(e) => setEmail(e.target.value)}
         value={email}
        />

      {/* Mensagem */}
      <textarea
      className='textarea'
      placeholder='Digite sua mensagem'
      onChange={(e) => setMessege(e.target.value)}
      value={messege}
      />

      <input className='button' type='submit' value='Enviar'/>
      </form>

    </div>
  );
}

export default App;
