"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [list1, setList1] = useState("");

  const getPost = async () => {
    try {
      let res = await fetch(
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json",
        {
          method: "GET",
        }
      );
      if (res) {
        const data = await res.json();
        if (data) setList1(data);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPost();
  }, []);

  return (
    <section>
      {list1 &&
        list1.map((ele) => {
          return <div key={ele.id}>{ele.color}</div>;
        })}
    </section>
  );
}
