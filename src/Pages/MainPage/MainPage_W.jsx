import React, { useEffect, useState } from "react";
import axios, * as others from 'axios';
const MainPage_W = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [openClicked, setOpenClicked] = useState(false);
    const [top1,setTop1] = useState("")
    const [top2,setTop2] = useState("")
    const [top3,setTop3] = useState("")
    const [top4,setTop4] = useState("")
    const cheerio = require("cheerio");
    
    const getHtml = async () => {
      
      try {
        return await axios.get("/94/England-Premier-League");
      } catch (error) {
        console.error(error);
      }
    };
    const parsing = async () => {
      const html = await getHtml();
      const $ = cheerio.load(html.data);
      console.log($("#overall > div:nth-child(1) > div > table > tbody > tr:nth-child(2) > td:nth-child(4) > a"
         ).text())
      setTop1($("#overall > div:nth-child(1) > div > table > tbody > tr:nth-child(2) > td:nth-child(4) > a").text())
      setTop2($("#overall > div:nth-child(1) > div > table > tbody > tr:nth-child(3) > td:nth-child(4) > a").text())
      setTop3($("#overall > div:nth-child(1) > div > table > tbody > tr:nth-child(4) > td:nth-child(4) > a").text())
      setTop4($("#overall > div:nth-child(1) > div > table > tbody > tr:nth-child(5) > td:nth-child(4) > a").text())
    };
    useEffect(() => {
        parsing()
        window.addEventListener('scroll', handleScroll); // 스크롤 이벤트 등록
        window.addEventListener('scroll', rollBall); // 스크롤 이벤트 등록
        
        return () => {
          window.removeEventListener('scroll', handleScroll); // 스크롤 이벤트 제거
          window.removeEventListener('scroll', rollBall); // 스크롤 이벤트 제거
         
        };
      }, []);
    
    const handleScroll = () => {
        console.log(window.scrollY)
        if(window.scrollY >= 500){
            setIsScrolled(true);
        }
        else{
            setIsScrolled(false);
        }
        var pos = document.getElementsByClassName("progress-container")[0].offsetTop
        var pos2 = document.getElementById("header-end").offsetTop
        var pos3 = document.getElementById("top1-img").offsetTop
        if(window.scrollY > pos2){
            document.getElementById("rank-title-1").style.display = "block";
            document.getElementById("rank-title-1").style.animation ="fadeInUp 1s";
        }
        else{
            document.getElementById("rank-title-1").style.display = "none";
        }
        if(window.scrollY > pos){
            document.getElementById("top1-img").style.display = "block";
            document.getElementById("top1-img").style.animation ="vanishIn 2s";
            document.getElementById("top1-img").style.animationFillMode="forwards";
            document.getElementById("team-title-1").style.display = "block";
            document.getElementById("team-title-1").style.animation ="vanishIn 1s";
        }
        else{
            document.getElementById("top1-img").style.display = "none";
            document.getElementById("team-title-1").style.display = "none";
        }
        if(window.scrollY > pos3){
            document.getElementById("rank-title").style.display = "block";
            document.getElementById("rank-title").style.animation ="fadeInUp 1s";
        }
        else{
            document.getElementById("rank-title").style.display = "none";
        }
        if(window.scrollY > pos3){
            document.getElementById("top2-img").style.display = "block";
            document.getElementById("top2-img").style.animation ="vanishIn 2s";
            document.getElementById("top2-img").style.animationFillMode="forwards";
            document.getElementById("team-title-2").style.display = "block";
            document.getElementById("team-title-2").style.animation ="vanishIn 1s";
        }
        else{
            document.getElementById("top2-img").style.display = "none";
            document.getElementById("team-title-2").style.display = "none";
        }
    }
    
    var i = 0;
    const rollBall = () => {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = ((window.scrollY-500)) * 0.1;
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
                <div className="h1" id="header-end">
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
                    <h3 id="leader-board-title">LEADER BOARD</h3>
                    <div className="team-intro-section">
                        <h2 id="rank-title-1" className="rank-title">TOP 1</h2>
                    </div>
                    <div className="team-title" id="team-title-1">{top1}</div>
                    
                    <div className="team-logo-section">
                        <img id = "top1-img" className="team-img" src="/img/Arsenal.png"></img>
                    </div>

                    <div className="team-intro-section">
                        <h2 id="rank-title">TOP 2</h2>
                    </div>
                    <div className="team-title" id="team-title-2">{top2}</div>
                    <div className="team-logo-section">
                        <img id = "top2-img" className="team-img" src="/img/team_manchester_city.png"></img>
                    </div>

                    <div className="team-intro-section">
                        <h2 id="rank-title">TOP 3</h2>
                    </div>
                    <div className="team-title" id="team-title-3">{top3}</div>
                    <div className="team-logo-section">
                        <img id = "top1-img" className="team-img" src="/img/team_newcastle.png"></img>
                    </div>
                    <h2 id="rank-title">TOP 4</h2>
                    <div className="team-title" id="team-title-4">{top4}</div>
                    <div className="team-logo-section">
                        <img id = "top1-img" className="team-img" src="/img/team_manchester_united.png"></img>
                    </div>
                    
                </div>

            </div>
            <div className="match-schedule-section">
                <div className="h3" >
                    <h3>TODAY'S MATCH</h3>
                </div>
                
            </div>
       </body>

        <style jsx>{`
            
            .rank-title{
                margin:0;
                animation-fill-mode: backwards;
            }
            .team-title{
                font-family: 'Archivo';
                animation-fill-mode: backwards;
                font-size:100px;
                margin-bottom:50px;
            }
            @keyframes vanishIn {
            0% {
                opacity: 0;
                transform-origin: 50% 50%;
                transform: scale(1, 1);
                filter: blur(90px);
            }
            100% {
                opacity: 0.9;
                transform-origin: 50% 50%;
                transform: scale(1, 1);
                filter: blur(0px);
            }
            
            }
        .team-logo-section{
            height:500px;
            margin:0 auto 0 auto;
            width:100%;
            
        }
        .team-intro-section{
            height:30px;
            margin:0 auto 0 auto;
            width:100%;
        }
        #leader-board-title{
            margin-top:0;
            margin-bottom:150px;
        }
            .leader-board-section{
                width:85%;
                margin:0 auto 0 auto;
                text-align:center;
            }
            .team-img{
                margin:0 auto 0 auto;
                display:block;
                height:80%;
                animation-fill-mode: backwards;
            }
            #ball{
                float:right;
                transform: rotate(135deg);
            }
        .progress-container {
            padding-top:100px;
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
        @keyframes fadeIn {
            0% {
                opacity: 0;
            }
            50%{
                opacity: 0.5;
                
            }
            100%{
                opacity: 0;
                
            }
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