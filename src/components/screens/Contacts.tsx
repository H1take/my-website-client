import React from "react";

import Footer from "../ui/layout/footer/Footer";

import "../../styles/Contacts.scss";

const Contacts = () => {
    return(
        <div className="contacts">
            <div className="contacts__main">
                <span className="contacts__main-text">
                    For any questions please mail me in telegram:
                </span>
                <span className="contacts__main-text-gradient">@H1takeee</span>
            </div>
            <Footer />
        </div>
    );
};

export default Contacts;