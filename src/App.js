import { useState } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap'
import FormInput from './components/FormInput';
import QAList from './components/Q&AList';
import {quetions} from './data'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [data, setData] = useState(quetions)
  const notify = (message , type)=>{
    if(type === 'Error'){
      toast.error(message)
    }else if(type==='Success'){
      toast.success(message)
    }
    
  }
  const handleDelete = ()=>{

    localStorage.removeItem('items')
    quetions.splice(0,quetions.length)
    setData('')
    notify('Success delete All' , 'Success')
  }

  return (
    <Container className='justify-content-center py-4'>
      <Row>
        <Col sm='4'>
          <div className='fs-5 fw-bold' style={{color:'steelblue'}}>
           Frequently asked questions and answers 
          </div>
        </Col>
        <Col sm='8'>
          <FormInput toast={notify} onAdd={()=>{setData([...quetions]);localStorage.setItem('items',JSON.stringify([...quetions]))}}/>
          <QAList toast={notify} data={data} deleteOneItem={()=>{setData([...quetions]);localStorage.setItem('items',JSON.stringify([...quetions]))}}/>
          {localStorage.getItem("items") != null &&<Button style={{backgroundColor:'steelblue'}} className='w-100' onClick={handleDelete}>Delete All</Button>}
          
        </Col>
      </Row>
      <ToastContainer/>
    </Container>

  );
}

export default App;
