import React, { useState, useEffect } from 'react'
import { datas } from '../datas';
import Card from './Card'
import './rent.css'



export default function Rent() {

  const [all__data, setall__data] = useState(datas);
  const [filter__data, setfilter__data] = useState(all__data)

  const [filter__inputs__data, setFilter__inputs__data] = useState({
    date: '',
    price: '',
    property__type: '',
    location: '',
    address: ''
  });

  const [city__input__data, setcity__input__data] = useState('');



  const handle__change = (e) => {
    setFilter__inputs__data({ ...filter__inputs__data, [e.target.name]: `${e.target.value.toLowerCase()}` })
  }

  function filter__condition__check(item) {
    let item__prices = item.price.split('/');
    let input__prices = filter__inputs__data.price.split('-');
    console.log(+(input__prices[0]) <= +(item__prices[0]) < +(input__prices[1]), 'check');
    return (filter__inputs__data.location.length > 0 ? filter__inputs__data.location === item.location : true) && (filter__inputs__data.date.length > 0 ? filter__inputs__data.date === item.date : true) &&
      (filter__inputs__data.price.length > 0 ? +(input__prices[0]) <= +(item__prices[0]) && +(item__prices[0]) < +(input__prices[1]) : true) && (filter__inputs__data.property__type.length > 0 ? filter__inputs__data.property__type === item.property__type : true);

  }


  const show__list = () => {
    let data = all__data.filter((item) => {
      return filter__condition__check(item);
    });
    setfilter__data(data);
  }


  const reset__list = () => {
    setfilter__data(datas);

  }


  const handle__change2 = (e) => {

    setcity__input__data({ [e.target.name]: e.target.value })


  }


  // const show__list__by__city = () => {
  //   let data = all__data.filter((item) => {
  //     return item.location == city__input__data.city;
  //   });

  //   setfilter__data(data)

  // }





  return (
    <>

      <div className="rent">

        <div className="search__banner">
          <h1>Search properties to rent</h1>
          <input type="text" name="city" id="" value={city__input__data.city} placeholder='Search with city' onChange={handle__change2} />

        </div>

        <div className="content">
          <div className="search__bar">
            <div className="filter">
              <p>Location</p>
              {/* <select value={filter__inputs__data.address} name="address" id="" onChange={handle__change}>
                <option value=""> select option</option>
                {
                  all__data.map((item) => {

                    return <option value={item.address}>{item.address}</option>
                  })
                }
              </select> */}
              <input type="text" value={filter__inputs__data.location} name="location" id="" onChange={handle__change} />
            </div>

            <div className="filter">


              <p>When</p>
              <input type="date" name="date" id="" value={filter__inputs__data.date} onChange={handle__change} />
            </div>

            <div className="filter">
              <p>Price</p>
              <select value={filter__inputs__data.price} name="price" id="" onChange={handle__change}>
                <option value=""> select option</option>
                <option value='1000-2000'>$1000-$2000</option>
                <option value='2000-3000'>$2000-$3000</option>
                <option value="3000-4000">$3000-$4000</option>
                <option value="4000-5000">4000$-$5000</option>
              </select>
            </div>

            <div className="filter">
              <p>property type</p>
              <select name="property__type" id="" onChange={handle__change} value={filter__inputs__data.property__type}>
                <option value=""> select option</option>
                <option value="house">House</option>
                <option value="banglow">banglow</option>

              </select>
            </div>
            <div className="filter" onClick={show__list}><button>Search</button></div>
            <div className="filter" onClick={reset__list}><button>All Item</button></div>
          </div>



          <div className="item__list">

            {

              Object.keys(filter__inputs__data).length > 0 ?
                filter__data.map((item, index) => {
                  return <Card key={index} card__data={item} />
                })
                : all__data.map((item, index) => {
                  return <Card key={index} card__data={item} />
                })
            }



            {

              Object.keys(city__input__data).length > 0 ?
                filter__data.map((item, index) => {
                  return <Card key={index} card__data={item} />
                }) : null


            }

          </div>

        </div>


      </div>

    </>
  )
}
