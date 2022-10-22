import React, { useState } from 'react'
import  {Row,Form,Button} from 'react-bootstrap'
import { quetions } from '../data'
const FormInput = ({onAdd , toast}) => {
  const [qu, setQu] = useState('')
  const [an, setAn] = useState('')
  const handleAddData = ()=>{
      const newData = {id:Math.random() , q:qu , a:an}
      if(qu === '' || an ===''){
        toast('please enter the quetion or answer' , 'Error')
        return
      }
        quetions.push(newData)
        setQu('')
        setAn('')
        onAdd()
        toast('add success' , 'Success')
  }
  return (
    <Row>
        <Form className='d-flex'>
        <Form.Control value={qu} onChange={e=>setQu(e.target.value)} type="text" placeholder="Enter quetion"/>
        <Form.Control value={an} onChange={e=>setAn(e.target.value)} type="text" placeholder="Enter Answer"  className='mx-3'/>

      <Button onClick={handleAddData} variant="primary" style={{backgroundColor:'steelblue'}}>
        Submit
      </Button>
    </Form>
    </Row>
  )
}

export default FormInput