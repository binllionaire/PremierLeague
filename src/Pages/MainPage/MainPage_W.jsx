import React, { useEffect, useState } from "react";

const MainPage_W = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [openClicked, setOpenClicked] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll); // 스크롤 이벤트 등록
        window.addEventListener('scroll', rollBall); // 스크롤 이벤트 등록
        return () => {
          window.removeEventListener('scroll', handleScroll); // 스크롤 이벤트 제거
          window.removeEventListener('scroll', rollBall); // 스크롤 이벤트 제거
        };
      }, []);
    
    const handleScroll = () => {
        
        if(window.scrollY >= 500){
            setIsScrolled(true);
        }
        else{
            setIsScrolled(false);
        }
    }
    var i = 0;
    const rollBall = () => {
        
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = ((window.scrollY-500)/height) * 200;
        i+=7;
        document.getElementsByClassName("progress-bar")[0].style.width = scrolled + "%";
        document.getElementById("ball").style.transform = "rotate("+i+"deg)"
        
    }
    const openMenu = () => {
        if(openClicked === true){
            setOpenClicked(false)
        }
        if(openClicked === false){
            setOpenClicked(true)
        }
    }
    return(
    <div className = {isScrolled ? "main-page-scroll" :"main-page"}>
        <div className="nav-section">
            <nav id="nav-wrapper">
                    <img id="open" src="/img/plus.png" width="50px" height="50px" onClick={openMenu}></img>
                    <div className={openClicked ? "open-menu-show" : "open-menu"}>
                        <img id="close" src="/img/plus.png" width="50px" height="50px" onClick={openMenu}></img>
                        <div className="developer">
                            <p id="made-by">made by</p>
                            <div className="h4">
                            <h4>@binllionaire</h4>
                        </div>
                        </div>
                        <div className="menu">
                        <div className="h2">
                            <h2>SCHEDULE</h2>
                        </div>
                        <div className="h2">
                            <h2>LEADER BOARD</h2>
                        </div>
                        <div className="h2" >
                            <h2>ABOUT</h2>
                        </div>
                        </div>
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
       <body>  
            <div class="progress-container">
                <div class="progress-bar">
                    <img id="ball" src="/img/ball.png" width="100px"></img>
                </div>
            </div>
            
            <div className="leader-board-section">
                <div className="h2" >
                    <h3>LEADER BOARD</h3>
                </div>

            </div>
            <div className="match-schedule-section">
                <div className="h3" >
                    <h3>TODAY'S MATCH</h3>
                </div>
                
            </div>
       </body>

        <style jsx>{`
            .leader-board-section{
                height:700px;
            }
            #ball{
                float:right;
                transform: rotate(135deg);
            }
        .progress-container {
            margin-top:100px;
            width: 100%;
            height: 100px;
        }
    
        .progress-container .progress-bar {
            width: 0;
            height: 100px;
            border-bottom:1px solid white;
        }
        #made-by{
            margin-top:0px;
        }
        .main-page{
            width:100%;
            background-color: #d91a32;
            transition-duration: 0.5s;
            transition-timing-function: ease;
            -webkit-transition-duration:0.4s;
            -webkit-transition-timing-function:ease;
        }
        .main-page-scroll{
            width:100%;
            margin: 0 auto 0 auto;
            color:white;
            background-color: black;
            transition-duration: 0.5s;
            transition-timing-function: ease;
            -webkit-transition-duration:0.4s;
            -webkit-transition-timing-function:ease;
        }
        .nav-section{
            width:85%;
            margin: 0 auto 0 auto;
            background-color: transparent;
            height:150px;
            position: relative;
        }
        #open{
            float:right;
            margin:50px;
            cursor:pointer;
        }
        .open-menu-show{
            margin-top:0px;
            width:100%;
            color:white;
            background-color:black;
            
        }
        .open-menu{
            display:none;
        }
        .header-section{
            margin: 0 auto 0 auto;
            width:85%;
        }
        .divider{
            border-top:2px solid black;
            height:40px;
            margin : 0 auto 20px auto;
            animation: divider 1s ease-in-out both;
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
            animation: h1-anim 1s ease-in-out both;
        }
        #open{
            transition: all ease 1s;
            animation: fadeInDown 1s;
            
        }
        #open:hover {
            transform: rotate(135deg );
            transform-origin : 50% 50%;
        }
        @keyframes h1-anim {
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
        @keyframes fadeInDown {
            0% {
                opacity: 0;
                transform: translate3d(0, -100%, 0);
            }
            to {
                opacity: 1;
                transform: translateZ(0);
            }
        }
        #header-intro{
            position : relative;
        }
        
        @keyframes fadeInUp {
            0% {
                opacity: 0;
                transform: translate3d(0, 100%, 0);
            }
            to {
                opacity: 1;
                transform: translateZ(0);
            }
        }
        .bar-wrapper{
            width:0px;
        }
        `}</style>
    </div>
    );
}
export default MainPage_W;