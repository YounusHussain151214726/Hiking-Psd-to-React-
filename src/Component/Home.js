import { useState } from "react";

const Home = () => {

  return (
    <div>
      <header>
        <img src="Images/logo.jpg" alt="logo" className="logo" />

        <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Menu</a>
              </li>
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <input type="text" alt="serachbox" className="serachbox"/>
              </li>
            </ul>
          
        </nav>
      </header>

      <section className="intro">
        <h1 className="title">
          It's Time
          <br />
          For hiking
        </h1>
        <span className="span">Lorem ipsum dollar</span>

        <br />
        <a href="#">read more</a>

        <p className="hp">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          <br />
          Alias maxime harum dolore ullam vel repellendus quod sed tempore
          itaque, <br />
        </p>
      </section>

      <section className="cards">
        <h className="ch">let's go</h>
        <p1 classname="cp">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          eveniet aliquam, laudantium vel suscipit veritatis maxime, dolor
          perferendis.
        </p1>
        {/* card 1 */}
        <section className="card">
          <img src="../Images/card-1.jpg" alt="" className="card1i" />
          <h className="card1h">Lorem ipsum</h>
          <p className="card1p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </section>

        {/* card 2 */}
        <section className="card">
          <img src="./Images/card-2.jpg" alt="" className="card2i" />
          <h className="card2h">Lorem ipsum 2</h>
          <p className="card2p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </section>

        {/* card3 */}
        <section className="card">
          <img src="./Images/card-3.jpg" alt="" className="card3i" />
          <h className="card3h">lorem ipsum 3</h>
          <p className="card3p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </section>
      </section>
      <a href="#" className="card-a">
        Show more
      </a>

      <section>
        <div className="split">
          <div>
            {" "}
            <img src="./Images/card-2.jpg" alt="" className="box1-i" />
          </div>
          <div className="box1">
            <h className="box1-h">
              Discount up to <br /> 50% All excursions
            </h>
            <p className="box1-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              quasi accusamus optio.
            </p>
            <a href="#" className="box1-a">
              read more
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="split">
          
          <div className="box2">
            <h className="box2-h">
              {" "}
              january's promo:
              <br /> buy 1 grt 1 free
            </h>
            <p className="box2-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              quasi accusamus optio.
            </p>
            <a href="#" className="box2-a">
              Read more
            </a>
           
          </div>
          <div>
            <img src="./Images/box-4i.jpg" alt="" className="box2-i" />
          </div>
        </div>
      </section>
   
   
   
   <section>
<div className="bg1">
  <div className="bgc">
    <h className="bgch">hiking in the mountains</h>
    <p className="bgcp">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique ullam nostrum corrupti, aperiam porro tenetur modi ducimus eius</p>
  </div>
</div>


   </section>
   
   




<section>
<div className="bgi"></div>
</section>




<section className="contsec">

  <div className="context">
    <div className="c1">
      <h className="c1h">
      lorem ipsum
      </h>
      <p className="c1p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore officiis laboriosam pariatur asperiores eius veniam vero quod amet qui laudantium impedit, commodi debitis. Suscipit quod dignissimos illo officia quaerat. Veritatis.</p>
    </div>
    
    <div className="c2">
      <h className="c2h">lorem ipsum</h>
<p className="c2p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore officiis laboriosam pariatur asperiores eius veniam vero quod amet qui laudantium impedit, commodi debitis. Suscipit quod dignissimos illo officia quaerat. Veritatis.</p>
    </div>
    <div className="c3">
      <h className="c3h">lorem ipsum</h>
      <p className="c3p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore officiis laboriosam pariatur asperiores eius veniam vero quod amet qui laudantium impedit, commodi debitis. Suscipit quod dignissimos illo officia quaerat. Veritatis.</p>
    </div>
  </div>

  <div className="quote">
    <div className="sqoute">
<p className="qp">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt quae omnis fugit sequi optio rerum modi voluptates quis veritatis reiciendis autem.</p>
<span className="qs">Lorem ipsum</span>
    </div>
  </div>
</section>







<section>
<div className="titlehere">
  <h className="thh">title here</h>
  <p className="thp">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse illo, dignissimos nam.</p>
  <input type="text" className="thi" />
<span className="ths">subcribe</span>
</div>


</section>


   





<section>
  <div className='splitftr'>

<div className="ftcd">
  <h className="ftrh">title here</h>
  <p className="ftrp">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores culpa quae aliquam voluptatem architecto? Sequi, laudantium consequatur? Labore.</p>
  <a href="" className="ftra"></a><a href="" className="ftra"></a><a href="" className="ftra"></a><a href="" className="ftra"></a>
</div>


<section className="ftruls">

<div className="ftruld1">
  <ul>
    <li><strong>about</strong></li>
    <li>history</li>
    <li>our team</li>
    <li>brand guidlines</li>
    <li>term & conditions</li>
    <li>privacy policy</li>
  </ul>
</div>



<div className="ftruld2">
  <ul>
    <li><strong>services</strong></li>
    <li>how to order</li>
    <li>our product</li>
    <li>order status</li>
    <li>promo</li>
    <li>payment method</li>
  </ul>
</div>


<div className="ftruld3">
  <ul>
    <li><strong>others</strong></li>
    <li>contact us</li>
    <li>help us</li>
    <li>privacy </li>
   
  </ul>
</div>
</section>

  </div>
</section>






    </div>
  );
};

export default Home;
