import axios from "axios";
import React from "react";
import { Fragment } from "react";
import { useState } from "react";
import { useEffect } from "react";
import style from "./main.module.css";
export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(import.meta.env.VITE_SERVER_JSON + "/products")
      .then((el) => {
        setData(el.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={style.cardWrapper}>
      {data.map((el, index) => {
        return (
          <Fragment key={index}>
            <div key={index} className={style.card}>
              <div className={style.cardImage}>
                <img
                  src={`https://picsum.photos/id/${index}/400/250`}
                  width={400}
                  height={250}
                />
              </div>
              <div className={style.cardText}>
                <h2 className={style.cardTitle}>{el.title}</h2>
                <p className={style.cardBody}>{el.description}</p>
              </div>
              <div className={style.cardPrice}>$56</div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}
