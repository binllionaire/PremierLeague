import React, { useEffect, useState } from "react";
import { BrowserView, MobileView } from 'react-device-detect';
import MainPage_W from "./MainPage_W"
const MainPage = () => {
    return(
        <div>
          { /* web */ }
          <BrowserView>
            <MainPage_W>
                
            </MainPage_W>
          </BrowserView>
          { /* mobile */ }
          <MobileView>
            MOBILE
          </MobileView>
        </div>
      )
}
export default MainPage;