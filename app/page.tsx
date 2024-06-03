import Image from "next/image";
import Header from "./layouts/header";

import Footer from "./layouts/footer";
import ButtonComponent from "./components/Button";
import './home.css'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faGreaterThan, faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons'

import BriefIntro from '../public/brief_intro.png';
import cyber_security from '../public/cyber_security.png';
import product_management from '../public/product_management.png';
import startup_advisory from '../public/startup_advisory.png';
import big_data_advisory from '../public/big_data_advisory.png';
import cloud_services_management from '../public/cloud_services_management.png';
import devops_practices from '../public/devops_practices.png';
import technology_consulting from '../public/technology_consulting.png';
import our_services_section_bg from '../public/our_service_section_bg.png';
import quoteIcon from '../public/quote.png';
import Ellipse from '../public/Ellipse.png';
import homePerson from '../public/home_person.png';


const products = [
  {
    id: 0,
    name: "Cyber Secuirty",
    link: "/"
  },
  {
    id: 1,
    name: "Product Management",
    link: "/"
  },
  {
    id: 2,
    name: "Startup Advisory",
    link: "/"
  },
  {
    id: 3,
    name: "Technology Consulting",
    link: "/"
  },
  {
    id: 4,
    name: "Cloud Services Management",
    link: "/"
  },
  {
    id: 5,
    name: "Big Data Advisory",
    link: "/"
  },
  {
    id: 6,
    name: "Technology Operations",
    link: "/"
  },
]

const services = [
  {
    id: 0,
    title: "Cyber Security",
    content: "Are you exhausted from constant breaches and unauthorized access to your systems? Protect your company data and digital space from cyber threats and hackers by leveraging our top-notch advisory for cybersecurity which include continuous monitoring....",
    img: cyber_security,
    link: "cyber_security"
  },
  {
    id: 1,
    title: "Product Management",
    content: "Do you have a product idea that you want to bring to life? Are you uncertain about the features, direction and goals of the product you are trying to build? We specialize in guiding businesses like yours through the entire product lifecycle , from ideation, product develop.....",
    img: product_management,
    link: "product_management"
  },
  {
    id: 2,
    title: "Startup Advisory",
    content: "Launching a startup can feel like finding your way in the dark. From securing funding, developing market strategies to scaling operations, the journey is filled with lots of challenges and uncertainties .We are here to guide you through every stage of your startup....",
    img: startup_advisory,
    link: "startup_advisory"
  },
  {
    id: 3,
    title: "Big Data Advisory",
    content: "Are you drowning in a sea of data without a clear strategy to navigate through it? Do you struggle to derive actionable insights from your data? Are you unsure how to leverage your data to make strategic business decisions? Unlock the untapped....",
    img: big_data_advisory,
    link: "big_data_advisory"
  },
  {
    id: 4,
    title: "Cloud Services Management",
    content: "Is your business ready to embrace the scalability, flexibility, and cost-efficiency of cloud computing? Say goodbye to the constraints of traditional IT infrastructure. Whether you're a startup striving for rapid growth or an established enterprise seeking to revolutionize....",
    img: cloud_services_management,
    link: "cloud_services_management"
  },
  {
    id: 5,
    title: "Technology Operations- DevOps practices",
    content: "Are you seeking to streamline your technology operations and enhance efficiency? Do you aim to implement DevOps, CI/CD, or SRE practices to optimize your software delivery pipeline? Our technology operations service offers a holistic approach....",
    img: devops_practices,
    link: "devops_practices"
  },
  {
    id: 6,
    title: "Technology Consulting",
    content: "Are you facing technology-related challenges and seeking expert guidance to overcome them? Are you struggling to align your business with the demands of the digital era, unsure how to navigate the complexities of technology? Are your teams lacking the....",
    img: technology_consulting,
    link: "technology_consulting"
  }
]

const testimonials = [
  {
    id: 0,
    content: "I can't speak highly enough about the expertise and professionalism of the team at Losung. From product ideation to product development, they were with us every step of the way. Highly recommend!",
    name: "Nisi Sharma",
    star: 4
  },
  {
    id: 1,
    content: "Choosing Losung Consults was one of the best decisions we made for our company . Their attention to details made everything seamless.",
    name: "Laura Burton",
    star: 5
  },
  {
    id: 2,
    content: "Our expectations were exceeded in every way, We couldn’t be happier with the results.",
    name: "Jude Austin",
    star: 5
  },
  {
    id: 3,
    content: "The team’s deep understanding of our industry and innovative solutions helped us overcome our toughest challenges.",
    name: "Ali Hassan",
    star: 4
  },
  {
    id: 4,
    content: "Working with Losung was a game changer for my business",
    name: "Obi Ndubuisi",
    star: 5
  }
]

const Star = ({ filled}) => {

  return (
    <FontAwesomeIcon className={filled ? 'text-[#ffc107]' : 'text-[#ccc]'} icon={faStar as IconProp} />
    
  );
};

const starRating = (rating) => {
  return (
    <>
      {[...Array(5)].map((_, index) => (
        <span key={index}>
          <Star filled={rating > index} /> {/* Use rating for actual stars */}
        </span>
      ))}
    </>
  );
};


export default function Home() {
  
  return (
    <>
    <Header />
    <main className="">
      <section className="first_section w-[100%] flex items-center justify-between lg:px-5 xl:px-[90px]">
        <div className="px-[30px] md:px-[120px] lg:px-0 flex flex-col items-center  lg:items-start lg:w-[519px]">
          <h2 className="text-[45px] lg:text-[76px] text-center lg:text-left leading-10 lg:leading-[69px] font-normal font-Neuropolitical text-[#fff]">Artisans of Technology</h2>
          <p className="text-[12px] lg:text-[20px] my-6 text-center lg:text-left font-normal font-Neuropolitical text-[#fff]">At Losung Consult, technology is not just a tool but a canvas. 
            We paint with the brushes of innovation, 
            creating digital masterpieces that elevate your business.
          </p>
          <ButtonComponent  btnText="Explore Our Services" link="/" />
        </div>

        <div className="first_section_product hidden lg:flex flex-col p-[15px] border-2px
         border border-[#D4D4D4] border-solid border-opacity-50 rounded-[34px]">
          {products.map(product => (
            <Link className="first_section_product_list flex text-[20px] text-[#fff] font-normal 
            px-[25px] py-[5px] w-[427px] my-[10px] justify-between items-center border-2px border 
            border-[#D4D4D4] border-solid border-opacity-50 rounded-[34px]" 
            key={product.id} href={product.link}>
              <span>{product.name}</span>
              <i><FontAwesomeIcon icon={faGreaterThan as IconProp} /></i>
            </Link>
          ))}

          
          
        </div>
      </section>

      <section className="brief_intro_section bg-[#fff] pb-11 pt-[150px] px-6 lg:px-11">
          <div>
            <h3 className="text-[#0A0A0A] text-[20px] lg:text-[30px] font-bold text-center">Brief Introduction:</h3>
            <hr className="mx-auto w-[50px] lg:w-[60px] border-[#FFC102] border-[2px] border-solid"/>
          </div>

          <div className="mt-[20px] p-3 lg:p-6 flex flex-col-reverse lg:flex-row lg:items-start lg:justify-between 
          border-[0.5px] border-solid border-[rgb(197,197,197)] rounded-[18px]">
            <div className="mt-[20px] lg:w-[455px] xl:w-[663px] lg:mr-3">
                <div className="text-[#373737] text-[15px] lg:text-[17px] font-normal h-[95px]  lg:h-[100%] overflow-hidden">
                  <p>We are a <b>team of expert leaders</b> with extensive experience consulting across 
                  various industries, <b>empowering businesses</b> to thrive in today`&#39;`s dynamic landscape.<br/> 
                  Our diverse expertise spans cybersecurity, product management, digital transformation, 
                  startup advisory , technology consulting, cloud service management, Big data, DevOps and lots more.</p><br/>
                  
                  <p>Committed to driving tangible results, <b>we partner closely with our clients to understand their unique 
                  challenges and goals</b>, delivering tailored solutions that unlock growth, efficiency, and innovation. 
                  From optimizing operations to navigating complex challenges, we are dedicated to 
                  helping businesses ac<b>hieve sustainable succes</b>s through strategic consulting and actionable insights.</p>
                </div>

                <Link href="" className="text-[#065CBA] flex items-center justify-between w-[120px] my-[20px]"><span className="text-[17px] font-bold">Know more</span> 
                <i ><FontAwesomeIcon className="text-[20px]" icon={faArrowRight as IconProp} /></i></Link>
            </div>
            <div>
              <Image src={BriefIntro} alt="" className=""/>
            </div>
          </div>
      </section>

      <section className="our_services_section bg-[#fff] pb-11 pt-[60px] px-6 lg:px-11 relative">
          <div>
            <h3 className="text-[#0A0A0A] text-[20px] lg:text-[30px] font-bold text-center">Our Services</h3>
            <hr className="mx-auto w-[50px] lg:w-[60px] border-[#FFC102] border-[2px] border-solid"/>
          </div>

          <div className="card_wrapper mt-[20px] p-3 lg:p-6 flex flex-row flex-wrap lg:flex-row justify-between 
          border-[0.5px] border-solid border-[rgb(197,197,197)] rounded-[18px] lg:border-0 ">
             {services.map(serv => (
              <div key={serv.id} className="our_service_card lg:bg-[#ECF4FF] lg:p-[20px] w-[50%] lg:w-[351px] mb-6">
                <div  className="w-[43px] mx-auto">
                  <Image src={serv.img} alt=""/>
                </div>

                <h3 className="text-[15px] text-[#373737] lg:text-[25px] text-center lg:text-left font-bold mt-4">{serv.title}</h3>

                <p className="hidden lg:inline-block lg:text-[17px] lg:w-[316px] text-[#373737]">{serv.content}</p>

                <Link className="hidden lg:block text-[#065CBA] text-[16px] font-bold text-right" href={serv.link}>Read more {'>'}{'>'}</Link>
              </div>
              ))}

              <Link className="flex w-[50%] mb-6 text-[12px] text-[#065CBA] font-bold 
                          px-[25px] py-[5px] my-[10px] justify-center items-center lg:hidden" href="/">
                  <span>Explore Services</span>
                  <i className="ml-2"><FontAwesomeIcon icon={faArrowRight as IconProp} /></i>
              </Link>
          </div>

          <div>
            <Image src={our_services_section_bg} alt="" className="hidden lg:block absolute bottom-0"/>
          </div>

      </section>


      <section className="testimonials_section bg-[#065CBA] pb-11 pt-[60px] px-6 lg:px-11">
          <div>
            <h3 className="text-[#fff] text-[20px] lg:text-[30px] font-bold text-center">Testimonials</h3>
            <hr className="mx-auto w-[50px] lg:w-[60px] border-[#FFC102] border-[2px] border-solid"/>
          </div>

          <div className="mt-[20px] p-3 flex flex-nowrap lg:flex-wrap flex-row snap-x snap-mandatory  overflow-x-scroll">
             {testimonials.map(testimonial => (
              <div key={testimonial.id} className="w-[80%] md:w-[50%] lg:w-[30%] lg:mb-[30px] p-6 mr-[30px] shrink-0 snap-start bg-[#ECF4FF]">
                <div  className="w-[47px] mb-6">
                  <Image src={quoteIcon} alt=""/>
                </div>

                <p className="text-[12px] lg:text-[17px]  text-[#373737]">{testimonial.content}</p>

                <div className="flex justify-between items-center mt-4">
                  <h3 className="text-[15px] lg:text-[20px] text-[#373737] font-bold ">{testimonial.name}</h3>
                  <div className="">
                    {starRating(testimonial.star)}
                  </div>
                
                </div>
                
              </div>
              ))}

              
          </div>
      </section>

      <section className="newsletter_section bg-[#fff] py-[90px]  ">
        <h3 className="text-[#373737] w-[40% lg:w-[60%] mx-auto text-center text-[20px] md:text-[36px] lg:text-[47px] font-bold">Subscribe to our Newsletter</h3>
        <p className="text-[#373737] text-[12px] lg:text-[17px] text-center mx-auto mt-[20px] w-[80%] lg:w-[52%] font-normal">Get insightful tips, expert advice, and inspiring content to help you reach your goals. 
        Stay up-to-date on the hottest trends and industry news.</p>

        <form className="mt-8 flex justify-center items-center">
            <input className="border-[1px] outline-none w-[250px] lg:w-[700px] lg:w- px-10 py-[15px] lg:py-[28px] rounded-[10px] border-[#D9D9D9] text-[#D3D2D2] text-[15px] font-normal" placeholder="Type your email" type="text" />

            <button className='hover-wider bg-[#FFC000] ml-[-17px] py-[15px] lg:py-[18px] px-[20px] lg:px-[25px] rounded-[10px] text-[16px] lg:text-[31px] text-[#0A0A0A] font-weight-700'>Subscribe</button>
          </form>
      </section>


      <section className="book_consultation_section bg-[#EAF2FA] p-[20px] flex items-center justify-between relative">
        <div className="book_consultation_left_div w-[50%] ">
            <h3 className="text-[20px] font-bold line-height-[19px]">Book a Consultation</h3>
          <p className="text-[12px] mt-[10px]">Let's chat! Our consultation is a no-pressure opportunity to discuss your specific needs and see if we're the right fit to help you reach your full potential.</p>
          <button className='hover-wider bg-[#FFC000] py-[7px] mt-[15px] lg:py-[18px] px-[20px] lg:px-[25px] rounded-[10px] text-[15px] lg:text-[31px] text-[#0A0A0A] font-weight-700'>Lets’s Talk</button>
        </div>

        <div className="">
          <Image className="mb-[-20px] " src={homePerson} />
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}
