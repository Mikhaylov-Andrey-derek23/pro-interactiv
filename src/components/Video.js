import React from 'react';
import { connect } from 'react-redux';
import {  bindActionCreators } from 'redux';
import * as action from '../redruser/actiom';

//<button className="btn btn-warning" onClick={() => modalWindow('video')}>Click</button>

function Video({modalWindow}){

    return(
        <div className="my-5 position-relative w-100 border border-danger border-2 rounded py-1" onClick={() => modalWindow('video')}>
            <img src="img/video.png" className="rounded mx-auto d-block" style={{width : '315px'}} alt="..."></img>

            <div className="position-absolute top-50 start-50 translate-middle">
                <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d)">
                    <circle cx="55" cy="51" r="35" fill="white"/>
                    </g>
                    <path d="M62.0833 51L50.75 42.5V59.5L62.0833 51Z" fill="#EE3D48" stroke="#EE3D48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                    <filter id="filter0_d" x="0" y="0" width="110" height="110" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="10"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                    </defs>
                </svg>

            </div>

            <div className="lower-circle position-absolute" style={{zIndex: -1}}>
            {/* <   svg width="164" height="185" viewBox="0 0 164 185" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d)">
                    <path d="M134 88.5C134 123.018 106.018 151 71.5 151C36.9822 151 9 123.018 9 88.5C9 53.9822 36.9822 26 71.5 26C106.018 26 134 53.9822 134 88.5ZM34 88.5C34 109.211 50.7893 126 71.5 126C92.2107 126 109 109.211 109 88.5C109 67.7893 92.2107 51 71.5 51C50.7893 51 34 67.7893 34 88.5Z" fill="#EE3D48"/>
                    </g>
                    <defs>
                    <filter id="filter0_d" x="-21" y="0" width="185" height="185" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="15"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.933333 0 0 0 0 0.239216 0 0 0 0 0.282353 0 0 0 0.5 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                    </defs>
                </svg> */}
            </div>

            <div className="position-absolute top-circles" style={{zIndex: -1}}>
            <svg width="83" height="44" viewBox="0 0 83 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="3.15405" cy="3.13376" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                <ellipse cx="3.15399" cy="12.5341" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                <ellipse cx="3.15399" cy="21.9345" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                <ellipse cx="3.15399" cy="31.3352" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                <ellipse cx="3.15399" cy="40.7358" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                <ellipse cx="12.616" cy="3.13351" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                <ellipse cx="12.616" cy="12.5341" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                <ellipse cx="12.616" cy="21.9345" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                <ellipse cx="12.616" cy="31.3352" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                <ellipse cx="12.616" cy="40.7358" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                <ellipse cx="22.0779" cy="3.13351" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                <ellipse cx="22.0779" cy="12.5341" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                <ellipse cx="22.0779" cy="21.9345" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                <ellipse cx="22.0779" cy="31.3352" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                <ellipse cx="22.0779" cy="40.7358" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                <ellipse cx="31.5399" cy="3.13351" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                <ellipse cx="31.5399" cy="12.5341" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                <ellipse cx="31.5399" cy="21.9345" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                <ellipse cx="31.5399" cy="31.3352" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                <ellipse cx="31.5399" cy="40.7358" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                <ellipse cx="41.0019" cy="3.13351" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                <ellipse cx="50.4639" cy="3.13351" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                <ellipse cx="59.9258" cy="3.13351" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                <ellipse cx="69.3878" cy="3.13351" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                <ellipse cx="78.8497" cy="3.13351" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                <ellipse cx="41.0019" cy="12.5341" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                <ellipse cx="50.4639" cy="12.5341" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                <ellipse cx="59.9258" cy="12.5341" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                <ellipse cx="69.3878" cy="12.5341" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                <ellipse cx="78.8497" cy="12.5341" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                <ellipse cx="41.0019" cy="21.9345" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                <ellipse cx="50.4639" cy="21.9345" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                <ellipse cx="59.9258" cy="21.9345" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                <ellipse cx="69.3878" cy="21.9345" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                <ellipse cx="78.8497" cy="21.9345" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                <ellipse cx="41.0019" cy="31.3352" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                <ellipse cx="50.4639" cy="31.3352" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                <ellipse cx="59.9258" cy="31.3352" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                <ellipse cx="69.3878" cy="31.3352" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                <ellipse cx="78.8497" cy="31.3352" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                <ellipse cx="41.0019" cy="40.7358" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                <ellipse cx="50.4639" cy="40.7358" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                <ellipse cx="59.9258" cy="40.7358" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                <ellipse cx="69.3878" cy="40.7358" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
                <ellipse cx="78.8497" cy="40.7358" rx="3.15399" ry="3.13351" fill="#EE3D48"/>
            </svg>

            </div>

        </div>
    )

}

const mapStateProps = (state) => {
    return {
        state
    }
}

const mapDispatchAction  = (dispatch) =>{
    const {modalWindow} = bindActionCreators(action, dispatch)
    return {
        modalWindow : (value) => {
            modalWindow(value)
        }
    }
}

export default connect(mapStateProps, mapDispatchAction)(Video);