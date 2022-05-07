import { Link } from "@remix-run/react";
import { Fragment } from "react";

import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  return (
    <Fragment>
    <div className="home-screen container-fluid">
          <div className="home-cover">
                <div id="menu-jk" className="header">
                   <div className="container">
                       <div className="row">
                           <div className="col-md-3 logo">                               
                               <a data-toggle="collapse" data-target="#menu" href="#menu"><i className="fas d-block d-md-none small-menu fa-bars"></i></a>
                           </div>
                           <div id="menu" className="col-md-9 d-none d-md-block">
                               <ul>
                                   <li><a href="#">Home</a></li>
                                   <li><a href="#about_us">About Me</a></li>
                                   <li><a href="#services">Education</a></li>
                                   <li><a href="#skills">Publications</a></li>
                                   <li><a href="#cntact_us">Contact</a></li>
                               </ul>
                           </div>
                       </div>
                   </div>
               </div>
                <div className="container">
                   <div className="row home-detail">
                      <div className="col-md-5 animated bounceInLeft hom-img">
                          <img src="assets/images/nidia.png" alt="" />
                      </div>
                      <div className="col-md-7 animated bounceInRight homexp">
                           <h5>Hello I'm</h5>
                           <h2>Nidia Saca</h2>
                           <span>Doctor of Medicine (M.D.) Candidate, Year 4</span>
                           <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</p>
                           
                           <ul className="socil-icon">
                                <li>
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fab fa-instagram"></i></a> 
                                </li>
                                <li>
                                    <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fab fa-dribbble"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fab fa-behance"></i></a>
                                </li>
                           </ul>
                       </div>
                   </div>

                </div>
          </div>
        </div>
        
        
        <div id="about_us" className="about-us container-fluid">
           <div className="container">
               <div className="session-title row">
                    <h2>About Me</h2>
                    <p>There are many variations of passages of Lorem Ipsum available Lorem Ipsum available but the majority</p>
                    <div className="heading-line"></div>
                </div>
                <div className="about-row row">
                   <div className="image-col col-md-4">
                       <img src="assets/images/glasses.png" alt="" />
                       <button className="btn btn-primary"><i className="fas fa-download"></i> Download CV</button>
                   </div>
                   <div className="detail-col col-md-8">
                       <h2>Nidia Saca</h2>
                        <h6>Future Surgeon</h6>
                        <p>There are many variations of passages of Lorem Ipsum available but the majority is have suffered alteration in that some form by injected humour or randomised that words which don't look even slightly believable. If you are going a to use a passage of Lorem Ipsum you need to be sure there isn't anything embarrassing. There are is many variations of passages available.</p>
                          <div className="row">
                            <div className="col-md-6 col-12">
                                <div className="info-list">
                                    <ul>
                                        <li><span>Birthday:</span>05. 09.1987</li>
                                        <li><span>City:</span>Toranto</li>
                                        <li><span>Study:</span>Cambridge University</li>
                                        <li><span>Website:</span>www.smarteyeapps.com</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="info-list">
                                    <ul>
                                        <li><span>Age:</span>31 Years</li>
                                        <li><span>Degree:</span>Master</li>
                                        <li><span>Mail:</span>email@example.com</li>
                                        <li><span>Phone:</span>+01 454 548 4458</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        
                   </div>
                    
                    
                  
                </div>
           </div>    
            
        </div>
        
           
          <div id="services"  className="services container-fluid">
           <div className="container">
               <div className="session-title row">
                    <h2>Education</h2>
                    <p>There are many variations of passages of Lorem Ipsum available Lorem Ipsum available but the majority</p>
                    <div className="heading-line"></div>
                </div>
                <div className="services-row row">
                    <div className="col-md-4 seric-div">
                        <div className="service-card">
                            <i className="far fa-file-image"></i>
                            <h4>Graphic Design</h4>
                            <p>Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="col-md-4 seric-div">
                        <div className="service-card">
                           <i className="fas fa-desktop"></i>
                            <h4>Web Development</h4>
                            <p>Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="col-md-4 seric-div">
                        <div className="service-card">
                            <i className="fas fa-bullhorn"></i>
                            <h4>Digital Marketing</h4>
                            <p>Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="col-md-4 seric-div">
                        <div className="service-card">
                            <i className="fab fa-uikit"></i>
                            <h4>UI/UX Design</h4>
                            <p>Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="col-md-4 seric-div">
                        <div className="service-card">
                           <i className="fas fa-suitcase"></i>
                            <h4>Business Analysis</h4>
                            <p>Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="col-md-4 seric-div">
                        <div className="service-card">
                            <i className="fas fa-mobile-alt"></i>
                            <h4>Mobile App Development</h4>
                            <p>Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
              </div>
        </div>
               
         
        <div id="skills" className="skills container-fluid">
            <div className="row">
                <div className="col-md-6 skii-div tech-skill">
                    <div className="title">
                        <h2>Technical Skill</h2>
                        <p>There are many variations available but the majority</p>
                    </div>
                    
                    <ul>
                        <li>
                            <label htmlFor="">UI/UX Designer</label>
                                <div className="progress">
                                  <div className="progress-bar bg-warning" role="progressbar" style={{ width: '95%' }} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                        </li>
                         <li>
                            <label htmlFor="">JavaScript</label>
                                <div className="progress">
                                  <div className="progress-bar bg-warning" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                        </li>
                         <li>
                            <label htmlFor="">HTML5</label>
                                <div className="progress">
                                  <div className="progress-bar bg-warning" role="progressbar" style={{ width: '55%' }} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                        </li>
                         <li>
                            <label htmlFor="">PHP / MYSQL</label>
                                <div className="progress">
                                  <div className="progress-bar bg-warning" role="progressbar" style={{ width: '65%' }} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                        </li>
                         
                    </ul>
                </div>
                <div className="col-md-6 skii-div pro-skill">
                    <div className="title">
                        <h2>Technical Skill</h2>
                        <p>Professional Skills</p>
                    </div>
                     <ul>
                        <li>
                            <label htmlFor="">Photoshop</label>
                            <div className="progress">
                              <div className="progress-bar bg-warning progress-bar-striped" role="progressbar" style={{ width: '90%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                        </li>
                         <li>
                            <div className="progress">
                              <div className="progress-bar bg-warning progress-bar-striped" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                        </li>
                         <li>
                            <div className="progress">
                              <div className="progress-bar bg-warning progress-bar-striped" role="progressbar" style={{ width: '60%' }} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                        </li>
                         <li>
                            <div className="progress">
                              <div className="progress-bar bg-warning progress-bar-striped" role="progressbar" style={{ width: '70%' }} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>  
               

     <section id="testimonial" className="customer-serv">
            <div className="container">
                <div className="row session-title">
                    <h2>Happy Customers</h2>
                   
                </div>
    
                <div className="row ro-clo">
                    <div data-anijs="if: scroll, on: window, do: bounceInLeft animated, before: scrollReveal" className="col-12  col-md-6 col-lg-4">
                        <div className="shado-2 card-b">
                            <p>Classic Aqua water purify is good.Because its cure our purify that is called  health and gives good life. I suggest classic aqua for its best purify of water</p>
                        </div>
                        <div className="cust-det row">
                            <div className="col-sm-3 col-3 img-circl">
                                <img alt="" src="assets/images/testimonial/member-01.jpg" />
                            </div>
                            <div className="col-sm-5 col-5 an-mtc no-padding">
                                <b>Sarath Ali</b>
                                <p>(Sales Agent)</p>
                            </div>
                            <div className="col-sm-4 col-4 star-par">
                                <ul className="stars">
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12  col-md-6 col-lg-4">
                        <div className="shado-2 card-b">
                            <p> have use this product at my home last 1 and half year of this. This product quality is good.Its good quality product for use it can improve water Quality.
                            </p>
                        </div>
                        <div className="cust-det row">
                            <div className="col-sm-3 col-3 img-circl">
                                <img alt="" src="assets/images/testimonial/member-02.jpg" />
                            </div>
                            <div className="col-sm-5 col-5 an-mtc no-padding">
                                <b>Binny Aderson</b>
                                <p>(Sales Agent)</p>
                            </div>
                            <div className="col-sm-4  col-4 star-par">
                                <ul className="stars">
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div data-anijs="if: scroll, on: window, do: bounceInRight animated, before: scrollReveal" className="col-12  col-md-6 col-lg-4">
                        <div className="shado-2 card-b">
                            <p>Very essensial product.it is clean and helthy water is mutually most important so that acqa is fufil its quality.our life now a days very tressful and restless</p>
                        </div>
                        <div className="cust-det row">
                            <div className="col-sm-3 col-3 img-circl">
                                <img alt="" src="assets/images/testimonial/member-03.jpg" />
                            </div>
                            <div className="col-sm-5 col-5 an-mtc no-padding">
                                <b>Arjun Samluel</b>
                                <p>(Sales Agent)</p>
                            </div>
                            <div className="col-sm-4 col-4 star-par">
                                <ul className="stars">
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>
    
        </section>   
              
    
              
       <div id="generic_price_table">
       <section className="container-fluid price-tab">
           <div className="container">
                <div className="row session-title">
                   <h2>Our Attractive Pricing</h2>
                   <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
               </div>
           </div>
           <div className="container">

               <div className="row price-row">
                   <div className="col-md-4">

                       <div className="generic_content clearfix nnj">

                           <div className="generic_head_price clearfix">

                               <div className="generic_head_content clearfix">

                                   <div className="head_bg"></div>
                                   <div className="head">
                                       <span>Basic</span>
                                   </div>

                               </div>

                               <div className="generic_price_tag clearfix">
                                   <span className="price">
                                       <span className="sign">$</span>
                                       <span className="currency">99</span>
                                       <span className="cent">.99</span>
                                       <span className="month">/MON</span>
                                   </span>
                               </div>

                           </div>

                           <div className="generic_feature_list">
                               <ul>
                                   <li><span>2GB</span> Bandwidth</li>
                                   <li><span>150GB</span> Storage</li>
                                   <li><span>12</span> Accounts</li>
                                   <li><span>7</span> Host Domain</li>
                                   <li><span>24/7</span> Support</li>
                               </ul>
                           </div>

                           <div className="generic_price_btn clearfix">
                               <a className="" href="">Sign up</a>
                           </div>

                       </div>

                   </div>

                   <div className="col-md-4">

                       <div className="generic_content active clearfix nnj">

                           <div className="generic_head_price clearfix">

                               <div className="generic_head_content clearfix">

                                   <div className="head_bg"></div>
                                   <div className="head">
                                       <span>Standard</span>
                                   </div>

                               </div>

                               <div className="generic_price_tag clearfix">
                                   <span className="price">
                                       <span className="sign">$</span>
                                       <span className="currency">199</span>
                                       <span className="cent">.99</span>
                                       <span className="month">/MON</span>
                                   </span>
                               </div>

                           </div>

                           <div className="generic_feature_list">
                               <ul>
                                   <li><span>2GB</span> Bandwidth</li>
                                   <li><span>150GB</span> Storage</li>
                                   <li><span>12</span> Accounts</li>
                                   <li><span>7</span> Host Domain</li>
                                   <li><span>24/7</span> Support</li>
                               </ul>
                           </div>

                           <div className="generic_price_btn clearfix">
                               <a className="" href="">Sign up</a>
                           </div>

                       </div>

                   </div>
                   <div className="col-md-4">

                       <div className="generic_content clearfix nnj">

                           <div className="generic_head_price clearfix">

                               <div className="generic_head_content clearfix">

                                   <div className="head_bg"></div>
                                   <div className="head">
                                       <span>Unlimited</span>
                                   </div>

                               </div>

                               <div className="generic_price_tag clearfix">
                                   <span className="price">
                                       <span className="sign">$</span>
                                       <span className="currency">299</span>
                                       <span className="cent">.99</span>
                                       <span className="month">/MON</span>
                                   </span>
                               </div>

                           </div>

                           <div className="generic_feature_list">
                               <ul>
                                   <li><span>2GB</span> Bandwidth</li>
                                   <li><span>150GB</span> Storage</li>
                                   <li><span>12</span> Accounts</li>
                                   <li><span>7</span> Host Domain</li>
                                   <li><span>24/7</span> Support</li>
                               </ul>
                           </div>

                           <div className="generic_price_btn clearfix">
                               <a className="" href="">Sign up</a>
                           </div>

                       </div>

                   </div>
               </div>

           </div>
       </section>

   </div>
          
              
              
               
  
    
        <div id="portfolio" className="gallery">    
           <div className="container">
              <div className="session-title row">
                    <h2>Portfolio</h2>
                    <p>Take a look at some of our latest work</p>
                    <div className="heading-line"></div>
                </div>
              <div className="row">
                

        <div className="gallery-filter d-none d-sm-block">
            <button className="btn btn-default filter-button" data-filter="all">All</button>
            <button className="btn btn-default filter-button" data-filter="hdpe">Finance</button>
            <button className="btn btn-default filter-button" data-filter="sprinkle">Digital Marketing</button>
            <button className="btn btn-default filter-button" data-filter="spray"> Money</button>
            <button className="btn btn-default filter-button" data-filter="irrigation">Business Alaysis</button>
        </div>
        <br/>



            <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter hdpe">
                <img src="assets/images/gallery/gallery_01.jpg" className="img-responsive" />
            </div>

            <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter sprinkle">
                <img src="assets/images/gallery/gallery_02.jpg" className="img-responsive" />
            </div>

            <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter hdpe">
                <img src="assets/images/gallery/gallery_03.jpg" className="img-responsive" />
            </div>

            <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter irrigation">
                <img src="assets/images/gallery/gallery_04.jpg" className="img-responsive" />
            </div>

            <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter spray">
                <img src="assets/images/gallery/gallery_05.jpg" className="img-responsive" />
            </div>

          

            <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter spray">
                <img src="assets/images/gallery/gallery_06.jpg" className="img-responsive" />
            </div>

            <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter irrigation">
                <img src="assets/images/gallery/gallery_09.jpg" className="img-responsive" />
            </div>

            <div className="gallery_product col-lg-3 col-md-4 col-sm-3 col-xs-6 filter irrigation">
                <img src="assets/images/gallery/gallery_08.jpg" className="img-responsive" />
            </div>

            
        </div>
    </div>
       
       
       </div>
        
          
                                      
    <section id="cntact_us" className="contact-us-single">
        <div className="row no-margin">
            <div className="col-sm-6 no-padding">
                 <iframe style={{ width:'100%', border: 0 }} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d249759.19784092825!2d79.10145254589841!3d12.009924873581818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1448883859107"  height="480" frameBorder="0" allowFullScreen></iframe>
            </div>
            <div  className="col-sm-6 cop-ck">
                <h2 >Contact Form</h2>
                    <div className="row cf-ro">
                        <div  className="col-sm-3"><label>Enter Name :</label></div>
                        <div className="col-sm-8"><input type="text" placeholder="Enter Name" name="name" className="form-control input-sm" /></div>
                    </div>
                    <div  className="row cf-ro">
                        <div  className="col-sm-3"><label>Email Address :</label></div>
                        <div className="col-sm-8"><input type="text" name="name" placeholder="Enter Email Address" className="form-control input-sm" /></div>
                    </div>
                     <div  className="row cf-ro">
                        <div  className="col-sm-3"><label>Mobile Number:</label></div>
                        <div className="col-sm-8"><input type="text" name="name" placeholder="Enter Mobile Number" className="form-control input-sm" /></div>
                    </div>
                     <div  className="row cf-ro">
                        <div  className="col-sm-3"><label>Enter  Message:</label></div>
                        <div className="col-sm-8">
                          <textarea rows={5} placeholder="Enter Your Message" className="form-control input-sm"></textarea>
                        </div>
                    </div>
                     <div  className="row cf-ro">
                        <div  className="col-sm-3"><label></label></div>
                        <div className="col-sm-8">
                         <button className="btn btn-primary btn-sm">Send Message</button>
                        </div>
                </div>
            </div>
        </div>
    </section>   
    
                          

    <footer className="container-fluid footer">
        <div className="container">
            <div className="row footerro">
                <span className="tt">iPhone</span>
                <p> 
                    <span><a href="">HOME</a></span>
                    <span><a href="">ABOUT US</a></span>
                    <span><a href="">SKILLS</a></span>
                    <span><a href="">SERVICES</a></span>
                    <span><a href="">PORTFOLIO</a></span>
                 </p>
                <a href="">Copyright © Smarteyeapps.com | All right reserved.</a>
            </div>
        </div>
    </footer>    
    </Fragment>
  );
}
