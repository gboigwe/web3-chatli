import React, { useState, useContext } from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./Model.module.css";
import images from "../../assets";
import { ChatAppContect } from "../../Context/ChatAppContext";
import { Loader } from "../../Components/index";

const Model = ({
  openBox,
  title,
  address,
  head,
  info,
  smallInfo,
  image,
  functionName,
}) => {
  //USESTATE
  const [name, setName] = useState("");
  const [userAddress, setUserAddress] = useState(address);

  const { loading } = useContext(ChatAppContect);
  return (
    <div className={Style.Model}>
      <div className={Style.Model_box}>
        <div className={Style.Model_box_left}>
          <Image src={image} alt="chatli" width={600} height={600} />
        </div>
        <div className={Style.Model_box_right}>
          <h1>
            {title} <span>{head}</span>
          </h1>
          <p>{info}</p>
          <small>{smallInfo}</small>

          {loading == true ? (
            <Loader />
          ) : (
            <div className={Style.Model_box_right_name}>
              <div className={Style.Model_box_right_name_info}>
                <Image
                  src={images.USERNAME}
                  alt="user"
                  width={30}
                  height={30}
                />
                <input
                  type="text"
                  placeholder="your name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={Style.Model_box_right_name_info}>
                <Image src={images.ACCOUNT} alt="user" width={30} height={30} />
                <input
                  type="text"
                  placeholder={address || "Enter address.."}
                  onChange={(e) => setUserAddress(e.target.value)}
                />
              </div>

              <div className={Style.Model_box_right_name_btn}>
                <button onClick={() => functionName({ name, userAddress })}>
                  {""}
                  <Image src={images.SEND} alt="send" width={30} height={30} />
                  {""}
                  Submit
                </button>

                <button onClick={() => openBox(false)}>
                  {""}
                  <Image src={images.CLOSE} alt="send" width={30} height={30} />
                  {""}
                  Cancle
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Model;
