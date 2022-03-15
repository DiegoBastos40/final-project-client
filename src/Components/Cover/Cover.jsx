import { useState } from 'react';

import MyVerticallyCenteredModal from '../Modal/Modal';

import Button from 'react-bootstrap/Button'

import styled from "styled-components";

const SectionTag = styled.section`
  {
    background: url(https://images.pexels.com/photos/2092479/pexels-photo-2092479.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940) center no-repeat;
 
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
  }
  h1{
      font-size: 5em;
  }
  p{
      width: 30em;
      max-width: 100vw;
  }
  div{
    background-color: rgba(0,0,0, 0.5);
  }
`;
  

function Cover() {
    const [modalShow, setModalShow] = useState(false);


    return (
        <SectionTag>
           {/*  <div>
                
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    Launch vertically centered modal
                </Button>

                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div> */}
        </SectionTag>
    );
  }
  
  export default Cover;