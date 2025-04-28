/** @jsxImportSource @emotion/react */

import contactsSocialLinksItems from "./contactsSocialLinksItems";
import { contactsSocialLinksItemsStyle, contactsItems } from "./styles";



const ContactsSocialLinks = () => {
    const elements = contactsSocialLinksItems.map(({ href, icon }) =>
    (<li css={contactsItems} key={href}>
        <a href={href} target="_blank">{icon}</a>
    </li>))

    return (
        <ul css={contactsSocialLinksItemsStyle}>
            {elements}
        </ul>
    )
}
export default ContactsSocialLinks;