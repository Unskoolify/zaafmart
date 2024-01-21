import React from 'react'
import { Collapse } from "react-collapse";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import ProductAccordion from './ProductAccordion';

export default function ProductDescription({ open, toggle, title, productDescription }) {
    return (
      <div className="pt-[10px] m-2">
        <div
          className="bg-white py-[20px] px-[20px] sm:px-[50px] flex justify-between items-center cursor-pointer text-black"
          onClick={toggle}
        >
          <p className="text-[18px] font-semibold">{title}</p>
          <div className="text-[30px]">
            {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </div>
        </div>
        <Collapse isOpened={open}>
          <div className="bg-white px-[10px] sm:px-[50px] pb-[20px]">
            <ProductAccordion productDescription={productDescription}/>
          </div>
        </Collapse>
      </div>
    );
  }
