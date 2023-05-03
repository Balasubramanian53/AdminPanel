import React,{useState,useEffect,useRef} from 'react';
import {Link} from 'react-router-dom';
import Commerce from '@chec/commerce.js';
import { Table,Pagination} from "react-bootstrap";
import Restaurant from "../../../images/bannerimages/restaurantimage.png"


const ListRestaurant = () => {
	const commerce = new Commerce('pk_517267717706df3d39ab4a44126aae98baf632b72c612')
	const [products, setProducts] = useState([])
	// const [categories,setCategories] = useState([])
  
	
  
	useEffect(() => {
	  commerce.products.list()
		.then(res => {
		  console.log(res,"fg");
		  setProducts(res.data)        
		})
		.catch(err => console.log(err))
  },[setProducts])
  
  
	 
  const sort = 3;
  let jobPagination = Array(Math.ceil(products.length / sort))
	 .fill()
	 .map((_, i) => i + 1);
	 console.log(products,jobPagination,"jobPagination");
  const activePag = useRef(0);
  const jobData = useRef(
	products.slice(
		activePag.current * sort,
		(activePag.current + 1) * sort
	 )	
  );
  console.log(jobData,activePag,"jobData");
  const [demo, setdemo] = useState();
  const onClick = (i) => {
	 activePag.current = i;

	 jobData.current = products.slice(
		activePag.current * sort,
		(activePag.current + 1) * sort
	 );
	setdemo(
		products.slice(
		   activePag.current * sort,
		   (activePag.current + 1) * sort
		)
	 );
  };
  console.log(jobData.current,activePag,"jobData");
  return (
	 <div className="col-12">
        {/* Card */}
		<div className="card">
		   <div className="card-header">
			  <h4 className="card-title">Restaurant List</h4>
		   </div>
		   <div className="card-body">
        {/* Select */}
		   <div class="dataTables_length" id="example_length">
			<label>Show entries</label>
				<select  class="custom-select custom-select-sm form-control form-control-sm ml-1"  style={{width:"60px",height:"42px"}}>	
					<option value="10">10</option>
					<option value="25">25</option>
					<option value="50">50</option>
					<option value="100">100</option>
					</select>
		   </div> 
            {/* Search */}
			  <div data-test="datatable-input" class="mdb-datatable-filter flex-row" style={{float:"right",marginTop:"-40px"}}>
			     <input class="form-control form-control-sm ml-0 my-1" type="text" placeholder="Search" aria-label="Search" value=""/>
			  </div>
              {/* Table */}
			    <Table responsive className="w-100">
				   <div id="example_wrapper" className="dataTables_wrapper">
					  <table id="example" className="display w-100 dataTable">
					     <thead>
					        <tr>
                              <th>Sr No.</th>
                              <th>Restaurant Name</th>
                              <th>Restaurant Image</th>
			                  <th>Status</th>
                              <th>Action</th>
                            </tr>
					     </thead>
					  <tbody>
                         <tr>
                           <td>1</td>
                           <td>M H Maisur House & Fency Dhosa</td>
				           <td>
                             <img  src={Restaurant} width="250" height="100"/>
				           </td>
                           <td>
                             <div class="badge light badge-success">Publish</div>
                           </td>
				           <td >
                             <a class="btn btn-primary shadow btn-xs sharp mr-2" style={{height:"31px",width:"37px",padding:"6px",minWidth:"26px",minHeight:"26px"}}>
                                <i class="fa fa-edit" style={{fontSize:"18px"}}></i>
                             </a>
				           </td>
                         </tr>

				         <tr>
                            <td>2</td>
                            <td>KHODIYAR KRUPA DABELI & VADAPAV</td>
				            <td> 
                              <img src={Restaurant} width="250" height="100"/>
				            </td>
                            <td>
                               <div class="badge light badge-success">Publish</div>
                            </td>
                            <td>
                               <a  class="btn btn-primary shadow btn-xs sharp mr-2" style={{height:"31px",width:"37px",padding:"6px",minWidth:"26px",minHeight:"26px"}}>
                                 <i class="fa fa-edit" style={{fontSize:"18px"}}></i>
                               </a>
				            </td>
                         </tr>

				         <tr>
                          <td>3</td>
                          <td>Patel's Puff House</td>
				          <td> 
                            <img  src={Restaurant} width="250" height="100"/>
				          </td>
                          <td>
                            <div class="badge light badge-success">Publish</div>
                          </td>
                          <td >
                            <a class="btn btn-primary shadow btn-xs sharp mr-2" style={{height:"31px",width:"37px",padding:"6px",minWidth:"26px",minHeight:"26px"}}>
                               <i class="fa fa-edit" style={{fontSize:"18px"}}></i>
                            </a>
				          </td>
                         </tr>
                          
                         <tr>
                           <td>4</td>
                           <td>Navjivan Restaurant</td>
				           <td>
                             <img  src={Restaurant} width="250" height="100"/>
				           </td>
                           <td>
                             <div class="badge light badge-success">Publish</div>
                           </td>
				           <td >
                             <a class="btn btn-primary shadow btn-xs sharp mr-2" style={{height:"31px",width:"37px",padding:"6px",minWidth:"26px",minHeight:"26px"}}>
                                <i class="fa fa-edit" style={{fontSize:"18px"}}></i>
                             </a>
				           </td>
                         </tr>

				         <tr>
                            <td>5</td>
                            <td>B &amp; G Food Campus</td>
				            <td> 
                              <img src={Restaurant} width="250" height="100"/>
				            </td>
                            <td>
                               <div class="badge light badge-success">Publish</div>
                            </td>
                            <td>
                               <a  class="btn btn-primary shadow btn-xs sharp mr-2" style={{height:"31px",width:"37px",padding:"6px",minWidth:"26px",minHeight:"26px"}}>
                                 <i class="fa fa-edit" style={{fontSize:"18px"}}></i>
                               </a>
				            </td>
                         </tr>

				         <tr>
                          <td>6</td>
                          <td>McDonald's</td>
				          <td> 
                            <img  src={Restaurant} width="250" height="100"/>
				          </td>
                          <td>
                            <div class="badge light badge-success">Publish</div>
                          </td>
                          <td >
                            <a  class="btn btn-primary shadow btn-xs sharp mr-2" style={{height:"31px",width:"37px",padding:"6px",minWidth:"26px",minHeight:"26px"}}>
                               <i class="fa fa-edit" style={{fontSize:"18px"}}></i>
                            </a>
				          </td>
                         </tr>

                         <tr>
                           <td>7</td>
                           <td>Burger King</td>
				           <td>
                             <img  src={Restaurant} width="250" height="100"/>
				           </td>
                           <td>
                             <div class="badge light badge-success">Publish</div>
                           </td>
				           <td >
                             <a  class="btn btn-primary shadow btn-xs sharp mr-2" style={{height:"31px",width:"37px",padding:"6px",minWidth:"26px",minHeight:"26px"}}>
                                <i class="fa fa-edit" style={{fontSize:"18px"}}></i>
                             </a>
				           </td>
                         </tr>

				         <tr>
                            <td>8</td>
                            <td>Mahesh Pav Bhaji</td>
				            <td> 
                              <img src={Restaurant} width="250" height="100"/>
				            </td>
                            <td>
                               <div class="badge light badge-success">Publish</div>
                            </td>
                            <td>
                               <a  class="btn btn-primary shadow btn-xs sharp mr-2" style={{height:"31px",width:"37px",padding:"6px",minWidth:"26px",minHeight:"26px"}}>
                                 <i class="fa fa-edit" style={{fontSize:"18px"}}></i>
                               </a>
				            </td>
                         </tr>

				         <tr>
                          <td>9</td>
                          <td>CRACKED EGG</td>
				          <td> 
                            <img  src={Restaurant} width="250" height="100"/>
				          </td>
                          <td>
                            <div class="badge light badge-success">Publish</div>
                          </td>
                          <td >
                            <a class="btn btn-primary shadow btn-xs sharp mr-2" style={{height:"31px",width:"37px",padding:"6px",minWidth:"26px",minHeight:"26px"}}>
                               <i class="fa fa-edit" style={{fontSize:"18px"}}></i>
                            </a>
				          </td>
                         </tr>

                         <tr>
                           <td>10</td>
                           <td>Baskin Robbins</td>
				           <td>
                             <img  src={Restaurant} width="250" height="100"/>
				           </td>
                           <td>
                             <div class="badge light badge-success">Publish</div>
                           </td>
				           <td >
                             <a  class="btn btn-primary shadow btn-xs sharp mr-2" style={{height:"31px",width:"37px",padding:"6px",minWidth:"26px",minHeight:"26px"}}>
                                <i class="fa fa-edit" style={{fontSize:"18px"}}></i>
                             </a>
				           </td>
                         </tr>

				         <tr>
                            <td>11</td>
                            <td>YO YO FRANKIE AND MAGGI</td>
				            <td> 
                              <img src={Restaurant} width="250" height="100"/>
				            </td>
                            <td>
                               <div class="badge light badge-success">Publish</div>
                            </td>
                            <td>
                               <a  class="btn btn-primary shadow btn-xs sharp mr-2" style={{height:"31px",width:"37px",padding:"6px",minWidth:"26px",minHeight:"26px"}}>
                                 <i class="fa fa-edit" style={{fontSize:"18px"}}></i>
                               </a>
				            </td>
                         </tr>

				         <tr>
                          <td>12</td>
                          <td>Domino's Pizza</td>
				          <td> 
                            <img  src={Restaurant} width="250" height="100"/>
				          </td>
                          <td>
                            <div class="badge light badge-success">Publish</div>
                          </td>
                          <td >
                            <a class="btn btn-primary shadow btn-xs sharp mr-2" style={{height:"31px",width:"37px",padding:"6px",minWidth:"26px",minHeight:"26px"}}>
                               <i class="fa fa-edit" style={{fontSize:"18px"}}></i>
                            </a>
				          </td>
                         </tr>
                       </tbody>
					 </table>
                     {/* Pagination */}
					<div className="d-flex justify-content-between align-items-center mt-3">
					   <div className="dataTables_info">
						  Showing {activePag.current * sort + 1} to
						  {products.length <
						  (activePag.current + 1) * sort
							 ? products.length
							 : (activePag.current + 1) * sort}
						  of {products.length} entries
					   </div>
					   <div className="dataTables_paginate paging_simple_numbers">
						  <Pagination
							 className="pagination-primary pagination-circle"
							 size="lg"
						  >
							 <li
								className="page-item page-indicator "
								onClick={() =>
								   activePag.current > 1 &&
								   onClick(activePag.current - 1)
								}
							 >
								<Link className="page-link" to="#">
								   <i className="la la-angle-left" />
								</Link>
							 </li>
							 {jobPagination.map((number, i) => (
								<Pagination.Item
								   className={
									  activePag.current === i ? "active" : ""
								   }
								   onClick={() => onClick(i)}
								>
								   {number}
								</Pagination.Item>
							 ))}
							 <li
								className="page-item page-indicator"
								onClick={() =>
								   activePag.current + 1 <
									  jobPagination.length &&
								   onClick(activePag.current + 1)
								}
							 >
								<Link className="page-link" to="#">
								   <i className="la la-angle-right" />
								</Link>
							 </li>
						  </Pagination>
					   </div>
					</div>
				 </div>
			  </Table>
		   </div>
		</div>
	 </div>
  );
};
export default ListRestaurant