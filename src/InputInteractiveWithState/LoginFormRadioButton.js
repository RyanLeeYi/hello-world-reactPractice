import React, { useEffect, useState } from "react";

const LoginFormRadioButton = () => {
    const [nowSelect, setNowSelect] = useState("789");
    const [isCheck, setIsCheck] = useState(false);

    return (
        <div>
            <input type="radio" value="123" checked={nowSelect === "123"} onChange={(e) => { setNowSelect("123") }} />123<br />
            <input type="radio" value="456" checked={nowSelect === "456"} onChange={(e) => { setNowSelect("456") }} />456
            <div>
                目前select:{nowSelect}
            </div>
        </div>
    )
}
export default LoginFormRadioButton;