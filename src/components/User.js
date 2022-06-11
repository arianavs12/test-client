import React, { Fragment, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import '../App.css'


function User() {

    const [datos, setDatos] = useState({
        nombre:"",
        secondName:"",
        lastName:"",
        secondLastName:"",
        day:"",
        month:"",
        year:"",
        email:"",
        phone:""
    });

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    };

    
    const send = (e)=>{
        e.preventDefault();
        console.log(datos.nombre + ' ' + datos.lastName + ' ' + datos.month + '' + datos.phone)
    };


  return (
<Fragment key={datos.email}>
    <div>
        <Form onSubmit={send} className='formulario'>
            <div className='name'>
                <h4>¿Cuál es tu nombre?</h4>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control 
                    type="text" 
                    placeholder="Nombre"
                    name='nombre'
                    onChange={handleInputChange} 
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control 
                    type="text" 
                    placeholder="Segundo nombre"
                    name='secondName'
                    onChange={handleInputChange}  
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control 
                    type="text" 
                    placeholder="Apellido paterno"
                    name='lastName'
                    onChange={handleInputChange} 
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control 
                    type="text" 
                    placeholder="Apellido materno"
                    name='secondLastName' 
                    onChange={handleInputChange}  
                    />
                </Form.Group>
                <div className='card'>
                    <h4>{datos.nombre}</h4>
                    <h4>{datos.secondName}</h4>
                    <h4>{datos.lastName}</h4>
                    <h4>{datos.secondLastName}</h4>
                </div>
            </div>
            <div className='birth'>
                <h4>¿Cuál es tu fecha de nacimiento?</h4>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control 
                    type="text" 
                    placeholder="Dia" 
                    name='day'
                    onChange={handleInputChange} 
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control 
                    type="text" 
                    placeholder="Mes"
                    name='month'
                    onChange={handleInputChange} 
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control 
                    type="text" 
                    placeholder="Año"
                    name='year'
                    onChange={handleInputChange} 
                    />
                </Form.Group>
                <div className='card'>
                    <h4>{datos.day}</h4>
                    <h4>{datos.month}</h4>
                    <h4>{datos.year}</h4>
                </div>
            </div>
            <div className='contact'>
                <h4>Datos de contacto</h4>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control 
                    type="email" 
                    placeholder="Correo electrónico"
                    name='email'
                    onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control 
                    type="tel" 
                    placeholder="Teléfono celular "
                    name='phone'
                    onChange={handleInputChange}
                     />
                </Form.Group>
                <div className='card'>
                    <h4>{datos.email}</h4>
                    <h4>{datos.phone}</h4>
                </div>
                <Button style={{margin: 8}} variant="primary" type='submit'>Iniciar</Button> 
            </div>
            
        </Form>
    </div>
</Fragment>

    
  )
}

export default User;