import { Button } from "bootstrap";
import { useEffect,useState } from "react";
// import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";


export function Hoempagesmilestone(){
    const[det,setdet]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(details=>setdet(details))
    },[]);
    const downloadCSv=()=>{
        let csvContent='data:text/csv;charset=utf-8,'+
        "Title,category,Description,Price,Rating,Rating Count\n";
        det.forEach(product=>{
            const row=`${product.title},${product.category},${product.description},Rs:${product.price},${product.rating.rate},${product.rating.count}\n`;
            csvContent+=row;
        });
        const urlgent=encodeURI(csvContent);
        const Link=document.createElement('a');
        Link.setAttribute('href',urlgent);
        Link.setAttribute("download",'product_data.csv');
        document.body.appendChild(Link);
        Link.click();
    };
    return(
        
        <>
        {/* <Layout/> */}
        <table className="">
            <thead>
                
                <tr>

                    
                    <th>Image</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Action</th>
                </tr>
                <tr >
                
                    <td></td>
                    <td></td>
                    <td ></td>
                    <td></td>
                    <td></td>
                    <td style={{color:"red"}}></td>
                    <td></td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {det.map((Product,idx)=>(
                    <tr key={idx}>
                        <td>
                            {/* <Link to={/Jsonetails/${Product.id}}> */}
                                <img className="smallimage" src={Product.image} style={{height:60}}/>
                            {/* </Link> */}
                        </td>
                        <td>{Product.title}</td>
                        <td>{Product.description}</td>
                        <td>{Product.category}</td>
                        <td> Rs: {Product.price}</td>
                        <td><StarRatings rating={Product.rating.rate}
                        starRatedColor="gold"
                        numberOfStars={5}
                        starDimension="20px"/>
                        <br/>({Product.rating.count}reviews)</td>
                        <td>
                            <input className="col-3" type="number" min="0"/>
                        </td>
                        <td>
                          
                            <button className="btn btn-warning " style={{height:40}}>
                        AddtoCart
                        </button>
                        </td>
                        
                    </tr>
                ))}
            </tbody>
        </table>
        <br></br>
        <br></br>
        <div className="text-center">
            <button className="btn btn-primary mb-3" onClick={downloadCSv}>
                downloadCSv
            </button>
        </div>
        </>
    )
}