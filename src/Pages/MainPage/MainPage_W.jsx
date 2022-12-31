import React, { useEffect, useState } from "react";

const MainPage_W = () => {
    return(
    <div className = "main-page">
        <div className="nav-section">
            <nav id="nav-wrapper">
                    <img id="open" src="/img/plus.png" width="50px" height="50px"></img>
                    <div className="open-menu">

                    </div>
            </nav>
       </div>

       <header className="header-section">
            <div className="divider"></div>
            <div className="header-intro">
                <div className="h1">
                    <h1>PREMIER</h1>
                </div>
                <div className="h1">
                    <h1>LEAGUE</h1>
                </div>
                <div className="h1" >
                    <h1>SCHEDULE</h1>
                </div>
                <div className="h1">
                    <h1>AND</h1>
                </div>
                <div className="h1">
                    <h1>LEADER</h1>
                </div>
                <div className="h1">
                    <h1>BOARD</h1>
                </div>
            </div>
       </header>

        <style jsx>{`
        .main-page{
            width:100%;
            background-color: #d91a32;
        }
        .nav-section{
            width:85%;
            margin: 0 auto 0 auto;
            background-color: #d91a32;
            height:150px;
        }
        #open{
            float:right;
            margin:50px;
            cursor:pointer;
        }
        .header-section{
            background-color: #d91a32;
            margin: 0 auto 0 auto;
            width:85%;
        }
        .divider{
            border-top:2px solid black;
            height:40px;
            margin : 0 auto 20px auto;
        }
        h1{
            font-family: 'Archivo';
            font-weight: 400;
            font-size: 12vw;
            line-height: 0.9;
            margin-top: 0px;
            margin-bottom: 0px;
            position: relative;
            display: block;
        }
        #open{
            transition: all ease 1s;
            
        }
        #open:hover {
            transform: rotate(135deg );
            transform-origin : 50% 50%;
        }
        @keyframes .header-intro {
            0%{
            clip-path:polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
            transform:translateY(100%);
            }
            95%{
                transform:translateY(0%);
            }
            100%{
                clip-path:polygon(0% 00%, 100% 0%, 100% 100%, 0% 100%);
            }
        }
        `}</style>
    </div>
    );
}
export default MainPage_W;