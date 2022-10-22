import React from 'react'
import { Accordion, Button } from 'react-bootstrap'
import { quetions } from '../data'
const QAList = ({ deleteOneItem , toast}) => {
  const dataLocal =JSON.parse(localStorage.getItem("items")) 
  const handleDeleteItem = (ID)=>{
      if(localStorage.getItem("items") != null){
        const index = quetions.findIndex(item=> item.id === ID )
        quetions.splice(index , 1)
        deleteOneItem()
        toast('item deleted' , 'Success')
      }
  }
  return (
    <Accordion className='my-3'>
      {localStorage.getItem("items") != null ? dataLocal.map((item, index)=>(
        <Accordion.Item key={index} eventKey={item.id}>
        <Accordion.Header>{item.q}</Accordion.Header>
        <Accordion.Body className='d-flex justify-content-between'>
        <div>{item.a}</div>  
        <Button style={{backgroundColor:'steelblue'}} onClick={()=>handleDeleteItem(item.id)}>Delete</Button>
        </Accordion.Body>
      </Accordion.Item>
      )):<h2>no questions right now</h2>}
    </Accordion>
  )
}

export default QAList