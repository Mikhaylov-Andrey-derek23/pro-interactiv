import React, {useState, useEffect} from 'react';

import Booth from './Booth'

function PhotoBooths(){

    const [valueSelectd, setValueSelected] = useState('1') 

    const [items, setitems] = useState([])
    const [finalItems, setFinalItems] = useState([])

    useEffect(()=>{
      fetch("app/data.json").then(result => {
        return result.json();
      }).then(answer => {
        setitems(answer);
        setFinalItems(answer)
    })},[])

    useEffect(()=>{
        switch(valueSelectd){
            case '2':
                const result = [...items];
                result.sort((a, b) => {
                    return a.price - b.price
                });
                setFinalItems(result);
                break;
            case '3':
                const result2 = [...items];
                result2.sort((a, b) => {
                    return b.price - a.price
                });
                setFinalItems(result2);
                break;
            default:
                setFinalItems(items)    
           

        }
    },[valueSelectd])
    

    return(
        <div className="mt-5">
            <h2 className="fw-bold">Фотобудки</h2>
            <div className="d-flex align-items-center mb-3">
                <p className="me-2 mb-0">Сортровка:</p>
                <select className="form-select" style={{width: '162px', fontSize: '14px' }} defaultValue = {valueSelectd} onChange={(e)=>{setValueSelected(e.target.value)}}>
                    <option value="1">По умолчанию</option>
                    <option value="2">По возрастанию</option>
                    <option value="3">По убыванию</option>
                </select>
            </div>
            {finalItems.length > 0 ?  finalItems.map(e => <Booth item={e} key={e.id}/>) : ''}
        </div>

        
    )
}

export default PhotoBooths