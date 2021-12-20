import './EstiloPago.css';
import React, { useState } from 'react';

const HtmlCheckOut = () => {
    const [nombre,setNombre]=useState('')
    const [direccion,setDireccion]=useState('')
    const [tarjeta,setTarjeta]=useState('')

    const  formaDePago = (e) => {
        e.preventDefault()
        alert([nombre,direccion,tarjeta])
     };
    
    return (


        <>
            <h2>Medio de Pago</h2>
            <div className="row">
                <form id="validate" method="POST" action="http://localhost:3000/htmlcheckOut" onSubmit={(e)=>formaDePago(e)}>
                    <div className="row">
                        <div className="col-50">
                            <h3>Dirección de envio de compra</h3>
                            <label htmlFor="fname"><i className="fa fa-user"></i>Nombre completo: </label>
                            <input type="text" id="fname" name="fullname" placeholder="Fabian Gemelli" required onChange={(e)=>setNombre(e.target.value)} value={nombre}></input>
                            <label htmlFor="email"><i className="fa fa-envelope"></i> Email</label>
                            <input type="text" id="email" name="email" placeholder="fabian.gemelli.abalao@gmail.com" required></input>
                            <label htmlFor="adr"><i className="fa fa-address-card-o"></i> Dirección: </label>
                            <input type="text" id="adr" name="address" placeholder="Azambuya 2586 AP 602 esquina Montecaceros" required onChange={(e)=>setDireccion(e.target.value)} value={direccion}></input>
                            <label htmlFor="city"><i className="fa fa-institution"></i> Ciudad: </label>
                            <input type="text" id="city" name="city" placeholder="Montevideo" required></input>

                            <div className="row">
                                <div className="col-50">
                                    <label htmlFor="state">Departamento: </label>
                                    <input type="text" id="state" name="state" placeholder="Montevideo" required></input>
                                </div>

                                <div className="col-50">
                                    <label htmlFor="zip">Codigo Zip: </label>
                                    <input type="text" id="zip" name="zip" placeholder="11600" required></input>
                                </div>
                            </div>
                        </div>

                        <div className="col-50">
                            <h3>Pagos</h3>
                            <label htmlFor="fname">Tarjetas aceptadas</label>
                            <div className="icon-container">
                                <i className="fa fa-cc-visa" style={{color:"navy"}}></i>
                                <i className="fa fa-cc-amex" style={{color:"blue"}}></i>
                                <i className="fa fa-cc-mastercard" style={{color:"red"}}></i>
                                <i className="fa fa-cc-discover" style={{color:"orange"}}></i>
                            </div>

                            <label htmlFor="cname">Nombre tarjeta de credito</label>
                            <input type="text" id="cname" name="cardname" placeholder="Fabian Gemelli" required onChange={(e)=>setTarjeta(e.target.value)} value={tarjeta}></input>
                            <label htmlFor="ccnum">Número de tarjeta de Credito</label>
                            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" required></input>
                            <label htmlFor="expmonth">Més de expiración</label>
                            <input type="text" id="expmonth" name="expmonth" placeholder="Octubre" required></input>
                            <div className="row">
                                <div className="col-50">
                                    <label htmlFor="expyear">Año de expiración</label>
                                    <input type="text" id="expyear" name="expyear" placeholder="2021" required></input>
                                </div>
                                <div className="col-50">
                                    <label htmlFor="cvv">CVV</label>
                                    <input type="text" id="cvv" name="cvv" placeholder="352" required></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <label type="checkbox" name="sameadr"> Dirección débe ser igual al método de pago </label>
                    <input type="submit" value="Gracias por tu compra" className="btn"></input>
                </form>
            </div>                       
                   </>);
};
export default HtmlCheckOut
