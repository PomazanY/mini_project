/** @jsxImportSource @emotion/react */
import { useTheme } from "@emotion/react";
import ContactsSocialLinks from "../ContactsSocialLinks/ContactsSocialLinks";

import { findUsStyle, textStyle } from "./styles";

const SocialContacts =()=>{
    const {colors} = useTheme()
    return(
        <div css={findUsStyle(colors.lightBg)}>
            <div css={textStyle}><p>Find us:</p></div>
            <ContactsSocialLinks/>
        </div>
    )
}
export default SocialContacts;