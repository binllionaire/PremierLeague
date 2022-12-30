import React, { useEffect, useState } from "react";

const MainPage_W = () => {
    return(
    <div id = "main_page">
        <div id = "contents">
            <div id = "schedule">
                <div id="schedule_page">
                    <div id ="calendar">
                    <p id="prev">&lt;</p>
                    <p id='date'>2022-12-30</p>
                    <p id="next">&gt;</p>
                    </div>
                </div>
            </div>
            <div id = "leaderboard">
                <div id="leaderboard_page">
                    <p id='sub_title'>순위표</p>
                </div>
            </div>
        </div>
        <div id="title">
            <p id="logo">#PremierLeague</p>
        </div>
        <style jsx>{`
        *{
            
        }
        :root{
            --maincolor : #32063A;
        }
        #main_page{
            width : 100%;
        }
        #contents{
            width : 90%;
            float:left;
            height : 100vh;
            background-color : var(--maincolor);
        }
        #schedule{
            background-color : var(--maincolor);
            width:50%;
            height : 100vh;
            float:left;
        }
        #schedule_page{
            background-color : white;
            width:90%;
            height:90%;
            margin:30px auto 0 auto;
            border-radius:20px;
            }
        
        #calendar{
            width:100%;
        }
        #prev{
            width:20%;
            float:left;
            padding-top:30px;
            font-size:30px;
            text-align:center;
        }
        #next{
            font-family: 'Pretendard-Regular';
            width:20%;
            float:left;
            padding-top:30px;
            font-size:30px;
            text-align:center;
        }
        #date{
            width:60%;
            float:left;
            font-family: 'Pretendard-Regular';
            text-align:center;
            padding-top:30px;
            font-size:30px;
        }
        #leaderboard{
            background-color : var(--maincolor);
            width:50%;
            height : 100vh;
            float:left;
        }
        #leaderboard_page{
            font-family: 'Pretendard-Regular';
            background-color : white;
            width:90%;
            height:90%;
            margin:30px auto 0 auto;
            border-radius:20px;
        }
        #sub_title{
            font-family: 'Pretendard-Regular';
            text-align:center;
            padding-top:30px;
            font-size:30px;
            font-weight:900;
        }
        #title{
            width : 10%;
            height : 100vh;
            overflow:hidden;
            background-color : var(--maincolor);
            float:right;
            position:relative;
        }
        #logo{
            font-family: 'Pretendard-Black';
            font-weight:900;
            width:100%;
            position:absolute;
            display:block;
            bottom:66%;
            left:0px;
            color : white;
            transform: rotate(90deg);
            font-size:80px;
            
        }
        `}</style>
    </div>
    );
}
export default MainPage_W;