import React, {useState} from 'react';

import Booth from './Booth'

function PhotoBooths(){

    const [valueSelectd, setValueSelected] = useState('1') 

    return(
        <div className="mt-5">
            <h2 className="fw-bold">Фотобудки</h2>
            <div className="d-flex align-items-center">
                <p className="me-2 mb-0">Сортровка:</p>
                <select className="form-select" style={{width: '162px', fontSize: '14px' }} defaultValue = {valueSelectd} onChange={(e)=>{setValueSelected(e.target.value)}}>
                    <option value="1">По умолчанию</option>
                    <option value="2">По возрастанию</option>
                    <option value="3">По убыванию</option>
                </select>
            </div>
            <p>{valueSelectd}</p>
            <Booth/>
        </div>

        
    )
}

export default PhotoBooths